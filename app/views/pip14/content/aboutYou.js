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
      "introText"        : "Please tell us your current nationality and details about where you live as this will help us determine your eligibility.",
      "question"         : "What is your current nationality?",
      "question2"        : "Your current nationality",
      "question3"        : "Do you currently live in England, Scotland or Wales?",
      "question4"        : "Where do you currently live?",
      "question5"        : "Have you been out of England, Scotland or Wales for more than 1 year during the last 3 years?",
      "q5HintText"       : "This could be one trip or a number of trips adding up to a year.",
      "backLink"         : "/pip14/contactPref"
    },
  ],
  "paymentsFromAbroad" : [
    {
      "page"             : "6",
      "heading"          : "Payments from abroad",
      "introText"        : "We’d like to know whether you or members of your family receive payments from abroad, including benefits and pensions, or work or pay national insurance in another country.",
      "question"         : "Have you, or anyone in your family, ever claimed benefits or been paid a pension from any country outside of England, Scotland or Wales?",
      "qHintText"        : "Family means your partner, parents or children.",
      "question2"        : "Do you, or anyone in your family, pay national insurance to any country outside of England, Scotland or Wales?",
      "backLink"         : "/pip14/nationality"
    },
  ],
  "conditionDetails" : [
    {
      "page"             : "7",
      "heading"          : "Your conditions and disabilities",
      "introText"        : "Please tell us about the conditions and disabilities that affect your life. You can add multiple below and this will help us to properly assess your claim.",
      "backLink"         : "/pip14/paymentsFromAbroad"
    },
  ],
  "medications" : [
    {
      "page"             : "8",
      "heading"          : "Your medications",
      "introText"        : "Let us know if you take any medication for your condition or disability. This could include medicine that you need to take daily or something you take only a few times a year.",
      "backLink"         : "/pip14/conditionDetails"
    },
  ],
  "manageMedications" : [
    {
      "page"             : "9",
      "heading"          : "Managing your medication",
      "introText"        : "Tell us if you have any difficulty managing your medication and how often this affects you.",
      "question"         : "Do you have difficulty managing your medication?",
      "question2"        : "What aspect of managing your medication do you have an issue with?",
      "backLink"         : "/pip14/medications"
    },
  ],
  "treatments" : [
    {
      "page"             : "10",
      "heading"          : "Your treatments and therapies",
      "introText"        : "Tell us about any treatments or therapy you are having which is used to manage your condition or disability.",
      "question"         : "Do you have difficulty managing your medication?",
      "question2"        : "What aspect of managing your medication do you have an issue with?",
      "backLink"         : "/pip14/manageMedications"
    },
  ],
  "sideEffects" : [
    {
      "page"             : "11",
      "heading"          : "Side effects",
      "introText"        : "You may suffer side effects from medication you’re taking or treatments and therapies you’re having for your condition and it would help if you could let us know about this.",
      "question"         : "Do you suffer any side effects from any medication, treatments or therapies you’re having to treat your condition or disability?",
      "question2"        : "What are the side effects you get?",
      "backLink"         : "/pip14/treatments"
    },
  ],
  "conditionAffects" : [
    {
      "page"             : "12",
      "heading"          : "Changes to your condition",
      "introText"        : "If the effects of your condition or disability change or vary over time use this section to let us know. This could include effects that only occur twice a year, for example.",
      "question"         : "Do the effects of your condition change or vary over time?",
      "question2"        : "How do the effects of your condition or disability change or vary?",
      "question3"        : "How often do these changes affect your condition?",
      "backLink"         : "/pip14/treatments"
    },
  ],
  "monitoringCondition" : [
    {
      "page"             : "13",
      "heading"          : "Monitoring your condition",
      "introText"        : "Let us know if a medical professional has told you that you have a condition or disability that could change and needs regular monitoring.",
      "question"         : "Have you been told that your condition or disability needs monitoring?",
      "question2"        : "Do you rely on someone else to help with the monitoring?",
      "question3"        : "Roughly how many hours a week do they help you?",
      "question4"        : "Why do you rely on someone to help manage your treatments or therapy at home?",
      "question5"        : "How does someone help you manage your treatment or therapy at home at the moment?",
      "backLink"         : "/pip14/conditionAffects"
    },
  ],
  "healthcareprofessional" : [
    {
      "page"             : "14",
      "heading"          : "Professionals who know about your condition",
      "introText"        : "It could help us get the information we need if we’re able to contact professionals who will share details about the effects of your condition with us. They could be a doctor, counsellor, key worker or anyone else who has information about the effects of your condition.",
      "question"         : "Do you agree to us contacting professionals who will share information about your condition with us?",
      "backLink"         : "/pip14/monitoringCondition"
    },
  ],


}];

exports.getTableData = function() {
  return data;
};
