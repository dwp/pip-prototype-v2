var data = [ {
  "page"               : "1",
  "maxPages"           : "36",
  "title"              : "Title of page",
  "introText"          : "Introduction paragraph which should be over two or three lines maximum ideally. Maybe two or three sentences.",
  "continue"           : "Save and go to next question",
  "saveExit"           : "Save and return to menu",
  "enterAnswer"        : "enter your answer",
  "changeAnswer"       : "change",
  "backText"           : "Back",
  "skipQuestion"       : "Answer later",
  "tickAll"            : "Tick all that apply",
  "remindsMeHelp"      : "what the other person does to remind or encourage you",
  "relyOnHelp"         : "what you use to help and why you use it",
  "relyOnHelpRec"      : "if someone recommended or gave you the aids",
  "helpFromSomeone"    : "what things the person does to help you",
  "helpFromSomeoneRec" : "if there's anything that prevents you from using aids",
  "helpsTakeItHelp"    : "what things the person does to help you.",
  "difficultiesManage" : "what difficulties you have and how you manage",
  "explainHelp"        : "what they explain and how they explain it",
  "superviseHelp"      : "who supervises you and how are you supervised",
  "dayshelptext"       : "roughly how many days out of a month you're affected",
  "freqHelpText"       : "the difference between what you can and can't do when your condition varies",
  "postTo"             : "Post to:",
  "address"            : ["Freepost DWP PIP 3","Mail Handling Site A","Wolverhampton","WV98 1AD"],
  "helpline"           : [
    {
    "p1"               : "If you need help call:",
    "p2"               : "0345 850 33 22",
    "p3"               : "Calls charged at local rate from landlines, calls from mobiles may cost more.",
    "p4"               : "Or text:",
    "p5"               : "07867 687 141",
    "p6"               : "Texts are charged at your standard rate",
    "p7"               : "Monday to Friday 8am to 6pm",
    "p8"               : "",
    "p9"               : "Closed public holidays"
    },
  ],
  "frequency"          : [
    {
      "allTime"        : "All the time",
      "moreHalf"       : "More than half the time",
      "lessHalf"       : "Less than half the time",
      "ownWords"       : "Explain how often in your own words"
    },
  ],
  "stillApply"         : [
    {
      "applyQuestionSRTI"   : "You may be able to have your claim dealt with faster. Call <strong>0800 917 2222</strong> or textphone <strong>0800&nbsp917&nbsp7777</strong>.",
      "applyHintSRTI"     : "Do you still want to carry on with your claim?",
      "applyQuestionPostcode"   : "People living in your area can’t yet apply online.",
      "applyHintPostcode" : "You're still legally entitled to apply online even though the claim won't be valid. Do you still want to carry on with your claim?",
      "applyQuestionOtherQs"   : "Based on your answer, you can't get PIP. You may be entitled to another benefit though. Call XXX to find out.",
      "applyHintOtherQs" : "You're still legally entitled to apply online even though the claim won't be valid. Do you still want to carry on with your claim?",

    },
  ],
  "postcodeCheck"        : [
    {
      "heading"          : "Can I apply online?",
      "p1"               : "This is a pilot of an online service to apply for Personal Independence Payment (PIP).",
      "p2"               : "You can only apply online if you:",
      "list"             : [
        "live in certain areas",
        "are not an appointee",
        "have not claimed PIP or Disability Living Allowance in the last 12 months",
        "have an email address.",

      ],
      "postCode"         : "Enter your postcode",
      "postCodeHint"     : "Postcode hint text",
      "submit"           : "Check your postcode",
      "backLink"         : "/pip22/apply"
    }
  ],
  "postCodeSignPost"     : [
    {
      "heading"          : "Can I claim Personal Independence Payment online?",
      "submit"           : "Continue"
    }
  ],
  "dob"                  : [
    {
      "heading"          : "Are you aged between 16 and 64?",
      "question"         : "What is your date of birth",
      "submit"           : "Continue",
      "backLink"         : "/pip22/filterQuestions"
    }
  ],
  "dobSignPost"     : [
    {
      "heading"          : "Personal Independence Payment is for people aged 16 to 64",
      "submit"           : "Continue"
    }
  ],
  "srti"                 : [
    {
      "heading"          : "Terminal illness",
      "question"         : "Do you have a DS1500?",
      "hintTextsrti"     : "A DS1500 is a form completed by a medical professional which allows someone who is terminally ill to claim certain benefits.",
      "submit"           : "Continue",
      "backLink"         : "/pip22/postcodeCheck"
    }
  ],
  "srtiSignPost"         : [
    {
      "heading"          : "Terminal illness",
      "submit"           : "Continue"

    }
  ],
  "filterQuestions"      : [
    {
      "heading"          : "Can I still apply online?",
      "introText"        : "",
      "question"         : "Are you an appointee (appointees are authorised by the Department for Work and Pensions) for the person claiming?",
      "questionNo"       : "While we're piloting the online service, you can't claim PIP in this way. Call 0800 917 2222 or textphone 0800 917 7777 to start your claim.",
      "question2"        : "Have you claimed for PIP or DLA in the past year?",
      "question2No"      : "While we're piloting the online service, you can't claim PIP in this way. Call 0800 917 2222 or textphone 0800 917 7777 to start your claim.",
      "question3"        : "Do you have a  personal email address?",
      "question3No"      : "You need to have a personal email address to claim PIP online. Call 0800 917 2222 or textphone 0800 917 7777 to start your claim.",
      "submit"           : "Continue",
      "backLink"         : "/pip22/srti"
    }
  ],
  "filterSignPost"       : [
    {
      "heading"          : "Can I apply for Personal Independence Payment online?",
      "submit"           : "Continue"
    },
  ],
  "registration"         : [
    {
      "heading"          : "Sign up to apply for Personal Independence Payment online",
      "introText"        : "Enter a personal email address and choose a password at least 8 characters long.",
      "username"         : "Email address",
      "password"         : "Password",
      "passwordHint"     : "Your password must be atleast 8 characters",
      "submit"           : "Sign up",
      "backLink"         : "/pip22/dob"
    },
  ],
  "appointee" : [
    {
      "page"             : "x",
      "heading"          : "Are you applying for PIP for yourself?",
      "yourselfLabel"    : "Yes, I am applying for myself",
      "friendLabel"      : "Yes, with help from a friend, relative or third party such as a charity",
      "behalfLabel"      : "No, I'm applying on behalf of someone else",
      "helperNameQ"      : "The name of the person helping you",
      "knowThemQ"        : "How you know them",
      "whyHelpQ"         : "Why they're helping you",
      "appointeeQ"       : "You're completing this application on their behalf because:",
      "POWlabel"         : "you are their registered power of attorney",
      "deputyLabel"      : "you deputy for them under a court of law",
      "regAppointee"     : "you are their registered appointee",
      "canNotManage"     : "they can't manage their own affairs",
      "other"            : "other",
      "backLink"         : "/pip22/apply"
    },
  ],

  "additionalSupport" : [
    {
      "page"             : "x",
      "heading"          : "Do you have any of the following conditions?",
      "question"         : "",
      "youAreNotLabel"   : "None of the above",
      "backLink"         : "/pip22/appointee"
    },
  ],

  "aboutYou" : [
    {
      "page"             : "2",
      "heading"          : "About you - the person the benefit is for",
      "question"         : "First name",
      "question2"        : "Middle name(s)",
      "question3"        : "Last name",
      "question4"        : "Your date of birth",
      "question5"        : "National Insurance number",
      "backLink"         : "/pip22/appointee"
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
      "q4HintText"       : "Enter the number you can be contacted on 9am to 5pm, Monday to Friday",
      "question5"        : "Alternative phone number",
      "question6"        : "Email address",
      "backLink"         : "/pip22/aboutYou"
    },
  ],
  "contactPref" : [
    {
      "page"             : "4",
      "heading"          : "How should we get in touch with you?",
      "question"         : "Do you want to get text messages about your claim?",
      "question2"        : "Mobile number",
      "question3"        : "SPLIT THESE?  Do you need information in braille, large print or audio CD - or another format?",
      "checkbox1"        : "Large print (16 point)",
      "checkbox2"        : "Braille",
      "checkbox3"        : "Audio CD",
      "checkbox4"        : "Other",
      "textareaQ"        : "What format do you need?",
      "textareaHintText" : "for example larger than 16pt print. We can only provide this if it’s necessary because of your condition.",
      "backLink"         : "/pip22/contactDetails"
    },
  ],
  "bankDetails" : [
    {
      "page"             : "8",
      "heading"          : "How do you want to be paid?",
      "introText"        : "If you give your bank details now you'll get paid quicker - if your claim is successful.",
      "options"          : ["Bank account","Building society account","Credit union account","I don't have any of these"],
      "backLink"         : "/pip22/contactPref"
    }
  ],
  "bankAccount" : [
    {
      "page"             : "x",
      "heading"          : "Bank account details",
      "accountName"      : "Name of account holder",
      "sortCode"         : "Sort code",
      "accountNumber"    : "Account number",
      "backLink"         : "/pip22/bankDetails"
    }
  ],
  "buildingSociety" : [
    {
      "page"              : "x",
      "heading"           : "Building society account details",
      "accountName"       : "Name of account holder",
      "sortCode"          : "Sort code",
      "accountNumber"     : "Building society roll or reference number",
      "accountNumberHint" : "If you have one, this will be on your passbook",
      "backLink"          : "/pip22/bankDetails"
    }
  ],
  "creditUnion" : [
    {
      "page"             : "x",
      "heading"          : "Credit union account details",
      "accountName"      : "Name of account holder",
      "sortCode"         : "Sort code",
      "accountNumber"    : "Account number",
      "customerRef"      : "Customer reference number",
      "backLink"         : "/pip22/bankDetails"
    }
  ],
  "nationality" : [
    {
      "page"             : "6",
      "heading"          : "Nationality and where you live",
      "question"         : "What is your nationality?",
      "question2"        : "Your nationality",
      "question3"        : "Do you currently live in England, Scotland or Wales?",
      "question4"        : "Where you live",
      "question5"        : "Have you been out of England, Scotland or Wales for more than 4 weeks in the last 3 years?",
      "q5HintText"       : "This could be one trip or a number of trips adding up to 4 weeks.",
      "backLink"         : "/pip22/bankDetails"
    },
  ],

  "leaveToRemain" : [
    {
      "page"             : "x",
      "heading"          : "Nationality continued",
      "question"         : "Does your passport, or any other document from the Home Office, say “No recourse to public funds”?",
      "question2"        : "What restrictions are there, if any on your leave to remain",
      "question3"        : "When does your leave to remain end?",
      "question4"        : "When did you apply for an extension to your leave to remain?",
      "backLink"         : "/pip22/nationality"
    },
  ],

  "livingAbroad" : [
    {
      "page"             : "x",
      "heading"          : "Working and living abroad",
      "introText"        : "Tell us about all the times you've spent out of the country over the last 3 years.",
      "questionHead"     : "Period abroad",
      "removeLink"       : "Remove this",
      "question"         : "Which country did you go to?",
      "question2"        : "What date did you go",
      "question3"        : "What date did you come back",
      "question4"        : "Why did you go?",
      "question5"        : "When you went, did you intend to return?",
      "whyGoHintText"    : "For example, holiday, work, medical treatment, as a member of HM Forces or as a family member of someone in HM Forces.",
      "backLink"         : "/pip22/nationality"
    },
  ],

  "currentWhereabouts" : [
    {
      "page"             : "5",
      "heading"          : "Where are you staying at the moment?",
      "question2"        : "When did you start staying there?",
      "question3"        : "The address",
      "question4"        : "Postcode",
      "backLink"         : "/pip22/nationality"
    }
  ],

  "careHomeFunding" : [
    {
      "page"             : "x",
      "heading"          : "More details about where you are staying",
      "question"         : "Are you paying all of the costs for your stay?",
      "question2"        : "Who is funding your stay?",
      "question3"        : "Tell us the name of the organisation that is paying",
      "question4"        : "Do you have an agreement with the local authority to repay all the costs?",
      "backLink"         : "/pip22/currentWhereabouts"
    }
  ],

  "hospitalFunding" : [
    {
      "page"             : "x",
      "heading"          : "A you a private patient paying all of your own costs?",
      "question"         : "",
      "backLink"         : "/pip22/currentWhereabouts"
    }
  ],

  "paymentsFromAbroad" : [
    {
      "page"             : "7",
      "heading"          : "Payments from abroad",
      "introText"        : "This question is to check that we are the correct country to pay your benefit.",
      "question"         : "Have you or any of your close family worked abroad or been paid benefits from outside the United Kingdom?",
      "qHintText"        : "This means your partner or a parent that you're financially dependent on.",
      "countriesIntro"   : "These questions are about the following countries:",
      "countries"        : "Austria, Belgium, Bulgaria, Croatia, Cyprus, Czech Republic, Denmark, Estonia, Finland, France, Germany, Gibraltar, Greece, Hungary, Iceland, Ireland, Italy, Latvia, Liechtenstein, Lithuania, Luxembourg, Malta, Netherlands, Norway, Poland, Portugal, Romania, Slovakia, Slovenia, Spain, Sweden and Switzerland.",
      "question2"        : "Are you or your close family claiming or being paid any benefits or pensions from any of these countries?",
      "question3"        : "Are you or your close family working or paying National Insurance in any of these countries?",
      "backLink"         : "/pip22/currentWhereabouts"
    },
  ],
  "conditionDetails" : [
    {
      "page"             : "8",
      "heading"          : "What conditions and disabilities do you have?",
      "rowHd"            : "Condition",
      "conditionHd"      : "Name of condition",
      "startedHd"        : "When it started",
      "removeLink"       : "Remove this",
      "backLink"         : "/pip22/paymentsFromAbroad#aboutYou"
    },
  ],
  "medications" : [
    {
      "page"             : "9",
      "heading"          : "Are you taking any medication?",
      "rowHd"            : "Medication",
      "medicationHd"     : "Name of medication",
      "dosageHd"         : "Dosage",
      "dosageHintText"   : "For example, 40mg",
      "oftenHd"          : "How often you take it",
      "oftenHintText"    : "For example, 2 tablets, twice a day",
      "removeLink"       : "Remove this",
      "backLink"         : "/pip22/conditionDetails"
    },
  ],
  "manageMedications" : [
    {
      "page"             : "10",
      "heading"          : "Does your condition affect you taking your medication?",
      "question2"        : "How often does your condition affect how you manage your medication?",
      "howoften1"        : "At least once a day",
      "howoften2"        : "More than half the time",
      "howoften3"        : "Less than half the time",
      "howoften4"        : "Explain how often in your own words",
      "ownWords"         : "Include how many days out of a week or month you’re affected",
      "question3"        : "How do you manage your medication?",
      "remindsMe"        : "Someone needs to remind you to take it",
      "remindsMeHelp"    : "what the other person does to remind you",
      "helpsTakeIt"      : "Someone needs to help you take it",
      "helpsTakeItHelp"  : "what things the person does to help you",
      "relyOnAids"       : "You rely on aids or something else to help",
      "manage"           : "You manage without help, but with difficulty",
      "manageHelp"       : "what difficulty you have",
      "otherWay"         : "In another way",
      "question4"        : "In your own words, describe how your condition affects you managing your medication on a typical day.",
      "helpTextHd"       : "Include:",
      "helpText"         : ["if you could end up at risk","if what you’re able to do depends on the type of day you’re having"],
      "backLink"         : "/pip22/medications"
    },
  ],
  "treatments" : [
    {
      "page"             : "11",
      "heading"          : "Are you having, or do you have planned, any treatments?",
      "introText"        : "Including chemotherapy, physiotherapy, dialysis, or medical massages or exercises.",
      "rowHd"            : "Treatment or therapy",
      "treatmentHd"      : "Name of treatment or therapy",
      "oftenHd"          : "When or how often",
      "removeLink"       : "Remove this",
      "question2"        : "Do you have treatment or therapy at your home?",
      "backLink"         : "/pip22/manageMedications",

    },
  ],
  "manageTreatments" : [
    {
      "page"             : "x",
      "heading"          : "Does someone need to help you manage your treatment or therapy at home?",
      "question"         : "",
      "qHintText"        : "This includes if you need them to supervise you or remind you.",
      "question2"        : "How many hours a week they help you",
      "question3"        : "Why does someone need to help you manage your treatment or therapy at home?",
      "question4"        : "How does someone help you manage your treatment or therapy at home?",
      "backLink"         : "/pip22/treatments"
    },
  ],
  "sideEffects" : [
    {
      "page"             : "12",
      "heading"          : "Do you get side effects from your medication or treatment?",
      "question2"        : "Describe the side effects you get and how often you get them.",
      "backLink"         : "/pip22/treatments"
    },
  ],
  "conditionAffects" : [
    {
      "page"             : "13",
      "heading"          : "Do the effects of your condition change or vary?",
      "qHintText"        : "This includes if some days, weeks or months are worse than others.",
      "question3"        : "Explain how the effects of your condition change or vary.",
      "q3HintText"       : "Include how many days out of a week or month you're affected.",
      "backLink"         : "/pip22/sideEffects"
    },
  ],
  "monitoringCondition" : [
    {
      "page"             : "14",
      "heading"          : "Monitoring your condition",
      "question"         : "Does someone need to monitor your condition most days because, if they don't, you could be at risk, or a danger to yourself or others?",
      "question2"        : "How many hours does someone need to help monitor your condition?",
      "question3"        : "In your own words, describe why someone needs to monitor your condition on a typical day.",
      "question4"        : "How do they monitor your condition?",
      "backLink"         : "/pip22/conditionAffects"
    },
  ],
  "healthcareprofessional" : [
    {
      "page"             : "15",
      "heading"          : "Are there any professionals who can tell us about your condition?",
      "introText"        : "",
      "question"         : "They could be your doctor, support worker, carer or anyone else who has information about the effects of your condition.",
      "rowHd"            : "Professional",
      "nameHd"           : "Their name",
      "professionHd"     : "Their profession",
      "addressHd"        : "Their address",
      "phoneHd"          : "Their phone number",
      "lastSeenHd"       : "When you last saw them",
      "removeLink"       : "Remove this",
      "backLink"         : "/pip22/monitoringCondition"
    },
  ],
  "hcpConsent" : [
    {
      "page"             : "X",
      "heading"          : "People who might be contacted",
      "introText"        : "The following people may be asked for information about your claim. This could include personal and medical information:",
      "ok"               : "That's OK",
      "notOk"            : "That's not OK",
      "question1"        : "Who should not be contacted for information about your claim?",
      "submit"           : "Save and continue",
      "backLink"         : "/pip22/bankDetails"
    }
  ],
  "submitEvidence" : [
    {
      "page"             : "16",
      "heading"          : "Information you can send",
      "introText"        : "<p>It can help your application if you send information that gives more detail about the effects of your condition.</p><p>Only send what you have to hand - nothing you have to pay to get hold of.</p><p>You need to send this within the next 2 weeks or a decision could be made without it. We can't return any paperwork, so send photocopies if you can.</p>",
      "question"         : "You will send your:",
      "q2HintText"       : "Tick all that apply",
      "question3"        : "How will you send the information?",
      "youAreNotLabel"   : "You are <span class='bold-small'>not</span> sending any information",
      "backLink"         : "/pip22/healthcareprofessional"
    },
  ],
  "specialAids" : [
    {
      "page"              : "17",
      "heading"           : "Where do you have to use aids or adaptations?",
      "question"          : "",
      "qHintText"         : "Include any aids or adaptations you need but have not got yet. Include aids you have adapted or made yourself.",
      "homeLabel"         : "Getting in and out of your home",
      "homeTextareaQ"     : "List the aids or adaptations you have to use to get in or out of your home.",
      "stairsLabel"       : "Hallway or stairs",
      "stairsTextareaQ"   : "List the aids or adaptations you have to use in your hallway or on your stairs.",
      "kitchenLabel"      : "Kitchen or dining area",
      "kitchenTextareaQ"  : "List the aids or adaptations you have to use in your kitchen or dining area.",
      "loungeLabel"       : "Lounge or sitting room",
      "loungeTextareaQ"   : "List the aids or adaptations you have to use in your lounge or sitting room.",
      "bedroomLabel"      : "Bedroom",
      "bedroomTextareaQ"  : "List the aids or adaptations you have to use in your bedroom.",
      "bathroomLabel"     : "Bathroom or toilet",
      "bathroomTextareaQ" : "List the aids or adaptations you have to use in your bathroom or toilet.",
      "outsideLabel"      : "Outside your home",
      "outsideTextareaQ"  : "List the aids or adaptations you have to use when you're outside.",
      "doesntLabel"       : "You do <span class='bold-small'>not</span> rely on aids or adaptations",
      "question2"         : "List anything else you have to use all or most of the time.",
      "q2HintText"        : "This might include things like a wheelchair, hearing aid or prosthetic limb.",
      "backLink"          : "/pip22/submitEvidence"
    },
  ],
  "sight" : [
    {
      "page"             : "18",
      "heading"          : "Does your condition affect your sight?",
      "question"         : "",
      "qHintText"        : "If your sight is fine when you wear glasses, choose 'no'.",
      "question2"        : "How often is your sight affected?",
      "qHintText2"       : "Include how many days out of each week or month you're affected.",
      "question3"        : "In your own words, describe how your sight is affected.",
      "helpTextHd"       : "Explain if your level of sight changes depending on:",
      "helpText"         : ["how light it is","where you are"],
      "question4"        : "Are you registered:",
      "blindLabel"       : "blind",
      "partiallyLabel"   : "partially sighted",
      "neitherLabel"     : "neither",
      "allTime"          : "Is your sight affected all the time?",
      "backLink"         : "/pip22/specialAids"
    },
  ],
  "speech" : [
    {
      "page"             : "19",
      "heading"          : "Does your condition affect your speech?",
      "question"         : "",
      "question2"        : "Does your condition affect your speech all the time?",
      "question3"        : "How often is your speech affected?",
      "qHintText3"       : "Include how many days out of each week or month you're affected.",
      "question4"        : "In your own words, describe how your condition affects your speech on a typical day.",
      "helpTextHd"       : "Include if your speech changes depending on:",
      "helpText"         : ["where you are","what you’re doing","who you’re with"],
      "backLink"         : "/pip22/sight"
    },
  ],
  "hearing" : [
    {
      "page"             : "20",
      "heading"          : "Does your condition affect your hearing?",
      "question"         : "",
      "question2"        : "Tick all that apply:",
      "hearingAidLabel"  : "You need a hearing aid",
      "2hearingAidLabel" : "You need 2 hearing aids",
      "implantLabel"     : "You need a cochlear implant",
      "somethingLabel"   : "You rely on something else",
      "somethingTxtQ"    : "Explain what you rely on",
      "someoneLabel"     : "You rely on someone to help you communicate",
      "someoneTxtQ"      : "Explain how they help you",
      "cantHearLabel"    : "You can't hear at all",
      "cantHearTxtQ"     : "Explain how you communicate",
      "manageLabel"      : "You manage in a different way",
      "manageTxtQ"       : "Explain how you manage",
      "question3"        : "In your own words, describe how your hearing is affected.",
      "helpTextHd"       : "Include if the effects change depending on:",
      "helpText"         : ["where you are","what you’re doing"],
      "backLink"         : "/pip22/speech"
    },
  ],
  "gettingUp" : [
    {
      "page"             : "21",
      "heading"          : "How does your condition affect you moving around?",
      "question"         : "Does your condition affect you:",
      "motivatedLabel"   : "being motivated to get up",
      "sittingUpLabel"   : "sitting up",
      "outBedLabel"      : "getting out of bed",
      "standingLabel"    : "standing",
      "movingRoomsLabel" : "moving between rooms",
      "stairsLabel"      : "using the stairs",
      "otherWayLabel"    : "in another way",
      "doesntLabel"      : "Your condition does <span class='bold-small'>not</span> affect you moving around your home",
      "question2"        : "How often does your condition affect you moving around your home?",
      "question3"        : "How do you get up and move around your home?",
      "encourageLabel"   : "Someone has to encourage you to get out of bed",
      "encourageHelpTxt" : "how they",
      "helpLabel"        : "Someone has to help you move",
      "someoneHelpText"  : "How does someone help you?",
      "relyLabel"        : "You rely on aids or something else to help",
      "manageLabel"      : "You manage without help, but with difficulty",
      "question4"        : "In your own words, describe how your condition affects you getting up and moving around on a typical day.",
      "helpTextHd"       : "Include if:",
      "helpText"         : ["it takes a long time, tell us how long it takes","what you’re able to do depends on the type of day you’re having","you risk having an accident or hurting yourself","moving around has an effect on your condition"],
      "backLink"         : "/pip22/hearing"
    },
  ],
  "toilet" : [
   {
      "page"             : "22",
      "heading"          : "Using the toilet",
      "introText"        : "This question is about using the toilet, not getting to the toilet. If you have difficulty climbing stairs to get to the toilet, or undressing to use it, you’ll have chance to explain this in other questions.",
      "question"         : "Does your condition affect you:",
      "onOffLabel"       : "getting on or off the toilet",
      "        1 and 2        "           : "if you get breathless, or have difficulty with balance or dizziness",
      "cleaningLabel"    : "cleaning yourself",
      "bladderLabel"     : "controlling your bladder",
      "bowelLabel"       : "controlling your bowel",
      "       3               "         : "what level of control you have and examples of how that affects you",
      "otherWayLabel"    : "in another way",
      "doesntLabel"      : "Your condition does <span class='bold-small'>not</span> affect you using the toilet",
      "question2"        : "How often does your condition affect you using the toilet?",
      "question3"        : "How do you use the toilet?",
      "encourageLabel"   : "Someone has to encourage you to use the toilet",
      "helpLabel"        : "Someone has to help you manage your catheter or stoma",
      "                    "              : "what things the person does to help you",
      "relyLabel"        : "You rely on aids or something else to help",
      "                        "       : "what you use to help and how it helps",
      "                        "    : "if someone recommended or gave you the aids",
      "manageLabel"      : "You manage without help, but with difficulty",
      "                               "        : "what difficulty you have",
      "question4"        : "In your own words, describe how your condition affects you using the toilet on a typical day.",
      "helpTextHd"       : "Include:",
      "helpText"         : ["if what you’re able to do depends on the type of day you’re having","any accidents you risk having","if it takes a long time, tell us how long it takes","if using the toilet has an effect on your condition"],
      "frequency"          : [
        {
          "allTime"        : "At least once a day",
          "moreHalf"       : "More than half the time",
          "lessHalf"       : "Less than half the time",
          "ownWords"       : "Explain how often in your own words"
        },
      ],

      "backLink"         : "/pip22/gettingUp"
    },
  ],
  "washing" : [
    {
      "page"             : "23",
      "heading"          : "Washing yourself",
      "question"         : "Does your condition affect you:",
      "motivatedLabel"   : "being motivated to wash",
      "knowingLabel"     : "knowing when or how to wash",
      "inOutBathLabel"   : "getting into or out of the bath or shower",
      "feetOrLegsLabel"  : "washing your feet or legs",
      "backLabel"        : "washing your back",
      "shoulderLabel"    : "washing between your shoulders and waist",
      "hairLabel"        : "washing your hair",
      "standingLabel"    : "standing or balancing",
      "otherWayLabel"    : "in another way",
      "doesntLabel"      : "Your condition does <span class='bold-small'>not</span> affect you washing yourself",
      "question2"        : "How often does your condition affect you washing yourself?",
      "question3"        : "How do you wash yourself?",
      "encourageLabel"   : "Someone has to encourage you to wash",
      "encourageMeHelp"  : "what the other person does to encourage you",
      "helpLabel"        : "Someone has to wash you, supervise you or help you",
      "washHelp"         : "what things the person does to help you",
      "relyLabel"        : "You rely on aids or something else to help",
      "relyOnHelp"       : "what you use to help and how it helps",
      "manageLabel"      : "You manage without help, but with difficulty",
      "difficultyHelp"   : "what difficulty you have",
      "question4"        : "In your own words, describe how your condition affects you washing yourself on a typical day.",
      "helpTextHd"       : "Include:",
      "helpText"         : ["if it takes a long time, tell us how long it takes","if what you’re able to do depends on the type of day you’re having","if you risk having an accident or hurting yourself","if washing yourself has an effect on your condition"],
      "difficultyHelp"   : "what difficulty you have",
      "question4"        : "In your own words, describe how your condition affects you washing yourself on a typical day.",
      "helpTextHd"       : "Include:",
      "helpText"         : ["if it takes a long time, tell us how long it takes","if what you’re able to do depends on the type of day you’re having","if you risk having an accident or hurting yourself","if washing yourself has an effect on your condition"],
      "frequency"          : [
        {
          "allTime"        : "Every time you wash yourself",
          "moreHalf"       : "More than half the time",
          "lessHalf"       : "Less than half the time",
          "ownWords"       : "Explain how often in your own words"
        },
      ],
      "backLink"         : "/pip22/toilet"
    },
  ],
  "gettingDressed" : [
     {
      "page"             : "24",
      "heading"          : "Getting dressed and changed",
      "question"         : "Does your condition affect you:",
      "motivatedLabel"   : "being motivated to get dressed or changed",
      "knowingLabel"     : "choosing suitable clothes for example for the weather",
      "shoesLabel"       : "putting on shoes or socks",
      "1 and 2"          : "if you get breathless, or have difficulty with balance or dizziness",
      "lacesLabel"       : "tying shoe laces",
      "buttonsLabel"     : "fastening buttons or using zips",
      "3"                :  "if you avoid certain types of clothes or fastenings",
      "braLabel"         : "fastening a bra",
      "jumperLabel"      : "putting on jumpers or t-shirts",
      "trousersLabel"    : "putting on trousers or skirts",
      "otherWayLabel"    : "in another way",
      "doesntLabel"      : "Your condition does <span class='bold-small'>not</span> affect you getting dressed or changed",
      "question2"        : "How often does your condition affect you getting dressed or changed?",
      "question3"        : "How do you get dressed or changed?",
      "encourageLabel"   : "Someone has to encourage you to get dressed or changed",
      "4"                : "what the other person does to encourage you",
      "helpLabel"        : "Someone has to help you to get dressed or changed",
      "5"                : "what things the person does to help you",
      "relyLabel"        : "You rely on aids or something else to help",
      "6"                : "what you use to help and how it helps",
      "7"                : "if someone recommended or gave you the aids",
      "manageLabel"      : "You manage without help, but with difficulty",
      "8"                : "what difficulty you have",
      "question4"        : "In your own words, describe how your condition affects you getting dressed or changed on a typical day.",
      "helpTextHd"       : "Include:",
      "helpText"         : ["if it takes a long time, tell us how long it takes","if what you’re able to do depends on the type of day you’re having","if you risk having an accident or hurting yourself","if getting dressed has an effect on your condition"],
      "frequency"          : [
        {
          "allTime"        : "Every time you get dressed",
          "moreHalf"       : "More than half the time",
          "lessHalf"       : "Less than half the time",
          "ownWords"       : "Explain how often in your own words"
        },
      ],
      "backLink"         : "/pip22/washing"
    },
  ],
  "hotMeal" : [
    {
      "page"             : "25",
      "heading"          : "Making a hot meal from fresh ingredients",
      "introText"        : "If you do not make hot meals from fresh ingredients, explain whether you could if you had to.",
      "question"         : "Does your condition affect you:",
      "motivatedLabel"   : "being motivated to make a hot meal from fresh ingredients",
      "understandLabel"  : "understanding how to make a hot meal from fresh ingredients",
      "safelyLabel"      : "being able to make a hot meal safely",
      "choppingLabel"    : "chopping or peeling",
      "openingLabel"     : "opening tins or jars",
      "hobLabel"         : "using a hob",
      "microwaveLabel"   : "using a microwave",
      "pansLabel"        : "lifting pans",
      "plateLabel"       : "putting food on a plate",
      "otherWayLabel"    : "in another way",
      "doesntLabel"      : "Your condition does <span class='bold-small'>not</span> affect you making a hot meal from fresh ingredients.",
      "question2"        : "How often does your condition affect you making a hot meal from fresh ingredients?",
      "frequency"          : [
        {
          "allTime"        : "Every time you prepare or cook a hot meal",
          "moreHalf"       : "More than half the time",
          "lessHalf"       : "Less than half the time",
          "ownWords"       : "Explain how often in your own words"
        },
      ],
      "question3"        : "How would you prepare and cook a hot meal from fresh ingredients?",
      "encourageLabel"   : "Someone would have to encourage or remind you",
      "helpLabel"        : "Someone would have to supervise you, help you or cook for you",
      "relyLabel"        : "You would rely on aids or something else to help",
      "manageLabel"      : "You would manage without help, but with difficulty",
      "question4"        : "In your own words, describe how your condition affects you preparing and cooking a hot meal from fresh ingredients on a typical day.",
      "helpTextHd"       : "Include:",
      "helpText"         : ["if it takes a long time, tell us how long it takes","if what you’re able to do depends on the type of day you’re having","if you risk having an accident or hurting yourself","if cooking a meal has an effect on your condition"],
      "backLink"         : "/pip22/gettingDressed"
    },
  ],
  "eatingAndDrinking" : [
   {
     "page"             : "26",
     "heading"          : "Eating and drinking",
     "question"         : "Does your condition affect you:",
     "motivatedLabel"   : "being motivated to eat or drink",
     "knowingWhenLabel" : "knowing when to eat or drink",
     "knowingMuchLabel" : "knowing how much to eat or drink",
     "cuttingLabel"     : "cutting up food",
     "holdingLabel"     : "holding cutlery",
     "mouthLabel"       : "putting food or drink in your mouth",
     "chewingLabel"     : "chewing food",
     "swallowingLabel"  : "swallowing",
     "otherWayLabel"    : "in another way",
     "otherWayLabel2"   : "In another way",
     "doesntLabel"      : "Your condition does <span class='bold-small'>not</span> affect you eating or drinking",
     "question2"        : "How often does your condition affect you eating or drinking?",
     "frequency"          : [
       {
         "allTime"        : "Every time you eat or drink",
         "moreHalf"       : "More than half the time",
         "lessHalf"       : "Less than half the time",
         "ownWords"       : "Explain how often in your own words"
       },
     ],
     "question3"        : "How do you eat and drink?",
     "encourageLabel"   : "Someone has to encourage or remind you to eat or drink",
     ""                 : "what the other person does to encourage or remind you",
     "helpLabel"        : "Someone has to supervise or help you to eat or drink",
     ""                 : "what things the person does to help you",
     "relyLabel"        : "You rely on aids or something else to help",
     ""                 : "what you use to help and how it helps",
     ""                 : "if someone recommended or gave you the aids",
     "manageLabel"      : "You manage without help, but with difficulty",
     ""                 : "what difficulty you have",
     "question4"        : "In your own words, describe how your condition affects you eating or drinking on a typical day.",
     "helpTextHd"       : "Include:",
     "helpText"         : ["if eating or drinking takes a long time, tell us how long it takes","if what you’re able to do depends on the type of day you’re having","if you risk having an accident or hurting yourself","if eating or drinking has an effect on your condition"],
     "backLink"         : "/pip22/hotMeal"
    },
  ],
  "gettingOut" : [
    {
      "page"             : "27",
      "heading"          : "Getting out and about",
      "question"         : "Which of the following affects you getting out and about?",
      "motivatedLabel"   : "You have to use a wheelchair",
      "distanceLabel"    : "You have 2 prosthetic legs",
      "carLabel"         : "You rely on aids to walk",
      "streetLabel"      : "You rely on someone to help you walk",
      "anxiousLabel"     : "You get anxious about going out",
      "otherWayLabel"    : "You want to explain in your own words ",
      "doesntLabel"      : "Your condition does <span class='bold-small'>not</span> affect you getting out or about",
      "question2"        : "How far can you walk without stopping?",
      "question3"        : "How often does your condition affect you getting out and about?",
      "frequency"          : [
        {
          "allTime"        : "Every time you need to go out",
          "moreHalf"       : "More than half the time",
          "lessHalf"       : "Less than half the time",
          "ownWords"       : "Explain how often in your own words"
        },
      ],
      "question4"        : "In your own words, describe how your condition affects you getting out and about on a typical day.",
      "helpTextHd"       : "Include if:",
      "helpText"         : ["it takes a long time, tell us how long it takes","what you’re able to do depends on the type of day you’re having","you risk having an accident or hurting yourself","getting out or walking about has an effect on your condition"],
      "backLink"         : "/pip22/eatingAndDrinking"
    },
  ],
  "mixing" : [
    {
      "page"             : "28",
      "heading"          : "Mixing with people",
      "introText"        : "This question is about socialising with people and being able to understand what they’re saying. If you do not mix with other people, explain whether you could if you had to.",
      "question"         : "Does your condition affect you:",
      "youDontKnowLabel" : "mixing with people you do not know",
      "youKnowLabel"     : "mixing with people you know",
      "convosLabel"      : "understanding simple sentences",
      "longConvoLabel"   : "understanding long or complicated sentences",
      "whatToSayLabel"   : "getting across what you want to say",
      "behaveToYouLabel" : "understanding how people are behaving towards you",
      "actingLabel"      : "acting appropriately",
      "distressLabel"    : "mixing with people without feeling anxious or distressed",
      "otherWayLabel"    : "in another way",
      "doesntLabel"      : "Your condition does <span class='bold-small'>not</span> affect you mixing with people",
      "question2"        : "How often does your condition affect you mixing with people?",
      "frequency"          : [
        {
          "allTime"        : "Every time you have to mix with people",
          "moreHalf"       : "More than half the time",
          "lessHalf"       : "Less than half the time",
          "ownWords"       : "Explain how often in your own words"
        },
      ],
      "question3"        : "When you have to, how do you mix with people?",
      "encourageLabel"   : "Someone has to encourage you to mix with people",
      "relyLabel"        : "Someone has to explain things to you",
      "superviseLabel"   : "Someone has to supervise you",
      "ownLabel"         : "You manage without help, but with difficulty",
      "question4"        : "In your own words, describe how your condition would affect you mixing with people if you had to.",
      "helpTextHd"       : "Include if:",
      "helpText"         : ["what you’re able to do depends on the type of day you’re having","mixing with people could put you or others at risk","if mixing with people has an effect on your condition"],
      "backLink"         : "/pip22/gettingOut"
    },
  ],
  "localJourney" : [
    {
      "page"             : "29",
      "heading"          : "Planning a local journey",
      "introText"        : "This question is about how you would plan to get to somewhere local that you’ve never been before - it’s not about getting there. If you wouldn't plan a journey yourself, explain whether you could if you had to.",
      "question2"        : "How would you plan a local journey to somewhere you’ve never been before?",
      "relyLabel"        : "Someone else would have to plan the journey",
      "helpLabel"        : "Someone would have to help you understand maps or bus timetables",
      "ownLabel"         : "You would manage without help, but with difficulty",
      "otherWayLabel"    : "In another way",
      "noLabel"          : "Your condition would <span class='bold-small'>not</span> affect you planning a local journey",
      "question3"        : "In your own words, describe how you would plan a local journey if you had to.",
      "q3HintText"       : "Include if it would take you a long time to plan a local journey.",
      "backLink"         : "/pip22/mixing"
    },
  ],
  "somewhereNeverBeenBefore" : [
    {
      "page"             : "30",
      "heading"          : "Following a route",
      "question"         : "Would your condition affect you:",
      "somewhereNeverLabel"   : "following a route to somewhere you have never been",
      "somewhereKnowLabel"    : "following a route to somewhere you know",
      "knowingLabel"     : "knowing where to go",
      "publicLabel"      : "using public transport",
      "askingHelpLabel"  : "asking for help",
      "lostLabel"        : "recovering from getting lost",
      "dealingLabel"     : "dealing with any unexpected changes to the route",
      "mapsLabel"        : "following directions on a map or sat nav",
      "otherWayLabel"    : "in another way",
      "doesntLabel"      : "Your condition would <span class='bold-small'>not</span> affect you following a route.",
      "question2"        : "How would you follow a route?",
      "relySomeoneLabel" : "Someone would have to be with you",
      "relyGuideLabel"   : "You would rely on an assistance dog or something else to help you find your way",
      "ownLabel"         : "You would manage without help, but with difficulty",
      "question3"        : "In your own words, describe how you would follow a route if you had to.",
      "helpTextHd"       : "Include if:",
      "helpText"         : ["what you can do depends if you have been to the place before","what you can do depends on the type of day you’re having","you risk having an accident or hurting yourself","your condition would affect how long it takes you to get somewhere","getting somewhere you have never been would have an effect on your condition"],
      "backLink"         : "/pip22/localJourney"
    },
  ],
  "somewhereYouKnow" : [
    {
      "page"             : "31",
      "heading"          : "Getting somewhere you know",
      "introText"        : "This question is about following a route to somewhere you know and dealing with any unexpected changes to the journey.",
      "question"         : "Does your condition affect you:",
      "knowingLabel"     : "knowing where to go",
      "publicLabel"      : "using public transport",
      "askingHelpLabel"  : "asking for help",
      "lostLabel"        : "recovering from getting lost",
      "mapsLabel"        : "following directions on a map or sat nav",
      "otherWayLabel"    : "in another way",
      "doesntLabel"      : "Your condition does <span class='bold-small'>not</span> affect you getting somewhere you know",
      "question2"        : "How would you get to somewhere you know?",
      "relySomeoneLabel" : "Someone would have to get you there or guide you",
      "relyGuideLabel"   : "You would rely on an assistance dog or something else to help you find your way",
      "ownLabel"         : "You would manage without help, but with difficulty",
      "question3"        : "In your own words, describe how your condition would affect you getting somewhere you know.",
      "helpTextHd"       : "Include if:",
      "helpText"         : ["what you’re able to do depends on the type of day you’re having","you risk having an accident or hurting yourself","your condition affects how long it takes you to get there","getting somewhere has an effect on your condition"],
      "backLink"         : "/pip22/somewhereNeverBeenBefore"
    },
  ],
  "understanding" : [
    {
      "page"             : "32",
      "heading"          : "Understanding written information",
      "question"         : "Does your condition affect your understanding of:",
      "wordsLabel"       : "words or simple sentences",
      "sentencesLabel"   : "long or complicated sentences",
      "symbolsLabel"     : "symbols, such as pound signs or exclamation marks",
      "datesLabel"       : "dates",
      "signsLabel"       : "signs, such as safety signs",
      "elseLabel"        : "something else",
      "doesntLabel"      : "Your condition does <span class='bold-small'>not</span> affect your understanding of written information",
      "question2"        : "How do you work out what they mean?",
      "relySomeoneLabel" : "Someone has to explain things to you",
      "relyRemindLabel"  : "Someone has to remind you what things mean",
      "ownLabel"         : "You manage without help, but with difficulty",
      "otherWayLabel"    : "In another way",
      "question3"        : "In your own words, describe how you go about understanding written information.",
      "helpTextHd"       : "Include if:",
      "helpText"         : ["it can take you a long time to work out what things mean","not understanding things puts you at risk"],
      "backLink"         : "/pip22/somewhereNeverBeenBefore"
    },
  ],
  "money" : [
    {
      "page"             : "33",
      "heading"          : "Dealing with money",
      "introText"        : "If you don't deal with money or bills, explain whether you could if you had to.",
      "question"         : "Does your condition affect you:",
      "motivatedLabel"   : "being motivated to pay bills",
      "billsLabel"       : "understanding bills",
      "spendLabel"       : "budgeting",
      "costLabel"        : "understanding how much things cost",
      "changeLabel"      : "knowing how much change you should get",
      "overspendLabel"   : "overspending",
      "doesntLabel"      : "Your condition does <span class='bold-small'>not</span> affect you dealing with money",
      "question2"        : "How would you deal with money?",
      "relySomeoneLabel" : "Someone would have to explain things to you",
      "relyRemindLabel"  : "Someone would have to remind you or encourage you to pay bills",
      "legalLabel"       : "Someone legally has to deal with money for you",
      "ownLabel"         : "You would manage without help, but with difficulty",
      "otherWayLabel"    : "In another way",
      "question3"        : "In your own words, describe how you would deal with money, if you had to.",
      "helpTextHd"       : "Include if:",
      "helpText"         : ["what you’re able to do depends on the type of day you’re having","it can take a long time to work things out","you could end up at risk"],
      "backLink"         : "/pip22/understanding"
    },
  ],
  "additionalInfo" : [
    {
      "page"             : "35",
      "heading"          : "Additional information",
      "introText"        : "Include anything else that explains how your condition or disability affects you.",
      "submit"           : "Save and continue",
      "backLink"         : "/pip22/money"
    },
  ],
  "declaration" : [
    {
      "page"             : "36",
      "heading"          : "Declaration",
      "listHeading"      : "By continuing this application you agree:",
      "list"             : ["the information you will enter in this application is complete and correct as far as you know","to promptly <a href='#' data-target='legalDetails' class='showLegal'>report any changes to your circumstances</a>"],
      "disclaimer"       : "You might have to go to court or pay a penalty if you deliberately give false or incomplete information, or do not report changes. Your Personal Independence Payment may also be stopped or reduced.",
      "submit"           : "I agree - continue my application",
      "backLink"         : "/pip22/paymentsFromAbroad"
    },
  ],
  "completionDate" : [
    {
      "heading"          : "How long do I have to fill in this application?",
      "p1"               : "You have until <strong>17 September 2016</strong>. Save and return to it as often as you like before then." ,
      "submit"           : "Continue",
      "backLink"         : "/pip22/declaration"
    }
  ],
  "submitApplication" : [
    {
      "page"             : "x",
      "heading"          : "Submit your application",
      "p1"               : "You have now answered all the questions on the application and you are now able to send it",
      "p2"               : "You will not be able to change your answers after you send your application.",
      "submit"           : "Send my application",
      "backLink"         : "/pip22/checkYourAnswers"
    },
  ],
  "thankYou" : [
    {
      "heading"          : "Your application has been sent",
      "heading2"         : "Send more information",
      "p1"               : "You said you’re going to send information about the effects of your condition. Write your full name and National Insurance number on each page you send and post it before [date in two weeks]. If you do not send it before then, a decision could be made without it.",
      "postTo"           : "Post to:",
      "heading3"         : "What happens next",
      "p2"               : "You'll get a letter in the next 4 weeks. It will either tell you a decision, or invite you to meet a medical professional.",
      "p3"               : "You must <a href='#' rel='external'>report any change to your circumstances</a>.",
      "p4"               : "If you have any queries about your claim, phone 0345 850 3322. You’ll need your National Insurance number.",
      "button"           : "Return to GOV.UK"
    },
  ],


}];

exports.getTableData = function() {
  return data;
};
