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
      res.redirect('/pip14/nationality');
    }
  });



};
