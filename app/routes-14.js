module.exports = function (app) {
var data = require('./views/pip14/styleguide');
  app.get('/pip14/styleguide', function (req, res) {
    res.render('pip14/styleguide', {
      answers : req.session['pip13-helper'],
      data    : data.getTableData()
    });
  });

};
