import { appOpt } from "../config/app.js";
import { markdown } from "./markdown.js";
import he from "he";

const mold = (dataList) => {
  dataList.forEach(data => {
    "thumnail" in data ?
      data.thumnail = appOpt.imgUrl + "/" + data.thumnail.slice(2) : "";
    
    "title" in data ?
      data.title = he.decode(data.title) : "";
    
    "summary" in data ?
      data.summary = he.decode(data.summary) : "";
    
    "body" in data ?
      data.body = markdown.toHTML(data.body) : "";
    
    "body" in data ?
      data.body = he.decode(data.body) : "";
    
    "body" in data && data.body.includes("<img src=") ?
      data.body = data.body.replace(/img src="\./g, 'img src="' + appOpt.imgUrl) : "";
    
    "created" in data ?
      data.created = JSON.stringify(data.created).split("T")[0].slice(1) : "";
    
    "updated" in data && JSON.stringify(data.updated).includes("T") ?
      data.updated = JSON.stringify(data.updated).split("T")[0].slice(1) : "";
  })
  return dataList
}

export { mold }