import dotenv from "dotenv";
dotenv.config();

const appOpt = {
  apiUrl: process.env.API,
  imgUrl: process.env.URL,
  port: process.env.PORT,
  parPage: 10
};

export {appOpt}