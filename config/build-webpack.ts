
import { Configuration } from 'webpack';
import { buildDevServer } from './build-dev-server';
import { buildLoaders } from './build-loaders';
import { buildPlugins } from './build-plugins';
import { buildResolvers } from './build-resolvers';
import { BuildOptions } from './types/types';


export const buildWebpack = (options: BuildOptions): Configuration => { 
	const isDev = options.mode === 'development';
	const { mode, paths } = options;
	const { entry, output } = paths;

	return ({
		mode: mode,
		entry,
		output: {
			path: output,
			filename: '[name].[contenthash].js',
			clean: true,
		},
		plugins: buildPlugins(options),
		module: {
			rules: buildLoaders(options),
		},
		resolve: buildResolvers(options),
		devtool: isDev && 'inline-source-map',
		devServer: isDev ? buildDevServer(options) : undefined,
		optimization: {
			runtimeChunk: 'single',
		},
	})
}; 