let mix = require('laravel-mix');

mix.options({
	publicPath: '.',
	processCssUrls: false
});

if (mix.inProduction()) {
	mix
	.sass('./src/main.sass', './build/nexo.min.css')
	.copy('./src/docs/index.html', './docs/index.html')
	.copy('./build/nexo.min.css', './demo/nexo.min.css')
	.js('./src/docs/main.js', './demo/docs.js')
} else {
	mix
	.copy('./src/docs/index.html', './dist/index.html')
	.sass('./src/main.sass', './dist/nexo.min.css')
	.js('./src/docs/main.js', './dist/docs.js')
}