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
  sql = `select * from blog limit ?, ${parPage}`;
  const result = await db.query(sql, [start]);

  // maxpageを計算
  sql = "select count(*) as cnt from blog";
  const count = await db.query(sql);
  const maxPage = Math.floor((count[0].cnt + 1) / parPage + 1);

  res.send({ result, maxPage });
});

router.get("/name", async (req, res) => {
  const sql = "select name from user";
  const result = await db.query(sql);
  // console.log(result);
  res.send(result);
});

export { router };