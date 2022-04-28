import axios from "axios";
import { appOpt } from "../config/app.js";

const URL = appOpt.url;

class BlogFinder {
  constructor() {

  }

  async getFullData(url=URL) {
    const result = await axios.get(url, {params: {page: 2}});
    console.log(result.data);
    return result.data
  }
}

export { BlogFinder };