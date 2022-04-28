import express from "express";
import { db } from "../lib/dbconnect.js";
import { appOpt } from "../config/app.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const page = req.query.page;
  const max = appOpt.maxPage;
  console.log(page);
  const sql = "select * from blog";
  const result = await db.query(sql);
  // console.log(result);
  res.send(result);
});

router.get("/name", async (req, res) => {
  const sql = "select name from user";
  const result = await db.query(sql);
  // console.log(result);
  res.send(result);
});

export { router };