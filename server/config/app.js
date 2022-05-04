import dotenv from "dotenv";
dotenv.config();

const appOpt = {
  imgUrl: "http://localhost:8888/mycms2",
  port: process.env.PORT,
  parPage: 10
};

export {appOpt}