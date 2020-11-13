let mix = require('laravel-mix');

mix.js('resources/assets/app/js/app.js', 'public/js')
    .sass('resources/assets/app/sass/app.scss', 'public/css');
