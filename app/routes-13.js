module.exports = function(app){

   // session to forms

   app.get('/pip13/', function (req, res) {
     res.render('pip13/apply');
   });


   var data = require('./views/pip13/questions');

   /*******************
   Helper
   *******************/
   app.get('/pip13/helper', function (req, res) {
       res.render('pip13/helper', {
         answers : req.session['pip13-helper'],
         'edit'  : req.param('edit'),
         'page'  : data.getTableData()
       });
   });

   app.post('/pip13/helper', function (req, res) {
     req.session['pip13-helper'] = req.body;

     if (req.param('edit')) {
       res.redirect('/pip13/check-and-change');
     } else {
       res.redirect('/pip13/nationality');
     }
   });


   /*******************
   Nationality
   *******************/
   app.get('/pip13/nationality', function (req, res) {
       res.render('pip13/nationality', {
         answers : req.session['pip13-nationality'],
         'edit'  : req.param('edit'),
         'page'  : data.getTableData()
       });
   });

   app.post('/pip13/nationality', function (req, res) {
     req.session['pip13-nationality'] = req.body;

     if (req.param('edit')) {
       res.redirect('/pip13/check-and-change');
     } else {
       res.redirect('/pip13/paymentsFromAbroad');
     }
   });

   /*******************
   Payments from abroad
   *******************/
   app.get('/pip13/paymentsFromAbroad', function (req, res) {
       res.render('pip13/paymentsFromAbroad', {
         answers : req.session['pip13-paymentsFromAbroad'],
         'edit'  : req.param('edit'),
         'page'  : data.getTableData()
       });
   });

   app.post('/pip13/paymentsFromAbroad', function (req, res) {
     req.session['pip13-paymentsFromAbroad'] = req.body;

     if (req.param('edit')) {
       res.redirect('/pip13/check-and-change');
     } else {
       res.redirect('/pip13/conditionDetails');
     }
   });

   /*******************
   conditionDetails **todo
   *******************/
   app.get('/pip13/conditionDetails', function (req, res) {
       res.render('pip13/conditionDetails', {
         page             : '4',
         conditionDetails : req.session['pip13-conditionDetails'],
         'edit'           : req.param('edit')
       });
   });
   app.post('/pip13/conditionDetails', function (req, res) {
     req.session['pip13-conditionDetails'] = req.body;
     if (req.param('edit')) {
       res.redirect('/pip13/check-and-change');
     } else {
       res.redirect('/pip13/medications');
     }
   });

   /*******************
   medications **todo
   *******************/
   app.get('/pip13/medications', function (req, res) {
       res.render('pip13/medications', {
         page        : '5',
         medications : req.session['pip13-medications'],
         'edit'      : req.param('edit')
       });
   });
   app.post('/pip13/medications', function (req, res) {
     req.session['pip13-medications'] = req.body;

     if(req.body.currentMedications === 'Yes') {
       if (req.param('edit')) {
         res.redirect('pip13/manageMedications?edit=true');
       } else {
         res.redirect('pip13/manageMedications');
       }
     } else if (req.param('edit')) {
       res.redirect('pip13/check-and-change');
     } else {
       res.redirect('pip13/treatments');
     }
   });

   /*******************
   manageMedications **todo
   *******************/
   app.get('/pip13/manageMedications', function (req, res) {
       res.render('pip13/manageMedications', {
         page               : '6',
         medications   : req.session['pip13-manageMedications'],
         'edit'             : req.param('edit')
       });
   });
   app.post('/pip13/manageMedications', function (req, res) {
     req.session['pip13-manageMedications'] = req.body;
     //req.session['pip13-conditionDetails']['benefitsAbroadPayment' + req.body.benefitsAbroadPayment] = req.body.benefitsAbroadPayment;
     //req.session['pip13-conditionDetails']['payInsuranceAbroad' + req.body.payInsuranceAbroad]       = req.body.payInsuranceAbroad;

     //console.log(JSON.stringify(req.session['pip13-conditionDetails']));
     if (req.param('edit')) {
       res.redirect('pip13/check-and-change');
     } else {
       res.redirect('pip13/treatments');
     }
   });

   /*******************
   treatments **todo
   *******************/
   app.get('/pip13/treatments', function (req, res) {
       res.render('pip13/treatments', {
         page               : '7',
         medications   : req.session['pip13-treatments'],
         'edit'             : req.param('edit')
       });
   });
   app.post('/pip13/treatments', function (req, res) {
     req.session['pip13-treatments'] = req.body;

     if(req.body.plannedTreatments === 'Yes') {
       if (req.param('edit')) {
         res.redirect('pip13/manageTreatments?edit=true');
       } else {
         res.redirect('pip13/manageTreatments');
       }
     } else if (req.param('edit')) {
       res.redirect('pip13/check-and-change');
     } else {
       res.redirect('pip13/sideEffects');
     }
   });

   /*******************
   manageTreatments **todo
   *******************/
   app.get('/pip13/manageTreatments', function (req, res) {
       res.render('pip13/manageTreatments', {
         page               : '8',
         medications   : req.session['pip13-treatments'],
         'edit'             : req.param('edit')
       });
   });
   app.post('/pip13/manageTreatments', function (req, res) {
     req.session['pip13-manageTreatments'] = req.body;
     //req.session['pip13-conditionDetails']['benefitsAbroadPayment' + req.body.benefitsAbroadPayment] = req.body.benefitsAbroadPayment;
     //req.session['pip13-conditionDetails']['payInsuranceAbroad' + req.body.payInsuranceAbroad]       = req.body.payInsuranceAbroad;

     //console.log(JSON.stringify(req.session['pip13-conditionDetails']));
     if (req.param('edit')) {
       res.redirect('pip13/check-and-change');
     } else {
       res.redirect('pip13/sideEffects');
     }
   });

   /*******************
   sideEffects **todo
   *******************/
   app.get('/pip13/sideEffects', function (req, res) {
       res.render('pip13/sideEffects', {
         page               : '9',
         medications   : req.session['pip13-treatments'],
         'edit'             : req.param('edit')
       });
   });
   app.post('/pip13/sideEffects', function (req, res) {
     req.session['pip13-sideEffects'] = req.body;
     //req.session['pip13-conditionDetails']['benefitsAbroadPayment' + req.body.benefitsAbroadPayment] = req.body.benefitsAbroadPayment;
     //req.session['pip13-conditionDetails']['payInsuranceAbroad' + req.body.payInsuranceAbroad]       = req.body.payInsuranceAbroad;

     //console.log(JSON.stringify(req.session['pip13-conditionDetails']));
     if (req.param('edit')) {
       res.redirect('pip13/check-and-change');
     } else {
       res.redirect('pip13/conditionAffects');
     }
   });


   /*******************
   conditionAffects
   *******************/
   app.get('/pip13/conditionAffects', function (req, res) {
       res.render('pip13/conditionAffects', {
         page               : '10',
         conditioneffects : req.session['pip13-conditioneffects'],
         'edit'           : req.param('edit')
       });
   });
   app.post('/pip13/conditionAffects', function (req, res) {
     req.session['pip13-conditioneffects'] = req.body;
     req.session['pip13-conditioneffects']['conditioneffects' + req.body.conditioneffects] = req.body.conditioneffects;


     if (req.param('edit')) {
       res.redirect('pip13/check-and-change');
     } else {
       res.redirect('pip13/hcp-condition');
     }
   });

   /*******************
   hcp-condition
   *******************/
   app.get('/pip13/hcp-condition', function (req, res) {
       res.render('pip13/hcp-condition', {
         page               : '11',
         hcpcondition : req.session['pip13-hcp-condition'],
         'edit'       : req.param('edit')
       });
   });
   app.post('/pip13/hcp-condition', function (req, res) {
     req.session['pip13-hcp-condition'] = req.body;
     req.session['pip13-hcp-condition']['monitored' + req.body.monitored] = req.body.monitored;

     if(req.body.monitored === 'Yes') {
       if (req.param('edit')) {
         res.redirect('pip13/hcp-condition-2?edit=true');
       } else {
         res.redirect('pip13/hcp-condition-2');
       }
     } else if (req.param('edit')) {
       res.redirect('pip13/check-and-change');
     } else {
       res.redirect('pip13/healthcareprofessional');
     }
   });

   /*******************
   hcp-condition2
   *******************/
   app.get('/pip13/hcp-condition-2', function (req, res) {
       res.render('pip13/hcp-condition-2', {
         page               : '12',
         hcpcondition2 : req.session['pip13-hcp-condition-2'],
         'edit'        : req.param('edit')
       });
   });

   app.post('/pip13/hcp-condition-2', function (req, res) {
     req.session['pip13-hcp-condition-2'] = req.body;
     req.session['pip13-hcp-condition-2']['conditionEffects' + req.body.conditionEffects] = req.body.conditionEffects;

     if (req.param('edit')) {
       res.redirect('pip13/check-and-change');
     } else {
       res.redirect('pip13/healthcareprofessional');
     }
   });

   /*******************
   healthcareprofessional **todo
   *******************/
   app.get('/pip13/healthcareprofessional', function (req, res) {
       res.render('pip13/healthcareprofessional', {
         page               : '13',
         healthcareprofessional : req.session['pip13-healthcareprofessional'],
         'edit'                 : req.param('edit')
       });
   });

   app.post('/pip13/healthcareprofessional', function (req, res) {
     req.session['pip13-healthcareprofessional'] = req.body;

     if (req.param('edit')) {
       res.redirect('pip13/check-and-change');
     } else {
       res.redirect('pip13/submitEvidence');
     }
   });

   /*******************
   submitEvidence **todo
   *******************/
   app.get('/pip13/submitEvidence', function (req, res) {
       res.render('pip13/submitEvidence', {
         page               : '14',
         submitEvidence : req.session['pip13-submitEvidence'],
         'edit'         : req.param('edit')
       });
   });

   app.post('/pip13/submitEvidence', function (req, res) {
     req.session['pip13-submitEvidence'] = req.body;

     if (req.param('edit')) {
       res.redirect('pip13/check-and-change');
     } else {
       res.redirect('pip13/specialAids');
     }
   });

   /*******************
   specialAids **todo
   *******************/
   app.get('/pip13/specialAids', function (req, res) {
       res.render('pip13/specialAids', {
         page               : '15',
         specialAids : req.session['pip13-specialAids'],
         'edit'      : req.param('edit')
       });
   });

   app.post('/pip13/specialAids', function (req, res) {
     req.session['pip13-specialAids'] = req.body;

     if (req.param('edit')) {
       res.redirect('pip13/check-and-change');
     } else {
       res.redirect('pip13/seeing');
     }
   });

   /*******************
   seeing
   *******************/
   app.get('/pip13/seeing', function (req, res) {
       res.render('pip13/seeing', {
         page               : '16',
         frequency : req.session['pip13-seeing'],
         'edit'    : req.param('edit')
       });
   });

   app.post('/pip13/seeing', function (req, res) {
     req.session['pip13-seeing'] = req.body;
     req.session['pip13-seeing']['frequency' + req.body.frequency] = req.body.frequency;

     if (req.param('edit')) {
       res.redirect('pip13/check-and-change');
     } else {
       res.redirect('pip13/speaking');
     }
   });

   /*******************
   speaking
   *******************/
   app.get('/pip13/speaking', function (req, res) {
       res.render('pip13/speaking', {
         page               : '17',
         frequency : req.session['pip13-speaking'],
         'edit'    : req.param('edit')
       });
   });

   app.post('/pip13/speaking', function (req, res) {
     req.session['pip13-speaking'] = req.body;
     req.session['pip13-speaking']['frequency' + req.body.frequency] = req.body.frequency;

     if (req.param('edit')) {
       res.redirect('pip13/check-and-change');
     } else {
       res.redirect('pip13/hearing');
     }
    });

    /*******************
    hearing
    *******************/
    app.get('/pip13/hearing', function (req, res) {
        res.render('pip13/hearing', {
          page               : '18',
          frequency : req.session['pip13-hearing'],
          'edit'    : req.param('edit')
        });
    });

    app.post('/pip13/hearing', function (req, res) {
      req.session['pip13-hearing'] = req.body;
      req.session['pip13-hearing']['frequency' + req.body.frequency] = req.body.frequency;

      if (req.param('edit')) {
        res.redirect('pip13/check-and-change');
      } else {
        res.redirect('pip13/youAndYourHome');
      }
    });


    /*******************
    gettingUp
    *******************/
    app.get('/pip13/gettingUp', function (req, res) {
        res.render('pip13/gettingUp', {
          page               : '19',
          frequency : req.session['pip13-gettingUp'],
          'edit'    : req.param('edit')
        });
    });

    app.post('/pip13/gettingUp', function (req, res) {
      req.session['pip13-gettingUp'] = req.body;
      req.session['pip13-gettingUp']['frequency' + req.body.frequency] = req.body.frequency;

      if (req.param('edit')) {
        res.redirect('pip13/check-and-change');
      } else {
        res.redirect('pip13/toilet');
      }
    });

    /*******************
    toilet
    *******************/
    app.get('/pip13/toilet', function (req, res) {
        res.render('pip13/toilet', {
          page               : '20',
          frequency : req.session['pip13-toilet'],
          'edit'    : req.param('edit')
        });
    });

    app.post('/pip13/toilet', function (req, res) {
      req.session['pip13-toilet'] = req.body;
      req.session['pip13-toilet']['frequency' + req.body.frequency] = req.body.frequency;

      if (req.param('edit')) {
        res.redirect('pip13/check-and-change');
      } else {
        res.redirect('pip13/washing');
      }
    });

    /*******************
    washing
    *******************/
    app.get('/pip13/washing', function (req, res) {
        res.render('pip13/washing', {
          page               : '21',
          frequency : req.session['pip13-washing'],
          'edit'    : req.param('edit')
        });
    });

    app.post('/pip13/washing', function (req, res) {
      req.session['pip13-washing'] = req.body;
      req.session['pip13-washing']['frequency' + req.body.frequency] = req.body.frequency;

      if (req.param('edit')) {
        res.redirect('pip13/check-and-change');
      } else {
        res.redirect('pip13/gettingDressed');
      }
    });

    /*******************
    gettingDressed
    *******************/
    app.get('/pip13/gettingDressed', function (req, res) {
        res.render('pip13/gettingDressed', {
          page               : '22',
          frequency : req.session['pip13-gettingDressed'],
          'edit'    : req.param('edit')
        });
    });

    app.post('/pip13/gettingDressed', function (req, res) {
      req.session['pip13-gettingDressed'] = req.body;
      req.session['pip13-gettingDressed']['frequency' + req.body.frequency] = req.body.frequency;

      if (req.param('edit')) {
        res.redirect('pip13/check-and-change');
      } else {
        res.redirect('pip13/preparingandcookingfood');
      }
    });

    /*******************
    preparingandcookingfood
    *******************/
    app.get('/pip13/preparingandcookingfood', function (req, res) {
        res.render('pip13/preparingandcookingfood', {
          page               : '23',
          frequency : req.session['pip13-preparingandcookingfood'],
          'edit'    : req.param('edit')
        });
    });

    app.post('/pip13/preparingandcookingfood', function (req, res) {
      req.session['pip13-preparingandcookingfood'] = req.body;
      req.session['pip13-preparingandcookingfood']['frequency' + req.body.frequency] = req.body.frequency;

      if (req.param('edit')) {
        res.redirect('pip13/check-and-change');
      } else {
        res.redirect('pip13/eatinganddrinking');
      }
    });

    /*******************
    eatinganddrinking
    *******************/
    app.get('/pip13/eatinganddrinking', function (req, res) {
        res.render('pip13/eatinganddrinking', {
          page               : '24',
          frequency : req.session['pip13-eatinganddrinking'],
          'edit'    : req.param('edit')
        });
    });

    app.post('/pip13/eatinganddrinking', function (req, res) {
      req.session['pip13-eatinganddrinking'] = req.body;
      req.session['pip13-eatinganddrinking']['frequency' + req.body.frequency] = req.body.frequency;

      if (req.param('edit')) {
        res.redirect('pip13/check-and-change');
      } else {
        res.redirect('pip13/leavingYourHome');
      }
    });

    /*******************
    goingOut
    *******************/
    app.get('/pip13/goingOut', function (req, res) {
        res.render('pip13/goingOut', {
          page               : '25',
          frequency : req.session['pip13-goingOut'],
          'edit'    : req.param('edit')
        });
    });

    app.post('/pip13/goingOut', function (req, res) {
      req.session['pip13-goingOut'] = req.body;
      req.session['pip13-goingOut']['frequency' + req.body.frequency] = req.body.frequency;

      if (req.param('edit')) {
        res.redirect('pip13/check-and-change');
      } else {
        res.redirect('pip13/gettingOn');
      }
    });

    /*******************
    gettingOn **todo
    *******************/
    app.get('/pip13/gettingOn', function (req, res) {
        res.render('pip13/gettingOn', {
          page               : '26',
          frequency : req.session['pip13-gettingOn'],
          'edit'    : req.param('edit')
        });
    });

    app.post('/pip13/gettingOn', function (req, res) {
      req.session['pip13-gettingOn'] = req.body;
      req.session['pip13-gettingOn']['gettingOn' + req.body.frequency] = req.body.frequency;

      if (req.param('edit')) {
        res.redirect('pip13/check-and-change');
      } else {
        res.redirect('pip13/understanding');
      }
    });

    /*******************
    goingSomewhereLocalJourney **todo
    *******************/
    app.get('/pip13/goingSomewhereLocalJourney', function (req, res) {
        res.render('pip13/goingSomewhereLocalJourney', {
          page               : '27',
          frequency : req.session['pip13-goingSomewhereLocalJourney'],
          'edit'    : req.param('edit')
        });
    });

    app.post('/pip13/goingSomewhereLocalJourney', function (req, res) {
      req.session['pip13-goingSomewhereLocalJourney'] = req.body;
      req.session['pip13-goingSomewhereLocalJourney']['goingSomewhereLocalJourney' + req.body.frequency] = req.body.frequency;

      if (req.param('edit')) {
        res.redirect('pip13/check-and-change');
      } else {
        res.redirect('pip13/goingSomewhereNeverbeenBefore');
      }
    });

    /*******************
    goingSomewhereNeverbeenBefore **todo
    *******************/
    app.get('/pip13/goingSomewhereNeverbeenBefore', function (req, res) {
        res.render('pip13/goingSomewhereNeverbeenBefore', {
          page               : '28',
          frequency : req.session['pip13-goingSomewhereNeverbeenBefore'],
          'edit'    : req.param('edit')
        });
    });

    app.post('/pip13/goingSomewhereNeverbeenBefore', function (req, res) {
      req.session['pip13-goingSomewhereNeverbeenBefore'] = req.body;
      req.session['pip13-goingSomewhereNeverbeenBefore']['goingSomewhereNeverbeenBefore' + req.body.frequency] = req.body.frequency;

      if(req.body.frequency === 'None of the time') {
        if (req.param('edit')) {
          res.redirect('pip13/understanding-q?edit=true');
        } else {
          res.redirect('pip13/understanding-q');
        }
      } else if (req.param('edit')) {
        res.redirect('pip13/check-and-change');
      } else {
        res.redirect('pip13/goingSomewherebeenBefore');
      }
    });

    /*******************
    goingSomewherebeenBefore **todo
    *******************/
    app.get('/pip13/goingSomewherebeenBefore', function (req, res) {
        res.render('pip13/goingSomewherebeenBefore', {
          page               : '29',
          frequency : req.session['pip13-goingSomewherebeenBefore'],
          'edit'    : req.param('edit')
        });
    });

    app.post('/pip13/goingSomewherebeenBefore', function (req, res) {
      req.session['pip13-goingSomewherebeenBefore'] = req.body;
      req.session['pip13-goingSomewherebeenBefore']['goingSomewherebeenBefore' + req.body.frequency] = req.body.frequency;

      if (req.param('edit')) {
        res.redirect('pip13/check-and-change');
      } else {
        res.redirect('pip13/understanding-q');
      }
    });

    /*******************
    understanding-q **todo
    *******************/
    app.get('/pip13/understanding-q', function (req, res) {
        res.render('pip13/understanding-q', {
          page               : '30',
          frequency : req.session['pip13-understanding-q'],
          'edit'    : req.param('edit')
        });
    });

    app.post('/pip13/understanding-q', function (req, res) {
      req.session['pip13-understanding-q'] = req.body;
      req.session['pip13-understanding-q']['understanding-q' + req.body.frequency] = req.body.frequency;

      if (req.param('edit')) {
        res.redirect('pip13/check-and-change');
      } else {
        res.redirect('pip13/money');
      }
    });

    /*******************
    money **todo
    *******************/
    app.get('/pip13/money', function (req, res) {
        res.render('pip13/money', {
          page               : '31',
          frequency : req.session['pip13-money'],
          'edit'    : req.param('edit')
        });
    });

    app.post('/pip13/money', function (req, res) {
      req.session['pip13-money'] = req.body;
      req.session['pip13-money']['money' + req.body.frequency] = req.body.frequency;

      res.redirect('pip13/check-and-change');

    });

   /*******************
   check and change
   *******************/
   app.get('/pip13/check-and-change', function (req, res) {
     res.render('pip13/check-and-change', {
       'page'                               : data.getTableData(),
       helperAnswers                        : req.session['pip13-helper'],
       nationalityAnswers                   : req.session['pip13-nationality'],
       paymentsFromAbroadAnswers            : req.session['pip13-paymentsFromAbroad'],
       conditionDetailsAnswers              : req.session['pip13-conditionDetails'],
       medicationsAnswers                   : req.session['pip13-medications'],
       manageMedicationsAnswers             : req.session['pip13-manageMedications'],
       treatmentsAnswers                    : req.session['pip13-treatments'],
       manageTreatmentsAnswers              : req.session['pip13-manageTreatments'],
       sideEffectsAnswers                   : req.session['pip13-sideEffects'],
       conditioneffectsAnswers              : req.session['pip13-conditioneffects'],
       hcpconditionAnswers                  : req.session['pip13-hcp-condition'],
       hcpcondition2Answers                 : req.session['pip13-hcp-condition-2'],
       healthcareprofessionalAnswers        : req.session['pip13-healthcareprofessional'],
       submitEvidenceAnswers                : req.session['pip13-submitEvidence'],
       specialAidsAnswers                   : req.session['pip13-specialAids'],
       gettingAroundAnswers                 : req.session['pip13-gettingAround'],
       seeingAnswers                        : req.session['pip13-seeing'],
       hearingAnswers                       : req.session['pip13-hearing'],
       speakingAnswers                      : req.session['pip13-speaking'],
       gettingUpAnswers                     : req.session['pip13-gettingUp'],
       toiletAnswers                        : req.session['pip13-toilet'],
       washingAnswers                       : req.session['pip13-washing'],
       gettingDressedAnswers                : req.session['pip13-gettingDressed'],
       preparingandcookingfoodAnswers       : req.session['pip13-preparingandcookingfood'],
       eatinganddrinkingAnswers             : req.session['pip13-eatinganddrinking'],
       goingOutAnswers                      : req.session['pip13-goingOut'],
       gettingOnAnswers                     : req.session['pip13-gettingOn'],
       goingSomewhereNeverbeenBeforeAnswers : req.session['pip13-goingSomewhereNeverbeenBefore'],
       goingSomewherebeenBeforeAnswers      : req.session['pip13-goingSomewherebeenBefore'],
       understandingqAnswers                : req.session['pip13-understanding-q'],
       moneyAnswers                         : req.session['pip13-money'],
       additionalInfoAnswers                : req.session['pip13-additionalInfo']
     });
   });

   app.post('/pip13/check-and-change', function (req, res) {

     res.redirect('pip13/additionalInfo');
   });

   /*******************
   additionalInfo **todo
   *******************/
   app.get('/pip13/additionalInfo', function (req, res) {
       res.render('pip13/additionalInfo', {
         page               : '33',
         frequency : req.session['pip13-additionalInfo'],
         'edit'    : req.param('edit')
       });
   });

   app.post('/pip13/additionalInfo', function (req, res) {
     req.session['pip13-additionalInfo'] = req.body;
     req.session['pip13-additionalInfo']['additionalInfo' + req.body.frequency] = req.body.frequency;

     res.redirect('pip13/declaration');

   });

   /*******************
   declaration
   *******************/
   app.get('/pip13/declaration', function (req, res) {
       res.render('pip13/declaration', {
         page               : '34'
       });
   });

   app.post('/pip13/declaration', function (req, res) {

       var sendgrid  = require('sendgrid')(process.env.SENDGRID_USERNAME, process.env.SENDGRID_PASSWORD),
           date      = new Date(),
           emailText = '<b>helper</b>'            + JSON.stringify(req.session['pip13-helper'], null, " <br/>") +
           '<hr />' +
           '<b>nationality</b>'                   + JSON.stringify(req.session['pip13-nationality'], null, " <br/>") +
           '<hr />' +
           '<b>paymentsFromAbroad</b>'            + JSON.stringify(req.session['pip13-paymentsFromAbroad'], null, " <br/>") +
           '<hr />' +
           '<b>conditionDetails</b>'              + JSON.stringify(req.session['pip13-conditionDetails'], null, " <br/>") +
           '<hr />' +
           '<b>medications</b>'                   + JSON.stringify(req.session['pip13-medications'],null,"<br />") +
           '<hr />' +
           '<b>manageMedications</b>'             + JSON.stringify(req.session['pip13-manageMedications'],null,"<br />") +
           '<hr />' +
           '<b>treatments</b>'                    + JSON.stringify(req.session['pip13-treatments'],null,"<br />") +
           '<hr />' +
           '<b>manageTreatments</b>'              + JSON.stringify(req.session['pip13-manageTreatments'],null,"<br />") +
           '<hr />' +
           '<b>sideEffects</b>'                   + JSON.stringify(req.session['pip13-sideEffects'],null,"<br />") +
           '<hr />' +
           '<b>conditioneffects</b>'              + JSON.stringify(req.session['pip13-conditioneffects'], null, " <br/>") +
           '<hr />' +
           '<b>hcpcondition</b>'                  + JSON.stringify(req.session['pip13-hcp-condition'], null, " <br/>") +
           '<hr />' +
           '<b>hcpcondition2</b>'                 + JSON.stringify(req.session['pip13-hcp-condition-2'], null, " <br/>") +
           '<hr />' +
           '<b>healthcareprofessional</b>'        + JSON.stringify(req.session['pip13-healthcareprofessional'], null, " <br/>") +
           '<hr />' +
           '<b>submitEvidence</b>'                + JSON.stringify(req.session['pip13-submitEvidence'], null, " <br/>") +
           '<hr />' +
           '<b>specialAids</b>'                   + JSON.stringify(req.session['pip13-specialAids'], null, " <br/>") +
           '<hr />' +
           '<b>gettingAround</b>'                 + JSON.stringify(req.session['pip13-gettingAround'], null, " <br/>") +
           '<hr />' +
           '<b>seeing</b>'                        + JSON.stringify(req.session['pip13-seeing'], null, " <br/>") +
           '<hr />' +
           '<b>hearing</b>'                       + JSON.stringify(req.session['pip13-hearing'], null, " <br/>") +
           '<hr />' +
           '<b>speaking</b>'                      + JSON.stringify(req.session['pip13-speaking'], null, " <br/>") +
           '<hr />' +
           '<b>gettingUp</b>'                     + JSON.stringify(req.session['pip13-gettingUp'], null, " <br/>") +
           '<hr />' +
           '<b>toilet</b>'                        + JSON.stringify(req.session['pip13-toilet'], null, " <br/>") +
           '<hr />' +
           '<b>washing</b>'                       + JSON.stringify(req.session['pip13-washing'], null, " <br/>") +
           '<hr />' +
           '<b>gettingDressed</b>'                + JSON.stringify(req.session['pip13-gettingDressed'], null, " <br/>") +
           '<hr />' +
           '<b>preparingandcookingfood</b>'       + JSON.stringify(req.session['pip13-preparingandcookingfood'], null, " <br/>") +
           '<hr />' +
           '<b>eatinganddrinking</b>'             + JSON.stringify(req.session['pip13-eatinganddrinking'], null, " <br/>") +
           '<hr />' +
           '<b>goingOut</b>'                      + JSON.stringify(req.session['pip13-goingOut'], null, " <br/>") +
           '<hr />' +
           '<b>gettingOn</b>'                     + JSON.stringify(req.session['pip13-gettingOn'], null, " <br/>") +
           '<hr />' +
           '<b>goingSomewhereLocalJourney</b>' + JSON.stringify(req.session['pip13-goingSomewhereLocalJourney'], null, " <br/>") +
           '<hr />' +
           '<b>goingSomewhereNeverbeenBefore</b>' + JSON.stringify(req.session['pip13-goingSomewhereNeverbeenBefore'], null, " <br/>") +
           '<hr />' +
           '<b>goingSomewherebeenBefore</b>'      + JSON.stringify(req.session['pip13-goingSomewherebeenBefore'], null, " <br/>") +
           '<hr />' +
           '<b>understandingq</b>'                + JSON.stringify(req.session['pip13-understanding-q'], null, " <br/>") +
           '<hr />' +
           '<b>money</b>'                         + JSON.stringify(req.session['pip13-money'], null, " <br/>") +
           '<hr />' +
           '<b>additionalInfo</b>'                + JSON.stringify(req.session['pip13-additionalInfo'], null, " <br/>") +
           '<hr />' +
           '<b>declaration</b>'                +   JSON.stringify(req.body, null, " <br/>");

      if (process.env.sendEmail === 'True') {
       sendgrid.send({
         //to :       'gup.dwp@gmail.com',
         to:       process.env.EMAIL,
         from:     'PIP-User-Research@UserResearch.com',
         subject:  'Sent at - ' + date.toString(),
         html:     emailText
       }, function(err, json) {
         if (err) { return console.error(err); } else { req.session.destroy(); }
         console.error(json);
       });
     }

    res.redirect('pip13/thankyou');
   });


};
