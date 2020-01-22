const path = require('path');
function resolve(dir) {
	return path.join(__dirname, '..', dir);
}
module.exports = {
	mode: 'development',
	entry: {
		index: resolve('src/index.js')
	},
	output: {
		path: '/dist',
		filename: 'js/[name].js'
	},
	devServer: {
		contentBase: resolve('dist'),
		host: 'localhost',
		port: 8080,
		// publicPath: '/',
		// compress: true,
		noInfo: true,
		inline: true,
		hot: true,
		/*stats: {
			colors: true,
			chunks: false
		}*/
	}
}
