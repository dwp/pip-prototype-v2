var data = [ {
  "page"               : "1",
  "maxPages"           : "35",
  "title"              : "Title of page",
  "introText"          : "Introduction paragraph which should be over two or three lines maximum ideally. Maybe two or three sentences.",
  "continue"           : "Save and continue",
  "saveExit"           : "Save and come back later",
  "backText"           : "Back",
  "helper" : [
    {
      "page"             : "1",
      "heading"          : "Is someone helping you?",
      "introText"        : "You may find it necessary to ask someone to help you complete this application and this is alright. It helps if you can let us know the person’s name and their relationship to you.",
      "question"         : "Are you receiving help to complete this form?",
      "question2"        : "The name of the person helping you",
      "question3"        : "Their relationship to you",
      "q3HintText"       : "eg spouse, social worker, carer",
      "backLink"         : "/pip14/summaryMain"
    },
  ],
  "aboutYou" : [
    {
      "page"             : "2",
      "heading"          : "About you",
      "introText"        : "Entering your personal details will help us accurately identify you.",
      "question"         : "First name",
      "question2"        : "Middle name (optional)",
      "question3"        : "Last name",
      "question4"        : "Your date of birth",
      "question5"        : "National Insurance number",
      "backLink"         : "/pip14/helper"
    },
  ],
  "contactDetails" : [
    {
      "page"             : "3",
      "heading"          : "Your contact details",
      "introText"        : "Let us know your contact details so we can get in touch about your claim whilst it’s in progress.",
      "question"         : "Your address",
      "question2"        : "Postcode",
      "question3"        : "Postcode",
      "question4"        : "Your phone number",
      "question5"        : "Alternative phone number (optional)",
      "question6"        : "Email address",
      "backLink"         : "/pip14/aboutYou"
    },
  ],
  "contactPref" : [
    {
      "page"             : "4",
      "heading"          : "Contact preferences",
      "introText"        : "We will need to contact you as part of the claim process so let us know if you have any particular preferences in terms of how we get in touch.",
      "question"         : "Would you like us to send SMS messages to your phone with claim updates?",
      "question2"        : "Mobile number",
      "question3"        : "Would you be happy for us to call you if we needed to?",
      "question4"        : "Do you have any other communication preferences due to your condition or disability that you’d like to tell us about?",
      "backLink"         : "/pip14/contactDetails"
    },
  ],
  "nationality" : [
    {
      "page"             : "5",
      "heading"          : "Nationality and where you live",
      "introText"        : "We will need to contact you as part of the claim process so let us know if you have any particular preferences in terms of how we get in touch.",
      "question"         : "Would you like us to send SMS messages to your phone with claim updates?",
      "question2"        : "Mobile number",
      "question3"        : "Would you be happy for us to call you if we needed to?",
      "question4"        : "Do you have any other communication preferences due to your condition or disability that you’d like to tell us about?",
      "backLink"         : "/pip14/contactPref"
    },
  ],


}];

exports.getTableData = function() {
  return data;
};
