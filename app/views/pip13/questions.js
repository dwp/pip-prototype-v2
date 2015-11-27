var data = [ {
  "maxPages"           : "35",
  "continue"           : "Save and continue",
  "saveExit"           : "Save and come back later",
  "backText"           : "Back",

  "frequency"          : [
    {"value" : "All the time"},
    {"value" : "More than half the time"},
    {"value" : "Less than half the time"},
    {"value" : "None of the time", "target" : "none"},
    {"value" : "Tell us how often in your own words"}
  ],
  "diffultyQuestion"   : "What do you have difficulty with?",
  "difficultyHintText" : "Select as many as you need.",
  "howOften"           : "How often",

  "helper"      : [
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
      "question2HintText" : "This means your partner, parents or children.",
      "backLink"          : "/pip13/nationality"
    },
  ],
  "conditionDetails" : [
    {
      "page"          : "4",
      "heading"       : "Your conditions and disabilities",
      "tableHeading"  : "List your conditions and disabilities",
      "tableHeading2" : "When it started",
      "backLink"      : "/pip13/youAndYourCondition"
    },
  ],
  "medications" : [
    {
      "page"          : "5",
      "heading"       : "Your medication",
      "question"      : "Are you currently taking any medication?",
      "tableHeading"  : "Medication",
      "tableHeading2" : "Dosage",
      "tableHeading3" : "How often you take it",
      "backLink"      : "/pip13/conditionDetails"
    },
  ],
  "manageMedications" : [
    {
      "page"             : "6",
      "heading"          : "Managing your medication",
      "question"         : "Does your condition affect you managing your medication?",
      "questionHintText" : "This includes if you rely on something or someone to help you or remind you.",
      "difficultyList"   : ["test1", "test2", "test3","Something else"],
      "question2"        : "Why your condition affects you managing your medication.",
      "question3"        : "How you manage your medication at the moment.",
      "backLink"         : "/pip13/medications"
    },
  ]
}
];

exports.getTableData = function() {
  return data;
};
