const appOpt = {
  url: "http://localhost:3040",
  paginationButtonSize: 50,
  paginationDisplayMax: () => Math.floor(
    document.body.clientWidth / appOpt.paginationButtonSize
  ),
  searchOptions: ["body", "title", "summary", "category", "tag"]
};


export { appOpt };