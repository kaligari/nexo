let mix = require('laravel-mix');

mix.options({
	publicPath: '.',
	processCssUrls: false
});

mix.sass('./src/main.sass', './dist/nexo.min.css')
.js('./src/docs/main.js', './docs/docs.js')

// mix.webpackConfig({
// 	module: {
// 		rules: [
// 			{
// 				test: /\.jade$/,
// 				loader: 'pug-plain-loader'
// 			}
// 		]
// 	}
// })