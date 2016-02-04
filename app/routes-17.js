module.exports = function (app) {

  var styleguide        = require('./views/pip17/content/styleguide'),
      aboutYou          = require('./views/pip17/content/aboutYou'),
      checkYourAnswers  = require('./views/pip17/content/checkYourAnswers');

  app.get('/pip17/styleguide', function (req, res) {
    res.render('pip17/styleguide', {
      answers : req.session['pip17-helper'],
      data    : styleguide.getTableData()
    });
  });

  /*******************
  reset answers
  *******************/
  app.get('/pip17/reset', function (req, res) {
      res.render('pip17/reset');
  });

  app.post('/pip17/reset', function (req, res) {
    req.session.destroy();
    res.redirect('/pip17/apply');

  });

  /*******************
  summaryMain
  *******************/
  app.get('/pip17/summaryMain', function (req, res) {
      res.render('pip17/summaryMain', {
        'show'  : req.param('show'),
        'next'  : req.param('next'),
        'back'  : req.param('back')
      });
  });

  /*******************
  Helper
  *******************/
  app.get('/pip17/helper', function (req, res) {
      res.render('pip17/helper', {
        answers : req.session['pip17-helper'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip17/helper', function (req, res) {
    req.session['pip17-helper'] = req.body;
    if (req.body.saveAndMenu) {
      res.redirect('/pip17/checkYourAnswers');
    } else {
      res.redirect('/pip17/aboutYou');
    }
  });

  /*******************
  aboutYou
  *******************/
  app.get('/pip17/aboutYou', function (req, res) {
      res.render('pip17/aboutYou', {
        answers : req.session['pip17-aboutYou'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip17/aboutYou', function (req, res) {
    req.session['pip17-aboutYou'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip17/checkYourAnswers');
    } else {
      res.redirect('/pip17/contactDetails');
    }
  });

  /*******************
  contactDetails
  *******************/
  app.get('/pip17/contactDetails', function (req, res) {
      res.render('pip17/contactDetails', {
        answers : req.session['pip17-contactDetails'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip17/contactDetails', function (req, res) {
    req.session['pip17-contactDetails'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip17/checkYourAnswers');
    } else {
      res.redirect('/pip17/contactPref');
    }
  });

  /*******************
  contactPref
  *******************/
  app.get('/pip17/contactPref', function (req, res) {
      res.render('pip17/contactPref', {
        answers : req.session['pip17-contactPref'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip17/contactPref', function (req, res) {
    req.session['pip17-contactPref'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip17/checkYourAnswers');
    } else {
      res.redirect('/pip17/currentWhereabouts');
    }
  });

  /*******************
  currentWhereabouts
  *******************/
  app.get('/pip17/currentWhereabouts', function (req, res) {
      res.render('pip17/currentWhereabouts', {
        answers : req.session['pip17-currentWhereabouts'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip17/currentWhereabouts', function (req, res) {
    req.session['pip17-currentWhereabouts'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip17/checkYourAnswers');
    } else {
      res.redirect('/pip17/nationality');
    }
  });

  /*******************
  nationality
  *******************/
  app.get('/pip17/nationality', function (req, res) {
    res.render('pip17/nationality', {
      answers : req.session['pip17-nationality'],
      'edit'  : req.body.saveAndMenu,
      data    : aboutYou.getTableData()
    });
  });

  app.post('/pip17/nationality', function (req, res) {
    req.session['pip17-nationality'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip17/checkYourAnswers');
    } else {
      res.redirect('/pip17/paymentsFromAbroad');
    }
  });

  /*******************
  paymentsFromAbroad
  *******************/
  app.get('/pip17/paymentsFromAbroad', function (req, res) {
      res.render('pip17/paymentsFromAbroad', {
        answers : req.session['pip17-paymentsFromAbroad'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip17/paymentsFromAbroad', function (req, res) {
    req.session['pip17-paymentsFromAbroad'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip17/checkYourAnswers');
    } else {
      res.redirect('/pip17/checkYourAnswers');
    }
  });

  /*******************
  conditionDetails
  *******************/
  app.get('/pip17/conditionDetails', function (req, res) {
      res.render('pip17/conditionDetails', {
        answers : req.session['pip17-conditionDetails'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip17/conditionDetails', function (req, res) {
    req.session['pip17-conditionDetails'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip17/checkYourAnswers');
    } else {
      res.redirect('/pip17/medications');
    }
  });

  /*******************
  medications
  *******************/
  app.get('/pip17/medications', function (req, res) {
      res.render('pip17/medications', {
        answers : req.session['pip17-medications'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip17/medications', function (req, res) {
    req.session['pip17-medications'] = req.body;

    if(req.body.takingMedication === 'Yes') {
       if (req.body.saveAndMenu) {
         res.redirect('/pip17/manageMedications?edit=true');
       } else {
         res.redirect('/pip17/manageMedications');
       }
     } else if (req.body.saveAndMenu) {
       res.redirect('/pip17/checkYourAnswers');
     } else {
       res.redirect('/pip17/treatments');
     }
  });

  /*******************
  manageMedications
  *******************/
  app.get('/pip17/manageMedications', function (req, res) {
      res.render('pip17/manageMedications', {
        answers : req.session['pip17-manageMedications'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip17/manageMedications', function (req, res) {
    req.session['pip17-manageMedications'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip17/checkYourAnswers');
    } else {
      res.redirect('/pip17/treatments');
    }
  });

  /*******************
  treatments
  *******************/
  app.get('/pip17/treatments', function (req, res) {
      res.render('pip17/treatments', {
        answers : req.session['pip17-treatments'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip17/treatments', function (req, res) {
    req.session['pip17-treatments'] = req.body;

    if(req.body.atHome === 'Yes') {
       if (req.body.saveAndMenu) {
         res.redirect('/pip17/manageTreatments?edit=true');
       } else {
         res.redirect('/pip17/manageTreatments');
       }
     } else if (req.body.saveAndMenu) {
       res.redirect('/pip17/checkYourAnswers');
     } else {
       res.redirect('/pip17/sideEffects');
     }

  });

  /*******************
  manageTreatments
  *******************/
  app.get('/pip17/manageTreatments', function (req, res) {
      res.render('pip17/manageTreatments', {
        answers : req.session['pip17-manageTreatments'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip17/manageTreatments', function (req, res) {
    req.session['pip17-manageTreatments'] = req.body;

  if (req.body.saveAndMenu) {
       res.redirect('/pip17/checkYourAnswers');
     } else {
       res.redirect('/pip17/sideEffects');
     }

  });

  /*******************
  sideEffects
  *******************/
  app.get('/pip17/sideEffects', function (req, res) {
      res.render('pip17/sideEffects', {
        answers : req.session['pip17-sideEffects'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip17/sideEffects', function (req, res) {
    req.session['pip17-sideEffects'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip17/checkYourAnswers');
    } else {
      res.redirect('/pip17/conditionAffects');
    }
  });

  /*******************
  conditionAffects
  *******************/
  app.get('/pip17/conditionAffects', function (req, res) {
      res.render('pip17/conditionAffects', {
        answers : req.session['pip17-conditionAffects'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip17/conditionAffects', function (req, res) {
    req.session['pip17-conditionAffects'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip17/checkYourAnswers');
    } else {
      res.redirect('/pip17/monitoringCondition');
    }
  });

  /*******************
  monitoringCondition
  *******************/
  app.get('/pip17/monitoringCondition', function (req, res) {
      res.render('pip17/monitoringCondition', {
        answers : req.session['pip17-monitoringCondition'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip17/monitoringCondition', function (req, res) {
    req.session['pip17-monitoringCondition'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip17/checkYourAnswers');
    } else {
      res.redirect('/pip17/healthcareprofessional');
    }
  });

  /*******************
  healthcareprofessional
  *******************/
  app.get('/pip17/healthcareprofessional', function (req, res) {
      res.render('pip17/healthcareprofessional', {
        answers : req.session['pip17-healthcareprofessional'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip17/healthcareprofessional', function (req, res) {
    req.session['pip17-healthcareprofessional'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip17/checkYourAnswers');
    } else {
      res.redirect('/pip17/submitEvidence');
    }
  });

  /*******************
  submitEvidence
  *******************/
  app.get('/pip17/submitEvidence', function (req, res) {
      res.render('pip17/submitEvidence', {
        answers : req.session['pip17-submitEvidence'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip17/submitEvidence', function (req, res) {
    req.session['pip17-submitEvidence'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip17/checkYourAnswers');
    } else {
      res.redirect('/pip17/specialAids');
    }
  });

  /*******************
  specialAids
  *******************/
  app.get('/pip17/specialAids', function (req, res) {
      res.render('pip17/specialAids', {
        answers : req.session['pip17-specialAids'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip17/specialAids', function (req, res) {
    req.session['pip17-specialAids'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip17/checkYourAnswers');
    } else {
      res.redirect('/pip17/sight');
    }
  });

  /*******************
  sight
  *******************/
  app.get('/pip17/sight', function (req, res) {
      res.render('pip17/sight', {
        answers : req.session['pip17-sight'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip17/sight', function (req, res) {
    req.session['pip17-sight'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip17/checkYourAnswers');
    } else {
      res.redirect('/pip17/speech');
    }
  });

  /*******************
  speech
  *******************/
  app.get('/pip17/speech', function (req, res) {
      res.render('pip17/speech', {
        answers : req.session['pip17-speech'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip17/speech', function (req, res) {
    req.session['pip17-speech'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip17/checkYourAnswers');
    } else {
      res.redirect('/pip17/hearing');
    }
  });

  /*******************
  hearing
  *******************/
  app.get('/pip17/hearing', function (req, res) {
      res.render('pip17/hearing', {
        answers : req.session['pip17-hearing'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip17/hearing', function (req, res) {
    req.session['pip17-hearing'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip17/checkYourAnswers');
    } else {
      res.redirect('/pip17/checkYourAnswers');
    }
  });

  /*******************
  gettingUp
  *******************/
  app.get('/pip17/gettingUp', function (req, res) {
      res.render('pip17/gettingUp', {
        answers : req.session['pip17-gettingUp'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip17/gettingUp', function (req, res) {
    req.session['pip17-gettingUp'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip17/checkYourAnswers');
    } else {
      res.redirect('/pip17/toilet');
    }
  });

  /*******************
  toilet
  *******************/
  app.get('/pip17/toilet', function (req, res) {
      res.render('pip17/toilet', {
        answers : req.session['pip17-toilet'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip17/toilet', function (req, res) {
    req.session['pip17-toilet'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip17/checkYourAnswers');
    } else {
      res.redirect('/pip17/washing');
    }
  });

  /*******************
  washing
  *******************/
  app.get('/pip17/washing', function (req, res) {
      res.render('pip17/washing', {
        answers : req.session['pip17-washing'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip17/washing', function (req, res) {
    req.session['pip17-washing'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip17/checkYourAnswers');
    } else {
      res.redirect('/pip17/gettingDressed');
    }
  });

  /*******************
  gettingDressed
  *******************/
  app.get('/pip17/gettingDressed', function (req, res) {
      res.render('pip17/gettingDressed', {
        answers : req.session['pip17-gettingDressed'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip17/gettingDressed', function (req, res) {
    req.session['pip17-gettingDressed'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip17/checkYourAnswers');
    } else {
      res.redirect('/pip17/hotMeal');
    }
  });

  /*******************
  hotMeal
  *******************/
  app.get('/pip17/hotMeal', function (req, res) {
      res.render('pip17/hotMeal', {
        answers : req.session['pip17-hotMeal'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip17/hotMeal', function (req, res) {
    req.session['pip17-hotMeal'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip17/checkYourAnswers');
    } else {
      res.redirect('/pip17/eatingAndDrinking');
    }
  });

  /*******************
  eatingAndDrinking
  *******************/
  app.get('/pip17/eatingAndDrinking', function (req, res) {
      res.render('pip17/eatingAndDrinking', {
        answers : req.session['pip17-eatingAndDrinking'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip17/eatingAndDrinking', function (req, res) {
    req.session['pip17-eatingAndDrinking'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip17/checkYourAnswers');
    } else {
      res.redirect('/pip17/checkYourAnswers');
    }
  });

  /*******************
  gettingOut
  *******************/
  app.get('/pip17/gettingOut', function (req, res) {
      res.render('pip17/gettingOut', {
        answers : req.session['pip17-gettingOut'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip17/gettingOut', function (req, res) {
    req.session['pip17-gettingOut'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip17/checkYourAnswers');
    } else {
      res.redirect('/pip17/mixing');
    }
  });


  /*******************
  mixing
  *******************/
  app.get('/pip17/mixing', function (req, res) {
      res.render('pip17/mixing', {
        answers : req.session['pip17-mixing'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip17/mixing', function (req, res) {
    req.session['pip17-mixing'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip17/checkYourAnswers');
    } else {
      res.redirect('/pip17/checkYourAnswers');
    }
  });

  /*******************
  localJourney
  *******************/
  app.get('/pip17/localJourney', function (req, res) {
      res.render('pip17/localJourney', {
        answers : req.session['pip17-localJourney'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip17/localJourney', function (req, res) {
    req.session['pip17-localJourney'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip17/checkYourAnswers');
    } else {
      res.redirect('/pip17/somewhereNeverBeenBefore');
    }
  });

  /*******************
  somewhereNeverBeenBefore
  *******************/
  app.get('/pip17/somewhereNeverBeenBefore', function (req, res) {
      res.render('pip17/somewhereNeverBeenBefore', {
        answers : req.session['pip17-somewhereNeverBeenBefore'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip17/somewhereNeverBeenBefore', function (req, res) {
    req.session['pip17-somewhereNeverBeenBefore'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip17/checkYourAnswers');
    } else {
      res.redirect('/pip17/understanding');
    }
  });

  /*******************
  somewhereYouKnow
  *******************/
  app.get('/pip17/somewhereYouKnow', function (req, res) {
      res.render('pip17/somewhereYouKnow', {
        answers : req.session['pip17-somewhereYouKnow'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip17/somewhereYouKnow', function (req, res) {
    req.session['pip17-somewhereYouKnow'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip17/checkYourAnswers');
    } else {
      res.redirect('/pip17/understanding');
    }
  });

  /*******************
  understanding
  *******************/
  app.get('/pip17/understanding', function (req, res) {
      res.render('pip17/understanding', {
        answers : req.session['pip17-understanding'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip17/understanding', function (req, res) {
    req.session['pip17-understanding'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip17/checkYourAnswers');
    } else {
      res.redirect('/pip17/money');
    }
  });

  /*******************
  money
  *******************/
  app.get('/pip17/money', function (req, res) {
      res.render('pip17/money', {
        answers : req.session['pip17-money'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip17/money', function (req, res) {
    req.session['pip17-money'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip17/checkYourAnswers');
    } else {
      res.redirect('/pip17/checkYourAnswers');
    }
  });

  /*******************
  checkYourAnswers
  *******************/
  app.get('/pip17/checkYourAnswers', function (req, res) {
      res.render('pip17/checkYourAnswers', {
        data                     : aboutYou.getTableData(),
        dataCheckChange          : checkYourAnswers.getTableData(),
        helper                   : req.session['pip17-helper'],
        aboutYou                 : req.session['pip17-aboutYou'],
        contactDetails           : req.session['pip17-contactDetails'],
        contactPref              : req.session['pip17-contactPref'],
        currentWhereabouts       : req.session['pip17-currentWhereabouts'],
        nationality              : req.session['pip17-nationality'],
        paymentsFromAbroad       : req.session['pip17-paymentsFromAbroad'],
        conditionDetails         : req.session['pip17-conditionDetails'],
        medications              : req.session['pip17-medications'],
        manageMedications        : req.session['pip17-manageMedications'],
        treatments               : req.session['pip17-treatments'],
        sideEffects              : req.session['pip17-sideEffects'],
        conditionAffects         : req.session['pip17-conditionAffects'],
        monitoringCondition      : req.session['pip17-monitoringCondition'],
        healthcareprofessional   : req.session['pip17-healthcareprofessional'],
        submitEvidence           : req.session['pip17-submitEvidence'],
        specialAids              : req.session['pip17-specialAids'],
        sight                    : req.session['pip17-sight'],
        speech                   : req.session['pip17-speech'],
        hearing                  : req.session['pip17-hearing'],
        gettingUp                : req.session['pip17-gettingUp'],
        toilet                   : req.session['pip17-toilet'],
        washing                  : req.session['pip17-washing'],
        gettingDressed           : req.session['pip17-gettingDressed'],
        hotMeal                  : req.session['pip17-hotMeal'],
        eatingAndDrinking        : req.session['pip17-eatingAndDrinking'],
        gettingOut               : req.session['pip17-gettingOut'],
        mixing                   : req.session['pip17-mixing'],
        localJourney             : req.session['pip17-localJourney'],
        somewhereNeverBeenBefore : req.session['pip17-somewhereNeverBeenBefore'],
        somewhereYouKnow         : req.session['pip17-somewhereYouKnow'],
        understanding            : req.session['pip17-understanding'],
        money                    : req.session['pip17-money']
      });
  });

  app.post('/pip17/checkYourAnswers', function (req, res) {
    req.session['pip17-checkYourAnswers'] = req.body;
    res.redirect('/pip17/additionalInfo');
  });

  /*******************
  additionalInfo
  *******************/
  app.get('/pip17/additionalInfo', function (req, res) {
      res.render('pip17/additionalInfo', {
        answers : req.session['pip17-additionalInfo'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip17/additionalInfo', function (req, res) {
    req.session['pip17-additionalInfo'] = req.body;
    res.redirect('/pip17/declaration');
  });

  /*******************
  declaration
  *******************/
  app.get('/pip17/declaration', function (req, res) {
      res.render('pip17/declaration', {
        answers : req.session['pip17-declaration'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip17/declaration', function (req, res) {
    req.session['pip17-declaration'] = req.body;
    res.redirect('/pip17/thankYou');
  });

  /*******************
  thankYou
  *******************/
  app.get('/pip17/thankYou', function (req, res) {
      res.render('pip17/thankYou', {
        answers : req.session['pip17-thankYou'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });


};
