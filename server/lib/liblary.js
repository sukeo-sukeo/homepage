import { appOpt } from "../config/app.js";
import { markdown } from "./markdown.js";

const mold = (dataList) => {
  dataList.forEach(data => {
    "thumnail" in data ?
      data.thumnail = appOpt.imgUrl + "/" + data.thumnail.slice(2) : "";
    
    "body" in data ?
      data.body = markdown.toHTML(data.body) : "";
    
    "body" in data && data.body.includes("<img src=") ?
      data.body = data.body.replace('img src=".', 'img src="' + appOpt.imgUrl) : "";
    
    "created" in data ?
      data.created = JSON.stringify(data.created).split("T")[0] : "";
    
    "updated" in data && JSON.stringify(data.updated).includes("T") ?
      data.updated = JSON.stringify(data.updated).split("T")[0] : "";
  })
  return dataList
}

export { mold }