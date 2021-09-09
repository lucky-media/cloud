const mix = require('laravel-mix');
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/site.js', 'public/js')

mix.postCss('resources/css/tailwind.css', 'public/css', [
    require('postcss-import'),
    require('tailwindcss'),
    require('postcss-nested'),
    require('autoprefixer')
])

mix.browserSync({
    proxy: process.env.APP_URL,
    files: [
        'resources/views/**/*.html',
        'public/**/*.(css|js)',
    ],
    // Option to open in non default OS browser.
    // browser: "firefox",
    notify: false
})

if (mix.inProduction()) {
    mix.version();
}
