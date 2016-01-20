module.exports = function (app) {

  var styleguide        = require('./views/pip15/content/styleguide'),
      aboutYou          = require('./views/pip15/content/aboutYou'),
      checkYourAnswers  = require('./views/pip15/content/checkYourAnswers');

  app.get('/pip15/styleguide', function (req, res) {
    res.render('pip15/styleguide', {
      answers : req.session['pip15-helper'],
      data    : styleguide.getTableData()
    });
  });

  /*******************
  reset answers
  *******************/
  app.get('/pip15/reset', function (req, res) {
      res.render('pip15/reset');
  });

  app.post('/pip15/reset', function (req, res) {
    req.session.destroy();
    res.redirect('/pip15/apply');

  });

  /*******************
  summaryMain
  *******************/
  app.get('/pip15/summaryMain', function (req, res) {
      res.render('pip15/summaryMain', {
        'show'  : req.param('show'),
        'next'  : req.param('next'),
        'back'  : req.param('back')
      });
  });

  /*******************
  Helper
  *******************/
  app.get('/pip15/helper', function (req, res) {
      res.render('pip15/helper', {
        answers : req.session['pip15-helper'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip15/helper', function (req, res) {
    req.session['pip15-helper'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip15/checkYourAnswers');
    } else {
      res.redirect('/pip15/checkYourAnswers');
    }
  });

  /*******************
  aboutYou
  *******************/
  app.get('/pip15/aboutYou', function (req, res) {
      res.render('pip15/aboutYou', {
        answers : req.session['pip15-aboutYou'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip15/aboutYou', function (req, res) {
    req.session['pip15-aboutYou'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip15/checkYourAnswers');
    } else {
      res.redirect('/pip15/checkYourAnswers');
    }
  });

  /*******************
  contactDetails
  *******************/
  app.get('/pip15/contactDetails', function (req, res) {
      res.render('pip15/contactDetails', {
        answers : req.session['pip15-contactDetails'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip15/contactDetails', function (req, res) {
    req.session['pip15-contactDetails'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip15/checkYourAnswers');
    } else {
      res.redirect('/pip15/checkYourAnswers');
    }
  });

  /*******************
  contactPref
  *******************/
  app.get('/pip15/contactPref', function (req, res) {
      res.render('pip15/contactPref', {
        answers : req.session['pip15-contactPref'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip15/contactPref', function (req, res) {
    req.session['pip15-contactPref'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip15/checkYourAnswers');
    } else {
      res.redirect('/pip15/checkYourAnswers');
    }
  });

  /*******************
  currentWhereabouts
  *******************/
  app.get('/pip15/currentWhereabouts', function (req, res) {
      res.render('pip15/currentWhereabouts', {
        answers : req.session['pip15-currentWhereabouts'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip15/currentWhereabouts', function (req, res) {
    req.session['pip15-currentWhereabouts'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip15/checkYourAnswers');
    } else {
      res.redirect('/pip15/checkYourAnswers');
    }
  });

  /*******************
  nationality
  *******************/
  app.get('/pip15/nationality', function (req, res) {
    res.render('pip15/nationality', {
      answers : req.session['pip15-nationality'],
      'edit'  : req.param('edit'),
      data    : aboutYou.getTableData()
    });
  });

  app.post('/pip15/nationality', function (req, res) {
    req.session['pip15-nationality'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip15/checkYourAnswers');
    } else {
      res.redirect('/pip15/checkYourAnswers');
    }
  });

  /*******************
  paymentsFromAbroad
  *******************/
  app.get('/pip15/paymentsFromAbroad', function (req, res) {
      res.render('pip15/paymentsFromAbroad', {
        answers : req.session['pip15-paymentsFromAbroad'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip15/paymentsFromAbroad', function (req, res) {
    req.session['pip15-paymentsFromAbroad'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip15/checkYourAnswers');
    } else {
      res.redirect('/pip15/checkYourAnswers');
    }
  });

  /*******************
  conditionDetails
  *******************/
  app.get('/pip15/conditionDetails', function (req, res) {
      res.render('pip15/conditionDetails', {
        answers : req.session['pip15-conditionDetails'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip15/conditionDetails', function (req, res) {
    req.session['pip15-conditionDetails'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip15/checkYourAnswers');
    } else {
      res.redirect('/pip15/checkYourAnswers');
    }
  });

  /*******************
  medications
  *******************/
  app.get('/pip15/medications', function (req, res) {
      res.render('pip15/medications', {
        answers : req.session['pip15-medications'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip15/medications', function (req, res) {
    req.session['pip15-medications'] = req.body;

    if(req.body.takingMedication === 'Yes') {
       if (req.param('edit')) {
         res.redirect('/pip15/manageMedications?edit=true');
       } else {
         res.redirect('/pip15/manageMedications');
       }
     } else if (req.param('edit')) {
       res.redirect('/pip15/checkYourAnswers');
     } else {
       res.redirect('/pip15/checkYourAnswers');
     }
  });

  /*******************
  manageMedications
  *******************/
  app.get('/pip15/manageMedications', function (req, res) {
      res.render('pip15/manageMedications', {
        answers : req.session['pip15-manageMedications'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip15/manageMedications', function (req, res) {
    req.session['pip15-manageMedications'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip15/checkYourAnswers');
    } else {
      res.redirect('/pip15/checkYourAnswers');
    }
  });

  /*******************
  treatments
  *******************/
  app.get('/pip15/treatments', function (req, res) {
      res.render('pip15/treatments', {
        answers : req.session['pip15-treatments'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip15/treatments', function (req, res) {
    req.session['pip15-treatments'] = req.body;

    if(req.body.atHome === 'Yes') {
       if (req.param('edit')) {
         res.redirect('/pip15/manageTreatments?edit=true');
       } else {
         res.redirect('/pip15/manageTreatments');
       }
     } else if (req.param('edit')) {
       res.redirect('/pip15/checkYourAnswers');
     } else {
       res.redirect('/pip15/checkYourAnswers');
     }

  });

  /*******************
  manageTreatments
  *******************/
  app.get('/pip15/manageTreatments', function (req, res) {
      res.render('pip15/manageTreatments', {
        answers : req.session['pip15-manageTreatments'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip15/manageTreatments', function (req, res) {
    req.session['pip15-manageTreatments'] = req.body;

  if (req.param('edit')) {
       res.redirect('/pip15/checkYourAnswers');
     } else {
       res.redirect('/pip15/checkYourAnswers');
     }

  });

  /*******************
  sideEffects
  *******************/
  app.get('/pip15/sideEffects', function (req, res) {
      res.render('pip15/sideEffects', {
        answers : req.session['pip15-sideEffects'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip15/sideEffects', function (req, res) {
    req.session['pip15-sideEffects'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip15/checkYourAnswers');
    } else {
      res.redirect('/pip15/checkYourAnswers');
    }
  });

  /*******************
  conditionAffects
  *******************/
  app.get('/pip15/conditionAffects', function (req, res) {
      res.render('pip15/conditionAffects', {
        answers : req.session['pip15-conditionAffects'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip15/conditionAffects', function (req, res) {
    req.session['pip15-conditionAffects'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip15/checkYourAnswers');
    } else {
      res.redirect('/pip15/checkYourAnswers');
    }
  });

  /*******************
  monitoringCondition
  *******************/
  app.get('/pip15/monitoringCondition', function (req, res) {
      res.render('pip15/monitoringCondition', {
        answers : req.session['pip15-monitoringCondition'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip15/monitoringCondition', function (req, res) {
    req.session['pip15-monitoringCondition'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip15/checkYourAnswers');
    } else {
      res.redirect('/pip15/checkYourAnswers');
    }
  });

  /*******************
  healthcareprofessional
  *******************/
  app.get('/pip15/healthcareprofessional', function (req, res) {
      res.render('pip15/healthcareprofessional', {
        answers : req.session['pip15-healthcareprofessional'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip15/healthcareprofessional', function (req, res) {
    req.session['pip15-healthcareprofessional'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip15/checkYourAnswers');
    } else {
      res.redirect('/pip15/checkYourAnswers');
    }
  });

  /*******************
  submitEvidence
  *******************/
  app.get('/pip15/submitEvidence', function (req, res) {
      res.render('pip15/submitEvidence', {
        answers : req.session['pip15-submitEvidence'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip15/submitEvidence', function (req, res) {
    req.session['pip15-submitEvidence'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip15/checkYourAnswers');
    } else {
      res.redirect('/pip15/checkYourAnswers');
    }
  });

  /*******************
  specialAids
  *******************/
  app.get('/pip15/specialAids', function (req, res) {
      res.render('pip15/specialAids', {
        answers : req.session['pip15-specialAids'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip15/specialAids', function (req, res) {
    req.session['pip15-specialAids'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip15/checkYourAnswers');
    } else {
      res.redirect('/pip15/checkYourAnswers');
    }
  });

  /*******************
  sight
  *******************/
  app.get('/pip15/sight', function (req, res) {
      res.render('pip15/sight', {
        answers : req.session['pip15-sight'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip15/sight', function (req, res) {
    req.session['pip15-sight'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip15/checkYourAnswers');
    } else {
      res.redirect('/pip15/checkYourAnswers');
    }
  });

  /*******************
  speech
  *******************/
  app.get('/pip15/speech', function (req, res) {
      res.render('pip15/speech', {
        answers : req.session['pip15-speech'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip15/speech', function (req, res) {
    req.session['pip15-speech'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip15/checkYourAnswers');
    } else {
      res.redirect('/pip15/checkYourAnswers');
    }
  });

  /*******************
  hearing
  *******************/
  app.get('/pip15/hearing', function (req, res) {
      res.render('pip15/hearing', {
        answers : req.session['pip15-hearing'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip15/hearing', function (req, res) {
    req.session['pip15-hearing'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip15/checkYourAnswers');
    } else {
      res.redirect('/pip15/checkYourAnswers');
    }
  });

  /*******************
  gettingUp
  *******************/
  app.get('/pip15/gettingUp', function (req, res) {
      res.render('pip15/gettingUp', {
        answers : req.session['pip15-gettingUp'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip15/gettingUp', function (req, res) {
    req.session['pip15-gettingUp'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip15/checkYourAnswers');
    } else {
      res.redirect('/pip15/checkYourAnswers');
    }
  });

  /*******************
  toilet
  *******************/
  app.get('/pip15/toilet', function (req, res) {
      res.render('pip15/toilet', {
        answers : req.session['pip15-toilet'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip15/toilet', function (req, res) {
    req.session['pip15-toilet'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip15/checkYourAnswers');
    } else {
      res.redirect('/pip15/checkYourAnswers');
    }
  });

  /*******************
  washing
  *******************/
  app.get('/pip15/washing', function (req, res) {
      res.render('pip15/washing', {
        answers : req.session['pip15-washing'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip15/washing', function (req, res) {
    req.session['pip15-washing'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip15/checkYourAnswers');
    } else {
      res.redirect('/pip15/checkYourAnswers');
    }
  });

  /*******************
  gettingDressed
  *******************/
  app.get('/pip15/gettingDressed', function (req, res) {
      res.render('pip15/gettingDressed', {
        answers : req.session['pip15-gettingDressed'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip15/gettingDressed', function (req, res) {
    req.session['pip15-gettingDressed'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip15/checkYourAnswers');
    } else {
      res.redirect('/pip15/checkYourAnswers');
    }
  });

  /*******************
  hotMeal
  *******************/
  app.get('/pip15/hotMeal', function (req, res) {
      res.render('pip15/hotMeal', {
        answers : req.session['pip15-hotMeal'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip15/hotMeal', function (req, res) {
    req.session['pip15-hotMeal'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip15/checkYourAnswers');
    } else {
      res.redirect('/pip15/checkYourAnswers');
    }
  });

  /*******************
  eatingAndDrinking
  *******************/
  app.get('/pip15/eatingAndDrinking', function (req, res) {
      res.render('pip15/eatingAndDrinking', {
        answers : req.session['pip15-eatingAndDrinking'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip15/eatingAndDrinking', function (req, res) {
    req.session['pip15-eatingAndDrinking'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip15/checkYourAnswers');
    } else {
      res.redirect('/pip15/checkYourAnswers');
    }
  });

  /*******************
  gettingOut
  *******************/
  app.get('/pip15/gettingOut', function (req, res) {
      res.render('pip15/gettingOut', {
        answers : req.session['pip15-gettingOut'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip15/gettingOut', function (req, res) {
    req.session['pip15-gettingOut'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip15/checkYourAnswers');
    } else {
      res.redirect('/pip15/checkYourAnswers');
    }
  });


  /*******************
  mixing
  *******************/
  app.get('/pip15/mixing', function (req, res) {
      res.render('pip15/mixing', {
        answers : req.session['pip15-mixing'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip15/mixing', function (req, res) {
    req.session['pip15-mixing'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip15/checkYourAnswers');
    } else {
      res.redirect('/pip15/checkYourAnswers');
    }
  });

  /*******************
  localJourney
  *******************/
  app.get('/pip15/localJourney', function (req, res) {
      res.render('pip15/localJourney', {
        answers : req.session['pip15-localJourney'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip15/localJourney', function (req, res) {
    req.session['pip15-localJourney'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip15/checkYourAnswers');
    } else {
      res.redirect('/pip15/checkYourAnswers');
    }
  });

  /*******************
  somewhereNeverBeenBefore
  *******************/
  app.get('/pip15/somewhereNeverBeenBefore', function (req, res) {
      res.render('pip15/somewhereNeverBeenBefore', {
        answers : req.session['pip15-somewhereNeverBeenBefore'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip15/somewhereNeverBeenBefore', function (req, res) {
    req.session['pip15-somewhereNeverBeenBefore'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip15/checkYourAnswers');
    } else {
      res.redirect('/pip15/checkYourAnswers');
    }
  });

  /*******************
  somewhereYouKnow
  *******************/
  app.get('/pip15/somewhereYouKnow', function (req, res) {
      res.render('pip15/somewhereYouKnow', {
        answers : req.session['pip15-somewhereYouKnow'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip15/somewhereYouKnow', function (req, res) {
    req.session['pip15-somewhereYouKnow'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip15/checkYourAnswers');
    } else {
      res.redirect('/pip15/checkYourAnswers');
    }
  });

  /*******************
  understanding
  *******************/
  app.get('/pip15/understanding', function (req, res) {
      res.render('pip15/understanding', {
        answers : req.session['pip15-understanding'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip15/understanding', function (req, res) {
    req.session['pip15-understanding'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip15/checkYourAnswers');
    } else {
      res.redirect('/pip15/checkYourAnswers');
    }
  });

  /*******************
  money
  *******************/
  app.get('/pip15/money', function (req, res) {
      res.render('pip15/money', {
        answers : req.session['pip15-money'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip15/money', function (req, res) {
    req.session['pip15-money'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip15/checkYourAnswers');
    } else {
      res.redirect('/pip15/checkYourAnswers');
    }
  });

  /*******************
  checkYourAnswers
  *******************/
  app.get('/pip15/checkYourAnswers', function (req, res) {
      res.render('pip15/checkYourAnswers', {
        data                     : aboutYou.getTableData(),
        dataCheckChange          : checkYourAnswers.getTableData(),
        helper                   : req.session['pip15-helper'],
        aboutYou                 : req.session['pip15-aboutYou'],
        contactDetails           : req.session['pip15-contactDetails'],
        contactPref              : req.session['pip15-contactPref'],
        currentWhereabouts       : req.session['pip15-currentWhereabouts'],
        nationality              : req.session['pip15-nationality'],
        paymentsFromAbroad       : req.session['pip15-paymentsFromAbroad'],
        conditionDetails         : req.session['pip15-conditionDetails'],
        medications              : req.session['pip15-medications'],
        manageMedications        : req.session['pip15-manageMedications'],
        treatments               : req.session['pip15-treatments'],
        sideEffects              : req.session['pip15-sideEffects'],
        conditionAffects         : req.session['pip15-conditionAffects'],
        monitoringCondition      : req.session['pip15-monitoringCondition'],
        healthcareprofessional   : req.session['pip15-healthcareprofessional'],
        submitEvidence           : req.session['pip15-submitEvidence'],
        specialAids              : req.session['pip15-specialAids'],
        sight                    : req.session['pip15-sight'],
        speech                   : req.session['pip15-speech'],
        hearing                  : req.session['pip15-hearing'],
        gettingUp                : req.session['pip15-gettingUp'],
        toilet                   : req.session['pip15-toilet'],
        washing                  : req.session['pip15-washing'],
        gettingDressed           : req.session['pip15-gettingDressed'],
        hotMeal                  : req.session['pip15-hotMeal'],
        eatingAndDrinking        : req.session['pip15-eatingAndDrinking'],
        gettingOut               : req.session['pip15-gettingOut'],
        mixing                   : req.session['pip15-mixing'],
        localJourney             : req.session['pip15-localJourney'],
        somewhereNeverBeenBefore : req.session['pip15-somewhereNeverBeenBefore'],
        somewhereYouKnow         : req.session['pip15-somewhereYouKnow'],
        understanding            : req.session['pip15-understanding'],
        money                    : req.session['pip15-money']
      });
  });

  app.post('/pip15/checkYourAnswers', function (req, res) {
    req.session['pip15-checkYourAnswers'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip15/checkYourAnswers');
    } else {
      res.redirect('/pip15/additionalInfo');
    }
  });

  /*******************
  additionalInfo
  *******************/
  app.get('/pip15/additionalInfo', function (req, res) {
      res.render('pip15/additionalInfo', {
        answers : req.session['pip15-additionalInfo'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip15/additionalInfo', function (req, res) {
    req.session['pip15-additionalInfo'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip15/checkYourAnswers');
    } else {
      res.redirect('/pip15/declaration');
    }
  });

  /*******************
  declaration
  *******************/
  app.get('/pip15/declaration', function (req, res) {
      res.render('pip15/declaration', {
        answers : req.session['pip15-declaration'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip15/declaration', function (req, res) {
    req.session['pip15-declaration'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip15/checkYourAnswers');
    } else {
      res.redirect('/pip15/thankYou');
    }
  });

  /*******************
  thankYou
  *******************/
  app.get('/pip15/thankYou', function (req, res) {
      res.render('pip15/thankYou', {
        answers : req.session['pip15-thankYou'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });


};
