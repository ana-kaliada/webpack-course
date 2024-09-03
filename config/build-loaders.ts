import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshTypeScript from 'react-refresh-typescript';
import { ModuleOptions } from 'webpack';
import { BuildOptions } from './types/types';

export const buildLoaders = (options: BuildOptions): ModuleOptions['rules'] => { 
	const isDev = options.mode === 'development';

	const tsxLoader = {
		test: /\.tsx?$/,
		use: [
			{
				loader: 'ts-loader',
				options: {
					getCustomTransformers: () => ({
                before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
              }),
					transpileOnly: isDev,
				}
			}
		]
	};

	const cssLoaderWithModules = {
		loader: 'css-loader',
		options: {
			modules: {
				localIdentName: isDev ? "[path][name]__[local]" : '[hash:base64:8]'
			},
		}
	};

	const cssLoader = {
		test: /\.s[ac]ss$/i,
		use: [
			isDev ? "style-loader" : MiniCssExtractPlugin.loader,
			cssLoaderWithModules,
			"sass-loader",
		],
	};

	const imageLoader = {
		test: /\.(png|jpg|jpeg|gif)$/i,
		type: 'asset/resource',
	};

	const svgLoader = {
  test: /\.svg$/,
		use: [{
			loader: '@svgr/webpack',
			options: {
				icon: true
			}
		}],
}
	
	return [tsxLoader, cssLoader, imageLoader, svgLoader];
} 