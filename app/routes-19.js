module.exports = function (app) {

  var styleguide        = require('./views/pip19/content/styleguide'),
      aboutYou          = require('./views/pip19/content/aboutYou'),
      checkYourAnswers  = require('./views/pip19/content/checkYourAnswers');

  app.get('/pip19/styleguide', function (req, res) {
    res.render('pip19/styleguide', {
      answers : req.session['pip19-helper'],
      data    : styleguide.getTableData()
    });
  });

  /*******************
  reset answers
  *******************/
  app.get('/pip19/reset', function (req, res) {
      res.render('pip19/reset');
  });

  app.post('/pip19/reset', function (req, res) {
    req.session.destroy();
    res.redirect('/pip19/apply');

  });

  /*******************
  summaryMain
  *******************/
  app.get('/pip19/summaryMain', function (req, res) {
      res.render('pip19/summaryMain', {
        'show'  : req.param('show'),
        'next'  : req.param('next'),
        'back'  : req.param('back')
      });
  });

  /*******************
  Helper
  *******************/
  app.get('/pip19/helper', function (req, res) {
      res.render('pip19/helper', {
        answers : req.session['pip19-helper'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip19/helper', function (req, res) {
    req.session['pip19-helper'] = req.body;
    if (req.body.saveAndMenu) {
      res.redirect('/pip19/checkYourAnswers#aboutYou');
    } else {
      res.redirect('/pip19/aboutYou');
    }
  });

  /*******************
  aboutYou
  *******************/
  app.get('/pip19/aboutYou', function (req, res) {
      res.render('pip19/aboutYou', {
        answers : req.session['pip19-aboutYou'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip19/aboutYou', function (req, res) {
    req.session['pip19-aboutYou'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip19/checkYourAnswers#aboutYou');
    } else {
      res.redirect('/pip19/contactDetails');
    }
  });

  /*******************
  contactDetails
  *******************/
  app.get('/pip19/contactDetails', function (req, res) {
      res.render('pip19/contactDetails', {
        answers : req.session['pip19-contactDetails'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip19/contactDetails', function (req, res) {
    req.session['pip19-contactDetails'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip19/checkYourAnswers#aboutYou');
    } else {
      res.redirect('/pip19/contactPref');
    }
  });

  /*******************
  contactPref
  *******************/
  app.get('/pip19/contactPref', function (req, res) {
      res.render('pip19/contactPref', {
        answers : req.session['pip19-contactPref'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip19/contactPref', function (req, res) {
    req.session['pip19-contactPref'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip19/checkYourAnswers#aboutYou');
    } else {
      res.redirect('/pip19/currentWhereabouts');
    }
  });

  /*******************
  currentWhereabouts
  *******************/
  app.get('/pip19/currentWhereabouts', function (req, res) {
      res.render('pip19/currentWhereabouts', {
        answers : req.session['pip19-currentWhereabouts'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip19/currentWhereabouts', function (req, res) {
    req.session['pip19-currentWhereabouts'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip19/checkYourAnswers#aboutYou');
    } else {
      res.redirect('/pip19/nationality');
    }
  });

  /*******************
  nationality
  *******************/
  app.get('/pip19/nationality', function (req, res) {
    res.render('pip19/nationality', {
      answers : req.session['pip19-nationality'],
      'edit'  : req.body.saveAndMenu,
      data    : aboutYou.getTableData()
    });
  });

  app.post('/pip19/nationality', function (req, res) {
    req.session['pip19-nationality'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip19/checkYourAnswers#aboutYou');
    } else {
      res.redirect('/pip19/paymentsFromAbroad');
    }
  });

  /*******************
  paymentsFromAbroad
  *******************/
  app.get('/pip19/paymentsFromAbroad', function (req, res) {
      res.render('pip19/paymentsFromAbroad', {
        answers : req.session['pip19-paymentsFromAbroad'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip19/paymentsFromAbroad', function (req, res) {
    req.session['pip19-paymentsFromAbroad'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip19/checkYourAnswers#aboutYou');
    } else {
      res.redirect('/pip19/checkYourAnswers#aboutYou');
    }
  });

  /*******************
  conditionDetails
  *******************/
  app.get('/pip19/conditionDetails', function (req, res) {
      res.render('pip19/conditionDetails', {
        answers : req.session['pip19-conditionDetails'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip19/conditionDetails', function (req, res) {
    req.session['pip19-conditionDetails'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip19/checkYourAnswers#yourCondition');
    } else {
      res.redirect('/pip19/medications');
    }
  });

  /*******************
  medications
  *******************/
  app.get('/pip19/medications', function (req, res) {
      res.render('pip19/medications', {
        answers : req.session['pip19-medications'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip19/medications', function (req, res) {
    req.session['pip19-medications'] = req.body;

    if(req.body.takingMedication === 'Yes') {
       if (req.body.saveAndMenu) {
         res.redirect('/pip19/manageMedications?edit=true');
       } else {
         res.redirect('/pip19/manageMedications');
       }
     } else if (req.body.saveAndMenu) {
       res.redirect('/pip19/checkYourAnswers#yourCondition');
     } else {
       res.redirect('/pip19/treatments');
     }
  });

  /*******************
  manageMedications
  *******************/
  app.get('/pip19/manageMedications', function (req, res) {
      res.render('pip19/manageMedications', {
        answers : req.session['pip19-manageMedications'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip19/manageMedications', function (req, res) {
    req.session['pip19-manageMedications'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip19/checkYourAnswers#yourCondition');
    } else {
      res.redirect('/pip19/treatments');
    }
  });

  /*******************
  treatments
  *******************/
  app.get('/pip19/treatments', function (req, res) {
      res.render('pip19/treatments', {
        answers : req.session['pip19-treatments'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip19/treatments', function (req, res) {
    req.session['pip19-treatments'] = req.body;

    if(req.body.atHome === 'Yes') {
       if (req.body.saveAndMenu) {
         res.redirect('/pip19/manageTreatments?edit=true');
       } else {
         res.redirect('/pip19/manageTreatments');
       }
     } else if (req.body.saveAndMenu) {
       res.redirect('/pip19/checkYourAnswers#yourCondition');
     } else {
       res.redirect('/pip19/sideEffects');
     }

  });

  /*******************
  manageTreatments
  *******************/
  app.get('/pip19/manageTreatments', function (req, res) {
      res.render('pip19/manageTreatments', {
        answers : req.session['pip19-manageTreatments'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip19/manageTreatments', function (req, res) {
    req.session['pip19-manageTreatments'] = req.body;

  if (req.body.saveAndMenu) {
       res.redirect('/pip19/checkYourAnswers#yourCondition');
     } else {
       res.redirect('/pip19/sideEffects');
     }

  });

  /*******************
  sideEffects
  *******************/
  app.get('/pip19/sideEffects', function (req, res) {
      res.render('pip19/sideEffects', {
        answers : req.session['pip19-sideEffects'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip19/sideEffects', function (req, res) {
    req.session['pip19-sideEffects'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip19/checkYourAnswers#yourCondition');
    } else {
      res.redirect('/pip19/conditionAffects');
    }
  });

  /*******************
  conditionAffects
  *******************/
  app.get('/pip19/conditionAffects', function (req, res) {
      res.render('pip19/conditionAffects', {
        answers : req.session['pip19-conditionAffects'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip19/conditionAffects', function (req, res) {
    req.session['pip19-conditionAffects'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip19/checkYourAnswers#yourCondition');
    } else {
      res.redirect('/pip19/monitoringCondition');
    }
  });

  /*******************
  monitoringCondition
  *******************/
  app.get('/pip19/monitoringCondition', function (req, res) {
      res.render('pip19/monitoringCondition', {
        answers : req.session['pip19-monitoringCondition'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip19/monitoringCondition', function (req, res) {
    req.session['pip19-monitoringCondition'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip19/checkYourAnswers#yourCondition');
    } else {
      res.redirect('/pip19/healthcareprofessional');
    }
  });

  /*******************
  healthcareprofessional
  *******************/
  app.get('/pip19/healthcareprofessional', function (req, res) {
      res.render('pip19/healthcareprofessional', {
        answers : req.session['pip19-healthcareprofessional'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip19/healthcareprofessional', function (req, res) {
    req.session['pip19-healthcareprofessional'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip19/specialAids#yourCondition');
    } else {
      res.redirect('/pip19/submitEvidence');
    }
  });

  /*******************
  submitEvidence
  *******************/
  app.get('/pip19/submitEvidence', function (req, res) {
      res.render('pip19/submitEvidence', {
        answers : req.session['pip19-submitEvidence'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip19/submitEvidence', function (req, res) {
    req.session['pip19-submitEvidence'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip19/checkYourAnswers#yourCondition');
    } else {
      res.redirect('/pip19/specialAids');
    }
  });

  /*******************
  specialAids
  *******************/
  app.get('/pip19/specialAids', function (req, res) {
      res.render('pip19/specialAids', {
        answers : req.session['pip19-specialAids'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip19/specialAids', function (req, res) {
    req.session['pip19-specialAids'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip19/checkYourAnswers#yourCondition');
    } else {
      res.redirect('/pip19/sight');
    }
  });

  /*******************
  sight
  *******************/
  app.get('/pip19/sight', function (req, res) {
      res.render('pip19/sight', {
        answers : req.session['pip19-sight'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip19/sight', function (req, res) {
    req.session['pip19-sight'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip19/checkYourAnswers#yourCondition');
    } else {
      res.redirect('/pip19/speech');
    }
  });

  /*******************
  speech
  *******************/
  app.get('/pip19/speech', function (req, res) {
      res.render('pip19/speech', {
        answers : req.session['pip19-speech'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip19/speech', function (req, res) {
    req.session['pip19-speech'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip19/checkYourAnswers#yourCondition');
    } else {
      res.redirect('/pip19/hearing');
    }
  });

  /*******************
  hearing
  *******************/
  app.get('/pip19/hearing', function (req, res) {
      res.render('pip19/hearing', {
        answers : req.session['pip19-hearing'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip19/hearing', function (req, res) {
    req.session['pip19-hearing'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip19/checkYourAnswers#yourCondition');
    } else {
      res.redirect('/pip19/checkYourAnswers#yourCondition');
    }
  });

  /*******************
  gettingUp
  *******************/
  app.get('/pip19/gettingUp', function (req, res) {
      res.render('pip19/gettingUp', {
        answers : req.session['pip19-gettingUp'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip19/gettingUp', function (req, res) {
    req.session['pip19-gettingUp'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip19/checkYourAnswers#yourHome');
    } else {
      res.redirect('/pip19/toilet');
    }
  });

  /*******************
  toilet
  *******************/
  app.get('/pip19/toilet', function (req, res) {
      res.render('pip19/toilet', {
        answers : req.session['pip19-toilet'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip19/toilet', function (req, res) {
    req.session['pip19-toilet'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip19/checkYourAnswers#yourHome');
    } else {
      res.redirect('/pip19/washing');
    }
  });

  /*******************
  washing
  *******************/
  app.get('/pip19/washing', function (req, res) {
      res.render('pip19/washing', {
        answers : req.session['pip19-washing'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip19/washing', function (req, res) {
    req.session['pip19-washing'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip19/checkYourAnswers#yourHome');
    } else {
      res.redirect('/pip19/gettingDressed');
    }
  });

  /*******************
  gettingDressed
  *******************/
  app.get('/pip19/gettingDressed', function (req, res) {
      res.render('pip19/gettingDressed', {
        answers : req.session['pip19-gettingDressed'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip19/gettingDressed', function (req, res) {
    req.session['pip19-gettingDressed'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip19/checkYourAnswers#yourHome');
    } else {
      res.redirect('/pip19/hotMeal');
    }
  });

  /*******************
  hotMeal
  *******************/
  app.get('/pip19/hotMeal', function (req, res) {
      res.render('pip19/hotMeal', {
        answers : req.session['pip19-hotMeal'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip19/hotMeal', function (req, res) {
    req.session['pip19-hotMeal'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip19/checkYourAnswers#yourHome');
    } else {
      res.redirect('/pip19/eatingAndDrinking');
    }
  });

  /*******************
  eatingAndDrinking
  *******************/
  app.get('/pip19/eatingAndDrinking', function (req, res) {
      res.render('pip19/eatingAndDrinking', {
        answers : req.session['pip19-eatingAndDrinking'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip19/eatingAndDrinking', function (req, res) {
    req.session['pip19-eatingAndDrinking'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip19/checkYourAnswers#yourHome');
    } else {
      res.redirect('/pip19/checkYourAnswers#yourHome');
    }
  });

  /*******************
  gettingOut
  *******************/
  app.get('/pip19/gettingOut', function (req, res) {
      res.render('pip19/gettingOut', {
        answers : req.session['pip19-gettingOut'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip19/gettingOut', function (req, res) {
    req.session['pip19-gettingOut'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip19/checkYourAnswers#gettingOut');
    } else {
      res.redirect('/pip19/mixing');
    }
  });


  /*******************
  mixing
  *******************/
  app.get('/pip19/mixing', function (req, res) {
      res.render('pip19/mixing', {
        answers : req.session['pip19-mixing'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip19/mixing', function (req, res) {
    req.session['pip19-mixing'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip19/checkYourAnswers#gettingOut');
    } else {
      res.redirect('/pip19/checkYourAnswers#gettingOut');
    }
  });

  /*******************
  localJourney
  *******************/
  app.get('/pip19/localJourney', function (req, res) {
      res.render('pip19/localJourney', {
        answers : req.session['pip19-localJourney'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip19/localJourney', function (req, res) {
    req.session['pip19-localJourney'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip19/checkYourAnswers#makingSense');
    } else {
      res.redirect('/pip19/somewhereNeverBeenBefore');
    }
  });

  /*******************
  somewhereNeverBeenBefore
  *******************/
  app.get('/pip19/somewhereNeverBeenBefore', function (req, res) {
      res.render('pip19/somewhereNeverBeenBefore', {
        answers : req.session['pip19-somewhereNeverBeenBefore'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip19/somewhereNeverBeenBefore', function (req, res) {
    req.session['pip19-somewhereNeverBeenBefore'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip19/checkYourAnswers#makingSense');
    } else {
      res.redirect('/pip19/understanding');
    }
  });

  /*******************
  somewhereYouKnow
  *******************/
  app.get('/pip19/somewhereYouKnow', function (req, res) {
      res.render('pip19/somewhereYouKnow', {
        answers : req.session['pip19-somewhereYouKnow'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip19/somewhereYouKnow', function (req, res) {
    req.session['pip19-somewhereYouKnow'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip19/checkYourAnswers#makingSense');
    } else {
      res.redirect('/pip19/understanding');
    }
  });

  /*******************
  understanding
  *******************/
  app.get('/pip19/understanding', function (req, res) {
      res.render('pip19/understanding', {
        answers : req.session['pip19-understanding'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip19/understanding', function (req, res) {
    req.session['pip19-understanding'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip19/checkYourAnswers#makingSense');
    } else {
      res.redirect('/pip19/money');
    }
  });

  /*******************
  money
  *******************/
  app.get('/pip19/money', function (req, res) {
      res.render('pip19/money', {
        answers : req.session['pip19-money'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip19/money', function (req, res) {
    req.session['pip19-money'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip19/checkYourAnswers#makingSense');
    } else {
      res.redirect('/pip19/checkYourAnswers#makingSense');
    }
  });

  /*******************
  checkYourAnswers
  *******************/
  app.get('/pip19/checkYourAnswers', function (req, res) {
      res.render('pip19/checkYourAnswers', {
        data                     : aboutYou.getTableData(),
        dataCheckChange          : checkYourAnswers.getTableData(),
        helper                   : req.session['pip19-helper'],
        aboutYou                 : req.session['pip19-aboutYou'],
        contactDetails           : req.session['pip19-contactDetails'],
        contactPref              : req.session['pip19-contactPref'],
        currentWhereabouts       : req.session['pip19-currentWhereabouts'],
        nationality              : req.session['pip19-nationality'],
        paymentsFromAbroad       : req.session['pip19-paymentsFromAbroad'],
        conditionDetails         : req.session['pip19-conditionDetails'],
        medications              : req.session['pip19-medications'],
        manageMedications        : req.session['pip19-manageMedications'],
        treatments               : req.session['pip19-treatments'],
        sideEffects              : req.session['pip19-sideEffects'],
        conditionAffects         : req.session['pip19-conditionAffects'],
        monitoringCondition      : req.session['pip19-monitoringCondition'],
        healthcareprofessional   : req.session['pip19-healthcareprofessional'],
        submitEvidence           : req.session['pip19-submitEvidence'],
        specialAids              : req.session['pip19-specialAids'],
        sight                    : req.session['pip19-sight'],
        speech                   : req.session['pip19-speech'],
        hearing                  : req.session['pip19-hearing'],
        gettingUp                : req.session['pip19-gettingUp'],
        toilet                   : req.session['pip19-toilet'],
        washing                  : req.session['pip19-washing'],
        gettingDressed           : req.session['pip19-gettingDressed'],
        hotMeal                  : req.session['pip19-hotMeal'],
        eatingAndDrinking        : req.session['pip19-eatingAndDrinking'],
        gettingOut               : req.session['pip19-gettingOut'],
        mixing                   : req.session['pip19-mixing'],
        localJourney             : req.session['pip19-localJourney'],
        somewhereNeverBeenBefore : req.session['pip19-somewhereNeverBeenBefore'],
        somewhereYouKnow         : req.session['pip19-somewhereYouKnow'],
        understanding            : req.session['pip19-understanding'],
        money                    : req.session['pip19-money']
      });
  });

  app.post('/pip19/checkYourAnswers', function (req, res) {
    req.session['pip19-checkYourAnswers'] = req.body;
    res.redirect('/pip19/additionalInfo');
  });

  /*******************
  additionalInfo
  *******************/
  app.get('/pip19/additionalInfo', function (req, res) {
      res.render('pip19/additionalInfo', {
        answers : req.session['pip19-additionalInfo'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip19/additionalInfo', function (req, res) {
    req.session['pip19-additionalInfo'] = req.body;
    res.redirect('/pip19/bankDetails');
  });

  /*******************
  bankDetails
  *******************/
  app.get('/pip19/bankDetails', function (req, res) {
      res.render('pip19/bankDetails', {
        answers : req.session['pip19-bankDetails'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip19/bankDetails', function (req, res) {
    req.session['pip19-bankDetails'] = req.body;
    if (req.body.saveAndMenu) {
      res.redirect('/pip19/checkYourAnswers#aboutYou');
    } else {
      hcps = req.session['pip19-healthcareprofessional'];
      if ( !hcps || !hcps['name1']) {
        res.redirect('/pip19/declaration2');
     } else {
        res.redirect('/pip19/hcpConsent');
      }
    }
  });

  /*******************
  declaration at start
  *******************/
  app.get('/pip19/declaration', function (req, res) {
      res.render('pip19/declaration', {
        answers : req.session['pip19-declaration'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip19/declaration', function (req, res) {
    req.session['pip19-declaration'] = req.body;
    res.redirect('/pip19/checkYourAnswers');
  });

  /*******************
  HCP Consent
  *******************/
  app.get('/pip19/hcpConsent', function (req, res) {
      res.render('pip19/hcpConsent', {
        hcps    : req.session['pip19-healthcareprofessional'],
        answers : req.session['pip19-hcpConsent'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip19/hcpConsent', function (req, res) {
    req.session['pip19-hcpConsent'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip19/checkYourAnswers#yourCondition');
    } else {
      res.redirect('/pip19/declaration2');
    }
  });

  /*******************
  declaration at end
  *******************/
  app.get('/pip19/declaration2', function (req, res) {
      res.render('pip19/declaration2', {
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip19/declaration2', function (req, res) {
    res.redirect('/pip19/thankYou');
  });

  /*******************
  thankYou
  *******************/
  app.get('/pip19/thankYou', function (req, res) {
      res.render('pip19/thankYou', {
        answers : req.session['pip19-thankYou'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });


};
