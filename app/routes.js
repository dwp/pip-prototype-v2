var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.render('index');
});


// Example route: Passing data into a page
router.get('/examples/template-data', function (req, res) {
  res.render('examples/template-data', { 'name' : 'Foo' });
});


module.exports = {
  bind : function (app) {

    app.get('/', function (req, res) {
      res.render('index');
    });


  require('./routes-14')(app);
  require('./routes-15')(app);
  require('./routes-16')(app);
  require('./routes-17')(app);
  require('./routes-18')(app);
  require('./routes-19')(app);
  require('./routes-20')(app);
  require('./routes-21')(app);
  }
};
