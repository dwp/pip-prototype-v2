module.exports = function (app) {

  var styleguide           = require('./views/pip22/content/styleguide'),
      aboutYou             = require('./views/pip22/content/aboutYou'),
      unansweredQuestions  = require('./views/pip22/content/unansweredQuestions'),
      checkYourAnswers     = require('./views/pip22/content/checkYourAnswers');

  app.get('/pip22/styleguide', function (req, res) {
    res.render('pip22/styleguide', {
      answers : req.session['pip22-helper'],
      data    : styleguide.getTableData()
    });
  });

  /*******************
  reset answers
  *******************/
  app.get('/pip22/reset', function (req, res) {
      res.render('pip22/reset');
  });

  app.post('/pip22/reset', function (req, res) {
    req.session.destroy();
    res.redirect('/pip22/apply');

  });

  /*******************
  summaryMain
  *******************/
  app.get('/pip22/summaryMain', function (req, res) {
      res.render('pip22/summaryMain', {
        'show'  : req.param('show'),
        'next'  : req.param('next'),
        'back'  : req.param('back')
      });
  });

  /*******************
  postcodeCheck
  *******************/

  app.get('/pip22/postcodeCheck', function (req, res) {
      res.render('pip22/postcodeCheck', {
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip22/postcodeCheck', function (req, res) {
    req.session['pip22-postcodeCheck'] = req.body;
    if (req.body.postcode != 'ls10' && req.body.postcode != 'LS10'  ) {
      res.redirect('/pip22/postCodeSignPost');
    } else {
      res.redirect('/pip22/srti');
    }
  });

  /*******************
  postCodeSignPost
  *******************/

  app.get('/pip22/postCodeSignPost', function (req, res) {
      res.render('pip22/postCodeSignPost', {
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip22/postCodeSignPost', function (req, res) {
    req.session['pip22-postCodeSignPost'] = req.body;
    res.redirect('/pip22/registration');
  });

  /*******************
  dob
  *******************/

  app.get('/pip22/dob', function (req, res) {
      res.render('pip22/dob', {
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip22/dob', function (req, res) {
    req.session['pip22-dob'] = req.body;
    if (req.body.dob == 'No') {
      res.redirect('/pip22/dobSignPost');
    } else {
      res.redirect('/pip22/registration');
    }
  });

  /*******************
  dobSignPost
  *******************/

  app.get('/pip22/dobSignPost', function (req, res) {
      res.render('pip22/dobSignPost', {
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip22/dobSignPost', function (req, res) {
    req.session['pip22-dobSignPost'] = req.body;
    res.redirect('/pip22/registration');
  });

  /*******************
  srti
  *******************/
  app.get('/pip22/srti', function (req, res) {
      res.render('pip22/srti', {
        answers : req.session['pip22-srti'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip22/srti', function (req, res) {
    req.session['pip22-srti'] = req.body;
    if (req.body.srti == 'Yes') {
      res.redirect('/pip22/srtiSignPost');
    } else {
      res.redirect('/pip22/filterQuestions');
    }
  });

  /*******************
  srtiSignPost
  *******************/
  app.get('/pip22/srtiSignPost', function (req, res) {
      res.render('pip22/srtiSignPost', {
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip22/srtiSignPost', function (req, res) {
    req.session['pip22-srtiSignPost'] = req.body;
    res.redirect('/pip22/registration');
  });

  /*******************
  filterQuestions
  *******************/
  app.get('/pip22/filterQuestions', function (req, res) {
      res.render('pip22/filterQuestions', {
        answers : req.session['pip22-filterQuestions'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip22/filterQuestions', function (req, res) {
    req.session['pip22-filterQuestions'] = req.body;
    if (req.body.question1 == "Yes" || req.body.question2 == "Yes" || req.body.question3 == "No" ) {
      res.redirect('/pip22/filterSignPost');
    } else {
      res.redirect('/pip22/dob');
    }
  });

  /*******************
  filterSignPost
  *******************/

  app.get('/pip22/filterSignPost', function (req, res) {
      res.render('pip22/filterSignPost', {
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip22/filterSignPost', function (req, res) {
    req.session['pip22-filterSignPost'] = req.body;
    res.redirect('/pip22/registration');
  });

  /*******************
  registration
  *******************/
  app.get('/pip22/registration', function (req, res) {
      res.render('pip22/registration', {
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip22/registration', function (req, res) {
    req.session['pip22-registration'] = req.body;
    res.redirect('/pip22/appointee');
  });

  /*******************
  appointee
  *******************/
  app.get('/pip22/appointee', function (req, res) {
      res.render('pip22/appointee', {
        answers : req.session['pip22-appointee'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip22/appointee', function (req, res) {
    req.session['pip22-appointee'] = req.body;

    if(req.body.appointee === 'Yes, I am applying for myself') {
       if (req.body.saveAndMenu) {
         res.redirect('/pip22/additionalSupport?edit=true');
       } else {
         res.redirect('/pip22/additionalSupport');
       }
     }
     else if (req.param('edit')) {
       res.redirect('/pip22/checkYourAnswers');
     }
     else if (req.body.saveAndMenu) {
       res.redirect('/pip22/unansweredQuestions#yourCondition');
     } else {
       res.redirect('/pip22/aboutYou');
     }
  });

  /*******************
  additionalSupport
  *******************/
  app.get('/pip22/additionalSupport', function (req, res) {
      res.render('pip22/additionalSupport', {
        answers : req.session['pip22-additionalSupport'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip22/additionalSupport', function (req, res) {
    req.session['pip22-additionalSupport'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip22/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip22/unansweredQuestions#additionalSupport');
    } else {
      res.redirect('/pip22/aboutYou');
    }
  });



  /*******************
  aboutYou
  *******************/
  app.get('/pip22/aboutYou', function (req, res) {
      res.render('pip22/aboutYou', {
        answers : req.session['pip22-aboutYou'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip22/aboutYou', function (req, res) {
    req.session['pip22-aboutYou'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip22/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip22/unansweredQuestions#aboutYou');
    } else {
      res.redirect('/pip22/contactDetails');
    }
  });

  /*******************
  contactDetails
  *******************/
  app.get('/pip22/contactDetails', function (req, res) {
      res.render('pip22/contactDetails', {
        answers : req.session['pip22-contactDetails'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip22/contactDetails', function (req, res) {
    req.session['pip22-contactDetails'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip22/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip22/unansweredQuestions#aboutYou');
    } else {
      res.redirect('/pip22/contactPref');
    }
  });

  /*******************
  contactPref
  *******************/
  app.get('/pip22/contactPref', function (req, res) {
      res.render('pip22/contactPref', {
        answers : req.session['pip22-contactPref'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip22/contactPref', function (req, res) {
    req.session['pip22-contactPref'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip22/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip22/unansweredQuestions#aboutYou');
    }
    else {
      res.redirect('/pip22/bankDetails');
    }
  });

  /*******************
  bankDetails
  *******************/
  app.get('/pip22/bankDetails', function (req, res) {
      res.render('pip22/bankDetails', {
        answers : req.session['pip22-bankDetails'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip22/bankDetails', function (req, res) {
    req.session['pip22-bankDetails'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip22/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip22/unansweredQuestions#aboutYou');
    } else {
      switch (req.body.bank) {
        case "Bank account":
          page = 'bankAccount';
          break;
        case "Building society account":
          page = 'buildingSociety';
          break;
        case "Credit Union account":
          page = 'creditUnion';
          break;
        default:
          page = "nationality";
      }
      res.redirect('/pip22/'+page);
    }
  });

  /*******************
  bankAccount
  *******************/
  app.get('/pip22/bankAccount', function (req, res) {
      res.render('pip22/bankAccount', {
        answers : req.session['pip22-bankAccount'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip22/bankAccount', function (req, res) {
    req.session['pip22-bankAccount'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip22/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip22/unansweredQuestions#aboutYou');
    } else {
      res.redirect('/pip22/nationality');
    }
  });

  /*******************
  buildingSociety
  *******************/
  app.get('/pip22/buildingSociety', function (req, res) {
      res.render('pip22/buildingSociety', {
        answers : req.session['pip22-buildingSociety'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip22/buildingSociety', function (req, res) {
    req.session['pip22-buildingSociety'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip22/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip22/unansweredQuestions#aboutYou');
    } else {
      res.redirect('/pip22/nationality');
    }
  });

  /*******************
  creditUnion
  *******************/
  app.get('/pip22/creditUnion', function (req, res) {
      res.render('pip22/creditUnion', {
        answers : req.session['pip22-creditUnion'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip22/creditUnion', function (req, res) {
    req.session['pip22-creditUnion'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip22/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip22/unansweredQuestions#aboutYou');
    } else {
      res.redirect('/pip22/nationality');
    }
  });

  /*******************
  nationality
  *******************/
  app.get('/pip22/nationality', function (req, res) {
    res.render('pip22/nationality', {
      answers : req.session['pip22-nationality'],
      'edit'  : req.param('edit'),
      data    : aboutYou.getTableData()
    });
  });

  app.post('/pip22/nationality', function (req, res) {
    req.session['pip22-nationality'] = req.body;

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
         res.redirect('/pip22/leaveToRemain?edit=true');
       } else {
         res.redirect('/pip22/leaveToRemain');
       }
     }

     else if(req.body.livingAbroad === 'Yes') {
        if (req.body.saveAndMenu) {
          res.redirect('/pip22/livingAbroad?edit=true');
        } else {
          res.redirect('/pip22/livingAbroad');
        }
      }

    else if (req.param('edit')) {
      res.redirect('/pip22/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip22/unansweredQuestions#aboutYou');
    } else {
      res.redirect('/pip22/currentWhereabouts');
    }
  });

  /*******************
  leaveToRemain
  *******************/
  app.get('/pip22/leaveToRemain', function (req, res) {
    res.render('pip22/leaveToRemain', {
      answers : req.session['pip22-leaveToRemain'],
      'edit'  : req.param('edit'),
      data    : aboutYou.getTableData()
    });
  });

  app.post('/pip22/leaveToRemain', function (req, res) {
    req.session['pip22-leaveToRemain'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip22/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip22/unansweredQuestions#aboutYou');
    } else {
      res.redirect('/pip22/currentWhereabouts');
    }
  });

  /*******************
  livingAbroad
  *******************/
  app.get('/pip22/livingAbroad', function (req, res) {
    res.render('pip22/livingAbroad', {
      answers : req.session['pip22-livingAbroad'],
      'edit'  : req.param('edit'),
      data    : aboutYou.getTableData()
    });
  });

  app.post('/pip22/livingAbroad', function (req, res) {
    req.session['pip22-livingAbroad'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip22/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip22/unansweredQuestions#aboutYou');
    } else {
      res.redirect('/pip22/currentWhereabouts');
    }
  });


  /*******************
  currentWhereabouts
  *******************/
  app.get('/pip22/currentWhereabouts', function (req, res) {
      res.render('pip22/currentWhereabouts', {
        answers : req.session['pip22-currentWhereabouts'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip22/currentWhereabouts', function (req, res) {
    req.session['pip22-currentWhereabouts'] = req.body;

    if(req.body.currentLiving === 'a care or nursing home'
      || req.body.currentLiving === 'sheltered housing'
      || req.body.currentLiving === 'a residential college'
      || req.body.currentLiving === 'a hostel') {
       if (req.body.saveAndMenu) {
         res.redirect('/pip22/careHomeFunding?edit=true');
       } else {
         res.redirect('/pip22/careHomeFunding');
       }
     }
     else if(req.body.currentLiving === 'a care or nursing home'
       || req.body.currentLiving === 'hospital'
       || req.body.currentLiving === 'a hospice') {
        if (req.body.saveAndMenu) {
          res.redirect('/pip22/hospitalFunding?edit=true');
        } else {
          res.redirect('/pip22/hospitalFunding');
        }
      }
     else if (req.param('edit')) {
       res.redirect('/pip22/checkYourAnswers');
     }
     else if (req.body.saveAndMenu) {
       res.redirect('/pip22/unansweredQuestions#yourCondition');
     } else {
       res.redirect('/pip22/paymentsFromAbroad');
     }
  });

  /*******************
  careHomeFunding
  *******************/
  app.get('/pip22/careHomeFunding', function (req, res) {
      res.render('pip22/careHomeFunding', {
        answers : req.session['pip22-careHomeFunding'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip22/careHomeFunding', function (req, res) {
    req.session['pip22-careHomeFunding'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip22/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip22/unansweredQuestions#aboutYou');
    } else {
      res.redirect('/pip22/paymentsFromAbroad');
    }
  });

  /*******************
  hospitalFunding
  *******************/
  app.get('/pip22/hospitalFunding', function (req, res) {
      res.render('pip22/hospitalFunding', {
        answers : req.session['pip22-hospitalFunding'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip22/hospitalFunding', function (req, res) {
    req.session['pip22-hospitalFunding'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip22/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip22/unansweredQuestions#aboutYou');
    } else {
      res.redirect('/pip22/paymentsFromAbroad');
    }
  });

  /*******************
  paymentsFromAbroad
  *******************/
  app.get('/pip22/paymentsFromAbroad', function (req, res) {
      res.render('pip22/paymentsFromAbroad', {
        answers : req.session['pip22-paymentsFromAbroad'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip22/paymentsFromAbroad', function (req, res) {
    req.session['pip22-paymentsFromAbroad'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip22/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip22/unansweredQuestions#aboutYou');
    } else {
      res.redirect('/pip22/declaration');
    }
  });

  /*******************
  declaration at start
  *******************/
  app.get('/pip22/declaration', function (req, res) {
      res.render('pip22/declaration', {
        answers  : req.session['pip22-declaration'],
        aboutYou : req.session['pip22-aboutYou'],
        'edit'   : req.body.saveAndMenu,
        data     : aboutYou.getTableData()
      });
  });

  app.post('/pip22/declaration', function (req, res) {
    req.session['pip22-declaration'] = req.body;
    res.redirect('/pip22/completionDate');
    //unansweredQuestions#aboutYou'
  });

  /*******************
  completion date
  *******************/
  app.get('/pip22/completionDate', function (req, res) {
      res.render('pip22/completionDate', {
        data     : aboutYou.getTableData()
      });
  });

  app.post('/pip22/completionDate', function (req, res) {
    res.redirect('/pip22/conditionDetails');
  });

  /*******************
  conditionDetails
  *******************/
  app.get('/pip22/conditionDetails', function (req, res) {
      res.render('pip22/conditionDetails', {
        answers : req.session['pip22-conditionDetails'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip22/conditionDetails', function (req, res) {
    req.session['pip22-conditionDetails'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip22/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip22/unansweredQuestions#yourCondition');
    } else {
      res.redirect('/pip22/medications');
    }
  });

  /*******************
  medications
  *******************/
  app.get('/pip22/medications', function (req, res) {
      res.render('pip22/medications', {
        answers : req.session['pip22-medications'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip22/medications', function (req, res) {
    req.session['pip22-medications'] = req.body;

    if(req.body.takingMedication === 'Yes') {
       if (req.body.saveAndMenu) {
         res.redirect('/pip22/manageMedications?edit=true');
       } else {
         res.redirect('/pip22/manageMedications');
       }
     }
     else if (req.param('edit')) {
       res.redirect('/pip22/checkYourAnswers');
     }
     else if (req.body.saveAndMenu) {
       res.redirect('/pip22/unansweredQuestions#yourCondition');
     } else {
       res.redirect('/pip22/treatments');
     }
  });

  /*******************
  manageMedications
  *******************/
  app.get('/pip22/manageMedications', function (req, res) {
      res.render('pip22/manageMedications', {
        answers : req.session['pip22-manageMedications'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip22/manageMedications', function (req, res) {
    req.session['pip22-manageMedications'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip22/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip22/unansweredQuestions#yourCondition');
    } else {
      res.redirect('/pip22/treatments');
    }
  });

  /*******************
  treatments
  *******************/
  app.get('/pip22/treatments', function (req, res) {
      res.render('pip22/treatments', {
        answers : req.session['pip22-treatments'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip22/treatments', function (req, res) {
    req.session['pip22-treatments'] = req.body;

    if(req.body.atHome === 'Yes') {
       if (req.body.saveAndMenu) {
         res.redirect('/pip22/manageTreatments?edit=true');
       } else {
         res.redirect('/pip22/manageTreatments');
       }
     }
     else if (req.param('edit')) {
       res.redirect('/pip22/checkYourAnswers');
     }
     else if (req.body.saveAndMenu) {
       res.redirect('/pip22/unansweredQuestions#yourCondition');
     } else {
       res.redirect('/pip22/sideEffects');
     }

  });

  /*******************
  manageTreatments
  *******************/
  app.get('/pip22/manageTreatments', function (req, res) {
      res.render('pip22/manageTreatments', {
        answers : req.session['pip22-manageTreatments'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip22/manageTreatments', function (req, res) {
    req.session['pip22-manageTreatments'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip22/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
       res.redirect('/pip22/unansweredQuestions#yourCondition');
     } else {
       res.redirect('/pip22/sideEffects');
     }

  });

  /*******************
  sideEffects
  *******************/
  app.get('/pip22/sideEffects', function (req, res) {
      res.render('pip22/sideEffects', {
        answers : req.session['pip22-sideEffects'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip22/sideEffects', function (req, res) {
    req.session['pip22-sideEffects'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip22/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip22/unansweredQuestions#yourCondition');
    } else {
      res.redirect('/pip22/conditionAffects');
    }
  });

  /*******************
  conditionAffects
  *******************/
  app.get('/pip22/conditionAffects', function (req, res) {
      res.render('pip22/conditionAffects', {
        answers : req.session['pip22-conditionAffects'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip22/conditionAffects', function (req, res) {
    req.session['pip22-conditionAffects'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip22/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip22/unansweredQuestions#yourCondition');
    } else {
      res.redirect('/pip22/monitoringCondition');
    }
  });

  /*******************
  monitoringCondition
  *******************/
  app.get('/pip22/monitoringCondition', function (req, res) {
      res.render('pip22/monitoringCondition', {
        answers : req.session['pip22-monitoringCondition'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip22/monitoringCondition', function (req, res) {
    req.session['pip22-monitoringCondition'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip22/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip22/unansweredQuestions#yourCondition');
    } else {
      res.redirect('/pip22/healthcareprofessional');
    }
  });

  /*******************
  healthcareprofessional
  *******************/
  app.get('/pip22/healthcareprofessional', function (req, res) {
      res.render('pip22/healthcareprofessional', {
        answers : req.session['pip22-healthcareprofessional'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip22/healthcareprofessional', function (req, res) {
    req.session['pip22-healthcareprofessional'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip22/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip22/specialAids#yourCondition');
    } else {
      res.redirect('/pip22/submitEvidence');
    }
  });

  /*******************
  submitEvidence
  *******************/
  app.get('/pip22/submitEvidence', function (req, res) {
      res.render('pip22/submitEvidence', {
        answers : req.session['pip22-submitEvidence'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip22/submitEvidence', function (req, res) {
    req.session['pip22-submitEvidence'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip22/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip22/unansweredQuestions#yourCondition');
    } else {
      res.redirect('/pip22/specialAids');
    }
  });

  /*******************
  specialAids
  *******************/
  app.get('/pip22/specialAids', function (req, res) {
      res.render('pip22/specialAids', {
        answers : req.session['pip22-specialAids'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip22/specialAids', function (req, res) {
    req.session['pip22-specialAids'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip22/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip22/unansweredQuestions#yourCondition');
    } else {
      res.redirect('/pip22/sight');
    }
  });

  /*******************
  sight
  *******************/
  app.get('/pip22/sight', function (req, res) {
      res.render('pip22/sight', {
        answers : req.session['pip22-sight'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip22/sight', function (req, res) {
    req.session['pip22-sight'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip22/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip22/unansweredQuestions#yourCondition');
    } else {
      res.redirect('/pip22/speech');
    }
  });

  /*******************
  speech
  *******************/
  app.get('/pip22/speech', function (req, res) {
      res.render('pip22/speech', {
        answers : req.session['pip22-speech'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip22/speech', function (req, res) {
    req.session['pip22-speech'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip22/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip22/unansweredQuestions#yourCondition');
    } else {
      res.redirect('/pip22/hearing');
    }
  });

  /*******************
  hearing
  *******************/
  app.get('/pip22/hearing', function (req, res) {
      res.render('pip22/hearing', {
        answers : req.session['pip22-hearing'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip22/hearing', function (req, res) {
    req.session['pip22-hearing'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip22/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip22/unansweredQuestions#yourCondition');
    } else {
      res.redirect('/pip22/gettingUp');
    }
  });

  /*******************
  gettingUp
  *******************/
  app.get('/pip22/gettingUp', function (req, res) {
      res.render('pip22/gettingUp', {
        answers : req.session['pip22-gettingUp'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip22/gettingUp', function (req, res) {
    req.session['pip22-gettingUp'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip22/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip22/unansweredQuestions#yourHome');
    } else {
      res.redirect('/pip22/toilet');
    }
  });

  /*******************
  toilet
  *******************/
  app.get('/pip22/toilet', function (req, res) {
      res.render('pip22/toilet', {
        answers : req.session['pip22-toilet'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip22/toilet', function (req, res) {
    req.session['pip22-toilet'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip22/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip22/unansweredQuestions#yourHome');
    } else {
      res.redirect('/pip22/washing');
    }
  });

  /*******************
  washing
  *******************/
  app.get('/pip22/washing', function (req, res) {
      res.render('pip22/washing', {
        answers : req.session['pip22-washing'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip22/washing', function (req, res) {
    req.session['pip22-washing'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip22/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip22/unansweredQuestions#yourHome');
    } else {
      res.redirect('/pip22/gettingDressed');
    }
  });

  /*******************
  gettingDressed
  *******************/
  app.get('/pip22/gettingDressed', function (req, res) {
      res.render('pip22/gettingDressed', {
        answers : req.session['pip22-gettingDressed'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip22/gettingDressed', function (req, res) {
    req.session['pip22-gettingDressed'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip22/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip22/unansweredQuestions#yourHome');
    } else {
      res.redirect('/pip22/hotMeal');
    }
  });

  /*******************
  hotMeal
  *******************/
  app.get('/pip22/hotMeal', function (req, res) {
      res.render('pip22/hotMeal', {
        answers : req.session['pip22-hotMeal'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip22/hotMeal', function (req, res) {
    req.session['pip22-hotMeal'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip22/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip22/unansweredQuestions#yourHome');
    } else {
      res.redirect('/pip22/eatingAndDrinking');
    }
  });

  /*******************
  eatingAndDrinking
  *******************/
  app.get('/pip22/eatingAndDrinking', function (req, res) {
      res.render('pip22/eatingAndDrinking', {
        answers : req.session['pip22-eatingAndDrinking'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip22/eatingAndDrinking', function (req, res) {
    req.session['pip22-eatingAndDrinking'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip22/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip22/unansweredQuestions#yourHome');
    } else {
      res.redirect('/pip22/gettingOut');
    }
  });

  /*******************
  gettingOut
  *******************/
  app.get('/pip22/gettingOut', function (req, res) {
      res.render('pip22/gettingOut', {
        answers : req.session['pip22-gettingOut'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip22/gettingOut', function (req, res) {
    req.session['pip22-gettingOut'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip22/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip22/unansweredQuestions#gettingOut');
    } else {
      res.redirect('/pip22/mixing');
    }
  });


  /*******************
  mixing
  *******************/
  app.get('/pip22/mixing', function (req, res) {
      res.render('pip22/mixing', {
        answers : req.session['pip22-mixing'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip22/mixing', function (req, res) {
    req.session['pip22-mixing'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip22/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip22/unansweredQuestions#gettingOut');
    } else {
      res.redirect('/pip22/localJourney');
    }
  });

  /*******************
  localJourney
  *******************/
  app.get('/pip22/localJourney', function (req, res) {
      res.render('pip22/localJourney', {
        answers : req.session['pip22-localJourney'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip22/localJourney', function (req, res) {
    req.session['pip22-localJourney'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip22/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip22/unansweredQuestions#makingSense');
    } else {
      res.redirect('/pip22/somewhereNeverBeenBefore');
    }
  });

  /*******************
  somewhereNeverBeenBefore
  *******************/
  app.get('/pip22/somewhereNeverBeenBefore', function (req, res) {
      res.render('pip22/somewhereNeverBeenBefore', {
        answers : req.session['pip22-somewhereNeverBeenBefore'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip22/somewhereNeverBeenBefore', function (req, res) {
    req.session['pip22-somewhereNeverBeenBefore'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip22/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip22/unansweredQuestions#makingSense');
    } else {
      res.redirect('/pip22/understanding');
    }
  });

  /*******************
  somewhereYouKnow
  *******************/
  app.get('/pip22/somewhereYouKnow', function (req, res) {
      res.render('pip22/somewhereYouKnow', {
        answers : req.session['pip22-somewhereYouKnow'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip22/somewhereYouKnow', function (req, res) {
    req.session['pip22-somewhereYouKnow'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip22/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip22/unansweredQuestions#makingSense');
    } else {
      res.redirect('/pip22/understanding');
    }
  });

  /*******************
  understanding
  *******************/
  app.get('/pip22/understanding', function (req, res) {
      res.render('pip22/understanding', {
        answers : req.session['pip22-understanding'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip22/understanding', function (req, res) {
    req.session['pip22-understanding'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip22/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip22/unansweredQuestions#makingSense');
    } else {
      res.redirect('/pip22/money');
    }
  });

  /*******************
  money
  *******************/
  app.get('/pip22/money', function (req, res) {
      res.render('pip22/money', {
        answers : req.session['pip22-money'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip22/money', function (req, res) {
    req.session['pip22-money'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip22/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip22/unansweredQuestions#makingSense');
    } else {
      res.redirect('/pip22/additionalInfo');
    }
  });

  /*******************
  additionalInfo
  *******************/
  app.get('/pip22/additionalInfo', function (req, res) {
      res.render('pip22/additionalInfo', {
        answers : req.session['pip22-additionalInfo'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip22/additionalInfo', function (req, res) {
    req.session['pip22-additionalInfo'] = req.body;
    res.redirect('/pip22/unansweredQuestions#additionalInfo');
  });

  /*******************
  unansweredQuestions
  *******************/
  app.get('/pip22/unansweredQuestions', function (req, res) {
      res.render('pip22/unansweredQuestions', {
        data                     : aboutYou.getTableData(),
        dataCheckChange          : unansweredQuestions.getTableData(),
        appointee                : req.session['pip22-appointee'],
        aboutYou                 : req.session['pip22-aboutYou'],
        contactDetails           : req.session['pip22-contactDetails'],
        contactPref              : req.session['pip22-contactPref'],
        bankDetails              : req.session['pip22-bankDetails'],
        currentWhereabouts       : req.session['pip22-currentWhereabouts'],
        nationality              : req.session['pip22-nationality'],
        paymentsFromAbroad       : req.session['pip22-paymentsFromAbroad'],
        conditionDetails         : req.session['pip22-conditionDetails'],
        medications              : req.session['pip22-medications'],
        manageMedications        : req.session['pip22-manageMedications'],
        treatments               : req.session['pip22-treatments'],
        manageTreatments         : req.session['pip22-manageTreatments'],
        sideEffects              : req.session['pip22-sideEffects'],
        conditionAffects         : req.session['pip22-conditionAffects'],
        monitoringCondition      : req.session['pip22-monitoringCondition'],
        healthcareprofessional   : req.session['pip22-healthcareprofessional'],
        submitEvidence           : req.session['pip22-submitEvidence'],
        specialAids              : req.session['pip22-specialAids'],
        sight                    : req.session['pip22-sight'],
        speech                   : req.session['pip22-speech'],
        hearing                  : req.session['pip22-hearing'],
        gettingUp                : req.session['pip22-gettingUp'],
        toilet                   : req.session['pip22-toilet'],
        washing                  : req.session['pip22-washing'],
        gettingDressed           : req.session['pip22-gettingDressed'],
        hotMeal                  : req.session['pip22-hotMeal'],
        eatingAndDrinking        : req.session['pip22-eatingAndDrinking'],
        gettingOut               : req.session['pip22-gettingOut'],
        mixing                   : req.session['pip22-mixing'],
        localJourney             : req.session['pip22-localJourney'],
        somewhereNeverBeenBefore : req.session['pip22-somewhereNeverBeenBefore'],
        somewhereYouKnow         : req.session['pip22-somewhereYouKnow'],
        understanding            : req.session['pip22-understanding'],
        money                    : req.session['pip22-money'],
        additionalInfo           : req.session['pip22-additionalInfo']
      });
  });

  app.post('/pip22/unansweredQuestions', function (req, res) {
    res.redirect('/pip22/checkYourAnswers');
  });

  /*******************
  checkYourAnswers
  *******************/
  app.get('/pip22/checkYourAnswers', function (req, res) {
      res.render('pip22/checkYourAnswers', {
        data                     : aboutYou.getTableData(),
        dataCheckChange          : checkYourAnswers.getTableData(),
        helper                   : req.session['pip22-helper'],
        aboutYou                 : req.session['pip22-aboutYou'],
        contactDetails           : req.session['pip22-contactDetails'],
        contactPref              : req.session['pip22-contactPref'],
        currentWhereabouts       : req.session['pip22-currentWhereabouts'],
        bankDetails              : req.session['pip22-bankDetails'],
        nationality              : req.session['pip22-nationality'],
        paymentsFromAbroad       : req.session['pip22-paymentsFromAbroad'],
        conditionDetails         : req.session['pip22-conditionDetails'],
        medications              : req.session['pip22-medications'],
        manageMedications        : req.session['pip22-manageMedications'],
        treatments               : req.session['pip22-treatments'],
        manageTreatments         : req.session['pip22-manageTreatments'],
        sideEffects              : req.session['pip22-sideEffects'],
        conditionAffects         : req.session['pip22-conditionAffects'],
        monitoringCondition      : req.session['pip22-monitoringCondition'],
        healthcareprofessional   : req.session['pip22-healthcareprofessional'],
        submitEvidence           : req.session['pip22-submitEvidence'],
        specialAids              : req.session['pip22-specialAids'],
        sight                    : req.session['pip22-sight'],
        speech                   : req.session['pip22-speech'],
        hearing                  : req.session['pip22-hearing'],
        gettingUp                : req.session['pip22-gettingUp'],
        toilet                   : req.session['pip22-toilet'],
        washing                  : req.session['pip22-washing'],
        gettingDressed           : req.session['pip22-gettingDressed'],
        hotMeal                  : req.session['pip22-hotMeal'],
        eatingAndDrinking        : req.session['pip22-eatingAndDrinking'],
        gettingOut               : req.session['pip22-gettingOut'],
        mixing                   : req.session['pip22-mixing'],
        localJourney             : req.session['pip22-localJourney'],
        somewhereNeverBeenBefore : req.session['pip22-somewhereNeverBeenBefore'],
        somewhereYouKnow         : req.session['pip22-somewhereYouKnow'],
        understanding            : req.session['pip22-understanding'],
        money                    : req.session['pip22-money']
      });
  });

  app.post('/pip22/checkYourAnswers', function (req, res) {
    req.session['pip22-checkYourAnswers'] = req.body;
    if (req.body.saveAndMenu) {
      res.redirect('/pip22/unansweredQuestions#aboutYou');
    } else {
      hcps = req.session['pip22-healthcareprofessional'];
      if ( !hcps || !hcps['name1']) {
        res.redirect('/pip22/submitApplication');
     } else {
        res.redirect('/pip22/hcpConsent');
      }
    }
  });

  /*******************
  bankDetails
  *******************/
  app.get('/pip22/bankDetails', function (req, res) {
      res.render('pip22/bankDetails', {
        answers : req.session['pip22-bankDetails'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip22/bankDetails', function (req, res) {
    req.session['pip22-bankDetails'] = req.body;
    if (req.body.saveAndMenu) {
      res.redirect('/pip22/unansweredQuestions#aboutYou');
    } else {
      hcps = req.session['pip22-healthcareprofessional'];
      if ( !hcps || !hcps['name1']) {
        res.redirect('/pip22/submitApplication');
     } else {
        res.redirect('/pip22/hcpConsent');
      }
    }
  });

  /*******************
  HCP Consent
  *******************/
  app.get('/pip22/hcpConsent', function (req, res) {
      res.render('pip22/hcpConsent', {
        hcps    : req.session['pip22-healthcareprofessional'],
        answers : req.session['pip22-hcpConsent'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip22/hcpConsent', function (req, res) {
    req.session['pip22-hcpConsent'] = req.body;


      res.redirect('/pip22/submitApplication');

  });

  /*******************
  declaration at end
  *******************/
  app.get('/pip22/submitApplication', function (req, res) {
      res.render('pip22/submitApplication', {
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip22/submitApplication', function (req, res) {
    res.redirect('/pip22/thankYou');
  });

  /*******************
  thankYou
  *******************/
  app.get('/pip22/thankYou', function (req, res) {
      res.render('pip22/thankYou', {
        answers : req.session['pip22-thankYou'],
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
