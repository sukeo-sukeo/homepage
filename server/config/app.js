import dotenv from "dotenv";
dotenv.config();

const appOpt = {
  port: process.env.PORT,
  parPage: 10,
};

export {appOpt}