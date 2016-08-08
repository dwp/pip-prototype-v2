module.exports = function (app) {

  var styleguide           = require('./views/pip21/content/styleguide'),
      aboutYou             = require('./views/pip21/content/aboutYou'),
      unansweredQuestions  = require('./views/pip21/content/unansweredQuestions'),
      checkYourAnswers     = require('./views/pip21/content/checkYourAnswers');

  app.get('/pip21/styleguide', function (req, res) {
    res.render('pip21/styleguide', {
      answers : req.session['pip21-helper'],
      data    : styleguide.getTableData()
    });
  });

  /*******************
  reset answers
  *******************/
  app.get('/pip21/reset', function (req, res) {
      res.render('pip21/reset');
  });

  app.post('/pip21/reset', function (req, res) {
    req.session.destroy();
    res.redirect('/pip21/apply');

  });

  /*******************
  summaryMain
  *******************/
  app.get('/pip21/summaryMain', function (req, res) {
      res.render('pip21/summaryMain', {
        'show'  : req.param('show'),
        'next'  : req.param('next'),
        'back'  : req.param('back')
      });
  });

  /*******************
  appointee
  *******************/
  app.get('/pip21/appointee', function (req, res) {
      res.render('pip21/appointee', {
        answers : req.session['pip21-appointee'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip21/appointee', function (req, res) {
    req.session['pip21-appointee'] = req.body;
    if (req.param('edit')) {
      res.redirect('/pip21/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip21/unansweredQuestions');
    }
    else {
      res.redirect('/pip21/aboutYou');
    }
  });

  /*******************
  aboutYou
  *******************/
  app.get('/pip21/aboutYou', function (req, res) {
      res.render('pip21/aboutYou', {
        answers : req.session['pip21-aboutYou'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip21/aboutYou', function (req, res) {
    req.session['pip21-aboutYou'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip21/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip21/unansweredQuestions#aboutYou');
    } else {
      res.redirect('/pip21/contactDetails');
    }
  });

  /*******************
  contactDetails
  *******************/
  app.get('/pip21/contactDetails', function (req, res) {
      res.render('pip21/contactDetails', {
        answers : req.session['pip21-contactDetails'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip21/contactDetails', function (req, res) {
    req.session['pip21-contactDetails'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip21/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip21/unansweredQuestions#aboutYou');
    } else {
      res.redirect('/pip21/contactPref');
    }
  });

  /*******************
  contactPref
  *******************/
  app.get('/pip21/contactPref', function (req, res) {
      res.render('pip21/contactPref', {
        answers : req.session['pip21-contactPref'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip21/contactPref', function (req, res) {
    req.session['pip21-contactPref'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip21/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip21/unansweredQuestions#aboutYou');
    }
    else {
      res.redirect('/pip21/bankDetails');
    }
  });

  /*******************
  bankDetails
  *******************/
  app.get('/pip21/bankDetails', function (req, res) {
      res.render('pip21/bankDetails', {
        answers : req.session['pip21-bankDetails'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip21/bankDetails', function (req, res) {
    req.session['pip21-bankDetails'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip21/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip21/unansweredQuestions#aboutYou');
    } else {
      res.redirect('/pip21/nationality');
    }
  });

  /*******************
  nationality
  *******************/
  app.get('/pip21/nationality', function (req, res) {
    res.render('pip21/nationality', {
      answers : req.session['pip21-nationality'],
      'edit'  : req.param('edit'),
      data    : aboutYou.getTableData()
    });
  });

  app.post('/pip21/nationality', function (req, res) {
    req.session['pip21-nationality'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip21/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip21/unansweredQuestions#aboutYou');
    } else {
      res.redirect('/pip21/currentWhereabouts');
    }
  });


  /*******************
  currentWhereabouts
  *******************/
  app.get('/pip21/currentWhereabouts', function (req, res) {
      res.render('pip21/currentWhereabouts', {
        answers : req.session['pip21-currentWhereabouts'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip21/currentWhereabouts', function (req, res) {
    req.session['pip21-currentWhereabouts'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip21/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip21/unansweredQuestions#aboutYou');
    } else {
      res.redirect('/pip21/paymentsFromAbroad');
    }
  });

  /*******************
  paymentsFromAbroad
  *******************/
  app.get('/pip21/paymentsFromAbroad', function (req, res) {
      res.render('pip21/paymentsFromAbroad', {
        answers : req.session['pip21-paymentsFromAbroad'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip21/paymentsFromAbroad', function (req, res) {
    req.session['pip21-paymentsFromAbroad'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip21/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip21/unansweredQuestions#aboutYou');
    } else {
      res.redirect('/pip21/declaration');
    }
  });

  /*******************
  declaration at start
  *******************/
  app.get('/pip21/declaration', function (req, res) {
      res.render('pip21/declaration', {
        answers  : req.session['pip21-declaration'],
        aboutYou : req.session['pip21-aboutYou'],
        'edit'   : req.body.saveAndMenu,
        data     : aboutYou.getTableData()
      });
  });

  app.post('/pip21/declaration', function (req, res) {
    req.session['pip21-declaration'] = req.body;
    res.redirect('/pip21/completionDate');
    //unansweredQuestions#aboutYou'
  });

  /*******************
  completion date
  *******************/
  app.get('/pip21/completionDate', function (req, res) {
      res.render('pip21/completionDate', {
        data     : aboutYou.getTableData()
      });
  });

  app.post('/pip21/completionDate', function (req, res) {
    res.redirect('/pip21/conditionDetails');
  });

  /*******************
  conditionDetails
  *******************/
  app.get('/pip21/conditionDetails', function (req, res) {
      res.render('pip21/conditionDetails', {
        answers : req.session['pip21-conditionDetails'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip21/conditionDetails', function (req, res) {
    req.session['pip21-conditionDetails'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip21/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip21/unansweredQuestions#yourCondition');
    } else {
      res.redirect('/pip21/medications');
    }
  });

  /*******************
  medications
  *******************/
  app.get('/pip21/medications', function (req, res) {
      res.render('pip21/medications', {
        answers : req.session['pip21-medications'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip21/medications', function (req, res) {
    req.session['pip21-medications'] = req.body;

    if(req.body.takingMedication === 'Yes') {
       if (req.body.saveAndMenu) {
         res.redirect('/pip21/manageMedications?edit=true');
       } else {
         res.redirect('/pip21/manageMedications');
       }
     }
     else if (req.param('edit')) {
       res.redirect('/pip21/checkYourAnswers');
     }
     else if (req.body.saveAndMenu) {
       res.redirect('/pip21/unansweredQuestions#yourCondition');
     } else {
       res.redirect('/pip21/treatments');
     }
  });

  /*******************
  manageMedications
  *******************/
  app.get('/pip21/manageMedications', function (req, res) {
      res.render('pip21/manageMedications', {
        answers : req.session['pip21-manageMedications'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip21/manageMedications', function (req, res) {
    req.session['pip21-manageMedications'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip21/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip21/unansweredQuestions#yourCondition');
    } else {
      res.redirect('/pip21/treatments');
    }
  });

  /*******************
  treatments
  *******************/
  app.get('/pip21/treatments', function (req, res) {
      res.render('pip21/treatments', {
        answers : req.session['pip21-treatments'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip21/treatments', function (req, res) {
    req.session['pip21-treatments'] = req.body;

    if(req.body.atHome === 'Yes') {
       if (req.body.saveAndMenu) {
         res.redirect('/pip21/manageTreatments?edit=true');
       } else {
         res.redirect('/pip21/manageTreatments');
       }
     }
     else if (req.param('edit')) {
       res.redirect('/pip21/checkYourAnswers');
     }
     else if (req.body.saveAndMenu) {
       res.redirect('/pip21/unansweredQuestions#yourCondition');
     } else {
       res.redirect('/pip21/sideEffects');
     }

  });

  /*******************
  manageTreatments
  *******************/
  app.get('/pip21/manageTreatments', function (req, res) {
      res.render('pip21/manageTreatments', {
        answers : req.session['pip21-manageTreatments'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip21/manageTreatments', function (req, res) {
    req.session['pip21-manageTreatments'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip21/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
       res.redirect('/pip21/unansweredQuestions#yourCondition');
     } else {
       res.redirect('/pip21/sideEffects');
     }

  });

  /*******************
  sideEffects
  *******************/
  app.get('/pip21/sideEffects', function (req, res) {
      res.render('pip21/sideEffects', {
        answers : req.session['pip21-sideEffects'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip21/sideEffects', function (req, res) {
    req.session['pip21-sideEffects'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip21/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip21/unansweredQuestions#yourCondition');
    } else {
      res.redirect('/pip21/conditionAffects');
    }
  });

  /*******************
  conditionAffects
  *******************/
  app.get('/pip21/conditionAffects', function (req, res) {
      res.render('pip21/conditionAffects', {
        answers : req.session['pip21-conditionAffects'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip21/conditionAffects', function (req, res) {
    req.session['pip21-conditionAffects'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip21/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip21/unansweredQuestions#yourCondition');
    } else {
      res.redirect('/pip21/monitoringCondition');
    }
  });

  /*******************
  monitoringCondition
  *******************/
  app.get('/pip21/monitoringCondition', function (req, res) {
      res.render('pip21/monitoringCondition', {
        answers : req.session['pip21-monitoringCondition'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip21/monitoringCondition', function (req, res) {
    req.session['pip21-monitoringCondition'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip21/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip21/unansweredQuestions#yourCondition');
    } else {
      res.redirect('/pip21/healthcareprofessional');
    }
  });

  /*******************
  healthcareprofessional
  *******************/
  app.get('/pip21/healthcareprofessional', function (req, res) {
      res.render('pip21/healthcareprofessional', {
        answers : req.session['pip21-healthcareprofessional'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip21/healthcareprofessional', function (req, res) {
    req.session['pip21-healthcareprofessional'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip21/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip21/specialAids#yourCondition');
    } else {
      res.redirect('/pip21/submitEvidence');
    }
  });

  /*******************
  submitEvidence
  *******************/
  app.get('/pip21/submitEvidence', function (req, res) {
      res.render('pip21/submitEvidence', {
        answers : req.session['pip21-submitEvidence'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip21/submitEvidence', function (req, res) {
    req.session['pip21-submitEvidence'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip21/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip21/unansweredQuestions#yourCondition');
    } else {
      res.redirect('/pip21/specialAids');
    }
  });

  /*******************
  specialAids
  *******************/
  app.get('/pip21/specialAids', function (req, res) {
      res.render('pip21/specialAids', {
        answers : req.session['pip21-specialAids'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip21/specialAids', function (req, res) {
    req.session['pip21-specialAids'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip21/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip21/unansweredQuestions#yourCondition');
    } else {
      res.redirect('/pip21/sight');
    }
  });

  /*******************
  sight
  *******************/
  app.get('/pip21/sight', function (req, res) {
      res.render('pip21/sight', {
        answers : req.session['pip21-sight'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip21/sight', function (req, res) {
    req.session['pip21-sight'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip21/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip21/unansweredQuestions#yourCondition');
    } else {
      res.redirect('/pip21/speech');
    }
  });

  /*******************
  speech
  *******************/
  app.get('/pip21/speech', function (req, res) {
      res.render('pip21/speech', {
        answers : req.session['pip21-speech'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip21/speech', function (req, res) {
    req.session['pip21-speech'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip21/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip21/unansweredQuestions#yourCondition');
    } else {
      res.redirect('/pip21/hearing');
    }
  });

  /*******************
  hearing
  *******************/
  app.get('/pip21/hearing', function (req, res) {
      res.render('pip21/hearing', {
        answers : req.session['pip21-hearing'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip21/hearing', function (req, res) {
    req.session['pip21-hearing'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip21/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip21/unansweredQuestions#yourCondition');
    } else {
      res.redirect('/pip21/gettingUp');
    }
  });

  /*******************
  gettingUp
  *******************/
  app.get('/pip21/gettingUp', function (req, res) {
      res.render('pip21/gettingUp', {
        answers : req.session['pip21-gettingUp'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip21/gettingUp', function (req, res) {
    req.session['pip21-gettingUp'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip21/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip21/unansweredQuestions#yourHome');
    } else {
      res.redirect('/pip21/toilet');
    }
  });

  /*******************
  toilet
  *******************/
  app.get('/pip21/toilet', function (req, res) {
      res.render('pip21/toilet', {
        answers : req.session['pip21-toilet'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip21/toilet', function (req, res) {
    req.session['pip21-toilet'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip21/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip21/unansweredQuestions#yourHome');
    } else {
      res.redirect('/pip21/washing');
    }
  });

  /*******************
  washing
  *******************/
  app.get('/pip21/washing', function (req, res) {
      res.render('pip21/washing', {
        answers : req.session['pip21-washing'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip21/washing', function (req, res) {
    req.session['pip21-washing'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip21/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip21/unansweredQuestions#yourHome');
    } else {
      res.redirect('/pip21/gettingDressed');
    }
  });

  /*******************
  gettingDressed
  *******************/
  app.get('/pip21/gettingDressed', function (req, res) {
      res.render('pip21/gettingDressed', {
        answers : req.session['pip21-gettingDressed'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip21/gettingDressed', function (req, res) {
    req.session['pip21-gettingDressed'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip21/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip21/unansweredQuestions#yourHome');
    } else {
      res.redirect('/pip21/hotMeal');
    }
  });

  /*******************
  hotMeal
  *******************/
  app.get('/pip21/hotMeal', function (req, res) {
      res.render('pip21/hotMeal', {
        answers : req.session['pip21-hotMeal'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip21/hotMeal', function (req, res) {
    req.session['pip21-hotMeal'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip21/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip21/unansweredQuestions#yourHome');
    } else {
      res.redirect('/pip21/eatingAndDrinking');
    }
  });

  /*******************
  eatingAndDrinking
  *******************/
  app.get('/pip21/eatingAndDrinking', function (req, res) {
      res.render('pip21/eatingAndDrinking', {
        answers : req.session['pip21-eatingAndDrinking'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip21/eatingAndDrinking', function (req, res) {
    req.session['pip21-eatingAndDrinking'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip21/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip21/unansweredQuestions#yourHome');
    } else {
      res.redirect('/pip21/gettingOut');
    }
  });

  /*******************
  gettingOut
  *******************/
  app.get('/pip21/gettingOut', function (req, res) {
      res.render('pip21/gettingOut', {
        answers : req.session['pip21-gettingOut'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip21/gettingOut', function (req, res) {
    req.session['pip21-gettingOut'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip21/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip21/unansweredQuestions#gettingOut');
    } else {
      res.redirect('/pip21/mixing');
    }
  });


  /*******************
  mixing
  *******************/
  app.get('/pip21/mixing', function (req, res) {
      res.render('pip21/mixing', {
        answers : req.session['pip21-mixing'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip21/mixing', function (req, res) {
    req.session['pip21-mixing'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip21/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip21/unansweredQuestions#gettingOut');
    } else {
      res.redirect('/pip21/localJourney');
    }
  });

  /*******************
  localJourney
  *******************/
  app.get('/pip21/localJourney', function (req, res) {
      res.render('pip21/localJourney', {
        answers : req.session['pip21-localJourney'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip21/localJourney', function (req, res) {
    req.session['pip21-localJourney'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip21/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip21/unansweredQuestions#makingSense');
    } else {
      res.redirect('/pip21/somewhereNeverBeenBefore');
    }
  });

  /*******************
  somewhereNeverBeenBefore
  *******************/
  app.get('/pip21/somewhereNeverBeenBefore', function (req, res) {
      res.render('pip21/somewhereNeverBeenBefore', {
        answers : req.session['pip21-somewhereNeverBeenBefore'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip21/somewhereNeverBeenBefore', function (req, res) {
    req.session['pip21-somewhereNeverBeenBefore'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip21/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip21/unansweredQuestions#makingSense');
    } else {
      res.redirect('/pip21/understanding');
    }
  });

  /*******************
  somewhereYouKnow
  *******************/
  app.get('/pip21/somewhereYouKnow', function (req, res) {
      res.render('pip21/somewhereYouKnow', {
        answers : req.session['pip21-somewhereYouKnow'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip21/somewhereYouKnow', function (req, res) {
    req.session['pip21-somewhereYouKnow'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip21/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip21/unansweredQuestions#makingSense');
    } else {
      res.redirect('/pip21/understanding');
    }
  });

  /*******************
  understanding
  *******************/
  app.get('/pip21/understanding', function (req, res) {
      res.render('pip21/understanding', {
        answers : req.session['pip21-understanding'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip21/understanding', function (req, res) {
    req.session['pip21-understanding'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip21/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip21/unansweredQuestions#makingSense');
    } else {
      res.redirect('/pip21/money');
    }
  });

  /*******************
  money
  *******************/
  app.get('/pip21/money', function (req, res) {
      res.render('pip21/money', {
        answers : req.session['pip21-money'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip21/money', function (req, res) {
    req.session['pip21-money'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip21/checkYourAnswers');
    }
    else if (req.body.saveAndMenu) {
      res.redirect('/pip21/unansweredQuestions#makingSense');
    } else {
      res.redirect('/pip21/additionalInfo');
    }
  });

  /*******************
  additionalInfo
  *******************/
  app.get('/pip21/additionalInfo', function (req, res) {
      res.render('pip21/additionalInfo', {
        answers : req.session['pip21-additionalInfo'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip21/additionalInfo', function (req, res) {
    req.session['pip21-additionalInfo'] = req.body;
    res.redirect('/pip21/unansweredQuestions#additionalInfo');
  });

  /*******************
  unansweredQuestions
  *******************/
  app.get('/pip21/unansweredQuestions', function (req, res) {
      res.render('pip21/unansweredQuestions', {
        data                     : aboutYou.getTableData(),
        dataCheckChange          : unansweredQuestions.getTableData(),
        appointee                : req.session['pip21-appointee'],
        aboutYou                 : req.session['pip21-aboutYou'],
        contactDetails           : req.session['pip21-contactDetails'],
        contactPref              : req.session['pip21-contactPref'],
        bankDetails              : req.session['pip21-bankDetails'],
        currentWhereabouts       : req.session['pip21-currentWhereabouts'],
        nationality              : req.session['pip21-nationality'],
        paymentsFromAbroad       : req.session['pip21-paymentsFromAbroad'],
        conditionDetails         : req.session['pip21-conditionDetails'],
        medications              : req.session['pip21-medications'],
        manageMedications        : req.session['pip21-manageMedications'],
        treatments               : req.session['pip21-treatments'],
        manageTreatments         : req.session['pip21-manageTreatments'],
        sideEffects              : req.session['pip21-sideEffects'],
        conditionAffects         : req.session['pip21-conditionAffects'],
        monitoringCondition      : req.session['pip21-monitoringCondition'],
        healthcareprofessional   : req.session['pip21-healthcareprofessional'],
        submitEvidence           : req.session['pip21-submitEvidence'],
        specialAids              : req.session['pip21-specialAids'],
        sight                    : req.session['pip21-sight'],
        speech                   : req.session['pip21-speech'],
        hearing                  : req.session['pip21-hearing'],
        gettingUp                : req.session['pip21-gettingUp'],
        toilet                   : req.session['pip21-toilet'],
        washing                  : req.session['pip21-washing'],
        gettingDressed           : req.session['pip21-gettingDressed'],
        hotMeal                  : req.session['pip21-hotMeal'],
        eatingAndDrinking        : req.session['pip21-eatingAndDrinking'],
        gettingOut               : req.session['pip21-gettingOut'],
        mixing                   : req.session['pip21-mixing'],
        localJourney             : req.session['pip21-localJourney'],
        somewhereNeverBeenBefore : req.session['pip21-somewhereNeverBeenBefore'],
        somewhereYouKnow         : req.session['pip21-somewhereYouKnow'],
        understanding            : req.session['pip21-understanding'],
        money                    : req.session['pip21-money'],
        additionalInfo           : req.session['pip21-additionalInfo']
      });
  });

  app.post('/pip21/unansweredQuestions', function (req, res) {
    res.redirect('/pip21/checkYourAnswers');
  });

  /*******************
  checkYourAnswers
  *******************/
  app.get('/pip21/checkYourAnswers', function (req, res) {
      res.render('pip21/checkYourAnswers', {
        data                     : aboutYou.getTableData(),
        dataCheckChange          : checkYourAnswers.getTableData(),
        helper                   : req.session['pip21-helper'],
        aboutYou                 : req.session['pip21-aboutYou'],
        contactDetails           : req.session['pip21-contactDetails'],
        contactPref              : req.session['pip21-contactPref'],
        currentWhereabouts       : req.session['pip21-currentWhereabouts'],
        bankDetails              : req.session['pip21-bankDetails'],
        nationality              : req.session['pip21-nationality'],
        paymentsFromAbroad       : req.session['pip21-paymentsFromAbroad'],
        conditionDetails         : req.session['pip21-conditionDetails'],
        medications              : req.session['pip21-medications'],
        manageMedications        : req.session['pip21-manageMedications'],
        treatments               : req.session['pip21-treatments'],
        manageTreatments         : req.session['pip21-manageTreatments'],
        sideEffects              : req.session['pip21-sideEffects'],
        conditionAffects         : req.session['pip21-conditionAffects'],
        monitoringCondition      : req.session['pip21-monitoringCondition'],
        healthcareprofessional   : req.session['pip21-healthcareprofessional'],
        submitEvidence           : req.session['pip21-submitEvidence'],
        specialAids              : req.session['pip21-specialAids'],
        sight                    : req.session['pip21-sight'],
        speech                   : req.session['pip21-speech'],
        hearing                  : req.session['pip21-hearing'],
        gettingUp                : req.session['pip21-gettingUp'],
        toilet                   : req.session['pip21-toilet'],
        washing                  : req.session['pip21-washing'],
        gettingDressed           : req.session['pip21-gettingDressed'],
        hotMeal                  : req.session['pip21-hotMeal'],
        eatingAndDrinking        : req.session['pip21-eatingAndDrinking'],
        gettingOut               : req.session['pip21-gettingOut'],
        mixing                   : req.session['pip21-mixing'],
        localJourney             : req.session['pip21-localJourney'],
        somewhereNeverBeenBefore : req.session['pip21-somewhereNeverBeenBefore'],
        somewhereYouKnow         : req.session['pip21-somewhereYouKnow'],
        understanding            : req.session['pip21-understanding'],
        money                    : req.session['pip21-money']
      });
  });

  app.post('/pip21/checkYourAnswers', function (req, res) {
    req.session['pip21-checkYourAnswers'] = req.body;
    if (req.body.saveAndMenu) {
      res.redirect('/pip21/unansweredQuestions#aboutYou');
    } else {
      hcps = req.session['pip21-healthcareprofessional'];
      if ( !hcps || !hcps['name1']) {
        res.redirect('/pip21/submitApplication');
     } else {
        res.redirect('/pip21/hcpConsent');
      }
    }
  });

  /*******************
  bankDetails
  *******************/
  app.get('/pip21/bankDetails', function (req, res) {
      res.render('pip21/bankDetails', {
        answers : req.session['pip21-bankDetails'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip21/bankDetails', function (req, res) {
    req.session['pip21-bankDetails'] = req.body;
    if (req.body.saveAndMenu) {
      res.redirect('/pip21/unansweredQuestions#aboutYou');
    } else {
      hcps = req.session['pip21-healthcareprofessional'];
      if ( !hcps || !hcps['name1']) {
        res.redirect('/pip21/submitApplication');
     } else {
        res.redirect('/pip21/hcpConsent');
      }
    }
  });

  /*******************
  HCP Consent
  *******************/
  app.get('/pip21/hcpConsent', function (req, res) {
      res.render('pip21/hcpConsent', {
        hcps    : req.session['pip21-healthcareprofessional'],
        answers : req.session['pip21-hcpConsent'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip21/hcpConsent', function (req, res) {
    req.session['pip21-hcpConsent'] = req.body;


      res.redirect('/pip21/submitApplication');

  });

  /*******************
  declaration at end
  *******************/
  app.get('/pip21/submitApplication', function (req, res) {
      res.render('pip21/submitApplication', {
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip21/submitApplication', function (req, res) {
    res.redirect('/pip21/thankYou');
  });

  /*******************
  thankYou
  *******************/
  app.get('/pip21/thankYou', function (req, res) {
      res.render('pip21/thankYou', {
        answers : req.session['pip21-thankYou'],
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
