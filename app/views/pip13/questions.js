var data = [ {
  "maxPages"   : "35",
  "continue"   : "Save and continue",
  "saveExit"   : "Save and come back later",
  "backText"   : "Back",
  "helper"     : [
    {
      "page"             : "1",
      "heading"          : "Help with your application",
      "question"         : "Is someone helping you fill in this  application?",
      "question2"        : "The name of the person helping you",
      "question3"        : "Their relationship to you",
      "backLink"         : "/pip13/summaryMain"
    },
  ],
  "nationality" : [
    {
      "page"               : "2",
      "heading"            : "Nationality and where you live",
      "question"           : "What is your nationality?",
      "question2"          : "Your nationality",
      "question3"          : "Do you live in England, Scotland or Wales?",
      "question4"          : "Country you live in",
      "question5"          : "Have you been out of England, Scotland or Wales for more than a year in the last 3 years?",
      "question5HintText"  : "This could be one trip or a number of trips adding up to a year.",
      "backLink"           : "/pip13/helper"
    },
  ],
  "paymentsFromAbroad" : [
    {
      "page"              : "3",
      "heading"           : "Payments from abroad and working abroad",
      "question"          : "Have you, or anyone in your family, ever claimed benefits or been paid a pension from any country outside of England, Scotland or Wales?",
      "questionHintText"  : "This means your partner, parents or children.",
      "question2"         : "Do you, or anyone in your family, work or pay national insurance to any country outside of England, Scotland or Wales?",
      "question2HintText" : "This means your partner, parents or children."
    },
  ]
}
];

exports.getTableData = function(page) {
  return data;
};
