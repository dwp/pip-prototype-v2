module.exports = function (app) {

  var styleguide        = require('./views/pip18/content/styleguide'),
      aboutYou          = require('./views/pip18/content/aboutYou'),
      checkYourAnswers  = require('./views/pip18/content/checkYourAnswers');

  app.get('/pip18/styleguide', function (req, res) {
    res.render('pip18/styleguide', {
      answers : req.session['pip18-helper'],
      data    : styleguide.getTableData()
    });
  });

  /*******************
  reset answers
  *******************/
  app.get('/pip18/reset', function (req, res) {
      res.render('pip18/reset');
  });

  app.post('/pip18/reset', function (req, res) {
    req.session.destroy();
    res.redirect('/pip18/apply');

  });

  /*******************
  summaryMain
  *******************/
  app.get('/pip18/summaryMain', function (req, res) {
      res.render('pip18/summaryMain', {
        'show'  : req.param('show'),
        'next'  : req.param('next'),
        'back'  : req.param('back')
      });
  });

  /*******************
  Helper
  *******************/
  app.get('/pip18/helper', function (req, res) {
      res.render('pip18/helper', {
        answers : req.session['pip18-helper'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip18/helper', function (req, res) {
    req.session['pip18-helper'] = req.body;
    if (req.body.saveAndMenu) {
      res.redirect('/pip18/checkYourAnswers#aboutYou');
    } else {
      res.redirect('/pip18/aboutYou');
    }
  });

  /*******************
  aboutYou
  *******************/
  app.get('/pip18/aboutYou', function (req, res) {
      res.render('pip18/aboutYou', {
        answers : req.session['pip18-aboutYou'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip18/aboutYou', function (req, res) {
    req.session['pip18-aboutYou'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip18/checkYourAnswers#aboutYou');
    } else {
      res.redirect('/pip18/contactDetails');
    }
  });

  /*******************
  contactDetails
  *******************/
  app.get('/pip18/contactDetails', function (req, res) {
      res.render('pip18/contactDetails', {
        answers : req.session['pip18-contactDetails'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip18/contactDetails', function (req, res) {
    req.session['pip18-contactDetails'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip18/checkYourAnswers#aboutYou');
    } else {
      res.redirect('/pip18/contactPref');
    }
  });

  /*******************
  contactPref
  *******************/
  app.get('/pip18/contactPref', function (req, res) {
      res.render('pip18/contactPref', {
        answers : req.session['pip18-contactPref'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip18/contactPref', function (req, res) {
    req.session['pip18-contactPref'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip18/checkYourAnswers#aboutYou');
    } else {
      res.redirect('/pip18/currentWhereabouts');
    }
  });

  /*******************
  currentWhereabouts
  *******************/
  app.get('/pip18/currentWhereabouts', function (req, res) {
      res.render('pip18/currentWhereabouts', {
        answers : req.session['pip18-currentWhereabouts'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip18/currentWhereabouts', function (req, res) {
    req.session['pip18-currentWhereabouts'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip18/checkYourAnswers#aboutYou');
    } else {
      res.redirect('/pip18/nationality');
    }
  });

  /*******************
  nationality
  *******************/
  app.get('/pip18/nationality', function (req, res) {
    res.render('pip18/nationality', {
      answers : req.session['pip18-nationality'],
      'edit'  : req.body.saveAndMenu,
      data    : aboutYou.getTableData()
    });
  });

  app.post('/pip18/nationality', function (req, res) {
    req.session['pip18-nationality'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip18/checkYourAnswers#aboutYou');
    } else {
      res.redirect('/pip18/paymentsFromAbroad');
    }
  });

  /*******************
  paymentsFromAbroad
  *******************/
  app.get('/pip18/paymentsFromAbroad', function (req, res) {
      res.render('pip18/paymentsFromAbroad', {
        answers : req.session['pip18-paymentsFromAbroad'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip18/paymentsFromAbroad', function (req, res) {
    req.session['pip18-paymentsFromAbroad'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip18/checkYourAnswers#aboutYou');
    } else {
      res.redirect('/pip18/checkYourAnswers#aboutYou');
    }
  });

  /*******************
  conditionDetails
  *******************/
  app.get('/pip18/conditionDetails', function (req, res) {
      res.render('pip18/conditionDetails', {
        answers : req.session['pip18-conditionDetails'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip18/conditionDetails', function (req, res) {
    req.session['pip18-conditionDetails'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip18/checkYourAnswers#yourCondition');
    } else {
      res.redirect('/pip18/medications');
    }
  });

  /*******************
  medications
  *******************/
  app.get('/pip18/medications', function (req, res) {
      res.render('pip18/medications', {
        answers : req.session['pip18-medications'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip18/medications', function (req, res) {
    req.session['pip18-medications'] = req.body;

    if(req.body.takingMedication === 'Yes') {
       if (req.body.saveAndMenu) {
         res.redirect('/pip18/manageMedications?edit=true');
       } else {
         res.redirect('/pip18/manageMedications');
       }
     } else if (req.body.saveAndMenu) {
       res.redirect('/pip18/checkYourAnswers#yourCondition');
     } else {
       res.redirect('/pip18/treatments');
     }
  });

  /*******************
  manageMedications
  *******************/
  app.get('/pip18/manageMedications', function (req, res) {
      res.render('pip18/manageMedications', {
        answers : req.session['pip18-manageMedications'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip18/manageMedications', function (req, res) {
    req.session['pip18-manageMedications'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip18/checkYourAnswers#yourCondition');
    } else {
      res.redirect('/pip18/treatments');
    }
  });

  /*******************
  treatments
  *******************/
  app.get('/pip18/treatments', function (req, res) {
      res.render('pip18/treatments', {
        answers : req.session['pip18-treatments'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip18/treatments', function (req, res) {
    req.session['pip18-treatments'] = req.body;

    if(req.body.atHome === 'Yes') {
       if (req.body.saveAndMenu) {
         res.redirect('/pip18/manageTreatments?edit=true');
       } else {
         res.redirect('/pip18/manageTreatments');
       }
     } else if (req.body.saveAndMenu) {
       res.redirect('/pip18/checkYourAnswers#yourCondition');
     } else {
       res.redirect('/pip18/sideEffects');
     }

  });

  /*******************
  manageTreatments
  *******************/
  app.get('/pip18/manageTreatments', function (req, res) {
      res.render('pip18/manageTreatments', {
        answers : req.session['pip18-manageTreatments'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip18/manageTreatments', function (req, res) {
    req.session['pip18-manageTreatments'] = req.body;

  if (req.body.saveAndMenu) {
       res.redirect('/pip18/checkYourAnswers#yourCondition');
     } else {
       res.redirect('/pip18/sideEffects');
     }

  });

  /*******************
  sideEffects
  *******************/
  app.get('/pip18/sideEffects', function (req, res) {
      res.render('pip18/sideEffects', {
        answers : req.session['pip18-sideEffects'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip18/sideEffects', function (req, res) {
    req.session['pip18-sideEffects'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip18/checkYourAnswers#yourCondition');
    } else {
      res.redirect('/pip18/conditionAffects');
    }
  });

  /*******************
  conditionAffects
  *******************/
  app.get('/pip18/conditionAffects', function (req, res) {
      res.render('pip18/conditionAffects', {
        answers : req.session['pip18-conditionAffects'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip18/conditionAffects', function (req, res) {
    req.session['pip18-conditionAffects'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip18/checkYourAnswers#yourCondition');
    } else {
      res.redirect('/pip18/monitoringCondition');
    }
  });

  /*******************
  monitoringCondition
  *******************/
  app.get('/pip18/monitoringCondition', function (req, res) {
      res.render('pip18/monitoringCondition', {
        answers : req.session['pip18-monitoringCondition'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip18/monitoringCondition', function (req, res) {
    req.session['pip18-monitoringCondition'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip18/checkYourAnswers#yourCondition');
    } else {
      res.redirect('/pip18/healthcareprofessional');
    }
  });

  /*******************
  healthcareprofessional
  *******************/
  app.get('/pip18/healthcareprofessional', function (req, res) {
      res.render('pip18/healthcareprofessional', {
        answers : req.session['pip18-healthcareprofessional'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip18/healthcareprofessional', function (req, res) {
    req.session['pip18-healthcareprofessional'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip18/checkYourAnswers#yourCondition');
    } else {
      res.redirect('/pip18/submitEvidence');
    }
  });

  /*******************
  submitEvidence
  *******************/
  app.get('/pip18/submitEvidence', function (req, res) {
      res.render('pip18/submitEvidence', {
        answers : req.session['pip18-submitEvidence'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip18/submitEvidence', function (req, res) {
    req.session['pip18-submitEvidence'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip18/checkYourAnswers#yourCondition');
    } else {
      res.redirect('/pip18/specialAids');
    }
  });

  /*******************
  specialAids
  *******************/
  app.get('/pip18/specialAids', function (req, res) {
      res.render('pip18/specialAids', {
        answers : req.session['pip18-specialAids'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip18/specialAids', function (req, res) {
    req.session['pip18-specialAids'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip18/checkYourAnswers#yourCondition');
    } else {
      res.redirect('/pip18/sight');
    }
  });

  /*******************
  sight
  *******************/
  app.get('/pip18/sight', function (req, res) {
      res.render('pip18/sight', {
        answers : req.session['pip18-sight'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip18/sight', function (req, res) {
    req.session['pip18-sight'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip18/checkYourAnswers#yourCondition');
    } else {
      res.redirect('/pip18/speech');
    }
  });

  /*******************
  speech
  *******************/
  app.get('/pip18/speech', function (req, res) {
      res.render('pip18/speech', {
        answers : req.session['pip18-speech'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip18/speech', function (req, res) {
    req.session['pip18-speech'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip18/checkYourAnswers#yourCondition');
    } else {
      res.redirect('/pip18/hearing');
    }
  });

  /*******************
  hearing
  *******************/
  app.get('/pip18/hearing', function (req, res) {
      res.render('pip18/hearing', {
        answers : req.session['pip18-hearing'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip18/hearing', function (req, res) {
    req.session['pip18-hearing'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip18/checkYourAnswers#yourCondition');
    } else {
      res.redirect('/pip18/checkYourAnswers#yourCondition');
    }
  });

  /*******************
  gettingUp
  *******************/
  app.get('/pip18/gettingUp', function (req, res) {
      res.render('pip18/gettingUp', {
        answers : req.session['pip18-gettingUp'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip18/gettingUp', function (req, res) {
    req.session['pip18-gettingUp'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip18/checkYourAnswers#yourHome');
    } else {
      res.redirect('/pip18/toilet');
    }
  });

  /*******************
  toilet
  *******************/
  app.get('/pip18/toilet', function (req, res) {
      res.render('pip18/toilet', {
        answers : req.session['pip18-toilet'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip18/toilet', function (req, res) {
    req.session['pip18-toilet'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip18/checkYourAnswers#yourHome');
    } else {
      res.redirect('/pip18/washing');
    }
  });

  /*******************
  washing
  *******************/
  app.get('/pip18/washing', function (req, res) {
      res.render('pip18/washing', {
        answers : req.session['pip18-washing'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip18/washing', function (req, res) {
    req.session['pip18-washing'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip18/checkYourAnswers#yourHome');
    } else {
      res.redirect('/pip18/gettingDressed');
    }
  });

  /*******************
  gettingDressed
  *******************/
  app.get('/pip18/gettingDressed', function (req, res) {
      res.render('pip18/gettingDressed', {
        answers : req.session['pip18-gettingDressed'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip18/gettingDressed', function (req, res) {
    req.session['pip18-gettingDressed'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip18/checkYourAnswers#yourHome');
    } else {
      res.redirect('/pip18/hotMeal');
    }
  });

  /*******************
  hotMeal
  *******************/
  app.get('/pip18/hotMeal', function (req, res) {
      res.render('pip18/hotMeal', {
        answers : req.session['pip18-hotMeal'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip18/hotMeal', function (req, res) {
    req.session['pip18-hotMeal'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip18/checkYourAnswers#yourHome');
    } else {
      res.redirect('/pip18/eatingAndDrinking');
    }
  });

  /*******************
  eatingAndDrinking
  *******************/
  app.get('/pip18/eatingAndDrinking', function (req, res) {
      res.render('pip18/eatingAndDrinking', {
        answers : req.session['pip18-eatingAndDrinking'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip18/eatingAndDrinking', function (req, res) {
    req.session['pip18-eatingAndDrinking'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip18/checkYourAnswers#yourHome');
    } else {
      res.redirect('/pip18/checkYourAnswers#yourHome');
    }
  });

  /*******************
  gettingOut
  *******************/
  app.get('/pip18/gettingOut', function (req, res) {
      res.render('pip18/gettingOut', {
        answers : req.session['pip18-gettingOut'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip18/gettingOut', function (req, res) {
    req.session['pip18-gettingOut'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip18/checkYourAnswers#gettingOut');
    } else {
      res.redirect('/pip18/mixing');
    }
  });


  /*******************
  mixing
  *******************/
  app.get('/pip18/mixing', function (req, res) {
      res.render('pip18/mixing', {
        answers : req.session['pip18-mixing'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip18/mixing', function (req, res) {
    req.session['pip18-mixing'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip18/checkYourAnswers#gettingOut');
    } else {
      res.redirect('/pip18/checkYourAnswers#gettingOut');
    }
  });

  /*******************
  localJourney
  *******************/
  app.get('/pip18/localJourney', function (req, res) {
      res.render('pip18/localJourney', {
        answers : req.session['pip18-localJourney'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip18/localJourney', function (req, res) {
    req.session['pip18-localJourney'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip18/checkYourAnswers#makingSense');
    } else {
      res.redirect('/pip18/somewhereNeverBeenBefore');
    }
  });

  /*******************
  somewhereNeverBeenBefore
  *******************/
  app.get('/pip18/somewhereNeverBeenBefore', function (req, res) {
      res.render('pip18/somewhereNeverBeenBefore', {
        answers : req.session['pip18-somewhereNeverBeenBefore'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip18/somewhereNeverBeenBefore', function (req, res) {
    req.session['pip18-somewhereNeverBeenBefore'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip18/checkYourAnswers#makingSense');
    } else {
      res.redirect('/pip18/understanding');
    }
  });

  /*******************
  somewhereYouKnow
  *******************/
  app.get('/pip18/somewhereYouKnow', function (req, res) {
      res.render('pip18/somewhereYouKnow', {
        answers : req.session['pip18-somewhereYouKnow'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip18/somewhereYouKnow', function (req, res) {
    req.session['pip18-somewhereYouKnow'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip18/checkYourAnswers#makingSense');
    } else {
      res.redirect('/pip18/understanding');
    }
  });

  /*******************
  understanding
  *******************/
  app.get('/pip18/understanding', function (req, res) {
      res.render('pip18/understanding', {
        answers : req.session['pip18-understanding'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip18/understanding', function (req, res) {
    req.session['pip18-understanding'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip18/checkYourAnswers#makingSense');
    } else {
      res.redirect('/pip18/money');
    }
  });

  /*******************
  money
  *******************/
  app.get('/pip18/money', function (req, res) {
      res.render('pip18/money', {
        answers : req.session['pip18-money'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip18/money', function (req, res) {
    req.session['pip18-money'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip18/checkYourAnswers#makingSense');
    } else {
      res.redirect('/pip18/checkYourAnswers#makingSense');
    }
  });

  /*******************
  checkYourAnswers
  *******************/
  app.get('/pip18/checkYourAnswers', function (req, res) {
      res.render('pip18/checkYourAnswers', {
        data                     : aboutYou.getTableData(),
        dataCheckChange          : checkYourAnswers.getTableData(),
        helper                   : req.session['pip18-helper'],
        aboutYou                 : req.session['pip18-aboutYou'],
        contactDetails           : req.session['pip18-contactDetails'],
        contactPref              : req.session['pip18-contactPref'],
        currentWhereabouts       : req.session['pip18-currentWhereabouts'],
        nationality              : req.session['pip18-nationality'],
        paymentsFromAbroad       : req.session['pip18-paymentsFromAbroad'],
        conditionDetails         : req.session['pip18-conditionDetails'],
        medications              : req.session['pip18-medications'],
        manageMedications        : req.session['pip18-manageMedications'],
        treatments               : req.session['pip18-treatments'],
        sideEffects              : req.session['pip18-sideEffects'],
        conditionAffects         : req.session['pip18-conditionAffects'],
        monitoringCondition      : req.session['pip18-monitoringCondition'],
        healthcareprofessional   : req.session['pip18-healthcareprofessional'],
        submitEvidence           : req.session['pip18-submitEvidence'],
        specialAids              : req.session['pip18-specialAids'],
        sight                    : req.session['pip18-sight'],
        speech                   : req.session['pip18-speech'],
        hearing                  : req.session['pip18-hearing'],
        gettingUp                : req.session['pip18-gettingUp'],
        toilet                   : req.session['pip18-toilet'],
        washing                  : req.session['pip18-washing'],
        gettingDressed           : req.session['pip18-gettingDressed'],
        hotMeal                  : req.session['pip18-hotMeal'],
        eatingAndDrinking        : req.session['pip18-eatingAndDrinking'],
        gettingOut               : req.session['pip18-gettingOut'],
        mixing                   : req.session['pip18-mixing'],
        localJourney             : req.session['pip18-localJourney'],
        somewhereNeverBeenBefore : req.session['pip18-somewhereNeverBeenBefore'],
        somewhereYouKnow         : req.session['pip18-somewhereYouKnow'],
        understanding            : req.session['pip18-understanding'],
        money                    : req.session['pip18-money']
      });
  });

  app.post('/pip18/checkYourAnswers', function (req, res) {
    req.session['pip18-checkYourAnswers'] = req.body;
    res.redirect('/pip18/additionalInfo');
  });

  /*******************
  additionalInfo
  *******************/
  app.get('/pip18/additionalInfo', function (req, res) {
      res.render('pip18/additionalInfo', {
        answers : req.session['pip18-additionalInfo'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip18/additionalInfo', function (req, res) {
    req.session['pip18-additionalInfo'] = req.body;
    res.redirect('/pip18/declaration');
  });

  /*******************
  declaration
  *******************/
  app.get('/pip18/declaration', function (req, res) {
      res.render('pip18/declaration', {
        answers : req.session['pip18-declaration'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip18/declaration', function (req, res) {
    req.session['pip18-declaration'] = req.body;
    res.redirect('/pip18/thankYou');
  });

  /*******************
  thankYou
  *******************/
  app.get('/pip18/thankYou', function (req, res) {
      res.render('pip18/thankYou', {
        answers : req.session['pip18-thankYou'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });


};
