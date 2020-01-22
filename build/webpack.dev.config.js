module.exports = {
	mode: 'development',
	entry: {
		index: '../src/index.js'
	},
	output: {
		path: '/dist',
		filename: 'js/[name].js'
	},
	devServer: {
		contentBase:'./assets',
		host: 'localhost',
		port: 8000,
		publicPath: '/',
		compress: true,
		noInfo: true,
		inline: true,
		hot: true,
		stats: {
			colors: true,
			chunks: false
		}
	}
}
