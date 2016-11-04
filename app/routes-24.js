module.exports = function (app) {

  var styleguide           = require('./views/pip24/content/styleguide'),
      aboutYou             = require('./views/pip24/content/aboutYou'),
      unansweredQuestions  = require('./views/pip24/content/unansweredQuestions'),
      checkYourAnswers     = require('./views/pip24/content/checkYourAnswers');

  app.get('/pip24/styleguide', function (req, res) {
    res.render('pip24/styleguide', {
      answers : req.session['pip24-helper'],
      data    : styleguide.getTableData()
    });
  });

  /*******************
  reset answers
  *******************/
  app.get('/pip24/reset', function (req, res) {
      res.render('pip24/reset');
  });

  app.post('/pip24/reset', function (req, res) {
    req.session.destroy();
    res.redirect('/pip24/apply');

  });

  /*******************
  summaryMain
  *******************/
  app.get('/pip24/summaryMain', function (req, res) {
      res.render('pip24/summaryMain', {
        'show'  : req.param('show'),
        'next'  : req.param('next'),
        'back'  : req.param('back')
      });
  });

  /*******************
  exit
  *******************/
  app.get('/pip24/exit', function (req, res) {
      res.render('pip24/exit', {
        data    : aboutYou.getTableData()
      });
  });

  /*******************
  postcodeCheck
  *******************/

  app.get('/pip24/postcodeCheck', function (req, res) {
      res.render('pip24/postcodeCheck', {
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip24/postcodeCheck', function (req, res) {
    req.session['pip24-postcodeCheck'] = req.body;
    if (req.body.postcode.toLowerCase() != 'ls10'   ) {
      res.redirect('/pip24/postCodeSignPost');
    } else {
      res.redirect('/pip24/srti');
    }
  });

  /*******************
  postCodeSignPost
  *******************/

  app.get('/pip24/postCodeSignPost', function (req, res) {
      res.render('pip24/postCodeSignPost', {
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip24/postCodeSignPost', function (req, res) {
    req.session['pip24-postCodeSignPost'] = req.body;
    res.redirect('/pip24/srti');
  });

  /*******************
  dob
  *******************/

  app.get('/pip24/dob', function (req, res){
    (req.session['pip24-dob']);
      res.render('pip24/dob', {
        answers : req.session['pip24-dob'],
        'edit'  : req.param ('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip24/dob', function (req, res) {
    req.session['pip24-dob'] = req.body;
    if (req.body.dobYear <= '1951'
    && req.body.dobMonth <= '10'
    && req.body.dobDay <= '04'
    ) {
      res.redirect('/pip24/overSixtyFive');
    }
    else if (req.body.dobYear <= '1950') {
      res.redirect('/pip24/overSixtyFive');
    }

    else if (req.body.dobYear >= '2000'
    && req.body.dobMonth >= '10'
    && req.body.dobDay >= '05') {
      res.redirect('/pip24/underSixteen');
    }
    else if (req.body.dobYear >= '2001') {
      res.redirect('/pip24/underSixteen');
    }


    else {
      res.redirect('/pip24/registration');
    }

  });

  /*******************
  dobSignPost
  *******************/

  app.get('/pip24/dobSignPost', function (req, res) {
      res.render('pip24/dobSignPost', {
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip24/dobSignPost', function (req, res) {
    req.session['pip24-dobSignPost'] = req.body;
    res.redirect('/pip24/registration');
  });

  /*******************
  overSixtyFive
  *******************/

  app.get('/pip24/overSixtyFive', function (req, res) {
      res.render('pip24/overSixtyFive', {
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip24/overSixtyFive', function (req, res) {
    req.session['pip24-overSixtyFive'] = req.body;
    res.redirect('/pip24/registration');
  });

  /*******************
  underSixteen
  *******************/

  app.get('/pip24/underSixteen', function (req, res) {
      res.render('pip24/underSixteen', {
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip24/underSixteen', function (req, res) {
    req.session['pip24-underSixteen'] = req.body;
    res.redirect('/pip24/registration');
  });

  /*******************
  srti
  *******************/
  app.get('/pip24/srti', function (req, res) {
      res.render('pip24/srti', {
        answers : req.session['pip24-srti'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip24/srti', function (req, res) {
    req.session['pip24-srti'] = req.body;
    if (req.body.srti == 'Yes') {
      res.redirect('/pip24/srtiSignPost');
    } else {
      res.redirect('/pip24/filterQuestions');
    }
  });

  /*******************
  srtiSignPost
  *******************/
  app.get('/pip24/srtiSignPost', function (req, res) {
      res.render('pip24/srtiSignPost', {
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip24/srtiSignPost', function (req, res) {
    req.session['pip24-srtiSignPost'] = req.body;
    res.redirect('/pip24/registration');
  });

  /*******************
  filterQuestions
  *******************/
  app.get('/pip24/filterQuestions', function (req, res) {
      res.render('pip24/filterQuestions', {
        answers : req.session['pip24-filterQuestions'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip24/filterQuestions', function (req, res) {
    req.session['pip24-filterQuestions'] = req.body;
    if (req.body.question1 == "Yes" || req.body.question2 == "Yes" || req.body.question3 == "No" ) {
      res.redirect('/pip24/filterSignPost');
    } else {
      res.redirect('/pip24/dob');
    }
  });

  /*******************
  filterSignPost
  *******************/

  app.get('/pip24/filterSignPost', function (req, res) {
      res.render('pip24/filterSignPost', {
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip24/filterSignPost', function (req, res) {
    req.session['pip24-filterSignPost'] = req.body;
    res.redirect('/pip24/registration');
  });

  /*******************
  registration
  *******************/
  app.get('/pip24/registration', function (req, res) {
      res.render('pip24/registration', {
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip24/registration', function (req, res) {
    req.session['pip24-registration'] = req.body;
    res.redirect('/pip24/registered');
  });


  /*******************
  registered
  ********************/
  app.get('/pip24/registered', function (req,res) {
    res.render('pip24/registered', {
      answers  : req.session['pip24-registered'],
      registration : req.session['pip24-registration'],
      data      : aboutYou.getTableData()
    });
  });

  app.post('/pip24/registration', function (req, res) {
    req.session['pip24-registered'] = req.body;
    res.redirect('/pip24/registered');
  });

  /**********************
  login
  ************************/
  app.get('/pip24/login', function (req, res) {
    res.render('pip24/login', {
      answers : req.session['pip24-login'],
      data  : aboutYou.getTableData()
    });
  });

  app.post('/pip24/login', function (req, res) {
    req.session['pip24-login'] = req.body;
    res.redirect('/pip24/continueYourApplication');
  });


  /*******************
  continueYourApplication
  *******************/
  app.get('/pip24/continueYourApplication', function (req, res) {
      res.render('pip24/continueYourApplication', {
          data    : aboutYou.getTableData()
      });
  });

  app.post('/pip24/continueYourApplication', function (req, res) {
    req.session['pip24-continueYourApplication'] = req.body;

    if(req.body.continue === "Where you left it") {
       if (req.body.saveAndMenu) {
         res.redirect('/pip24/aboutYou?edit=true');
       } else {
         res.redirect('/pip24/unansweredQuestions');
       }
     }
     else if (req.body.saveAndMenu) {
       res.redirect('/pip24/unansweredQuestions#yourCondition');
     } else {
       res.redirect('/pip24/aboutYou');
     }
  });




  /*******************
  appointee
  *******************/
  app.get('/pip24/appointee', function (req, res) {
      res.render('pip24/appointee', {
        answers : req.session['pip24-appointee'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip24/appointee', function (req, res) {
    req.session['pip24-appointee'] = req.body;

    if(req.body.appointee === "Yes, you're applying for yourself") {
       if (req.body.saveAndMenu) {
         res.redirect('/pip24/additionalSupport?edit=true');
       } else {
         res.redirect('/pip24/additionalSupport');
       }
     }
     else if (req.param('edit')) {
       res.redirect('/pip24/pip1Answers');
     }
     else if (req.body.saveAndMenu) {
       res.redirect('/pip24/unansweredQuestions#yourCondition');
     } else {
       res.redirect('/pip24/contactDetails');
     }
  });


  /*******************
  additionalSupport
  *******************/
  app.get('/pip24/additionalSupport', function (req, res) {
      res.render('pip24/additionalSupport', {
        answers : req.session['pip24-additionalSupport'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip24/additionalSupport', function (req, res) {
    req.session['pip24-additionalSupport'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip24/pip1Answers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip24/unansweredQuestions#additionalSupport');
    } else {
      res.redirect('/pip24/contactDetails');
    }
  });



  /*******************
  aboutYou
  *******************/
  app.get('/pip24/aboutYou', function (req, res) {
      res.render('pip24/aboutYou', {
        answers : req.session['pip24-aboutYou'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip24/aboutYou', function (req, res) {
    req.session['pip24-aboutYou'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip24/pip1Answers');
    }
    else {
      res.redirect('/pip24/declaration');
    }
  });

  /*******************
  declaration at start
  *******************/
  app.get('/pip24/declaration', function (req, res) {
      res.render('pip24/declaration', {
        answers  : req.session['pip24-declaration'],
        aboutYou : req.session['pip24-aboutYou'],
        'edit'   : req.body.saveAndMenu,
        data     : aboutYou.getTableData()
      });
  });

  app.post('/pip24/declaration', function (req, res) {
    req.session['pip24-declaration'] = req.body;
    res.redirect('/pip24/appointee');
    //unansweredQuestions#aboutYou'
  });

  /*******************
  whatYouNeedToDo
  *******************/
  app.get('/pip24/whatYouNeedToDo', function (req, res) {
      res.render('pip24/whatYouNeedToDo', {
        data    : aboutYou.getTableData()
      });
  });

  /*******************
  contactDetails
  *******************/
  app.get('/pip24/contactDetails', function (req, res) {
      res.render('pip24/contactDetails', {
        answers : req.session['pip24-contactDetails'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip24/contactDetails', function (req, res) {
    req.session['pip24-contactDetails'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip24/pip1Answers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip24/unansweredQuestions#aboutYou');
    } else {
      res.redirect('/pip24/contactPref');
    }
  });

  /*******************
  contactPref
  *******************/
  app.get('/pip24/contactPref', function (req, res) {
      res.render('pip24/contactPref', {
        answers : req.session['pip24-contactPref'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip24/contactPref', function (req, res) {
    req.session['pip24-contactPref'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip24/pip1Answers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip24/unansweredQuestions#aboutYou');
    }
    else {
      res.redirect('/pip24/bankDetails');
    }
  });

  /*******************
  bankDetails
  *******************/
  app.get('/pip24/bankDetails', function (req, res) {
      res.render('pip24/bankDetails', {
        answers : req.session['pip24-bankDetails'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip24/bankDetails', function (req, res) {
    req.session['pip24-bankDetails'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip24/pip1Answers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip24/unansweredQuestions#aboutYou');
    } else {
      switch (req.body.bank) {
        case "Bank account":
          page = 'bankAccount';
          break;
        case "Building society account":
          page = 'buildingSociety';
          break;
        case "Credit union account":
          page = 'creditUnion';
          break;
        default:
          page = "nationality";
      }
      res.redirect('/pip24/'+page);
    }
  });

  /*******************
  bankAccount
  *******************/
  app.get('/pip24/bankAccount', function (req, res) {
      res.render('pip24/bankAccount', {
        answers : req.session['pip24-bankAccount'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip24/bankAccount', function (req, res) {
    req.session['pip24-bankAccount'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip24/pip1Answers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip24/unansweredQuestions#aboutYou');
    } else {
      res.redirect('/pip24/nationality');
    }
  });

  /*******************
  buildingSociety
  *******************/
  app.get('/pip24/buildingSociety', function (req, res) {
      res.render('pip24/buildingSociety', {
        answers : req.session['pip24-buildingSociety'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip24/buildingSociety', function (req, res) {
    req.session['pip24-buildingSociety'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip24/pip1Answers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip24/unansweredQuestions#aboutYou');
    } else {
      res.redirect('/pip24/nationality');
    }
  });

  /*******************
  creditUnion
  *******************/
  app.get('/pip24/creditUnion', function (req, res) {
      res.render('pip24/creditUnion', {
        answers : req.session['pip24-creditUnion'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip24/creditUnion', function (req, res) {
    req.session['pip24-creditUnion'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip24/pip1Answers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip24/unansweredQuestions#aboutYou');
    } else {
      res.redirect('/pip24/nationality');
    }
  });

  /*******************
  nationality
  *******************/
  app.get('/pip24/nationality', function (req, res) {
    res.render('pip24/nationality', {
      answers : req.session['pip24-nationality'],
      'edit'  : req.param('edit'),
      data    : aboutYou.getTableData()
    });
  });

  var Nationality = ['scottish','english','british','austrian','belgian','bulgarian','cypriot','czech','danish','estonian',
  'finnish','french','icelandic','italian','hungarian','latvian','german','greek','liechtenstenier','lithuanian','luxumbourger',
  'maltan','dutch','norwegian','polish','portuguese','romanian','slovakian','swiss','slovenian','spanish','swedish','welsh',''];

  app.post('/pip24/nationality', function (req, res) {
    req.session['pip24-nationality'] = req.body;

    for (var i = 0; i < Nationality.length; i++) {

    if (Nationality[i] == req.body.otherNationality.toLowerCase())  {
      if (req.body.saveAndMenu){
        res.redirect('/pip24/currentWhereabouts?edit=true');
    } else {
      res.redirect('/pip24/currentWhereabouts');
    }
} { continue; } }

if (req.body.livingAbroad === 'Yes') {
   if (req.body.saveAndMenu) {
     res.redirect('/pip24/livingAbroad?edit=true');
   } else {
     res.redirect('/pip24/livingAbroad');
   }
 }

 if (req.param('edit')) {
   res.redirect('/pip24/pip1Answers');
 }
 else if (req.body.saveAndMenu) {
   res.redirect('/pip24/unansweredQuestions#aboutYou');
 } else {
   res.redirect('/pip24/leaveToRemain');
 }

  });

  /*******************
  leaveToRemain
  *******************/
  app.get('/pip24/leaveToRemain', function (req, res) {
    res.render('pip24/leaveToRemain', {
      answers : req.session['pip24-leaveToRemain'],
      'edit'  : req.param('edit'),
      data    : aboutYou.getTableData()
    });
  });

  app.post('/pip24/leaveToRemain', function (req, res) {
    req.session['pip24-leaveToRemain'] = req.body;

    if(req.body.livingAbroad === 'Yes') {
       if (req.body.saveAndMenu) {
         res.redirect('/pip24/livingAbroad?edit=true');
       } else {
         res.redirect('/pip24/livingAbroad');
       }
     }

    if (req.param('edit')) {
      res.redirect('/pip24/pip1Answers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip24/unansweredQuestions#aboutYou');
    } else {
      res.redirect('/pip24/currentWhereabouts');
    }
  });

  /*******************
  livingAbroad
  *******************/
  app.get('/pip24/livingAbroad', function (req, res) {
    res.render('pip24/livingAbroad', {
      answers : req.session['pip24-livingAbroad'],
      'edit'  : req.param('edit'),
      data    : aboutYou.getTableData()
    });
  });

  app.post('/pip24/livingAbroad', function (req, res) {
    req.session['pip24-livingAbroad'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip24/pip1Answers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip24/unansweredQuestions#aboutYou');
    } else {
      res.redirect('/pip24/currentWhereabouts');
    }
  });


  /*******************
  currentWhereabouts
  *******************/
  app.get('/pip24/currentWhereabouts', function (req, res) {
      res.render('pip24/currentWhereabouts', {
        answers : req.session['pip24-currentWhereabouts'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip24/currentWhereabouts', function (req, res) {
    req.session['pip24-currentWhereabouts'] = req.body;

    if(req.body.optionsLiving === 'a care or nursing home'
      || req.body.optionsLiving === 'sheltered housing'
      || req.body.optionsLiving === 'a residential college'
      || req.body.optionsLiving === 'a hostel') {
       if (req.body.saveAndMenu) {
         res.redirect('/pip24/careHomeFunding?edit=true');
       } else {
         res.redirect('/pip24/careHomeFunding');
       }
     }
     else if(req.body.optionsLiving === 'a care or nursing home'
       || req.body.optionsLiving === 'hospital'
       || req.body.optionsLiving === 'a hospice') {
        if (req.body.saveAndMenu) {
          res.redirect('/pip24/hospitalFunding?edit=true');
        } else {
          res.redirect('/pip24/hospitalFunding');
        }
      }
     else if (req.param('edit')) {
       res.redirect('/pip24/pip1Answers');
     }
     else if (req.body.saveAndMenu) {
       res.redirect('/pip24/unansweredQuestions#yourCondition');
     } else {
       res.redirect('/pip24/paymentsFromAbroad');
     }
  });

  /*******************
  careHomeFunding
  *******************/
  app.get('/pip24/careHomeFunding', function (req, res) {
      res.render('pip24/careHomeFunding', {
        answers : req.session['pip24-careHomeFunding'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip24/careHomeFunding', function (req, res) {
    req.session['pip24-careHomeFunding'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip24/pip1Answers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip24/unansweredQuestions#aboutYou');
    } else {
      res.redirect('/pip24/paymentsFromAbroad');
    }
  });

  /*******************
  hospitalFunding
  *******************/
  app.get('/pip24/hospitalFunding', function (req, res) {
      res.render('pip24/hospitalFunding', {
        answers : req.session['pip24-hospitalFunding'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip24/hospitalFunding', function (req, res) {
    req.session['pip24-hospitalFunding'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip24/pip1Answers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip24/unansweredQuestions#aboutYou');
    } else {
      res.redirect('/pip24/paymentsFromAbroad');
    }
  });

  /*******************
  paymentsFromAbroad
  *******************/
  app.get('/pip24/paymentsFromAbroad', function (req, res) {
      res.render('pip24/paymentsFromAbroad', {
        answers : req.session['pip24-paymentsFromAbroad'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip24/paymentsFromAbroad', function (req, res) {
    req.session['pip24-paymentsFromAbroad'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip24/pip1Answers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip24/unansweredQuestions#aboutYou');
    } else {
      res.redirect('/pip24/mainHcp');
    }
  });

  /*******************
  declaration at start
  *******************/
  app.get('/pip24/declaration', function (req, res) {
      res.render('pip24/declaration', {
        answers  : req.session['pip24-declaration'],
        aboutYou : req.session['pip24-aboutYou'],
        'edit'   : req.body.saveAndMenu,
        data     : aboutYou.getTableData()
      });
  });

  app.post('/pip24/declaration', function (req, res) {
    req.session['pip24-declaration'] = req.body;
    res.redirect('/pip24/completionDate');
    //unansweredQuestions#aboutYou'
  });

  /*******************
  completion date
  *******************/
  app.get('/pip24/completionDate', function (req, res) {
      res.render('pip24/completionDate', {
        data     : aboutYou.getTableData()
      });
  });

  app.post('/pip24/completionDate', function (req, res) {
    res.redirect('/pip24/conditionDetails');
  });

  /*******************
  conditionDetails
  *******************/
  app.get('/pip24/conditionDetails', function (req, res) {
      res.render('pip24/conditionDetails', {
        answers : req.session['pip24-conditionDetails'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip24/conditionDetails', function (req, res) {
    req.session['pip24-conditionDetails'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip24/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip24/unansweredQuestions#yourCondition');
    } else {
      res.redirect('/pip24/medications');
    }
  });

  /*******************
  medications
  *******************/
  app.get('/pip24/medications', function (req, res) {
      res.render('pip24/medications', {
        answers : req.session['pip24-medications'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip24/medications', function (req, res) {
    req.session['pip24-medications'] = req.body;

    if(req.body.takingMedication === 'Yes') {
       if (req.body.saveAndMenu) {
         res.redirect('/pip24/manageMedications?edit=true');
       } else {
         res.redirect('/pip24/manageMedications');
       }
     }
     else if (req.param('edit')) {
       res.redirect('/pip24/checkYourAnswers');
     }
     else if (req.body.saveAndMenu) {
       res.redirect('/pip24/unansweredQuestions#yourCondition');
     } else {
       res.redirect('/pip24/treatments');
     }
  });

  /*******************
  manageMedications
  *******************/
  app.get('/pip24/manageMedications', function (req, res) {
      res.render('pip24/manageMedications', {
        answers : req.session['pip24-manageMedications'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip24/manageMedications', function (req, res) {
    req.session['pip24-manageMedications'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip24/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip24/unansweredQuestions#yourCondition');
    } else {
      res.redirect('/pip24/treatments');
    }
  });

  /*******************
  treatments
  *******************/
  app.get('/pip24/treatments', function (req, res) {
      res.render('pip24/treatments', {
        answers : req.session['pip24-treatments'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip24/treatments', function (req, res) {
    req.session['pip24-treatments'] = req.body;

    if(req.body.atHome === 'Yes') {
       if (req.body.saveAndMenu) {
         res.redirect('/pip24/manageTreatments?edit=true');
       } else {
         res.redirect('/pip24/manageTreatments');
       }
     }
     else if (req.param('edit')) {
       res.redirect('/pip24/checkYourAnswers');
     }
     else if (req.body.saveAndMenu) {
       res.redirect('/pip24/unansweredQuestions#yourCondition');
     } else {
       res.redirect('/pip24/sideEffects');
     }

  });

  /*******************
  manageTreatments
  *******************/
  app.get('/pip24/manageTreatments', function (req, res) {
      res.render('pip24/manageTreatments', {
        answers : req.session['pip24-manageTreatments'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip24/manageTreatments', function (req, res) {
    req.session['pip24-manageTreatments'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip24/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
       res.redirect('/pip24/unansweredQuestions#yourCondition');
     } else {
       res.redirect('/pip24/sideEffects');
     }

  });

  /*******************
  sideEffects
  *******************/
  app.get('/pip24/sideEffects', function (req, res) {
      res.render('pip24/sideEffects', {
        answers : req.session['pip24-sideEffects'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip24/sideEffects', function (req, res) {
    req.session['pip24-sideEffects'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip24/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip24/unansweredQuestions#yourCondition');
    } else {
      res.redirect('/pip24/monitoringCondition');
    }
  });

  /*******************
  conditionAffects
  *******************/
  app.get('/pip24/conditionAffects', function (req, res) {
      res.render('pip24/conditionAffects', {
        answers : req.session['pip24-conditionAffects'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip24/conditionAffects', function (req, res) {
    req.session['pip24-conditionAffects'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip24/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip24/unansweredQuestions#yourCondition');
    } else {
      res.redirect('/pip24/monitoringCondition');
    }
  });

  /*******************
  monitoringCondition
  *******************/
  app.get('/pip24/monitoringCondition', function (req, res) {
      res.render('pip24/monitoringCondition', {
        answers : req.session['pip24-monitoringCondition'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip24/monitoringCondition', function (req, res) {
    req.session['pip24-monitoringCondition'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip24/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip24/unansweredQuestions#yourCondition');
    } else {
      res.redirect('/pip24/submitEvidence');
    }
  });

  /*******************
  main HCP
  *******************/
  app.get('/pip24/mainHcp', function (req, res) {
      res.render('pip24/mainHcp', {
        answers : req.session['pip24-mainHcp'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip24/mainHcp', function (req, res) {
    req.session['pip24-mainHcp'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip24/pip1Answers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip24/specialAids#yourCondition');
    } else {
      res.redirect('/pip24/pip2Start');
    }
  });


  /*******************
  healthcareprofessional
  *******************/
  app.get('/pip24/healthcareprofessional', function (req, res) {
      res.render('pip24/healthcareprofessional', {
        answers : req.session['pip24-healthcareprofessional'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip24/healthcareprofessional', function (req, res) {
    req.session['pip24-healthcareprofessional'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip24/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip24/specialAids#yourCondition');
    } else {
      res.redirect('/pip24/conditionDetails');
    }
  });

  /*******************
  Check you answers pip1
  *******************/
  app.get('/pip24/pip1Answers', function (req, res) {
      res.render('pip24/pip1Answers', {
        answers : req.session['pip24-pip1Answers'],
        'edit'  : req.param('edit'),
        data                     : aboutYou.getTableData(),
        dataCheckChange          : checkYourAnswers.getTableData(),
        helper                   : req.session['pip24-helper'],
        appointee                : req.session['pip24-appointee'],
        additionalSupport        : req.session['pip24-additionalSupport'],
        aboutYou                 : req.session['pip24-aboutYou'],
        contactDetails           : req.session['pip24-contactDetails'],
        contactPref              : req.session['pip24-contactPref'],
        currentWhereabouts       : req.session['pip24-currentWhereabouts'],
        bankDetails              : req.session['pip24-bankDetails'],
        nationality              : req.session['pip24-nationality'],
        paymentsFromAbroad       : req.session['pip24-paymentsFromAbroad'],
        mainHcp                  : req.session['pip24-mainHcp']
      });
  });

  app.post('/pip24/pip1Answers', function (req, res) {
    res.redirect('/pip24/pip2Start');
  })

  /*******************
  pip2Start
  *******************/
  app.get('/pip24/pip2Start', function (req, res) {
      res.render('pip24/pip2Start', {
        data    : aboutYou.getTableData()
      });
  });

  /*******************
  pip2Questions
  *******************/
  app.get('/pip24/pip2Questions', function (req, res) {
      res.render('pip24/pip2Questions', {
        data                     : aboutYou.getTableData(),
        dataCheckChange          : unansweredQuestions.getTableData(),
      });
  });

  app.post('/pip24/pip2Questions', function (req, res) {
    res.redirect('/pip24/healthcareprofessional');
  });

  /*******************
  submitEvidence
  *******************/
  app.get('/pip24/submitEvidence', function (req, res) {
      res.render('pip24/submitEvidence', {
        answers : req.session['pip24-submitEvidence'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip24/submitEvidence', function (req, res) {
    req.session['pip24-submitEvidence'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip24/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip24/unansweredQuestions#yourCondition');
    } else {
      res.redirect('/pip24/specialAids');
    }
  });

  /*******************
  specialAids
  *******************/
  app.get('/pip24/specialAids', function (req, res) {
      res.render('pip24/specialAids', {
        answers : req.session['pip24-specialAids'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip24/specialAids', function (req, res) {
    req.session['pip24-specialAids'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip24/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip24/unansweredQuestions#yourCondition');
    } else {
      res.redirect('/pip24/sight');
    }
  });

  /*******************
  sight
  *******************/
  app.get('/pip24/sight', function (req, res) {
      res.render('pip24/sight', {
        answers : req.session['pip24-sight'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip24/sight', function (req, res) {
    req.session['pip24-sight'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip24/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip24/unansweredQuestions#yourCondition');
    } else {
      res.redirect('/pip24/speech');
    }
  });

  /*******************
  speech
  *******************/
  app.get('/pip24/speech', function (req, res) {
      res.render('pip24/speech', {
        answers : req.session['pip24-speech'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip24/speech', function (req, res) {
    req.session['pip24-speech'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip24/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip24/unansweredQuestions#yourCondition');
    } else {
      res.redirect('/pip24/hearing');
    }
  });

  /*******************
  hearing
  *******************/
  app.get('/pip24/hearing', function (req, res) {
      res.render('pip24/hearing', {
        answers : req.session['pip24-hearing'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip24/hearing', function (req, res) {
    req.session['pip24-hearing'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip24/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip24/unansweredQuestions#yourCondition');
    } else {
      res.redirect('/pip24/gettingUp');
    }
  });

  /*******************
  gettingUp
  *******************/
  app.get('/pip24/gettingUp', function (req, res) {
      res.render('pip24/gettingUp', {
        answers : req.session['pip24-gettingUp'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip24/gettingUp', function (req, res) {
    req.session['pip24-gettingUp'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip24/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip24/unansweredQuestions#yourHome');
    } else {
      res.redirect('/pip24/toilet');
    }
  });

  /*******************
  toilet
  *******************/
  app.get('/pip24/toilet', function (req, res) {
      res.render('pip24/toilet', {
        answers : req.session['pip24-toilet'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip24/toilet', function (req, res) {
    req.session['pip24-toilet'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip24/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip24/unansweredQuestions#yourHome');
    } else {
      res.redirect('/pip24/washing');
    }
  });

  /*******************
  washing
  *******************/
  app.get('/pip24/washing', function (req, res) {
      res.render('pip24/washing', {
        answers : req.session['pip24-washing'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip24/washing', function (req, res) {
    req.session['pip24-washing'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip24/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip24/unansweredQuestions#yourHome');
    } else {
      res.redirect('/pip24/gettingDressed');
    }
  });

  /*******************
  gettingDressed
  *******************/
  app.get('/pip24/gettingDressed', function (req, res) {
      res.render('pip24/gettingDressed', {
        answers : req.session['pip24-gettingDressed'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip24/gettingDressed', function (req, res) {
    req.session['pip24-gettingDressed'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip24/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip24/unansweredQuestions#yourHome');
    } else {
      res.redirect('/pip24/hotMeal');
    }
  });

  /*******************
  hotMeal
  *******************/
  app.get('/pip24/hotMeal', function (req, res) {
      res.render('pip24/hotMeal', {
        answers : req.session['pip24-hotMeal'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip24/hotMeal', function (req, res) {
    req.session['pip24-hotMeal'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip24/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip24/unansweredQuestions#yourHome');
    } else {
      res.redirect('/pip24/eatingAndDrinking');
    }
  });

  /*******************
  eatingAndDrinking
  *******************/
  app.get('/pip24/eatingAndDrinking', function (req, res) {
      res.render('pip24/eatingAndDrinking', {
        answers : req.session['pip24-eatingAndDrinking'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip24/eatingAndDrinking', function (req, res) {
    req.session['pip24-eatingAndDrinking'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip24/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip24/unansweredQuestions#yourHome');
    } else {
      res.redirect('/pip24/gettingOut');
    }
  });

  /*******************
  gettingOut
  *******************/
  app.get('/pip24/gettingOut', function (req, res) {
      res.render('pip24/gettingOut', {
        answers : req.session['pip24-gettingOut'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip24/gettingOut', function (req, res) {
    req.session['pip24-gettingOut'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip24/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip24/unansweredQuestions#gettingOut');
    } else {
      res.redirect('/pip24/mixing');
    }
  });


  /*******************
  mixing
  *******************/
  app.get('/pip24/mixing', function (req, res) {
      res.render('pip24/mixing', {
        answers : req.session['pip24-mixing'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip24/mixing', function (req, res) {
    req.session['pip24-mixing'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip24/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip24/unansweredQuestions#gettingOut');
    } else {
      res.redirect('/pip24/localJourney');
    }
  });

  /*******************
  localJourney
  *******************/
  app.get('/pip24/localJourney', function (req, res) {
      res.render('pip24/localJourney', {
        answers : req.session['pip24-localJourney'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip24/localJourney', function (req, res) {
    req.session['pip24-localJourney'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip24/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip24/unansweredQuestions#makingSense');
    } else {
      res.redirect('/pip24/somewhereNeverBeenBefore');
    }
  });

  /*******************
  somewhereNeverBeenBefore
  *******************/
  app.get('/pip24/somewhereNeverBeenBefore', function (req, res) {
      res.render('pip24/somewhereNeverBeenBefore', {
        answers : req.session['pip24-somewhereNeverBeenBefore'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip24/somewhereNeverBeenBefore', function (req, res) {
    req.session['pip24-somewhereNeverBeenBefore'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip24/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip24/unansweredQuestions#makingSense');
    } else {
      res.redirect('/pip24/understanding');
    }
  });

  /*******************
  somewhereYouKnow
  *******************/
  app.get('/pip24/somewhereYouKnow', function (req, res) {
      res.render('pip24/somewhereYouKnow', {
        answers : req.session['pip24-somewhereYouKnow'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip24/somewhereYouKnow', function (req, res) {
    req.session['pip24-somewhereYouKnow'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip24/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip24/unansweredQuestions#makingSense');
    } else {
      res.redirect('/pip24/understanding');
    }
  });

  /*******************
  understanding
  *******************/
  app.get('/pip24/understanding', function (req, res) {
      res.render('pip24/understanding', {
        answers : req.session['pip24-understanding'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip24/understanding', function (req, res) {
    req.session['pip24-understanding'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip24/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip24/unansweredQuestions#makingSense');
    } else {
      res.redirect('/pip24/money');
    }
  });

  /*******************
  money
  *******************/
  app.get('/pip24/money', function (req, res) {
      res.render('pip24/money', {
        answers : req.session['pip24-money'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip24/money', function (req, res) {
    req.session['pip24-money'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip24/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip24/unansweredQuestions#makingSense');
    } else {
      res.redirect('/pip24/additionalInfo');
    }
  });

  /*******************
  additionalInfo
  *******************/
  app.get('/pip24/additionalInfo', function (req, res) {
      res.render('pip24/additionalInfo', {
        answers : req.session['pip24-additionalInfo'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip24/additionalInfo', function (req, res) {
    req.session['pip24-additionalInfo'] = req.body;
    res.redirect('/pip24/unansweredQuestions#additionalInfo');
  });

  /*******************
  unansweredQuestions
  *******************/
  app.get('/pip24/unansweredQuestions', function (req, res) {
      res.render('pip24/unansweredQuestions', {
        data                     : aboutYou.getTableData(),
        dataCheckChange          : unansweredQuestions.getTableData(),
        appointee                : req.session['pip24-appointee'],
        aboutYou                 : req.session['pip24-aboutYou'],
        contactDetails           : req.session['pip24-contactDetails'],
        contactPref              : req.session['pip24-contactPref'],
        bankDetails              : req.session['pip24-bankDetails'],
        currentWhereabouts       : req.session['pip24-currentWhereabouts'],
        nationality              : req.session['pip24-nationality'],
        paymentsFromAbroad       : req.session['pip24-paymentsFromAbroad'],
        conditionDetails         : req.session['pip24-conditionDetails'],
        medications              : req.session['pip24-medications'],
        manageMedications        : req.session['pip24-manageMedications'],
        treatments               : req.session['pip24-treatments'],
        manageTreatments         : req.session['pip24-manageTreatments'],
        sideEffects              : req.session['pip24-sideEffects'],
        conditionAffects         : req.session['pip24-conditionAffects'],
        monitoringCondition      : req.session['pip24-monitoringCondition'],
        healthcareprofessional   : req.session['pip24-healthcareprofessional'],
        submitEvidence           : req.session['pip24-submitEvidence'],
        specialAids              : req.session['pip24-specialAids'],
        sight                    : req.session['pip24-sight'],
        speech                   : req.session['pip24-speech'],
        hearing                  : req.session['pip24-hearing'],
        gettingUp                : req.session['pip24-gettingUp'],
        toilet                   : req.session['pip24-toilet'],
        washing                  : req.session['pip24-washing'],
        gettingDressed           : req.session['pip24-gettingDressed'],
        hotMeal                  : req.session['pip24-hotMeal'],
        eatingAndDrinking        : req.session['pip24-eatingAndDrinking'],
        gettingOut               : req.session['pip24-gettingOut'],
        mixing                   : req.session['pip24-mixing'],
        localJourney             : req.session['pip24-localJourney'],
        somewhereNeverBeenBefore : req.session['pip24-somewhereNeverBeenBefore'],
        somewhereYouKnow         : req.session['pip24-somewhereYouKnow'],
        understanding            : req.session['pip24-understanding'],
        money                    : req.session['pip24-money'],
        additionalInfo           : req.session['pip24-additionalInfo']
      });
  });

  app.post('/pip24/unansweredQuestions', function (req, res) {
    res.redirect('/pip24/checkYourAnswers');
  });

  /*******************
  checkYourAnswers
  *******************/
  app.get('/pip24/checkYourAnswers', function (req, res) {
      res.render('pip24/checkYourAnswers', {
        data                     : aboutYou.getTableData(),
        dataCheckChange          : checkYourAnswers.getTableData(),
        helper                   : req.session['pip24-helper'],
        appointee                : req.session['pip24-appointee'],
        additionalSupport        : req.session['pip24-additionalSupport'],
        aboutYou                 : req.session['pip24-aboutYou'],
        contactDetails           : req.session['pip24-contactDetails'],
        contactPref              : req.session['pip24-contactPref'],
        currentWhereabouts       : req.session['pip24-currentWhereabouts'],
        bankDetails              : req.session['pip24-bankDetails'],
        nationality              : req.session['pip24-nationality'],
        paymentsFromAbroad       : req.session['pip24-paymentsFromAbroad'],
        conditionDetails         : req.session['pip24-conditionDetails'],
        medications              : req.session['pip24-medications'],
        manageMedications        : req.session['pip24-manageMedications'],
        treatments               : req.session['pip24-treatments'],
        manageTreatments         : req.session['pip24-manageTreatments'],
        sideEffects              : req.session['pip24-sideEffects'],
        conditionAffects         : req.session['pip24-conditionAffects'],
        monitoringCondition      : req.session['pip24-monitoringCondition'],
        healthcareprofessional   : req.session['pip24-healthcareprofessional'],
        submitEvidence           : req.session['pip24-submitEvidence'],
        specialAids              : req.session['pip24-specialAids'],
        sight                    : req.session['pip24-sight'],
        speech                   : req.session['pip24-speech'],
        hearing                  : req.session['pip24-hearing'],
        gettingUp                : req.session['pip24-gettingUp'],
        toilet                   : req.session['pip24-toilet'],
        washing                  : req.session['pip24-washing'],
        gettingDressed           : req.session['pip24-gettingDressed'],
        hotMeal                  : req.session['pip24-hotMeal'],
        eatingAndDrinking        : req.session['pip24-eatingAndDrinking'],
        gettingOut               : req.session['pip24-gettingOut'],
        mixing                   : req.session['pip24-mixing'],
        localJourney             : req.session['pip24-localJourney'],
        somewhereNeverBeenBefore : req.session['pip24-somewhereNeverBeenBefore'],
        somewhereYouKnow         : req.session['pip24-somewhereYouKnow'],
        understanding            : req.session['pip24-understanding'],
        money                    : req.session['pip24-money']
      });
  });

  app.post('/pip24/checkYourAnswers', function (req, res) {
    req.session['pip24-checkYourAnswers'] = req.body;
    if (req.body.saveAndMenu) {
      res.redirect('/pip24/unansweredQuestions#aboutYou');
    } else {
      hcps = req.session['pip24-healthcareprofessional'];
      if ( !hcps || !hcps['name1']) {
        res.redirect('/pip24/submitApplication');
     } else {
        res.redirect('/pip24/hcpConsent');
      }
    }
  });

  /*******************
  bankDetails
  *******************/
  app.get('/pip24/bankDetails', function (req, res) {
      res.render('pip24/bankDetails', {
        answers : req.session['pip24-bankDetails'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip24/bankDetails', function (req, res) {
    req.session['pip24-bankDetails'] = req.body;
    if (req.body.saveAndMenu) {
      res.redirect('/pip24/unansweredQuestions#aboutYou');
    } else {
      hcps = req.session['pip24-healthcareprofessional'];
      if ( !hcps || !hcps['name1']) {
        res.redirect('/pip24/submitApplication');
     } else {
        res.redirect('/pip24/hcpConsent');
      }
    }
  });

  /*******************
  HCP Consent
  *******************/
  app.get('/pip24/hcpConsent', function (req, res) {
      res.render('pip24/hcpConsent', {
        hcps    : req.session['pip24-healthcareprofessional'],
        answers : req.session['pip24-hcpConsent'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip24/hcpConsent', function (req, res) {
    req.session['pip24-hcpConsent'] = req.body;


      res.redirect('/pip24/submitApplication');

  });

  /*******************
  declaration at end
  *******************/
  app.get('/pip24/submitApplication', function (req, res) {
      res.render('pip24/submitApplication', {
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip24/submitApplication', function (req, res) {
    res.redirect('/pip24/thankYou');
  });

  /*******************
  thankYou
  *******************/
  app.get('/pip24/thankYou', function (req, res) {
      res.render('pip24/thankYou', {
        answers : req.session['pip24-thankYou'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });


};

/* user journey

appointee
aboutYou
contactDetails
contactPref
bankDetails
nationality
currentWhereabouts
paymentsFromAbroad
declaration
completionDate

conditionDetails
medications
manageMedications
treatments
manageTreatments
sideEffects
conditionAffects
monitoringCondition
healthcareprofessional
submitEvidence
specialAids
sight
speech
hearing
gettingUp
toilet
washing
gettingDressed
hotMeal
eatingAndDrinking
gettingOut
mixing
localJourney
somewhereNeverBeenBefore
understanding
money
additionalInfo

unansweredQuestions
checkYourAnswers
hcpConsent
submitApplication
thankYou

*/
