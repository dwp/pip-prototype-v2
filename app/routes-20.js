module.exports = function (app) {

  var styleguide        = require('./views/pip20/content/styleguide'),
      aboutYou          = require('./views/pip20/content/aboutYou'),
      checkYourAnswers  = require('./views/pip20/content/checkYourAnswers');

  app.get('/pip20/styleguide', function (req, res) {
    res.render('pip20/styleguide', {
      answers : req.session['pip20-helper'],
      data    : styleguide.getTableData()
    });
  });

  /*******************
  reset answers
  *******************/
  app.get('/pip20/reset', function (req, res) {
      res.render('pip20/reset');
  });

  app.post('/pip20/reset', function (req, res) {
    req.session.destroy();
    res.redirect('/pip20/apply');

  });

  /*******************
  summaryMain
  *******************/
  app.get('/pip20/summaryMain', function (req, res) {
      res.render('pip20/summaryMain', {
        'show'  : req.param('show'),
        'next'  : req.param('next'),
        'back'  : req.param('back')
      });
  });

  /*******************
  appointee
  *******************/
  app.get('/pip20/appointee', function (req, res) {
      res.render('pip20/appointee', {
        answers : req.session['pip20-appointee'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip20/appointee', function (req, res) {
    req.session['pip20-appointee'] = req.body;
    if (req.body.saveAndMenu) {
      res.redirect('/pip20/checkYourAnswers#aboutYou');
    } else {
      res.redirect('/pip20/aboutYou');
    }
  });

  /*******************
  aboutYou
  *******************/
  app.get('/pip20/aboutYou', function (req, res) {
      res.render('pip20/aboutYou', {
        answers : req.session['pip20-aboutYou'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip20/aboutYou', function (req, res) {
    req.session['pip20-aboutYou'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip20/checkYourAnswers#aboutYou');
    } else {
      res.redirect('/pip20/contactDetails');
    }
  });

  /*******************
  contactDetails
  *******************/
  app.get('/pip20/contactDetails', function (req, res) {
      res.render('pip20/contactDetails', {
        answers : req.session['pip20-contactDetails'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip20/contactDetails', function (req, res) {
    req.session['pip20-contactDetails'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip20/checkYourAnswers#aboutYou');
    } else {
      res.redirect('/pip20/contactPref');
    }
  });

  /*******************
  contactPref
  *******************/
  app.get('/pip20/contactPref', function (req, res) {
      res.render('pip20/contactPref', {
        answers : req.session['pip20-contactPref'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip20/contactPref', function (req, res) {
    req.session['pip20-contactPref'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip20/checkYourAnswers#aboutYou');
    } else {
      res.redirect('/pip20/currentWhereabouts');
    }
  });

  /*******************
  currentWhereabouts
  *******************/
  app.get('/pip20/currentWhereabouts', function (req, res) {
      res.render('pip20/currentWhereabouts', {
        answers : req.session['pip20-currentWhereabouts'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip20/currentWhereabouts', function (req, res) {
    req.session['pip20-currentWhereabouts'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip20/checkYourAnswers#aboutYou');
    } else {
      res.redirect('/pip20/nationality');
    }
  });

  /*******************
  nationality
  *******************/
  app.get('/pip20/nationality', function (req, res) {
    res.render('pip20/nationality', {
      answers : req.session['pip20-nationality'],
      'edit'  : req.body.saveAndMenu,
      data    : aboutYou.getTableData()
    });
  });

  app.post('/pip20/nationality', function (req, res) {
    req.session['pip20-nationality'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip20/checkYourAnswers#aboutYou');
    } else {
      res.redirect('/pip20/paymentsFromAbroad');
    }
  });

  /*******************
  paymentsFromAbroad
  *******************/
  app.get('/pip20/paymentsFromAbroad', function (req, res) {
      res.render('pip20/paymentsFromAbroad', {
        answers : req.session['pip20-paymentsFromAbroad'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip20/paymentsFromAbroad', function (req, res) {
    req.session['pip20-paymentsFromAbroad'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip20/checkYourAnswers#aboutYou');
    } else {
      res.redirect('/pip20/declaration');
    }
  });

  /*******************
  declaration at start
  *******************/
  app.get('/pip20/declaration', function (req, res) {
      res.render('pip20/declaration', {
        answers  : req.session['pip20-declaration'],
        aboutYou : req.session['pip20-aboutYou'],
        'edit'   : req.body.saveAndMenu,
        data     : aboutYou.getTableData()
      });
  });

  app.post('/pip20/declaration', function (req, res) {
    req.session['pip20-declaration'] = req.body;
    res.redirect('/pip20/checkYourAnswers#aboutYou');
  });

  /*******************
  conditionDetails
  *******************/
  app.get('/pip20/conditionDetails', function (req, res) {
      res.render('pip20/conditionDetails', {
        answers : req.session['pip20-conditionDetails'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip20/conditionDetails', function (req, res) {
    req.session['pip20-conditionDetails'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip20/checkYourAnswers#yourCondition');
    } else {
      res.redirect('/pip20/medications');
    }
  });

  /*******************
  medications
  *******************/
  app.get('/pip20/medications', function (req, res) {
      res.render('pip20/medications', {
        answers : req.session['pip20-medications'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip20/medications', function (req, res) {
    req.session['pip20-medications'] = req.body;

    if(req.body.takingMedication === 'Yes') {
       if (req.body.saveAndMenu) {
         res.redirect('/pip20/manageMedications?edit=true');
       } else {
         res.redirect('/pip20/manageMedications');
       }
     } else if (req.body.saveAndMenu) {
       res.redirect('/pip20/checkYourAnswers#yourCondition');
     } else {
       res.redirect('/pip20/treatments');
     }
  });

  /*******************
  manageMedications
  *******************/
  app.get('/pip20/manageMedications', function (req, res) {
      res.render('pip20/manageMedications', {
        answers : req.session['pip20-manageMedications'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip20/manageMedications', function (req, res) {
    req.session['pip20-manageMedications'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip20/checkYourAnswers#yourCondition');
    } else {
      res.redirect('/pip20/treatments');
    }
  });

  /*******************
  treatments
  *******************/
  app.get('/pip20/treatments', function (req, res) {
      res.render('pip20/treatments', {
        answers : req.session['pip20-treatments'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip20/treatments', function (req, res) {
    req.session['pip20-treatments'] = req.body;

    if(req.body.atHome === 'Yes') {
       if (req.body.saveAndMenu) {
         res.redirect('/pip20/manageTreatments?edit=true');
       } else {
         res.redirect('/pip20/manageTreatments');
       }
     } else if (req.body.saveAndMenu) {
       res.redirect('/pip20/checkYourAnswers#yourCondition');
     } else {
       res.redirect('/pip20/sideEffects');
     }

  });

  /*******************
  manageTreatments
  *******************/
  app.get('/pip20/manageTreatments', function (req, res) {
      res.render('pip20/manageTreatments', {
        answers : req.session['pip20-manageTreatments'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip20/manageTreatments', function (req, res) {
    req.session['pip20-manageTreatments'] = req.body;

  if (req.body.saveAndMenu) {
       res.redirect('/pip20/checkYourAnswers#yourCondition');
     } else {
       res.redirect('/pip20/sideEffects');
     }

  });

  /*******************
  sideEffects
  *******************/
  app.get('/pip20/sideEffects', function (req, res) {
      res.render('pip20/sideEffects', {
        answers : req.session['pip20-sideEffects'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip20/sideEffects', function (req, res) {
    req.session['pip20-sideEffects'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip20/checkYourAnswers#yourCondition');
    } else {
      res.redirect('/pip20/conditionAffects');
    }
  });

  /*******************
  conditionAffects
  *******************/
  app.get('/pip20/conditionAffects', function (req, res) {
      res.render('pip20/conditionAffects', {
        answers : req.session['pip20-conditionAffects'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip20/conditionAffects', function (req, res) {
    req.session['pip20-conditionAffects'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip20/checkYourAnswers#yourCondition');
    } else {
      res.redirect('/pip20/monitoringCondition');
    }
  });

  /*******************
  monitoringCondition
  *******************/
  app.get('/pip20/monitoringCondition', function (req, res) {
      res.render('pip20/monitoringCondition', {
        answers : req.session['pip20-monitoringCondition'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip20/monitoringCondition', function (req, res) {
    req.session['pip20-monitoringCondition'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip20/checkYourAnswers#yourCondition');
    } else {
      res.redirect('/pip20/healthcareprofessional');
    }
  });

  /*******************
  healthcareprofessional
  *******************/
  app.get('/pip20/healthcareprofessional', function (req, res) {
      res.render('pip20/healthcareprofessional', {
        answers : req.session['pip20-healthcareprofessional'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip20/healthcareprofessional', function (req, res) {
    req.session['pip20-healthcareprofessional'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip20/specialAids#yourCondition');
    } else {
      res.redirect('/pip20/submitEvidence');
    }
  });

  /*******************
  submitEvidence
  *******************/
  app.get('/pip20/submitEvidence', function (req, res) {
      res.render('pip20/submitEvidence', {
        answers : req.session['pip20-submitEvidence'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip20/submitEvidence', function (req, res) {
    req.session['pip20-submitEvidence'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip20/checkYourAnswers#yourCondition');
    } else {
      res.redirect('/pip20/specialAids');
    }
  });

  /*******************
  specialAids
  *******************/
  app.get('/pip20/specialAids', function (req, res) {
      res.render('pip20/specialAids', {
        answers : req.session['pip20-specialAids'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip20/specialAids', function (req, res) {
    req.session['pip20-specialAids'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip20/checkYourAnswers#yourCondition');
    } else {
      res.redirect('/pip20/sight');
    }
  });

  /*******************
  sight
  *******************/
  app.get('/pip20/sight', function (req, res) {
      res.render('pip20/sight', {
        answers : req.session['pip20-sight'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip20/sight', function (req, res) {
    req.session['pip20-sight'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip20/checkYourAnswers#yourCondition');
    } else {
      res.redirect('/pip20/speech');
    }
  });

  /*******************
  speech
  *******************/
  app.get('/pip20/speech', function (req, res) {
      res.render('pip20/speech', {
        answers : req.session['pip20-speech'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip20/speech', function (req, res) {
    req.session['pip20-speech'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip20/checkYourAnswers#yourCondition');
    } else {
      res.redirect('/pip20/hearing');
    }
  });

  /*******************
  hearing
  *******************/
  app.get('/pip20/hearing', function (req, res) {
      res.render('pip20/hearing', {
        answers : req.session['pip20-hearing'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip20/hearing', function (req, res) {
    req.session['pip20-hearing'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip20/checkYourAnswers#yourCondition');
    } else {
      res.redirect('/pip20/checkYourAnswers#yourCondition');
    }
  });

  /*******************
  gettingUp
  *******************/
  app.get('/pip20/gettingUp', function (req, res) {
      res.render('pip20/gettingUp', {
        answers : req.session['pip20-gettingUp'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip20/gettingUp', function (req, res) {
    req.session['pip20-gettingUp'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip20/checkYourAnswers#yourHome');
    } else {
      res.redirect('/pip20/toilet');
    }
  });

  /*******************
  toilet
  *******************/
  app.get('/pip20/toilet', function (req, res) {
      res.render('pip20/toilet', {
        answers : req.session['pip20-toilet'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip20/toilet', function (req, res) {
    req.session['pip20-toilet'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip20/checkYourAnswers#yourHome');
    } else {
      res.redirect('/pip20/washing');
    }
  });

  /*******************
  washing
  *******************/
  app.get('/pip20/washing', function (req, res) {
      res.render('pip20/washing', {
        answers : req.session['pip20-washing'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip20/washing', function (req, res) {
    req.session['pip20-washing'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip20/checkYourAnswers#yourHome');
    } else {
      res.redirect('/pip20/gettingDressed');
    }
  });

  /*******************
  gettingDressed
  *******************/
  app.get('/pip20/gettingDressed', function (req, res) {
      res.render('pip20/gettingDressed', {
        answers : req.session['pip20-gettingDressed'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip20/gettingDressed', function (req, res) {
    req.session['pip20-gettingDressed'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip20/checkYourAnswers#yourHome');
    } else {
      res.redirect('/pip20/hotMeal');
    }
  });

  /*******************
  hotMeal
  *******************/
  app.get('/pip20/hotMeal', function (req, res) {
      res.render('pip20/hotMeal', {
        answers : req.session['pip20-hotMeal'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip20/hotMeal', function (req, res) {
    req.session['pip20-hotMeal'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip20/checkYourAnswers#yourHome');
    } else {
      res.redirect('/pip20/eatingAndDrinking');
    }
  });

  /*******************
  eatingAndDrinking
  *******************/
  app.get('/pip20/eatingAndDrinking', function (req, res) {
      res.render('pip20/eatingAndDrinking', {
        answers : req.session['pip20-eatingAndDrinking'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip20/eatingAndDrinking', function (req, res) {
    req.session['pip20-eatingAndDrinking'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip20/checkYourAnswers#yourHome');
    } else {
      res.redirect('/pip20/checkYourAnswers#yourHome');
    }
  });

  /*******************
  gettingOut
  *******************/
  app.get('/pip20/gettingOut', function (req, res) {
      res.render('pip20/gettingOut', {
        answers : req.session['pip20-gettingOut'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip20/gettingOut', function (req, res) {
    req.session['pip20-gettingOut'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip20/checkYourAnswers#gettingOut');
    } else {
      res.redirect('/pip20/mixing');
    }
  });


  /*******************
  mixing
  *******************/
  app.get('/pip20/mixing', function (req, res) {
      res.render('pip20/mixing', {
        answers : req.session['pip20-mixing'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip20/mixing', function (req, res) {
    req.session['pip20-mixing'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip20/checkYourAnswers#gettingOut');
    } else {
      res.redirect('/pip20/checkYourAnswers#gettingOut');
    }
  });

  /*******************
  localJourney
  *******************/
  app.get('/pip20/localJourney', function (req, res) {
      res.render('pip20/localJourney', {
        answers : req.session['pip20-localJourney'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip20/localJourney', function (req, res) {
    req.session['pip20-localJourney'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip20/checkYourAnswers#makingSense');
    } else {
      res.redirect('/pip20/somewhereNeverBeenBefore');
    }
  });

  /*******************
  somewhereNeverBeenBefore
  *******************/
  app.get('/pip20/somewhereNeverBeenBefore', function (req, res) {
      res.render('pip20/somewhereNeverBeenBefore', {
        answers : req.session['pip20-somewhereNeverBeenBefore'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip20/somewhereNeverBeenBefore', function (req, res) {
    req.session['pip20-somewhereNeverBeenBefore'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip20/checkYourAnswers#makingSense');
    } else {
      res.redirect('/pip20/understanding');
    }
  });

  /*******************
  somewhereYouKnow
  *******************/
  app.get('/pip20/somewhereYouKnow', function (req, res) {
      res.render('pip20/somewhereYouKnow', {
        answers : req.session['pip20-somewhereYouKnow'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip20/somewhereYouKnow', function (req, res) {
    req.session['pip20-somewhereYouKnow'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip20/checkYourAnswers#makingSense');
    } else {
      res.redirect('/pip20/understanding');
    }
  });

  /*******************
  understanding
  *******************/
  app.get('/pip20/understanding', function (req, res) {
      res.render('pip20/understanding', {
        answers : req.session['pip20-understanding'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip20/understanding', function (req, res) {
    req.session['pip20-understanding'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip20/checkYourAnswers#makingSense');
    } else {
      res.redirect('/pip20/money');
    }
  });

  /*******************
  money
  *******************/
  app.get('/pip20/money', function (req, res) {
      res.render('pip20/money', {
        answers : req.session['pip20-money'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip20/money', function (req, res) {
    req.session['pip20-money'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip20/checkYourAnswers#makingSense');
    } else {
      res.redirect('/pip20/checkYourAnswers#makingSense');
    }
  });

  /*******************
  checkYourAnswers
  *******************/
  app.get('/pip20/checkYourAnswers', function (req, res) {
      res.render('pip20/checkYourAnswers', {
        data                     : aboutYou.getTableData(),
        dataCheckChange          : checkYourAnswers.getTableData(),
        appointee                : req.session['pip20-appointee'],
        aboutYou                 : req.session['pip20-aboutYou'],
        contactDetails           : req.session['pip20-contactDetails'],
        contactPref              : req.session['pip20-contactPref'],
        currentWhereabouts       : req.session['pip20-currentWhereabouts'],
        nationality              : req.session['pip20-nationality'],
        paymentsFromAbroad       : req.session['pip20-paymentsFromAbroad'],
        conditionDetails         : req.session['pip20-conditionDetails'],
        medications              : req.session['pip20-medications'],
        manageMedications        : req.session['pip20-manageMedications'],
        treatments               : req.session['pip20-treatments'],
        sideEffects              : req.session['pip20-sideEffects'],
        conditionAffects         : req.session['pip20-conditionAffects'],
        monitoringCondition      : req.session['pip20-monitoringCondition'],
        healthcareprofessional   : req.session['pip20-healthcareprofessional'],
        submitEvidence           : req.session['pip20-submitEvidence'],
        specialAids              : req.session['pip20-specialAids'],
        sight                    : req.session['pip20-sight'],
        speech                   : req.session['pip20-speech'],
        hearing                  : req.session['pip20-hearing'],
        gettingUp                : req.session['pip20-gettingUp'],
        toilet                   : req.session['pip20-toilet'],
        washing                  : req.session['pip20-washing'],
        gettingDressed           : req.session['pip20-gettingDressed'],
        hotMeal                  : req.session['pip20-hotMeal'],
        eatingAndDrinking        : req.session['pip20-eatingAndDrinking'],
        gettingOut               : req.session['pip20-gettingOut'],
        mixing                   : req.session['pip20-mixing'],
        localJourney             : req.session['pip20-localJourney'],
        somewhereNeverBeenBefore : req.session['pip20-somewhereNeverBeenBefore'],
        somewhereYouKnow         : req.session['pip20-somewhereYouKnow'],
        understanding            : req.session['pip20-understanding'],
        money                    : req.session['pip20-money']
      });
  });

  app.post('/pip20/checkYourAnswers', function (req, res) {
    req.session['pip20-checkYourAnswers'] = req.body;
    res.redirect('/pip20/additionalInfo');
  });

  /*******************
  additionalInfo
  *******************/
  app.get('/pip20/additionalInfo', function (req, res) {
      res.render('pip20/additionalInfo', {
        answers : req.session['pip20-additionalInfo'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip20/additionalInfo', function (req, res) {
    req.session['pip20-additionalInfo'] = req.body;
    res.redirect('/pip20/bankDetails');
  });

  /*******************
  bankDetails
  *******************/
  app.get('/pip20/bankDetails', function (req, res) {
      res.render('pip20/bankDetails', {
        answers : req.session['pip20-bankDetails'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip20/bankDetails', function (req, res) {
    req.session['pip20-bankDetails'] = req.body;
    if (req.body.saveAndMenu) {
      res.redirect('/pip20/checkYourAnswers#aboutYou');
    } else {
      hcps = req.session['pip20-healthcareprofessional'];
      if ( !hcps || !hcps['name1']) {
        res.redirect('/pip20/declaration2');
     } else {
        res.redirect('/pip20/hcpConsent');
      }
    }
  });

  /*******************
  HCP Consent
  *******************/
  app.get('/pip20/hcpConsent', function (req, res) {
      res.render('pip20/hcpConsent', {
        hcps    : req.session['pip20-healthcareprofessional'],
        answers : req.session['pip20-hcpConsent'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip20/hcpConsent', function (req, res) {
    req.session['pip20-hcpConsent'] = req.body;

    if (req.body.saveAndMenu) {
      res.redirect('/pip20/checkYourAnswers#yourCondition');
    } else {
      res.redirect('/pip20/declaration2');
    }
  });

  /*******************
  declaration at end
  *******************/
  app.get('/pip20/declaration2', function (req, res) {
      res.render('pip20/declaration2', {
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip20/declaration2', function (req, res) {
    res.redirect('/pip20/thankYou');
  });

  /*******************
  thankYou
  *******************/
  app.get('/pip20/thankYou', function (req, res) {
      res.render('pip20/thankYou', {
        answers : req.session['pip20-thankYou'],
        'edit'  : req.body.saveAndMenu,
        data    : aboutYou.getTableData()
      });
  });


};
