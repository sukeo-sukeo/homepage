import { marked } from "marked";
import { mkdOpt } from "../config/markdown.js";

marked.setOptions(mkdOpt)

const markdown = {
  toHTML: (val) => marked(val),
}

export { markdown };