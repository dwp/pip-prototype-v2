module.exports = function (app) {

  var styleguide           = require('./views/pip23/content/styleguide'),
      aboutYou             = require('./views/pip23/content/aboutYou'),
      unansweredQuestions  = require('./views/pip23/content/unansweredQuestions'),
      checkYourAnswers     = require('./views/pip23/content/checkYourAnswers');

  app.get('/pip23/styleguide', function (req, res) {
    res.render('pip23/styleguide', {
      answers : req.session['pip23-helper'],
      data    : styleguide.getTableData()
    });
  });

  /*******************
  reset answers
  *******************/
  app.get('/pip23/reset', function (req, res) {
      res.render('pip23/reset');
  });

  app.post('/pip23/reset', function (req, res) {
    req.session.destroy();
    res.redirect('/pip23/apply');

  });

  /*******************
  summaryMain
  *******************/
  app.get('/pip23/summaryMain', function (req, res) {
      res.render('pip23/summaryMain', {
        'show'  : req.param('show'),
        'next'  : req.param('next'),
        'back'  : req.param('back')
      });
  });

  /*******************
  postcodeCheck
  *******************/

  app.get('/pip23/postcodeCheck', function (req, res) {
      res.render('pip23/postcodeCheck', {
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip23/postcodeCheck', function (req, res) {
    req.session['pip23-postcodeCheck'] = req.body;
    if (req.body.postcode.toLowerCase() != 'ls10'   ) {
      res.redirect('/pip23/postCodeSignPost');
    } else {
      res.redirect('/pip23/srti');
    }
  });

  /*******************
  postCodeSignPost
  *******************/

  app.get('/pip23/postCodeSignPost', function (req, res) {
      res.render('pip23/postCodeSignPost', {
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip23/postCodeSignPost', function (req, res) {
    req.session['pip23-postCodeSignPost'] = req.body;
    res.redirect('/pip23/srti');
  });

  /*******************
  dob
  *******************/

  app.get('/pip23/dob', function (req, res){
    console.log(req.session['pip23-dob']);
    (req.session['pip23-dob']);
      res.render('pip23/dob', {
        answers : req.session['pip23-dob'],
        'edit'  : req.param ('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip23/dob', function (req, res) {
    req.session['pip23-dob'] = req.body;
    if (req.body.dobYear <= '1951'
    && req.body.dobMonth <= '10'
    && req.body.dobDay <= '04'
    ) {
      res.redirect('/pip23/overSixtyFive');
    }
    else if (req.body.dobYear <= '1950') {
      res.redirect('/pip23/overSixtyFive');
    }

    else if (req.body.dobYear >= '2000'
    && req.body.dobMonth >= '10'
    && req.body.dobDay >= '05') {
      res.redirect('/pip23/underSixteen');
    }
    else if (req.body.dobYear >= '2001') {
      res.redirect('/pip23/underSixteen');
    }


    else {
      res.redirect('/pip23/registration');
    }

  });

  /*******************
  dobSignPost
  *******************/

  app.get('/pip23/dobSignPost', function (req, res) {
      res.render('pip23/dobSignPost', {
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip23/dobSignPost', function (req, res) {
    req.session['pip23-dobSignPost'] = req.body;
    res.redirect('/pip23/registration');
  });

  /*******************
  overSixtyFive
  *******************/

  app.get('/pip23/overSixtyFive', function (req, res) {
      res.render('pip23/overSixtyFive', {
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip23/overSixtyFive', function (req, res) {
    req.session['pip23-overSixtyFive'] = req.body;
    res.redirect('/pip23/registration');
  });

  /*******************
  underSixteen
  *******************/

  app.get('/pip23/underSixteen', function (req, res) {
      res.render('pip23/underSixteen', {
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip23/underSixteen', function (req, res) {
    req.session['pip23-underSixteen'] = req.body;
    res.redirect('/pip23/registration');
  });

  /*******************
  srti
  *******************/
  app.get('/pip23/srti', function (req, res) {
      res.render('pip23/srti', {
        answers : req.session['pip23-srti'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip23/srti', function (req, res) {
    req.session['pip23-srti'] = req.body;
    if (req.body.srti == 'Yes') {
      res.redirect('/pip23/srtiSignPost');
    } else {
      res.redirect('/pip23/filterQuestions');
    }
  });

  /*******************
  srtiSignPost
  *******************/
  app.get('/pip23/srtiSignPost', function (req, res) {
      res.render('pip23/srtiSignPost', {
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip23/srtiSignPost', function (req, res) {
    req.session['pip23-srtiSignPost'] = req.body;
    res.redirect('/pip23/registration');
  });

  /*******************
  filterQuestions
  *******************/
  app.get('/pip23/filterQuestions', function (req, res) {
      res.render('pip23/filterQuestions', {
        answers : req.session['pip23-filterQuestions'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip23/filterQuestions', function (req, res) {
    req.session['pip23-filterQuestions'] = req.body;
    if (req.body.question1 == "Yes" || req.body.question2 == "Yes" || req.body.question3 == "No" ) {
      res.redirect('/pip23/filterSignPost');
    } else {
      res.redirect('/pip23/dob');
    }
  });

  /*******************
  filterSignPost
  *******************/

  app.get('/pip23/filterSignPost', function (req, res) {
      res.render('pip23/filterSignPost', {
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip23/filterSignPost', function (req, res) {
    req.session['pip23-filterSignPost'] = req.body;
    res.redirect('/pip23/registration');
  });

  /*******************
  registration
  *******************/
  app.get('/pip23/registration', function (req, res) {
      res.render('pip23/registration', {
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip23/registration', function (req, res) {
    req.session['pip23-registration'] = req.body;
    res.redirect('/pip23/aboutYou');
  });

  /*******************
  appointee
  *******************/
  app.get('/pip23/appointee', function (req, res) {
      res.render('pip23/appointee', {
        answers : req.session['pip23-appointee'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip23/appointee', function (req, res) {
    req.session['pip23-appointee'] = req.body;

    if(req.body.appointee === "Yes, you're applying for yourself") {
       if (req.body.saveAndMenu) {
         res.redirect('/pip23/additionalSupport?edit=true');
       } else {
         res.redirect('/pip23/additionalSupport');
       }
     }
     else if (req.param('edit')) {
       res.redirect('/pip23/pip1Answers');
     }
     else if (req.body.saveAndMenu) {
       res.redirect('/pip23/unansweredQuestions#yourCondition');
     } else {
       res.redirect('/pip23/contactDetails');
     }
  });


  /*******************
  additionalSupport
  *******************/
  app.get('/pip23/additionalSupport', function (req, res) {
      res.render('pip23/additionalSupport', {
        answers : req.session['pip23-additionalSupport'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip23/additionalSupport', function (req, res) {
    req.session['pip23-additionalSupport'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip23/pip1Answers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip23/unansweredQuestions#additionalSupport');
    } else {
      res.redirect('/pip23/contactDetails');
    }
  });



  /*******************
  aboutYou
  *******************/
  app.get('/pip23/aboutYou', function (req, res) {
      res.render('pip23/aboutYou', {
        answers : req.session['pip23-aboutYou'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip23/aboutYou', function (req, res) {
    req.session['pip23-aboutYou'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip23/pip1Answers');
    }
    else {
      res.redirect('/pip23/declaration');
    }
  });

  /*******************
  declaration at start
  *******************/
  app.get('/pip23/declaration', function (req, res) {
      res.render('pip23/declaration', {
        answers  : req.session['pip23-declaration'],
        aboutYou : req.session['pip23-aboutYou'],
        'edit'   : req.body.saveAndMenu,
        data     : aboutYou.getTableData()
      });
  });

  app.post('/pip23/declaration', function (req, res) {
    req.session['pip23-declaration'] = req.body;
    res.redirect('/pip23/whatYouNeedToDo');
    //unansweredQuestions#aboutYou'
  });

  /*******************
  whatYouNeedToDo
  *******************/
  app.get('/pip23/whatYouNeedToDo', function (req, res) {
      res.render('pip23/whatYouNeedToDo', {
        data    : aboutYou.getTableData()
      });
  });

  /*******************
  contactDetails
  *******************/
  app.get('/pip23/contactDetails', function (req, res) {
      res.render('pip23/contactDetails', {
        answers : req.session['pip23-contactDetails'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip23/contactDetails', function (req, res) {
    req.session['pip23-contactDetails'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip23/pip1Answers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip23/unansweredQuestions#aboutYou');
    } else {
      res.redirect('/pip23/contactPref');
    }
  });

  /*******************
  contactPref
  *******************/
  app.get('/pip23/contactPref', function (req, res) {
      res.render('pip23/contactPref', {
        answers : req.session['pip23-contactPref'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip23/contactPref', function (req, res) {
    req.session['pip23-contactPref'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip23/pip1Answers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip23/unansweredQuestions#aboutYou');
    }
    else {
      res.redirect('/pip23/bankDetails');
    }
  });

  /*******************
  bankDetails
  *******************/
  app.get('/pip23/bankDetails', function (req, res) {
      res.render('pip23/bankDetails', {
        answers : req.session['pip23-bankDetails'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip23/bankDetails', function (req, res) {
    req.session['pip23-bankDetails'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip23/pip1Answers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip23/unansweredQuestions#aboutYou');
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
      res.redirect('/pip23/'+page);
    }
  });

  /*******************
  bankAccount
  *******************/
  app.get('/pip23/bankAccount', function (req, res) {
      res.render('pip23/bankAccount', {
        answers : req.session['pip23-bankAccount'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip23/bankAccount', function (req, res) {
    req.session['pip23-bankAccount'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip23/pip1Answers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip23/unansweredQuestions#aboutYou');
    } else {
      res.redirect('/pip23/nationality');
    }
  });

  /*******************
  buildingSociety
  *******************/
  app.get('/pip23/buildingSociety', function (req, res) {
      res.render('pip23/buildingSociety', {
        answers : req.session['pip23-buildingSociety'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip23/buildingSociety', function (req, res) {
    req.session['pip23-buildingSociety'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip23/pip1Answers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip23/unansweredQuestions#aboutYou');
    } else {
      res.redirect('/pip23/nationality');
    }
  });

  /*******************
  creditUnion
  *******************/
  app.get('/pip23/creditUnion', function (req, res) {
      res.render('pip23/creditUnion', {
        answers : req.session['pip23-creditUnion'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip23/creditUnion', function (req, res) {
    req.session['pip23-creditUnion'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip23/pip1Answers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip23/unansweredQuestions#aboutYou');
    } else {
      res.redirect('/pip23/nationality');
    }
  });

  /*******************
  nationality
  *******************/
  app.get('/pip23/nationality', function (req, res) {
    res.render('pip23/nationality', {
      answers : req.session['pip23-nationality'],
      'edit'  : req.param('edit'),
      data    : aboutYou.getTableData()
    });
  });

  app.post('/pip23/nationality', function (req, res) {
    req.session['pip23-nationality'] = req.body;

    if(req.body.otherNationality != 'Irish'
      && req.body.otherNationality != ''
      && req.body.otherNationality != 'Scottish'
      && req.body.otherNationality != 'English'
      && req.body.otherNationality != 'British'
      && req.body.otherNationality != 'Austrian'
      && req.body.otherNationality != 'Belgian'
      && req.body.otherNationality != 'Bulgarian'
      && req.body.otherNationality != 'Cypriot'
      && req.body.otherNationality != 'Czech'
      && req.body.otherNationality != 'Danish'
      && req.body.otherNationality != 'Estonian'
      && req.body.otherNationality != 'Finnish'
      && req.body.otherNationality != 'French'
      && req.body.otherNationality != 'Icelandic'
      && req.body.otherNationality != 'Italian'
      && req.body.otherNationality != 'Hungarian'
      && req.body.otherNationality != 'Latvian'
      && req.body.otherNationality != 'German'
      && req.body.otherNationality != 'Greek'
      && req.body.otherNationality != 'Liechtensteiner'
      && req.body.otherNationality != 'Lithuanian'
      && req.body.otherNationality != 'Luxembourger'
      && req.body.otherNationality != 'Maltan'
      && req.body.otherNationality != 'Dutch'
      && req.body.otherNationality != 'Norwegian'
      && req.body.otherNationality != 'Polish'
      && req.body.otherNationality != 'Portuguese'
      && req.body.otherNationality != 'Romanian'
      && req.body.otherNationality != 'Slovakian'
      && req.body.otherNationality != 'Swiss'
      && req.body.otherNationality != 'Slovenian'
      && req.body.otherNationality != 'Spanish'
      && req.body.otherNationality != 'Swedish') {
       if (req.body.saveAndMenu) {
         res.redirect('/pip23/leaveToRemain?edit=true');
       } else {
         res.redirect('/pip23/leaveToRemain');
       }
     }

     else if(req.body.livingAbroad === 'Yes') {
        if (req.body.saveAndMenu) {
          res.redirect('/pip23/livingAbroad?edit=true');
        } else {
          res.redirect('/pip23/livingAbroad');
        }
      }

    else if (req.param('edit')) {
      res.redirect('/pip23/pip1Answers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip23/unansweredQuestions#aboutYou');
    } else {
      res.redirect('/pip23/currentWhereabouts');
    }
  });

  /*******************
  leaveToRemain
  *******************/
  app.get('/pip23/leaveToRemain', function (req, res) {
    res.render('pip23/leaveToRemain', {
      answers : req.session['pip23-leaveToRemain'],
      'edit'  : req.param('edit'),
      data    : aboutYou.getTableData()
    });
  });

  app.post('/pip23/leaveToRemain', function (req, res) {
    req.session['pip23-leaveToRemain'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip23/pip1Answers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip23/unansweredQuestions#aboutYou');
    } else {
      res.redirect('/pip23/currentWhereabouts');
    }
  });

  /*******************
  livingAbroad
  *******************/
  app.get('/pip23/livingAbroad', function (req, res) {
    res.render('pip23/livingAbroad', {
      answers : req.session['pip23-livingAbroad'],
      'edit'  : req.param('edit'),
      data    : aboutYou.getTableData()
    });
  });

  app.post('/pip23/livingAbroad', function (req, res) {
    req.session['pip23-livingAbroad'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip23/pip1Answers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip23/unansweredQuestions#aboutYou');
    } else {
      res.redirect('/pip23/currentWhereabouts');
    }
  });


  /*******************
  currentWhereabouts
  *******************/
  app.get('/pip23/currentWhereabouts', function (req, res) {
      res.render('pip23/currentWhereabouts', {
        answers : req.session['pip23-currentWhereabouts'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip23/currentWhereabouts', function (req, res) {
    req.session['pip23-currentWhereabouts'] = req.body;

    if(req.body.optionsLiving === 'a care or nursing home'
      || req.body.optionsLiving === 'sheltered housing'
      || req.body.optionsLiving === 'a residential college'
      || req.body.optionsLiving === 'a hostel') {
       if (req.body.saveAndMenu) {
         res.redirect('/pip23/careHomeFunding?edit=true');
       } else {
         res.redirect('/pip23/careHomeFunding');
       }
     }
     else if(req.body.optionsLiving === 'a care or nursing home'
       || req.body.optionsLiving === 'hospital'
       || req.body.optionsLiving === 'a hospice') {
        if (req.body.saveAndMenu) {
          res.redirect('/pip23/hospitalFunding?edit=true');
        } else {
          res.redirect('/pip23/hospitalFunding');
        }
      }
     else if (req.param('edit')) {
       res.redirect('/pip23/pip1Answers');
     }
     else if (req.body.saveAndMenu) {
       res.redirect('/pip23/unansweredQuestions#yourCondition');
     } else {
       res.redirect('/pip23/paymentsFromAbroad');
     }
  });

  /*******************
  careHomeFunding
  *******************/
  app.get('/pip23/careHomeFunding', function (req, res) {
      res.render('pip23/careHomeFunding', {
        answers : req.session['pip23-careHomeFunding'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip23/careHomeFunding', function (req, res) {
    req.session['pip23-careHomeFunding'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip23/pip1Answers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip23/unansweredQuestions#aboutYou');
    } else {
      res.redirect('/pip23/paymentsFromAbroad');
    }
  });

  /*******************
  hospitalFunding
  *******************/
  app.get('/pip23/hospitalFunding', function (req, res) {
      res.render('pip23/hospitalFunding', {
        answers : req.session['pip23-hospitalFunding'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip23/hospitalFunding', function (req, res) {
    req.session['pip23-hospitalFunding'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip23/pip1Answers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip23/unansweredQuestions#aboutYou');
    } else {
      res.redirect('/pip23/paymentsFromAbroad');
    }
  });

  /*******************
  paymentsFromAbroad
  *******************/
  app.get('/pip23/paymentsFromAbroad', function (req, res) {
      res.render('pip23/paymentsFromAbroad', {
        answers : req.session['pip23-paymentsFromAbroad'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip23/paymentsFromAbroad', function (req, res) {
    req.session['pip23-paymentsFromAbroad'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip23/pip1Answers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip23/unansweredQuestions#aboutYou');
    } else {
      res.redirect('/pip23/mainHcp');
    }
  });

  /*******************
  declaration at start
  *******************/
  app.get('/pip23/declaration', function (req, res) {
      res.render('pip23/declaration', {
        answers  : req.session['pip23-declaration'],
        aboutYou : req.session['pip23-aboutYou'],
        'edit'   : req.body.saveAndMenu,
        data     : aboutYou.getTableData()
      });
  });

  app.post('/pip23/declaration', function (req, res) {
    req.session['pip23-declaration'] = req.body;
    res.redirect('/pip23/completionDate');
    //unansweredQuestions#aboutYou'
  });

  /*******************
  completion date
  *******************/
  app.get('/pip23/completionDate', function (req, res) {
      res.render('pip23/completionDate', {
        data     : aboutYou.getTableData()
      });
  });

  app.post('/pip23/completionDate', function (req, res) {
    res.redirect('/pip23/conditionDetails');
  });

  /*******************
  conditionDetails
  *******************/
  app.get('/pip23/conditionDetails', function (req, res) {
      res.render('pip23/conditionDetails', {
        answers : req.session['pip23-conditionDetails'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip23/conditionDetails', function (req, res) {
    req.session['pip23-conditionDetails'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip23/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip23/unansweredQuestions#yourCondition');
    } else {
      res.redirect('/pip23/medications');
    }
  });

  /*******************
  medications
  *******************/
  app.get('/pip23/medications', function (req, res) {
      res.render('pip23/medications', {
        answers : req.session['pip23-medications'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip23/medications', function (req, res) {
    req.session['pip23-medications'] = req.body;

    if(req.body.takingMedication === 'Yes') {
       if (req.body.saveAndMenu) {
         res.redirect('/pip23/manageMedications?edit=true');
       } else {
         res.redirect('/pip23/manageMedications');
       }
     }
     else if (req.param('edit')) {
       res.redirect('/pip23/checkYourAnswers');
     }
     else if (req.body.saveAndMenu) {
       res.redirect('/pip23/unansweredQuestions#yourCondition');
     } else {
       res.redirect('/pip23/treatments');
     }
  });

  /*******************
  manageMedications
  *******************/
  app.get('/pip23/manageMedications', function (req, res) {
      res.render('pip23/manageMedications', {
        answers : req.session['pip23-manageMedications'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip23/manageMedications', function (req, res) {
    req.session['pip23-manageMedications'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip23/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip23/unansweredQuestions#yourCondition');
    } else {
      res.redirect('/pip23/treatments');
    }
  });

  /*******************
  treatments
  *******************/
  app.get('/pip23/treatments', function (req, res) {
      res.render('pip23/treatments', {
        answers : req.session['pip23-treatments'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip23/treatments', function (req, res) {
    req.session['pip23-treatments'] = req.body;

    if(req.body.atHome === 'Yes') {
       if (req.body.saveAndMenu) {
         res.redirect('/pip23/manageTreatments?edit=true');
       } else {
         res.redirect('/pip23/manageTreatments');
       }
     }
     else if (req.param('edit')) {
       res.redirect('/pip23/checkYourAnswers');
     }
     else if (req.body.saveAndMenu) {
       res.redirect('/pip23/unansweredQuestions#yourCondition');
     } else {
       res.redirect('/pip23/sideEffects');
     }

  });

  /*******************
  manageTreatments
  *******************/
  app.get('/pip23/manageTreatments', function (req, res) {
      res.render('pip23/manageTreatments', {
        answers : req.session['pip23-manageTreatments'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip23/manageTreatments', function (req, res) {
    req.session['pip23-manageTreatments'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip23/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
       res.redirect('/pip23/unansweredQuestions#yourCondition');
     } else {
       res.redirect('/pip23/sideEffects');
     }

  });

  /*******************
  sideEffects
  *******************/
  app.get('/pip23/sideEffects', function (req, res) {
      res.render('pip23/sideEffects', {
        answers : req.session['pip23-sideEffects'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip23/sideEffects', function (req, res) {
    req.session['pip23-sideEffects'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip23/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip23/unansweredQuestions#yourCondition');
    } else {
      res.redirect('/pip23/conditionAffects');
    }
  });

  /*******************
  conditionAffects
  *******************/
  app.get('/pip23/conditionAffects', function (req, res) {
      res.render('pip23/conditionAffects', {
        answers : req.session['pip23-conditionAffects'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip23/conditionAffects', function (req, res) {
    req.session['pip23-conditionAffects'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip23/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip23/unansweredQuestions#yourCondition');
    } else {
      res.redirect('/pip23/monitoringCondition');
    }
  });

  /*******************
  monitoringCondition
  *******************/
  app.get('/pip23/monitoringCondition', function (req, res) {
      res.render('pip23/monitoringCondition', {
        answers : req.session['pip23-monitoringCondition'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip23/monitoringCondition', function (req, res) {
    req.session['pip23-monitoringCondition'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip23/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip23/unansweredQuestions#yourCondition');
    } else {
      res.redirect('/pip23/submitEvidence');
    }
  });

  /*******************
  main HCP
  *******************/
  app.get('/pip23/mainHcp', function (req, res) {
      res.render('pip23/mainHcp', {
        answers : req.session['pip23-mainHcp'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip23/mainHcp', function (req, res) {
    req.session['pip23-mainHcp'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip23/pip1Answers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip23/specialAids#yourCondition');
    } else {
      res.redirect('/pip23/pip1Answers');
    }
  });


  /*******************
  healthcareprofessional
  *******************/
  app.get('/pip23/healthcareprofessional', function (req, res) {
      res.render('pip23/healthcareprofessional', {
        answers : req.session['pip23-healthcareprofessional'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip23/healthcareprofessional', function (req, res) {
    req.session['pip23-healthcareprofessional'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip23/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip23/specialAids#yourCondition');
    } else {
      res.redirect('/pip23/conditionDetails');
    }
  });

  /*******************
  Check you answers pip1
  *******************/
  app.get('/pip23/pip1Answers', function (req, res) {
      res.render('pip23/pip1Answers', {
        answers : req.session['pip23-pip1Answers'],
        'edit'  : req.param('edit'),
        data                     : aboutYou.getTableData(),
        dataCheckChange          : checkYourAnswers.getTableData(),
        helper                   : req.session['pip23-helper'],
        appointee                : req.session['pip23-appointee'],
        additionalSupport        : req.session['pip23-additionalSupport'],
        aboutYou                 : req.session['pip23-aboutYou'],
        contactDetails           : req.session['pip23-contactDetails'],
        contactPref              : req.session['pip23-contactPref'],
        currentWhereabouts       : req.session['pip23-currentWhereabouts'],
        bankDetails              : req.session['pip23-bankDetails'],
        nationality              : req.session['pip23-nationality'],
        paymentsFromAbroad       : req.session['pip23-paymentsFromAbroad'],
        mainHcp                  : req.session['pip23-mainHcp']
      });
  });

  app.post('/pip23/pip1Answers', function (req, res) {
    res.redirect('/pip23/pip2Start');
  })

  /*******************
  pip2Start
  *******************/
  app.get('/pip23/pip2Start', function (req, res) {
      res.render('pip23/pip2Start', {
        data    : aboutYou.getTableData()
      });
  });

  /*******************
  pip2Questions
  *******************/
  app.get('/pip23/pip2Questions', function (req, res) {
      res.render('pip23/pip2Questions', {
        data                     : aboutYou.getTableData(),
        dataCheckChange          : unansweredQuestions.getTableData(),
      });
  });

  app.post('/pip23/pip2Questions', function (req, res) {
    res.redirect('/pip23/healthcareprofessional');
  });

  /*******************
  submitEvidence
  *******************/
  app.get('/pip23/submitEvidence', function (req, res) {
      res.render('pip23/submitEvidence', {
        answers : req.session['pip23-submitEvidence'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip23/submitEvidence', function (req, res) {
    req.session['pip23-submitEvidence'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip23/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip23/unansweredQuestions#yourCondition');
    } else {
      res.redirect('/pip23/specialAids');
    }
  });

  /*******************
  specialAids
  *******************/
  app.get('/pip23/specialAids', function (req, res) {
      res.render('pip23/specialAids', {
        answers : req.session['pip23-specialAids'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip23/specialAids', function (req, res) {
    req.session['pip23-specialAids'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip23/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip23/unansweredQuestions#yourCondition');
    } else {
      res.redirect('/pip23/sight');
    }
  });

  /*******************
  sight
  *******************/
  app.get('/pip23/sight', function (req, res) {
      res.render('pip23/sight', {
        answers : req.session['pip23-sight'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip23/sight', function (req, res) {
    req.session['pip23-sight'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip23/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip23/unansweredQuestions#yourCondition');
    } else {
      res.redirect('/pip23/speech');
    }
  });

  /*******************
  speech
  *******************/
  app.get('/pip23/speech', function (req, res) {
      res.render('pip23/speech', {
        answers : req.session['pip23-speech'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip23/speech', function (req, res) {
    req.session['pip23-speech'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip23/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip23/unansweredQuestions#yourCondition');
    } else {
      res.redirect('/pip23/hearing');
    }
  });

  /*******************
  hearing
  *******************/
  app.get('/pip23/hearing', function (req, res) {
      res.render('pip23/hearing', {
        answers : req.session['pip23-hearing'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip23/hearing', function (req, res) {
    req.session['pip23-hearing'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip23/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip23/unansweredQuestions#yourCondition');
    } else {
      res.redirect('/pip23/gettingUp');
    }
  });

  /*******************
  gettingUp
  *******************/
  app.get('/pip23/gettingUp', function (req, res) {
      res.render('pip23/gettingUp', {
        answers : req.session['pip23-gettingUp'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip23/gettingUp', function (req, res) {
    req.session['pip23-gettingUp'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip23/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip23/unansweredQuestions#yourHome');
    } else {
      res.redirect('/pip23/toilet');
    }
  });

  /*******************
  toilet
  *******************/
  app.get('/pip23/toilet', function (req, res) {
      res.render('pip23/toilet', {
        answers : req.session['pip23-toilet'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip23/toilet', function (req, res) {
    req.session['pip23-toilet'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip23/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip23/unansweredQuestions#yourHome');
    } else {
      res.redirect('/pip23/washing');
    }
  });

  /*******************
  washing
  *******************/
  app.get('/pip23/washing', function (req, res) {
      res.render('pip23/washing', {
        answers : req.session['pip23-washing'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip23/washing', function (req, res) {
    req.session['pip23-washing'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip23/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip23/unansweredQuestions#yourHome');
    } else {
      res.redirect('/pip23/gettingDressed');
    }
  });

  /*******************
  gettingDressed
  *******************/
  app.get('/pip23/gettingDressed', function (req, res) {
      res.render('pip23/gettingDressed', {
        answers : req.session['pip23-gettingDressed'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip23/gettingDressed', function (req, res) {
    req.session['pip23-gettingDressed'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip23/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip23/unansweredQuestions#yourHome');
    } else {
      res.redirect('/pip23/hotMeal');
    }
  });

  /*******************
  hotMeal
  *******************/
  app.get('/pip23/hotMeal', function (req, res) {
      res.render('pip23/hotMeal', {
        answers : req.session['pip23-hotMeal'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip23/hotMeal', function (req, res) {
    req.session['pip23-hotMeal'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip23/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip23/unansweredQuestions#yourHome');
    } else {
      res.redirect('/pip23/eatingAndDrinking');
    }
  });

  /*******************
  eatingAndDrinking
  *******************/
  app.get('/pip23/eatingAndDrinking', function (req, res) {
      res.render('pip23/eatingAndDrinking', {
        answers : req.session['pip23-eatingAndDrinking'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip23/eatingAndDrinking', function (req, res) {
    req.session['pip23-eatingAndDrinking'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip23/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip23/unansweredQuestions#yourHome');
    } else {
      res.redirect('/pip23/gettingOut');
    }
  });

  /*******************
  gettingOut
  *******************/
  app.get('/pip23/gettingOut', function (req, res) {
      res.render('pip23/gettingOut', {
        answers : req.session['pip23-gettingOut'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip23/gettingOut', function (req, res) {
    req.session['pip23-gettingOut'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip23/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip23/unansweredQuestions#gettingOut');
    } else {
      res.redirect('/pip23/mixing');
    }
  });


  /*******************
  mixing
  *******************/
  app.get('/pip23/mixing', function (req, res) {
      res.render('pip23/mixing', {
        answers : req.session['pip23-mixing'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip23/mixing', function (req, res) {
    req.session['pip23-mixing'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip23/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip23/unansweredQuestions#gettingOut');
    } else {
      res.redirect('/pip23/localJourney');
    }
  });

  /*******************
  localJourney
  *******************/
  app.get('/pip23/localJourney', function (req, res) {
      res.render('pip23/localJourney', {
        answers : req.session['pip23-localJourney'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip23/localJourney', function (req, res) {
    req.session['pip23-localJourney'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip23/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip23/unansweredQuestions#makingSense');
    } else {
      res.redirect('/pip23/somewhereNeverBeenBefore');
    }
  });

  /*******************
  somewhereNeverBeenBefore
  *******************/
  app.get('/pip23/somewhereNeverBeenBefore', function (req, res) {
      res.render('pip23/somewhereNeverBeenBefore', {
        answers : req.session['pip23-somewhereNeverBeenBefore'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip23/somewhereNeverBeenBefore', function (req, res) {
    req.session['pip23-somewhereNeverBeenBefore'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip23/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip23/unansweredQuestions#makingSense');
    } else {
      res.redirect('/pip23/understanding');
    }
  });

  /*******************
  somewhereYouKnow
  *******************/
  app.get('/pip23/somewhereYouKnow', function (req, res) {
      res.render('pip23/somewhereYouKnow', {
        answers : req.session['pip23-somewhereYouKnow'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip23/somewhereYouKnow', function (req, res) {
    req.session['pip23-somewhereYouKnow'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip23/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip23/unansweredQuestions#makingSense');
    } else {
      res.redirect('/pip23/understanding');
    }
  });

  /*******************
  understanding
  *******************/
  app.get('/pip23/understanding', function (req, res) {
      res.render('pip23/understanding', {
        answers : req.session['pip23-understanding'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip23/understanding', function (req, res) {
    req.session['pip23-understanding'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip23/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip23/unansweredQuestions#makingSense');
    } else {
      res.redirect('/pip23/money');
    }
  });

  /*******************
  money
  *******************/
  app.get('/pip23/money', function (req, res) {
      res.render('pip23/money', {
        answers : req.session['pip23-money'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip23/money', function (req, res) {
    req.session['pip23-money'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip23/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip23/unansweredQuestions#makingSense');
    } else {
      res.redirect('/pip23/additionalInfo');
    }
  });

  /*******************
  additionalInfo
  *******************/
  app.get('/pip23/additionalInfo', function (req, res) {
      res.render('pip23/additionalInfo', {
        answers : req.session['pip23-additionalInfo'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip23/additionalInfo', function (req, res) {
    req.session['pip23-additionalInfo'] = req.body;
    res.redirect('/pip23/unansweredQuestions#additionalInfo');
  });

  /*******************
  unansweredQuestions
  *******************/
  app.get('/pip23/unansweredQuestions', function (req, res) {
      res.render('pip23/unansweredQuestions', {
        data                     : aboutYou.getTableData(),
        dataCheckChange          : unansweredQuestions.getTableData(),
        appointee                : req.session['pip23-appointee'],
        aboutYou                 : req.session['pip23-aboutYou'],
        contactDetails           : req.session['pip23-contactDetails'],
        contactPref              : req.session['pip23-contactPref'],
        bankDetails              : req.session['pip23-bankDetails'],
        currentWhereabouts       : req.session['pip23-currentWhereabouts'],
        nationality              : req.session['pip23-nationality'],
        paymentsFromAbroad       : req.session['pip23-paymentsFromAbroad'],
        conditionDetails         : req.session['pip23-conditionDetails'],
        medications              : req.session['pip23-medications'],
        manageMedications        : req.session['pip23-manageMedications'],
        treatments               : req.session['pip23-treatments'],
        manageTreatments         : req.session['pip23-manageTreatments'],
        sideEffects              : req.session['pip23-sideEffects'],
        conditionAffects         : req.session['pip23-conditionAffects'],
        monitoringCondition      : req.session['pip23-monitoringCondition'],
        healthcareprofessional   : req.session['pip23-healthcareprofessional'],
        submitEvidence           : req.session['pip23-submitEvidence'],
        specialAids              : req.session['pip23-specialAids'],
        sight                    : req.session['pip23-sight'],
        speech                   : req.session['pip23-speech'],
        hearing                  : req.session['pip23-hearing'],
        gettingUp                : req.session['pip23-gettingUp'],
        toilet                   : req.session['pip23-toilet'],
        washing                  : req.session['pip23-washing'],
        gettingDressed           : req.session['pip23-gettingDressed'],
        hotMeal                  : req.session['pip23-hotMeal'],
        eatingAndDrinking        : req.session['pip23-eatingAndDrinking'],
        gettingOut               : req.session['pip23-gettingOut'],
        mixing                   : req.session['pip23-mixing'],
        localJourney             : req.session['pip23-localJourney'],
        somewhereNeverBeenBefore : req.session['pip23-somewhereNeverBeenBefore'],
        somewhereYouKnow         : req.session['pip23-somewhereYouKnow'],
        understanding            : req.session['pip23-understanding'],
        money                    : req.session['pip23-money'],
        additionalInfo           : req.session['pip23-additionalInfo']
      });
  });

  app.post('/pip23/unansweredQuestions', function (req, res) {
    res.redirect('/pip23/checkYourAnswers');
  });

  /*******************
  checkYourAnswers
  *******************/
  app.get('/pip23/checkYourAnswers', function (req, res) {
      res.render('pip23/checkYourAnswers', {
        data                     : aboutYou.getTableData(),
        dataCheckChange          : checkYourAnswers.getTableData(),
        helper                   : req.session['pip23-helper'],
        appointee                : req.session['pip23-appointee'],
        additionalSupport        : req.session['pip23-additionalSupport'],
        aboutYou                 : req.session['pip23-aboutYou'],
        contactDetails           : req.session['pip23-contactDetails'],
        contactPref              : req.session['pip23-contactPref'],
        currentWhereabouts       : req.session['pip23-currentWhereabouts'],
        bankDetails              : req.session['pip23-bankDetails'],
        nationality              : req.session['pip23-nationality'],
        paymentsFromAbroad       : req.session['pip23-paymentsFromAbroad'],
        conditionDetails         : req.session['pip23-conditionDetails'],
        medications              : req.session['pip23-medications'],
        manageMedications        : req.session['pip23-manageMedications'],
        treatments               : req.session['pip23-treatments'],
        manageTreatments         : req.session['pip23-manageTreatments'],
        sideEffects              : req.session['pip23-sideEffects'],
        conditionAffects         : req.session['pip23-conditionAffects'],
        monitoringCondition      : req.session['pip23-monitoringCondition'],
        healthcareprofessional   : req.session['pip23-healthcareprofessional'],
        submitEvidence           : req.session['pip23-submitEvidence'],
        specialAids              : req.session['pip23-specialAids'],
        sight                    : req.session['pip23-sight'],
        speech                   : req.session['pip23-speech'],
        hearing                  : req.session['pip23-hearing'],
        gettingUp                : req.session['pip23-gettingUp'],
        toilet                   : req.session['pip23-toilet'],
        washing                  : req.session['pip23-washing'],
        gettingDressed           : req.session['pip23-gettingDressed'],
        hotMeal                  : req.session['pip23-hotMeal'],
        eatingAndDrinking        : req.session['pip23-eatingAndDrinking'],
        gettingOut               : req.session['pip23-gettingOut'],
        mixing                   : req.session['pip23-mixing'],
        localJourney             : req.session['pip23-localJourney'],
        somewhereNeverBeenBefore : req.session['pip23-somewhereNeverBeenBefore'],
        somewhereYouKnow         : req.session['pip23-somewhereYouKnow'],
        understanding            : req.session['pip23-understanding'],
        money                    : req.session['pip23-money']
      });
  });

  app.post('/pip23/checkYourAnswers', function (req, res) {
    req.session['pip23-checkYourAnswers'] = req.body;
    if (req.body.saveAndMenu) {
      res.redirect('/pip23/unansweredQuestions#aboutYou');
    } else {
      hcps = req.session['pip23-healthcareprofessional'];
      if ( !hcps || !hcps['name1']) {
        res.redirect('/pip23/submitApplication');
     } else {
        res.redirect('/pip23/hcpConsent');
      }
    }
  });

  /*******************
  bankDetails
  *******************/
  app.get('/pip23/bankDetails', function (req, res) {
      res.render('pip23/bankDetails', {
        answers : req.session['pip23-bankDetails'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip23/bankDetails', function (req, res) {
    req.session['pip23-bankDetails'] = req.body;
    if (req.body.saveAndMenu) {
      res.redirect('/pip23/unansweredQuestions#aboutYou');
    } else {
      hcps = req.session['pip23-healthcareprofessional'];
      if ( !hcps || !hcps['name1']) {
        res.redirect('/pip23/submitApplication');
     } else {
        res.redirect('/pip23/hcpConsent');
      }
    }
  });

  /*******************
  HCP Consent
  *******************/
  app.get('/pip23/hcpConsent', function (req, res) {
      res.render('pip23/hcpConsent', {
        hcps    : req.session['pip23-healthcareprofessional'],
        answers : req.session['pip23-hcpConsent'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip23/hcpConsent', function (req, res) {
    req.session['pip23-hcpConsent'] = req.body;


      res.redirect('/pip23/submitApplication');

  });

  /*******************
  declaration at end
  *******************/
  app.get('/pip23/submitApplication', function (req, res) {
      res.render('pip23/submitApplication', {
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip23/submitApplication', function (req, res) {
    res.redirect('/pip23/thankYou');
  });

  /*******************
  thankYou
  *******************/
  app.get('/pip23/thankYou', function (req, res) {
      res.render('pip23/thankYou', {
        answers : req.session['pip23-thankYou'],
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
