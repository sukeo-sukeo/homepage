import express from "express";
import { db } from "../lib/dbconnect.js";
import { appOpt } from "../config/app.js";

const router = express.Router();

router.get("/", async (req, res) => {
  let sql;
  let page = Number(req.query.page);
  let parPage = appOpt.parPage;

  // parPage分の件数のデータを取得
  page = page ? page : 1;
  const start = (page - 1) * parPage;
  sql = `select 
  b.id as id, b.title, b.created, b.updated, b.summary, bt.thumnail_seo, cate.name as category, group_concat(tag.name) as tags, img.path as thumnail
  from blog b
  left join blog_tag btg on btg.blog_id = b.id
  left join tag on btg.tag_id = tag.id
  left join blog_thumnail bt on b.id = bt.blog_id
  left join blog_category bc on b.id = bc.blog_id
  left join img on bt.img_id = img.id
  left join category cate on bc.category_id = cate.id
  group by b.id
  order by b.created desc
  limit ?, ${parPage}`;
  const result = await db.query(sql, [start]);

  // maxpageを計算
  sql = "select count(*) as cnt from blog";
  const count = await db.query(sql);
  const maxPage = Math.floor((count[0].cnt + 1) / parPage + 1);

  res.send({ result, maxPage });
});

router.get("/content", async (req, res) => {
  let sql;
  let blogId = Number(req.query.blogId);
  sql = `select 
  b.id as id, b.title, b.body, b.created, b.updated, b.summary, bt.thumnail_seo, cate.name as category, group_concat(tag.name) as tags, img.path as thumnail
  from blog b
  left join blog_tag btg on btg.blog_id = b.id
  left join tag on btg.tag_id = tag.id
  left join blog_thumnail bt on b.id = bt.blog_id
  left join blog_category bc on b.id = bc.blog_id
  left join img on bt.img_id = img.id
  left join category cate on bc.category_id = cate.id
  where b.id = ?`;
  const result = await db.query(sql, [blogId]);
  
  res.send(result);
});

export { router };