var data = [ {
  "checkYourAnswers" : [
    {
      "page"               : "34",
      "heading"            : "Check your answers",
      "introText"          : "You can check all the answers you’ve given and change them if you need to.",
      "changeLinkTxt"      : "Change your answers",
      "backLink"           : "/pip14/money",

      /* Helper  */
      "helperHd"           : "Helper details",
      "helperName"         : "Name",
      "helperRel"          : "Relationship",

      /* About You */
      "aboutYouHd"         : "About You",
      "aboutYouName"       : "Full name",
      "aboutYouDOB"        : "Date of birth",
      "aboutYouNINO"       : "National Insurance number",

      /* contact Details */
      "detaialsHD"         : "Your contact details",
      "detailsAddress"     : "Your address",
      "detailsCAddress"    : "Correspondence address",
      "detailsPhone"       : "Phone number",
      "detailsPhoneAlt"    : "Alternative phone number",
      "detailsEmail"       : "Email address",

      /* contact preferences */
      "prefHd"             : "Contact preferences",
      "prefSMS"            : "SMS updates",
      "prefMobile"         : "Mobile number",
      "prefCall"           : "Happy for us to call",
      "prefComms"          : "Communication preferences",

      /* currentWhereabouts */
      "whereHd"            : "Your current whereabouts",
      "whereCurrently"     : "Your currently staying in",
      "whereDateIn"        : "Date you went in",
      "whereAddress"       : "Address",

      /* nationality */
      "nationalityHd"      : "Nationality and where you live",
      "nationalityCurrent" : "Current nationality",
      "nationalityLiving"  : "Living in England, Scotland or Wales?",
      "nationalityAbroad"  : "Have you been out of the country for more than 1 year during last 3 years?",

      /* paymentsFromAbroad */
      "paymentsHd"         : "Payments from abroad",
      "paymentsAbroad"     : "Have you or any of your close family worked abroad or been paid benefits from outside the United Kingdom?",
      "paymentsBenefits"   : "Have you or your close family claimed or been paid any benefits or pensions from any of these countries since your claim date?",
      "paymentsNi"         : "Have you or your close family worked or paid national insurance in any of these countries since your claim date?",

      /* conditionDetails */
      "conditionHd"        : "Your conditions and disabilities",
      "conditionName"      : "Name of condition",
      "conditionWhen"       : "How long has it affected you",

    },
  ]
}];

exports.getTableData = function() {
  return data;
};
