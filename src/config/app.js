const appOpt = {
  url: "http://localhost:3040",
  title: "Sukeo",
  paginationButtonSize: 50,
  paginationDisplayMax: () =>
    Math.floor(document.body.clientWidth / appOpt.paginationButtonSize),
  searchOptions: ["body", "title", "summary", "category", "tag"],
  defaultHeaderHeight: 220,
  searchingHeaderHeight: 100,
};


export { appOpt };