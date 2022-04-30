import axios from "axios";
import { appOpt } from "../config/app.js";

const URL = appOpt.url;

class BlogFinder {
  async getFullData(page = 1, url = URL) {
    const result = await axios.get(url, { params: { page } });
    console.log(page, url);
    console.log(result.data);
    const blogs = result.data.result;
    const maxPage = result.data.maxPage;
    return [blogs, maxPage];
  }
}

export { BlogFinder };