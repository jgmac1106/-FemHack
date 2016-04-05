const path = require('path');
const WebpackNotifierPlugin = require('webpack-notifier');

var PATHS = {
	entry: path.join(__dirname, 'src/entry.js'),
	output: path.join(__dirname, 'build/bundle.js')
};

module.exports = {
	entry:PATHS.entry,
	output:{
		path: __dirname + "/build",
		filename:"bundle.js"
	},
	module:{
		loaders:[
					{
						test: /\.(js)$/,
						exclude: /(node_modules)/,
						loader: 'babel',
						query: {
							presets: [
								'babel-preset-es2015',
								'babel-preset-react'
							]
						}
					},
					{
						test: /\.styl$/,
						exclude: /(node_modules)/,
						loader: 'style-loader!css-loader!postcss-loader!stylus-loader'
					},
					{
						test: /\.(jpg|png)$/,
						loader: 'url?limit=25000',
						include: PATHS.images
					}
				]
	},
	devServer:{
		historyApiFallback:true
	},
	plugins:[
		new WebpackNotifierPlugin()
	]
}