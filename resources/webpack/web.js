let mix = require('laravel-mix');

mix.js('resources/assets/web/js/web.js', 'public/js')
    .sass('resources/assets/web/sass/web.scss', 'public/css');
