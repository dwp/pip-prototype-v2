var data = [ {
  "page"               : "1",
  "maxPages"           : "35",
  "title"              : "Title of page",
  "introText"          : "Introduction paragraph which should be over two or three lines maximum ideally. Maybe two or three sentences.",
  "continue"           : "Save and continue",
  "saveExit"           : "Save and come back later",
  "backText"           : "Back",
  "frequency"          : [
    {
      "allTime"        : "All the time",
      "moreHalf"       : "More than half the time",
      "lessHalf"       : "Less than half the time",
      "ownWords"       : "Explain how often in your own words"
    },
  ],
  "helper" : [
    {
      "page"             : "1",
      "heading"          : "Help with your application",
      "question"         : "Is someone helping you fill in this application?",
      "question2"        : "The name of the person helping you",
      "question3"        : "Their relationship to you",
      "backLink"         : "/pip14/summaryMain"
    },
  ],
  "aboutYou" : [
    {
      "page"             : "2",
      "heading"          : "About you",
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
      "question"         : "Your address",
      "question2"        : "Postcode",
      "question3"        : "Postcode",
      "question4"        : "Your phone number",
      "q4HintText"       : "We'll only use this if we need to contact you about your claim.",
      "question5"        : "Alternative phone number",
      "question6"        : "Email address",
      "backLink"         : "/pip14/aboutYou"
    },
  ],
  "contactPref" : [
    {
      "page"             : "4",
      "heading"          : "Contact preferences",
      "question"         : "Do you want to get SMS text messages about where your claim is up to?",
      "question2"        : "Mobile number",
      "question3"        : "You will get your decision letter in the post. Do you need this in a different format eg braille, large print or audio CD?",
      "checkbox1"        : "Large print",
      "checkbox2"        : "Braille",
      "checkbox3"        : "Audio CD",
      "checkbox4"        : "Other",
      "textareaQ"        : "What format do you need?",
      "textareaHintText" : "We can only provide this if it’s necessary because of your condition.",
      "backLink"         : "/pip14/contactDetails"
    },
  ],
  "currentWhereabouts" : [
    {
      "page"             : "5",
      "heading"          : "Your current whereabouts",
      "question"         : "Are you currently staying:",
      "question2"        : "When did you go in?",
      "q2HintText"       : "eg yesterday or 23/11/2015",
      "question3"        : "What’s the address?",
      "question4"        : "Postcode",
      "backLink"         : "/pip14/contactPref"
    }
  ],
  "nationality" : [
    {
      "page"             : "6",
      "heading"          : "Nationality and where you live",
      "introText"        : "Please tell us your current nationality and details about where you live as this will help us determine your eligibility.",
      "question"         : "What is your current nationality?",
      "question2"        : "Your current nationality",
      "question3"        : "Do you currently live in England, Scotland or Wales?",
      "question4"        : "Where you live?",
      "question5"        : "Have you been out of England, Scotland or Wales for more than 26 weeks during the last 3 years?",
      "q5HintText"       : "This could be one trip or a number of trips adding up to a year.",
      "backLink"         : "/pip14/currentWhereabouts"
    },
  ],
  "paymentsFromAbroad" : [
    {
      "page"             : "7",
      "heading"          : "Payments from abroad",
      "introText"        : "This question asks about any money that you or any of your close family have received or paid to any country outside of the UK. This is to check that we are the correct country to pay your benefit.",
      "question"         : "Have you or any of your close family worked abroad or been paid benefits from outside the United Kingdom?",
      "qHintText"        : "This means your partner or a parent that you're financially dependent on",
      "countriesIntro"   : "These questions are about the following countries:",
      "countries"        : "Austria, Belgium, Bulgaria, Croatia, Cyprus, Czech Republic, Denmark, Estonia, Finland, France, Germany, Gibraltar, Greece, Hungary, Iceland, Ireland, Italy, Latvia, Liechtenstein, Lithuania, Luxembourg, Malta, Netherlands, Norway, Poland, Portugal, Romania, Slovakia, Slovenia, Spain, Sweden and Switzerland.",
      "question2"        : "Have you or your close family claimed or been paid any benefits or pensions from any of these countries since your claim date?",
      "question3"        : "Have you or your close family worked or paid national insurance in any of these countries since your claim date?",
      "backLink"         : "/pip14/nationality"
    },
  ],
  "conditionDetails" : [
    {
      "page"             : "8",
      "heading"          : "Your conditions and disabilities",
      "introText"        : "List all the conditions or disabilities you have that affect your life and when they started to affect you.",
      "rowHd"            : "condition",
      "conditionHd"      : "Name of condition",
      "startedHd"        : "When it started",
      "removeLink"       : "Remove this",
      "backLink"         : "/pip14/summaryMain?show=yourCondition&next=conditionDetails&back=paymentsFromAbroad"
    },
  ],
  "medications" : [
    {
      "page"             : "9",
      "heading"          : "Your medications",
      "introText"        : "Let us know if you take any medication for your condition. This could include medicine that you need to take daily or something you take only a few times a year.",
      "question"         : "Are you currently taking any medication?",
      "rowHd"            : "Medication",
      "medicationHd"     : "Name of medication",
      "dosageHd"         : "Dosage",
      "dosageHintText"   : "eg 40mg",
      "oftenHd"          : "How often do you take it",
      "oftenHintText"    : "eg 2 tablets, twice a day",
      "removeLink"       : "Remove this",
      "backLink"         : "/pip14/conditionDetails"
    },
  ],
  "manageMedications" : [
    {
      "page"             : "10",
      "heading"          : "Taking your medication",
      "question"         : "Does your condition affect you:",
      "textareaQ"        : "Tell us the details",
      "question2"        : "How often does this affect you taking your medication?",
      "howoften1"        : "Always",
      "howoften2"        : "Sometimes",
      "question3"        : "How do you manage your medication now?",
      "question4"        : "Tell us some more details about the effects your condition has on your ability to manage your medication",
      "helpTextHd"       : "Inclue if:",
      "helpText"         : ["you could end up at risk","what you’re able to do depends on the type of day you’re having"],
      "backLink"         : "/pip14/medications"
    },
  ],
  "treatments" : [
    {
      "page"             : "11",
      "heading"          : "Your treatments and therapies",
      "introText"        : "Treatments and therapies can include chemotherapy, physiotherapy, medical massages or dialysis.",
      "question"         : "Are you having, or do you have planned, any treatment or therapy?",
      "rowHd"            : "Treatment or therapy",
      "treatmentHd"      : "Name of treatment or therapy",
      "oftenHd"          : "When or how often",
      "removeLink"       : "Remove this",
      "question2"        : "Do you have treatment or therapy at your home address?",
      "backLink"         : "/pip14/manageMedications"
    },
  ],
  "sideEffects" : [
    {
      "page"             : "12",
      "heading"          : "Side effects",
      "question"         : "Do you get side effects from any medication, treatment or therapy?",
      "question2"        : "Describe the side effects you get.",
      "backLink"         : "/pip14/treatments"
    },
  ],
  "conditionAffects" : [
    {
      "page"             : "13",
      "heading"          : "Changes to your condition",
      "question"         : "Do the effects of your condition change or vary?",
      "qHintText"        : "This includes if some days, weeks or months are worse than others.",
      "question2"        : "How do the effects of your condition change or very?",
      "question3"        : "How often do the effects of your condition change or vary?",
      "q3HintText"       : "If you can, tell us roughly how many days out of a week or month",
      "backLink"         : "/pip14/sideEffects"
    },
  ],
  "monitoringCondition" : [
    {
      "page"             : "14",
      "heading"          : "Monitoring your condition",
      "introText"        : "This question is about whether your condition could change dramatically meaning, to stop you being at risk, you would need to change the level of medication, treatment or therapy you use to treat it.",
      "question"         : "Do you need someone to monitor your condition most days because, if they don’t, you could be at risk, or a danger to yourself or others?",
      "question2"        : "Roughly how many hours a week do you rely on them to help monitor your condition?",
      "question3"        : "Why do you rely on someone to help manage your treatments or therapy at home?",
      "question4"        : "How does someone help you manage your treatment or therapy at home at the moment?",
      "backLink"         : "/pip14/conditionAffects"
    },
  ],
  "healthcareprofessional" : [
    {
      "page"             : "15",
      "heading"          : "Professionals who know about your condition",
      "introText"        : "It could help us get the information we need if we’re able to contact professionals who will share details about the effects of your condition with us. They could be a doctor, counsellor, key worker or anyone else who has information about the effects of your condition.",
      "question"         : "Do you agree to us contacting professionals who will share information about your condition with us?",
      "rowHd"            : "Professional",
      "nameHd"           : "What is their name?",
      "professionHd"     : "What is their profession?",
      "addressHd"        : "What is their contact address?",
      "phoneHd"          : "Contact phone number",
      "lastSeenHd"       : "When did you last see them?",
      "removeLink"       : "Remove this",
      "backLink"         : "/pip14/monitoringCondition"
    },
  ],
  "submitEvidence" : [
    {
      "page"             : "16",
      "heading"          : "Information you can send",
      "introText"        : "It will really help your case if you can send us any medical information that will give us details about your condition and how it is being managed.",
      "question"         : "Do you have medical information you’re able to send us?",
      "question2"        : "Which of the following are you able to send us?",
      "q2HintText"       : "You can tick as many of these as you like",
      "backLink"         : "/pip14/healthcareprofessional"
    },
  ],
  "specialAids" : [
    {
      "page"              : "17",
      "heading"           : "Aids and adaptations",
      "question"          : "Where do you rely on aids, adaptations or anything else to make things easier for you?",
      "qHintText"         : "Include any aids or adaptations you need but have not got yet.",
      "homeLabel"         : "Getting in and out of your home",
      "homeTextareaQ"     : "List aids, adaptations or anything you have to use to make getting in or out of your home easier.",
      "stairsLabel"       : "Hallway or stairs",
      "stairsTextareaQ"   : "List aids, adaptations or anything you have in your hallway or on your stairs to make things easier.",
      "kitchenLabel"      : "Kitchen or dining area",
      "kitchenTextareaQ"  : "List aids, adaptations or anything you have to use in your kitchen to make things easier.",
      "loungeLabel"       : "Lounge or sitting room",
      "loungeTextareaQ"   : "List aids, adaptations or anything you have to use in your lounge or sitting room to make things easier.",
      "bedroomLabel"      : "Your bedroom",
      "bedroomTextareaQ"  : "List aids, adaptations or anything you have to use in your bedroom to make things easier.",
      "bathroomLabel"     : "Bathroom or toilet",
      "bathroomTextareaQ" : "List aids, adaptations or anything you have to use in your bathroom or toilet to make things easier.",
      "outsideLabel"      : "Outside",
      "outsideTextareaQ"  : "List aids, adaptations or anything you have to use when you're outside to make things easier.",
      "question2"         : "List anything else you have with you all or most of the time to make things easier for you.",
      "q2HintText"        : "This might include things like a wheelchair, hearing aid or prosthetic limb.",
      "backLink"          : "/pip14/submitEvidence"
    },
  ],
  "sight" : [
    {
      "page"             : "18",
      "heading"          : "Your sight",
      "question"         : "Does your condition affect your eyesight?",
      "question2"        : "Roughly how often is it affected?",
      "question3"        : "How does your condition affect your sight?",
      "backLink"         : "/pip14/specialAids"
    },
  ],
  "speech" : [
    {
      "page"             : "19",
      "heading"          : "Your speech",
      "question"         : "Does your condition affect your speech?",
      "question2"        : "Roughly how often is it affected?",
      "question3"        : "How does your condition affect your speech?",
      "backLink"         : "/pip14/sight"
    },
  ],
  "hearing" : [
    {
      "page"             : "20",
      "heading"          : "Your hearing",
      "question"         : "Does your condition affect your hearing?",
      "question2"        : "Which of these apply?",
      "hearingAidLabel"  : "You need a hearing aid",
      "2hearingAidLabel" : "You need two hearing aids",
      "implantLabel"     : "You have a cochlear implant",
      "somethingLabel"   : "You rely on something else",
      "somethingTxtQ"    : "Explain what your rely on",
      "someoneLabel"     : "You rely on someone to help you communicate",
      "someoneTxtQ"      : "How they help you",
      "cantHearLabel"    : "You can not hear at all",
      "cantHearTxtQ"     : "Explain how you communicate",
      "question3"        : "Explain how your condition affects your hearing.",
      "helpTextHd"       : "Include if the effects change depending on:",
      "helpText"         : ["where you are","what you’re doing"],
      "backLink"         : "/pip14/sight"
    },
  ],
  "gettingUp" : [
    {
      "page"             : "21",
      "heading"          : "Getting up and moving around",
      "question"         : "Does your condition affect you:",
      "motivatedLabel"   : "being motivated to get up",
      "sittingUpLabel"   : "sitting up",
      "outBedLabel"      : "getting out of bed",
      "standingLabel"    : "standing",
      "movingRoomsLabel" : "moving between rooms",
      "stairsLabel"      : "using the stairs",
      "otherWayLabel"    : "in another way",
      "doesntLabel"      : "Your condition does not affect you moving around your home",
      "question2"        : "How often does your condition affect you moving around your home?",
      "question3"        : "When your condition affects you, how do you get up and move around your home?",
      "encourageLabel"   : "Someone needs to encourage you to get out of bed",
      "helpLabel"        : "Someone needs to help you move",
      "relyLabel"        : "You rely on aids or something else to help",
      "manageLabel"      : "You manage on your own, but with difficulty",
      "dontLabel"        : "You do not get out of bed",
      "question4"        : "Explain how your condition affects you getting up and moving around.",
      "helpTextHd"       : "Include if:",
      "helpText"         : ["it takes a long time","what you’re able to do","depends on the type of day you’re having","you risk having an accident or hurting yourself","moving around has an effect on your condition"],
      "backLink"         : "/pip14/summaryMain?show=yourHome&next=gettingUp&back=hearing"
    },
  ],


}];

exports.getTableData = function() {
  return data;
};
