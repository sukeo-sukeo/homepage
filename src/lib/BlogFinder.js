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

  async getBlog(blogId, url = URL) {
    const result = await axios.get(url + "/content", { params: { blogId } });
    const blog = result.data[0];
    return blog
  }

  async searchBlog(keyword, options, url = URL) {
    const result = await axios.get(url + "/search", {
      params: { keyword, options }
    });
    console.log(result);
    const blogs = result.data.result;
    const hit = result.data.hit
    return [blogs, hit];
  }
}

export { BlogFinder };