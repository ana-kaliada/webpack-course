import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import webpack, { Configuration } from 'webpack';
import { BuildOptions } from './types/types';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

export const buildPlugins = ({mode, paths, analyzer}: BuildOptions): Configuration['plugins'] => { 
	const isDev = mode === 'development';

	const plugins: Configuration['plugins'] = [
		new HtmlWebpackPlugin({ template: paths.html }),
	];

	if (isDev) {
		plugins.push(new webpack.ProgressPlugin())
		plugins.push(new ForkTsCheckerWebpackPlugin())
		plugins.push(new ReactRefreshWebpackPlugin())
	} else {
		plugins.push(new MiniCssExtractPlugin({
			filename: 'css/[name].[contenthash:8].css',
			chunkFilename: 'css/[name].[contenthash:8].css',
		}))
		
		analyzer && plugins.push(new BundleAnalyzerPlugin())
	}

	return plugins
}