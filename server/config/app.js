import dotenv from "dotenv";
dotenv.config();

const appOpt = {
  port: process.env.PORT,
};

export {appOpt}