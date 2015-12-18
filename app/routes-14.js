module.exports = function (app) {

  var styleguide = require('./views/pip14/content/styleguide'),
      aboutYou   = require('./views/pip14/content/aboutYou');

  app.get('/pip14/styleguide', function (req, res) {
    res.render('pip14/styleguide', {
      answers : req.session['pip14-helper'],
      data    : styleguide.getTableData()
    });
  });

  /*******************
  summaryMain
  *******************/
  app.get('/pip14/summaryMain', function (req, res) {
      res.render('pip14/summaryMain', {
        'show'  : req.param('show'),
        'next'  : req.param('next'),
        'back'  : req.param('back')
      });
  });

  /*******************
  Helper
  *******************/
  app.get('/pip14/helper', function (req, res) {
      res.render('pip14/helper', {
        answers : req.session['pip14-helper'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip14/helper', function (req, res) {
    req.session['pip14-helper'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip14/check-and-change');
    } else {
      res.redirect('/pip14/aboutYou');
    }
  });

  /*******************
  aboutYou
  *******************/
  app.get('/pip14/aboutYou', function (req, res) {
      res.render('pip14/aboutYou', {
        answers : req.session['pip14-aboutYou'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip14/aboutYou', function (req, res) {
    req.session['pip14-aboutYou'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip14/check-and-change');
    } else {
      res.redirect('/pip14/contactDetails');
    }
  });

  /*******************
  contactDetails
  *******************/
  app.get('/pip14/contactDetails', function (req, res) {
      res.render('pip14/contactDetails', {
        answers : req.session['pip14-contactDetails'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip14/contactDetails', function (req, res) {
    req.session['pip14-contactDetails'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip14/check-and-change');
    } else {
      res.redirect('/pip14/contactPref');
    }
  });

  /*******************
  contactPref
  *******************/
  app.get('/pip14/contactPref', function (req, res) {
      res.render('pip14/contactPref', {
        answers : req.session['pip14-contactPref'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip14/contactPref', function (req, res) {
    req.session['pip14-contactPref'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip14/check-and-change');
    } else {
      res.redirect('/pip14/currentWhereabouts');
    }
  });

  /*******************
  currentWhereabouts
  *******************/
  app.get('/pip14/currentWhereabouts', function (req, res) {
      res.render('pip14/currentWhereabouts', {
        answers : req.session['pip14-currentWhereabouts'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip14/currentWhereabouts', function (req, res) {
    req.session['pip14-currentWhereabouts'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip14/check-and-change');
    } else {
      res.redirect('/pip14/nationality');
    }
  });

  /*******************
  nationality
  *******************/
  app.get('/pip14/nationality', function (req, res) {
    res.render('pip14/nationality', {
      answers : req.session['pip14-nationality'],
      'edit'  : req.param('edit'),
      data    : aboutYou.getTableData()
    });
  });

  app.post('/pip14/nationality', function (req, res) {
    req.session['pip14-nationality'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip14/check-and-change');
    } else {
      res.redirect('/pip14/paymentsFromAbroad');
    }
  });

  /*******************
  paymentsFromAbroad
  *******************/
  app.get('/pip14/paymentsFromAbroad', function (req, res) {
      res.render('pip14/paymentsFromAbroad', {
        answers : req.session['pip14-paymentsFromAbroad'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip14/paymentsFromAbroad', function (req, res) {
    req.session['pip14-paymentsFromAbroad'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip14/check-and-change');
    } else {
      res.redirect('/pip14/summaryMain?show=yourCondition&next=conditionDetails&back=paymentsFromAbroad');
    }
  });

  /*******************
  conditionDetails
  *******************/
  app.get('/pip14/conditionDetails', function (req, res) {
      res.render('pip14/conditionDetails', {
        answers : req.session['pip14-conditionDetails'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip14/conditionDetails', function (req, res) {
    req.session['pip14-conditionDetails'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip14/check-and-change');
    } else {
      res.redirect('/pip14/medications');
    }
  });

  /*******************
  medications
  *******************/
  app.get('/pip14/medications', function (req, res) {
      res.render('pip14/medications', {
        answers : req.session['pip14-medications'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip14/medications', function (req, res) {
    req.session['pip14-medications'] = req.body;

    if(req.body.takingMedication === 'Yes') {
       if (req.param('edit')) {
         res.redirect('/pip14/manageMedications?edit=true');
       } else {
         res.redirect('/pip14/manageMedications');
       }
     } else if (req.param('edit')) {
       res.redirect('/pip14/check-and-change');
     } else {
       res.redirect('/pip14/treatments');
     }
  });

  /*******************
  manageMedications
  *******************/
  app.get('/pip14/manageMedications', function (req, res) {
      res.render('pip14/manageMedications', {
        answers : req.session['pip14-manageMedications'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip14/manageMedications', function (req, res) {
    req.session['pip14-manageMedications'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip14/check-and-change');
    } else {
      res.redirect('/pip14/treatments');
    }
  });

  /*******************
  treatments
  *******************/
  app.get('/pip14/treatments', function (req, res) {
      res.render('pip14/treatments', {
        answers : req.session['pip14-treatments'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip14/treatments', function (req, res) {
    req.session['pip14-treatments'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip14/check-and-change');
    } else {
      res.redirect('/pip14/sideEffects');
    }
  });

  /*******************
  sideEffects
  *******************/
  app.get('/pip14/sideEffects', function (req, res) {
      res.render('pip14/sideEffects', {
        answers : req.session['pip14-sideEffects'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip14/sideEffects', function (req, res) {
    req.session['pip14-sideEffects'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip14/check-and-change');
    } else {
      res.redirect('/pip14/conditionAffects');
    }
  });

  /*******************
  conditionAffects
  *******************/
  app.get('/pip14/conditionAffects', function (req, res) {
      res.render('pip14/conditionAffects', {
        answers : req.session['pip14-conditionAffects'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip14/conditionAffects', function (req, res) {
    req.session['pip14-conditionAffects'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip14/check-and-change');
    } else {
      res.redirect('/pip14/monitoringCondition');
    }
  });

  /*******************
  monitoringCondition
  *******************/
  app.get('/pip14/monitoringCondition', function (req, res) {
      res.render('pip14/monitoringCondition', {
        answers : req.session['pip14-monitoringCondition'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip14/monitoringCondition', function (req, res) {
    req.session['pip14-monitoringCondition'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip14/check-and-change');
    } else {
      res.redirect('/pip14/healthcareprofessional');
    }
  });

  /*******************
  healthcareprofessional
  *******************/
  app.get('/pip14/healthcareprofessional', function (req, res) {
      res.render('pip14/healthcareprofessional', {
        answers : req.session['pip14-healthcareprofessional'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip14/healthcareprofessional', function (req, res) {
    req.session['pip14-healthcareprofessional'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip14/check-and-change');
    } else {
      res.redirect('/pip14/submitEvidence');
    }
  });

  /*******************
  submitEvidence
  *******************/
  app.get('/pip14/submitEvidence', function (req, res) {
      res.render('pip14/submitEvidence', {
        answers : req.session['pip14-submitEvidence'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip14/submitEvidence', function (req, res) {
    req.session['pip14-submitEvidence'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip14/check-and-change');
    } else {
      res.redirect('/pip14/specialAids');
    }
  });

  /*******************
  specialAids
  *******************/
  app.get('/pip14/specialAids', function (req, res) {
      res.render('pip14/specialAids', {
        answers : req.session['pip14-specialAids'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip14/specialAids', function (req, res) {
    req.session['pip14-specialAids'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip14/check-and-change');
    } else {
      res.redirect('/pip14/sight');
    }
  });

  /*******************
  sight
  *******************/
  app.get('/pip14/sight', function (req, res) {
      res.render('pip14/sight', {
        answers : req.session['pip14-sight'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip14/sight', function (req, res) {
    req.session['pip14-sight'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip14/check-and-change');
    } else {
      res.redirect('/pip14/speech');
    }
  });

  /*******************
  speech
  *******************/
  app.get('/pip14/speech', function (req, res) {
      res.render('pip14/speech', {
        answers : req.session['pip14-speech'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip14/speech', function (req, res) {
    req.session['pip14-speech'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip14/check-and-change');
    } else {
      res.redirect('/pip14/hearing');
    }
  });

  /*******************
  hearing
  *******************/
  app.get('/pip14/hearing', function (req, res) {
      res.render('pip14/hearing', {
        answers : req.session['pip14-hearing'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip14/hearing', function (req, res) {
    req.session['pip14-hearing'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip14/check-and-change');
    } else {
      res.redirect('/pip14/summaryMain?show=yourHome&next=gettingUp&back=hearing');
    }
  });

  /*******************
  gettingUp
  *******************/
  app.get('/pip14/gettingUp', function (req, res) {
      res.render('pip14/gettingUp', {
        answers : req.session['pip14-gettingUp'],
        'edit'  : req.param('edit'),
        data    : aboutYou.getTableData()
      });
  });

  app.post('/pip14/gettingUp', function (req, res) {
    req.session['pip14-gettingUp'] = req.body;

    if (req.param('edit')) {
      res.redirect('/pip14/check-and-change');
    } else {
      res.redirect('/pip14/gettingUp');
    }
  });



};