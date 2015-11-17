var path       = require('path'),
    express    = require('express'),
    nunjucks   = require('express-nunjucks'),
    routes     = require(__dirname + '/app/routes.js'),
    favicon    = require('serve-favicon'),
    app        = express(),
    basicAuth  = require('basic-auth-connect'),
    port       = (process.env.PORT || 3000),
    bodyParser = require('body-parser'),
    session    = require('express-session'),
    // Grab environment variables specified in Procfile or as Heroku config vars
    username   = process.env.USERNAME,
    password   = process.env.PASSWORD,
    env        = process.env.NODE_ENV || 'development';

// Authenticate against the environment-provided credentials, if running
// the app in production (Heroku, effectively)
if (env === 'production') {
  if (!username || !password) {
    console.log('Username or password is not set, exiting.');
    process.exit(1);
  }
  app.use(basicAuth(username, password));
}

// Application settings

app.set('view engine', 'html');
app.set('views', [__dirname + '/app/views', __dirname + '/lib/']);

nunjucks.setup({
    autoescape: true,
    watch: true
}, app);

// Middleware to serve static assets
app.use('/public', express.static(__dirname + '/public'));
app.use('/public', express.static(__dirname + '/govuk_modules/govuk_template/assets'));
app.use('/public', express.static(__dirname + '/govuk_modules/govuk_frontend_toolkit'));

app.use(favicon(path.join(__dirname, 'govuk_modules', 'govuk_template', 'assets', 'images','favicon.ico')));


// send assetPath to all views
app.use(function (req, res, next) {
  res.locals.asset_path="/public/";
  next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//app session
app.use(session({ secret: 'wr34954j54kr', cookie: { maxAge: 60000000 }}));

if (typeof(routes) != "function"){
  console.log(routes.bind);
  console.log("Warning: the use of bind in routes is deprecated - please check the prototype kit documentation for writing routes.")
  routes.bind(app);
} else {
  app.use("/", routes);
}

// auto render any view that exists

app.get(/^\/([^.]+)$/, function (req, res) {

	var path = (req.params[0]);

	res.render(path, function(err, html) {
		if (err) {
			res.render(path + "/index", function(err2, html) {
        if (err2) {
          console.log(err);
          res.status(404).send(err).send(err2);
        } else {
          res.end(html);
        }
      });
		} else {
			res.end(html);
		}
	});

});

// start the app

app.listen(port);
console.log('');
console.log('Listening on port ' + port);
console.log('');