const appOpt = {
  // url: "http://localhost:3040/api",
  url: "https://sukeo.live-on.net/api",
  title: "Sukeo",
  paginationButtonSize: 50,
  paginationDisplayMax: () =>
    Math.floor(document.body.clientWidth / appOpt.paginationButtonSize),
  searchOptions: ["body", "title", "summary", "category", "tag"],
  defaultHeaderHeight: 220,
  searchingHeaderHeight: 100,
  summaryCharMax: 50
};


export { appOpt };