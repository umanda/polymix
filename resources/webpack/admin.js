let mix = require('laravel-mix');

mix.js('resources/assets/admin/js/admin.js', 'public/js')
    .sass('resources/assets/admin/sass/admin.scss', 'public/css');
