var data = [ {
  "maxPages"   : "35",
  "saveExit"   : "Save and come back later",
  "continue"   : "Save and continue",
  "backText"   : "Back",
  "helper"     : [
    {
      "page"      : "1",
      "heading"   : "Help with your application",
      "question"  : "Is someone helping you fill in this  application?",
      "question2" : "The name of the person helping you",
      "question3" : "Their relationship to you",
      "backLink"  : "/pip13/summaryMain"
    },
  ],
  "nationality" : [
    {
      "page"      : "2",
      "heading"   : "Nationality and where you live",
      "question"  : "Is someone helping you fill in this  application?",
      "question2" : "The name of the person helping you",
      "question3" : "Their relationship to you",
      "backLink"  : "/pip13/helper"
    },
  ]
}
];

exports.getTableData = function(page) {
  return data;
};
