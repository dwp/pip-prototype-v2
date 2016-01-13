var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.render('index');
});

router.get('/examples/template-data', function (req, res) {
  res.render('examples/template-data', { 'name' : 'Foo' });
});

// add your routes here

module.exports = {
  bind : function (app) {

    app.get('/', function (req, res) {
      res.render('index');
    });


  require('./routes-14')(app);
  }
};
