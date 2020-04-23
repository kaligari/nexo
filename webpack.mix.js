let mix = require('laravel-mix');

mix.options({
	publicPath: '.',
	processCssUrls: false
});

mix.sass('./src/main.sass', './dist/nexo.min.css')
