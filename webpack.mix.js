let mix = require('laravel-mix');

if (process.env.section) {
  require(`${__dirname}/resources/webpack/${process.env.section}.js`);
} else {
  require(`${__dirname}/resources/webpack/web.js`);
  require(`${__dirname}/resources/webpack/admin.js`);
  require(`${__dirname}/resources/webpack/app.js`);
}


