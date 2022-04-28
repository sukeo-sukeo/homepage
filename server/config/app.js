import dotenv from "dotenv";
dotenv.config();

const appOpt = {
  port: process.env.PORT,
  maxPage: 10,
};

export {appOpt}