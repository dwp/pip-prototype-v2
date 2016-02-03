module.exports = function (app) {

  var styleguide        = require('./views/pip16/content/styleguide'),
      aboutYou          = require('./views/pip16/content/aboutYou'),
      checkYourAnswers  = require('./views/pip16/content/checkYourAnswers');

  app.get('/pip16/styleguide', function (req, res) {
    res.render('pip16/styleguide', {
      answers : req.session['pip16-helper'],
      data    : styleguide.getTableData()
    });
  });

  /*******************
  reset answers
  *******************/
  app.get('/pip16/reset', function (req, res) {
      res.render('pip16/reset');
  });

  app.post('/pip16/reset', function (req, res) {
    req.session.destroy();
    res.redirect('/pip16/apply');

  });

  /*******************
  summaryMain
  *******************/
  app.get('/pip16/summaryMain', function (req, res) {
      res.render('pip16/summaryMain', {
        'show'  : req.param('show'),
        'next'  : req.param('next'),
        'back'  : req.param('back')
      });
  });

  /*******************
  Helper
  *******************/
  app.get('/pip16/helper', function (req, res) {
      res.render('pip16/helper', {
        answers : req.session['pip16-helper'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip16/helper', function (req, res) {
    req.session['pip16-helper'] = req.body;
    if (req.body.saveAndMenu) {
      res.redirect('/pip16/checkYourAnswers');
    } else {
      res.redirect('/pip16/aboutYou');
    }
  });

  /*******************
  aboutYou
  *******************/
  app.get('/pip16/aboutYou', function (req, res) {
      res.render('pip16/aboutYou', {
        answers : req.session['pip16-aboutYou'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip16/aboutYou', function (req, res) {
    req.session['pip16-aboutYou'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip16/checkYourAnswers');
    } else {
      res.redirect('/pip16/contactDetails');
    }
  });

  /*******************
  contactDetails
  *******************/
  app.get('/pip16/contactDetails', function (req, res) {
      res.render('pip16/contactDetails', {
        answers : req.session['pip16-contactDetails'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip16/contactDetails', function (req, res) {
    req.session['pip16-contactDetails'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip16/checkYourAnswers');
    } else {
      res.redirect('/pip16/contactPref');
    }
  });

  /*******************
  contactPref
  *******************/
  app.get('/pip16/contactPref', function (req, res) {
      res.render('pip16/contactPref', {
        answers : req.session['pip16-contactPref'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip16/contactPref', function (req, res) {
    req.session['pip16-contactPref'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip16/checkYourAnswers');
    } else {
      res.redirect('/pip16/currentWhereabouts');
    }
  });

  /*******************
  currentWhereabouts
  *******************/
  app.get('/pip16/currentWhereabouts', function (req, res) {
      res.render('pip16/currentWhereabouts', {
        answers : req.session['pip16-currentWhereabouts'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip16/currentWhereabouts', function (req, res) {
    req.session['pip16-currentWhereabouts'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip16/checkYourAnswers');
    } else {
      res.redirect('/pip16/nationality');
    }
  });

  /*******************
  nationality
  *******************/
  app.get('/pip16/nationality', function (req, res) {
    res.render('pip16/nationality', {
      answers : req.session['pip16-nationality'],
      'edit'  : req.body.saveAndMenu,
      data    : aboutYou.getTableData()
    });
  });

  app.post('/pip16/nationality', function (req, res) {
    req.session['pip16-nationality'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip16/checkYourAnswers');
    } else {
      res.redirect('/pip16/paymentsFromAbroad');
    }
  });

  /*******************
  paymentsFromAbroad
  *******************/
  app.get('/pip16/paymentsFromAbroad', function (req, res) {
      res.render('pip16/paymentsFromAbroad', {
        answers : req.session['pip16-paymentsFromAbroad'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip16/paymentsFromAbroad', function (req, res) {
    req.session['pip16-paymentsFromAbroad'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip16/checkYourAnswers');
    } else {
      res.redirect('/pip16/conditionDetails');
    }
  });

  /*******************
  conditionDetails
  *******************/
  app.get('/pip16/conditionDetails', function (req, res) {
      res.render('pip16/conditionDetails', {
        answers : req.session['pip16-conditionDetails'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip16/conditionDetails', function (req, res) {
    req.session['pip16-conditionDetails'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip16/checkYourAnswers');
    } else {
      res.redirect('/pip16/medications');
    }
  });

  /*******************
  medications
  *******************/
  app.get('/pip16/medications', function (req, res) {
      res.render('pip16/medications', {
        answers : req.session['pip16-medications'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip16/medications', function (req, res) {
    req.session['pip16-medications'] = req.body;

    if(req.body.takingMedication === 'Yes') {
       if (req.body.saveAndMenu) {
         res.redirect('/pip16/manageMedications?edit=true');
       } else {
         res.redirect('/pip16/manageMedications');
       }
     } else if (req.body.saveAndMenu) {
       res.redirect('/pip16/checkYourAnswers');
     } else {
       res.redirect('/pip16/treatments');
     }
  });

  /*******************
  manageMedications
  *******************/
  app.get('/pip16/manageMedications', function (req, res) {
      res.render('pip16/manageMedications', {
        answers : req.session['pip16-manageMedications'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip16/manageMedications', function (req, res) {
    req.session['pip16-manageMedications'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip16/checkYourAnswers');
    } else {
      res.redirect('/pip16/treatments');
    }
  });

  /*******************
  treatments
  *******************/
  app.get('/pip16/treatments', function (req, res) {
      res.render('pip16/treatments', {
        answers : req.session['pip16-treatments'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip16/treatments', function (req, res) {
    req.session['pip16-treatments'] = req.body;

    if(req.body.atHome === 'Yes') {
       if (req.body.saveAndMenu) {
         res.redirect('/pip16/manageTreatments?edit=true');
       } else {
         res.redirect('/pip16/manageTreatments');
       }
     } else if (req.body.saveAndMenu) {
       res.redirect('/pip16/checkYourAnswers');
     } else {
       res.redirect('/pip16/sideEffects');
     }

  });

  /*******************
  manageTreatments
  *******************/
  app.get('/pip16/manageTreatments', function (req, res) {
      res.render('pip16/manageTreatments', {
        answers : req.session['pip16-manageTreatments'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip16/manageTreatments', function (req, res) {
    req.session['pip16-manageTreatments'] = req.body;

  if (req.body.saveAndMenu) {
       res.redirect('/pip16/checkYourAnswers');
     } else {
       res.redirect('/pip16/sideEffects');
     }

  });

  /*******************
  sideEffects
  *******************/
  app.get('/pip16/sideEffects', function (req, res) {
      res.render('pip16/sideEffects', {
        answers : req.session['pip16-sideEffects'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip16/sideEffects', function (req, res) {
    req.session['pip16-sideEffects'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip16/checkYourAnswers');
    } else {
      res.redirect('/pip16/conditionAffects');
    }
  });

  /*******************
  conditionAffects
  *******************/
  app.get('/pip16/conditionAffects', function (req, res) {
      res.render('pip16/conditionAffects', {
        answers : req.session['pip16-conditionAffects'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip16/conditionAffects', function (req, res) {
    req.session['pip16-conditionAffects'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip16/checkYourAnswers');
    } else {
      res.redirect('/pip16/monitoringCondition');
    }
  });

  /*******************
  monitoringCondition
  *******************/
  app.get('/pip16/monitoringCondition', function (req, res) {
      res.render('pip16/monitoringCondition', {
        answers : req.session['pip16-monitoringCondition'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip16/monitoringCondition', function (req, res) {
    req.session['pip16-monitoringCondition'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip16/checkYourAnswers');
    } else {
      res.redirect('/pip16/healthcareprofessional');
    }
  });

  /*******************
  healthcareprofessional
  *******************/
  app.get('/pip16/healthcareprofessional', function (req, res) {
      res.render('pip16/healthcareprofessional', {
        answers : req.session['pip16-healthcareprofessional'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip16/healthcareprofessional', function (req, res) {
    req.session['pip16-healthcareprofessional'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip16/checkYourAnswers');
    } else {
      res.redirect('/pip16/submitEvidence');
    }
  });

  /*******************
  submitEvidence
  *******************/
  app.get('/pip16/submitEvidence', function (req, res) {
      res.render('pip16/submitEvidence', {
        answers : req.session['pip16-submitEvidence'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip16/submitEvidence', function (req, res) {
    req.session['pip16-submitEvidence'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip16/checkYourAnswers');
    } else {
      res.redirect('/pip16/specialAids');
    }
  });

  /*******************
  specialAids
  *******************/
  app.get('/pip16/specialAids', function (req, res) {
      res.render('pip16/specialAids', {
        answers : req.session['pip16-specialAids'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip16/specialAids', function (req, res) {
    req.session['pip16-specialAids'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip16/checkYourAnswers');
    } else {
      res.redirect('/pip16/sight');
    }
  });

  /*******************
  sight
  *******************/
  app.get('/pip16/sight', function (req, res) {
      res.render('pip16/sight', {
        answers : req.session['pip16-sight'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip16/sight', function (req, res) {
    req.session['pip16-sight'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip16/checkYourAnswers');
    } else {
      res.redirect('/pip16/speech');
    }
  });

  /*******************
  speech
  *******************/
  app.get('/pip16/speech', function (req, res) {
      res.render('pip16/speech', {
        answers : req.session['pip16-speech'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip16/speech', function (req, res) {
    req.session['pip16-speech'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip16/checkYourAnswers');
    } else {
      res.redirect('/pip16/hearing');
    }
  });

  /*******************
  hearing
  *******************/
  app.get('/pip16/hearing', function (req, res) {
      res.render('pip16/hearing', {
        answers : req.session['pip16-hearing'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip16/hearing', function (req, res) {
    req.session['pip16-hearing'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip16/checkYourAnswers');
    } else {
      res.redirect('/pip16/gettingUp');
    }
  });

  /*******************
  gettingUp
  *******************/
  app.get('/pip16/gettingUp', function (req, res) {
      res.render('pip16/gettingUp', {
        answers : req.session['pip16-gettingUp'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip16/gettingUp', function (req, res) {
    req.session['pip16-gettingUp'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip16/checkYourAnswers');
    } else {
      res.redirect('/pip16/toilet');
    }
  });

  /*******************
  toilet
  *******************/
  app.get('/pip16/toilet', function (req, res) {
      res.render('pip16/toilet', {
        answers : req.session['pip16-toilet'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip16/toilet', function (req, res) {
    req.session['pip16-toilet'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip16/checkYourAnswers');
    } else {
      res.redirect('/pip16/washing');
    }
  });

  /*******************
  washing
  *******************/
  app.get('/pip16/washing', function (req, res) {
      res.render('pip16/washing', {
        answers : req.session['pip16-washing'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip16/washing', function (req, res) {
    req.session['pip16-washing'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip16/checkYourAnswers');
    } else {
      res.redirect('/pip16/gettingDressed');
    }
  });

  /*******************
  gettingDressed
  *******************/
  app.get('/pip16/gettingDressed', function (req, res) {
      res.render('pip16/gettingDressed', {
        answers : req.session['pip16-gettingDressed'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip16/gettingDressed', function (req, res) {
    req.session['pip16-gettingDressed'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip16/checkYourAnswers');
    } else {
      res.redirect('/pip16/hotMeal');
    }
  });

  /*******************
  hotMeal
  *******************/
  app.get('/pip16/hotMeal', function (req, res) {
      res.render('pip16/hotMeal', {
        answers : req.session['pip16-hotMeal'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip16/hotMeal', function (req, res) {
    req.session['pip16-hotMeal'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip16/checkYourAnswers');
    } else {
      res.redirect('/pip16/eatingAndDrinking');
    }
  });

  /*******************
  eatingAndDrinking
  *******************/
  app.get('/pip16/eatingAndDrinking', function (req, res) {
      res.render('pip16/eatingAndDrinking', {
        answers : req.session['pip16-eatingAndDrinking'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip16/eatingAndDrinking', function (req, res) {
    req.session['pip16-eatingAndDrinking'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip16/checkYourAnswers');
    } else {
      res.redirect('/pip16/gettingOut');
    }
  });

  /*******************
  gettingOut
  *******************/
  app.get('/pip16/gettingOut', function (req, res) {
      res.render('pip16/gettingOut', {
        answers : req.session['pip16-gettingOut'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip16/gettingOut', function (req, res) {
    req.session['pip16-gettingOut'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip16/checkYourAnswers');
    } else {
      res.redirect('/pip16/mixing');
    }
  });


  /*******************
  mixing
  *******************/
  app.get('/pip16/mixing', function (req, res) {
      res.render('pip16/mixing', {
        answers : req.session['pip16-mixing'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip16/mixing', function (req, res) {
    req.session['pip16-mixing'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip16/checkYourAnswers');
    } else {
      res.redirect('/pip16/localJourney');
    }
  });

  /*******************
  localJourney
  *******************/
  app.get('/pip16/localJourney', function (req, res) {
      res.render('pip16/localJourney', {
        answers : req.session['pip16-localJourney'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip16/localJourney', function (req, res) {
    req.session['pip16-localJourney'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip16/checkYourAnswers');
    } else {
      res.redirect('/pip16/somewhereNeverBeenBefore');
    }
  });

  /*******************
  somewhereNeverBeenBefore
  *******************/
  app.get('/pip16/somewhereNeverBeenBefore', function (req, res) {
      res.render('pip16/somewhereNeverBeenBefore', {
        answers : req.session['pip16-somewhereNeverBeenBefore'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip16/somewhereNeverBeenBefore', function (req, res) {
    req.session['pip16-somewhereNeverBeenBefore'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip16/checkYourAnswers');
    } else {
      res.redirect('/pip16/somewhereYouKnow');
    }
  });

  /*******************
  somewhereYouKnow
  *******************/
  app.get('/pip16/somewhereYouKnow', function (req, res) {
      res.render('pip16/somewhereYouKnow', {
        answers : req.session['pip16-somewhereYouKnow'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip16/somewhereYouKnow', function (req, res) {
    req.session['pip16-somewhereYouKnow'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip16/checkYourAnswers');
    } else {
      res.redirect('/pip16/understanding');
    }
  });

  /*******************
  understanding
  *******************/
  app.get('/pip16/understanding', function (req, res) {
      res.render('pip16/understanding', {
        answers : req.session['pip16-understanding'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip16/understanding', function (req, res) {
    req.session['pip16-understanding'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip16/checkYourAnswers');
    } else {
      res.redirect('/pip16/money');
    }
  });

  /*******************
  money
  *******************/
  app.get('/pip16/money', function (req, res) {
      res.render('pip16/money', {
        answers : req.session['pip16-money'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip16/money', function (req, res) {
    req.session['pip16-money'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip16/checkYourAnswers');
    } else {
      res.redirect('/pip16/checkYourAnswers');
    }
  });

  /*******************
  checkYourAnswers
  *******************/
  app.get('/pip16/checkYourAnswers', function (req, res) {
      res.render('pip16/checkYourAnswers', {
        data                     : aboutYou.getTableData(),
        dataCheckChange          : checkYourAnswers.getTableData(),
        helper                   : req.session['pip16-helper'],
        aboutYou                 : req.session['pip16-aboutYou'],
        contactDetails           : req.session['pip16-contactDetails'],
        contactPref              : req.session['pip16-contactPref'],
        currentWhereabouts       : req.session['pip16-currentWhereabouts'],
        nationality              : req.session['pip16-nationality'],
        paymentsFromAbroad       : req.session['pip16-paymentsFromAbroad'],
        conditionDetails         : req.session['pip16-conditionDetails'],
        medications              : req.session['pip16-medications'],
        manageMedications        : req.session['pip16-manageMedications'],
        treatments               : req.session['pip16-treatments'],
        sideEffects              : req.session['pip16-sideEffects'],
        conditionAffects         : req.session['pip16-conditionAffects'],
        monitoringCondition      : req.session['pip16-monitoringCondition'],
        healthcareprofessional   : req.session['pip16-healthcareprofessional'],
        submitEvidence           : req.session['pip16-submitEvidence'],
        specialAids              : req.session['pip16-specialAids'],
        sight                    : req.session['pip16-sight'],
        speech                   : req.session['pip16-speech'],
        hearing                  : req.session['pip16-hearing'],
        gettingUp                : req.session['pip16-gettingUp'],
        toilet                   : req.session['pip16-toilet'],
        washing                  : req.session['pip16-washing'],
        gettingDressed           : req.session['pip16-gettingDressed'],
        hotMeal                  : req.session['pip16-hotMeal'],
        eatingAndDrinking        : req.session['pip16-eatingAndDrinking'],
        gettingOut               : req.session['pip16-gettingOut'],
        mixing                   : req.session['pip16-mixing'],
        localJourney             : req.session['pip16-localJourney'],
        somewhereNeverBeenBefore : req.session['pip16-somewhereNeverBeenBefore'],
        somewhereYouKnow         : req.session['pip16-somewhereYouKnow'],
        understanding            : req.session['pip16-understanding'],
        money                    : req.session['pip16-money']
      });
  });

  app.post('/pip16/checkYourAnswers', function (req, res) {
    req.session['pip16-checkYourAnswers'] = req.body;
    res.redirect('/pip16/additionalInfo');
  });

  /*******************
  additionalInfo
  *******************/
  app.get('/pip16/additionalInfo', function (req, res) {
      res.render('pip16/additionalInfo', {
        answers : req.session['pip16-additionalInfo'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip16/additionalInfo', function (req, res) {
    req.session['pip16-additionalInfo'] = req.body;
    res.redirect('/pip16/declaration');
  });

  /*******************
  declaration
  *******************/
  app.get('/pip16/declaration', function (req, res) {
      res.render('pip16/declaration', {
        answers : req.session['pip16-declaration'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip16/declaration', function (req, res) {
    req.session['pip16-declaration'] = req.body;
    res.redirect('/pip16/thankYou');
  });

  /*******************
  thankYou
  *******************/
  app.get('/pip16/thankYou', function (req, res) {
      res.render('pip16/thankYou', {
        answers : req.session['pip16-thankYou'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });


};
