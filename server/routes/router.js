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
  let blogIdList;

  console.log(keyword);
  console.log(options);
  
  if (
    options.includes("body") ||
    options.includes("title") ||
    options.includes("summary")
  ) {
    table = 'blog';
    query = sql.search_getBlogId;
    // blogidlistにblogidを追加
  }
  
  if (options.includes("category")) {
    table = 'category'
    // blogidlistにblogidを追加
  }
  if (options.includes("tag")) {
    table = 'tag'
    // blogidlistにblogidを追加
  }
  console.log(blogIdList);
  console.log(blogIdList.length);
  
  if (!blogIdList.length) {
    res.send("SORRY NO HIT...");
    return
  }
  
  // blogidに該当するデータを取得
  // let result
  // result = mold(result);
  res.send(result);
})

export { router };