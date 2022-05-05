import express from "express";
import { db } from "../lib/dbconnect.js";
import { appOpt } from "../config/app.js";
import { sql } from "../lib/sql.js";
import { mold } from "../lib/liblary.js";

const router = express.Router();
const parPage = appOpt.parPage;

router.get("/", async (req, res) => {
  let page = Number(req.query.page);
  let query;

  // parPage分の件数のデータを取得
  page = page ? page : 1;
  query = sql.getFullData; 
  const start = (page - 1) * parPage;
  let result = await db.query(query, [start, parPage]);
  
  // 成形
  result = mold(result);

  // maxpageを計算
  query = sql.getFullDataCount;
  const count = await db.query(query);
  const maxPage = Math.floor((count[0].cnt + 1) / parPage + 1);

  res.send({ result, maxPage });
});

router.get("/content", async (req, res) => {
  let blogId = Number(req.query.blogId);
  let query;
  query = sql.getContent;
  let result = await db.query(query, [blogId]);
  // 成形
  result = mold(result);
  console.log(result);
  res.send(result);
});

router.get("/search", async (req, res) => {
  const keyword = req.query.keyword;
  const options = req.query.options;
  let query;
  let table;
  let where;
  let blogIdList = [];

  console.log(keyword);
  console.log(options);
  
  if (
    options.includes("body") ||
    options.includes("title") ||
    options.includes("summary")
  ) {
    const opts = options.filter(o => o === "body" || o === "title" || o === "summary");
    table = 'blog';
    where = opts.reduce((prev, curr) => (prev += `${table}.${curr} like '%${keyword}%' or `), "");
    where = where.substring(0, where.length - 3);
    query = `select id from ${table} where ${where}`;
    console.log("body,title,summary: ", query);
    // blogidlistにblogidを追加
    blogIdList.push(await db.query(query));
  }
  
  if (options.includes("category")) {
    table = 'category';
    query = `select bc.blog_id from blog_category bc where bc.category_id in (select cate.id from ${table} cate where cate.name like '%${keyword}%')`;
    console.log("category: ", query);
    // blogidlistにblogidを追加
    blogIdList.push(await db.query(query));
  }
  if (options.includes("tag")) {
    table = 'tag'
    query = `select btg.blog_id from blog_tag btg where btg.tag_id in (select tag.id from ${table} where tag.name like '%${keyword}%')`;
    console.log("tag: ", query);
    // blogidlistにblogidを追加
    blogIdList.push(await db.query(query));
  }
  
  // objの多次元配列→一次元、objなのでvalueのみを取り出す
  blogIdList = blogIdList.flat().map(idObj => Object.values(idObj)[0]);
  // 重複排除
  blogIdList = Array.from(new Set(blogIdList));
  
  console.log(blogIdList);
  console.log(blogIdList.length);
  
  if (!blogIdList.length) {
    res.send("SORRY NO HIT...");
    return
  }

  // blogidに該当するデータを取得
  query = `select 
  b.id as id, b.title, b.created, b.updated, b.summary, bt.thumnail_seo, cate.name as category, group_concat(tag.name) as tags, img.path as thumnail
  from blog b
  left join blog_tag btg on btg.blog_id = b.id
  left join tag on btg.tag_id = tag.id
  left join blog_thumnail bt on b.id = bt.blog_id
  left join blog_category bc on b.id = bc.blog_id
  left join img on bt.img_id = img.id
  left join category cate on bc.category_id = cate.id
  where b.id in (${blogIdList})
  group by b.id
  order by b.created desc`;
  let result = await db.query(query);
  result = mold(result);
  res.send(result);
})

export { router };