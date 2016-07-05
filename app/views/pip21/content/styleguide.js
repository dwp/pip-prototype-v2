var data = [ {
  "page"               : "1",
  "maxPages"           : "35",
  "title"              : "Title of page",
  "introText"          : "Introduction paragraph which should be over two or three lines maximum ideally. Maybe two or three sentences.",
  "continue"           : "Save and continue",
  "saveExit"           : "Save and come back later",
  "backText"           : "Back",
  "helper"      : [
    {
      "backLink"         : "/pip13/summaryMain"
    },
  ]


}];

exports.getTableData = function() {
  return data;
};
