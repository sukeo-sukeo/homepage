import mysql from "mysql";
import util from "util";
import { dbOpt } from "../config/database.js";

const db = mysql.createConnection(dbOpt);
db.query = util.promisify(db.query);

db.connect((err) => {
  if (err) throw err;
  console.log("connected!");
});

export { db };