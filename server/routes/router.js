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
  let options = req.query.options;
  if (typeof options === "string") options = [options];
  let blogIdList = [];

  console.log(keyword);
  console.log(options);

  if (
    options.includes("body") ||
    options.includes("title") ||
    options.includes("summary")
  ) {
    const table = "blog";
    const query = sql.createSearchQuery(table, keyword, options);
    blogIdList.push(await db.query(query));
  }
  
  if (options.includes("category")) {
    const table = 'category';
    const query = sql.createSearchQuery(table, keyword, options);
    blogIdList.push(await db.query(query));
  }

  if (options.includes("tag")) {
    const table = 'tag';
    const query = sql.createSearchQuery(table, keyword, options);
    blogIdList.push(await db.query(query));
  }
  
  // 多次元配列→一次元
  // objのvalueのみを取り出す
  blogIdList = blogIdList.flat().map(idObj => Object.values(idObj)[0]);
  // 重複排除
  blogIdList = Array.from(new Set(blogIdList));
 
  if (!blogIdList.length) {
    res.send({ result: [], hit: 0 });
    return
  }

  const hit = blogIdList.length;
  const query = sql.getBlogListFromIdList;
  let result = await db.query(query, [blogIdList]);
  result = mold(result);
  res.send({ result, hit });
})

export { router };