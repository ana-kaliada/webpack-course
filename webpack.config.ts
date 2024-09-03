import webpack from 'webpack';
import path from 'path';
import { buildWebpack } from './config/build-webpack';
import { BuildPaths, Mode } from './config/types/types';


interface EnvVariables {
	mode: Mode;
	port: number;
}

export default (env: EnvVariables) => {
	const paths: BuildPaths = {
		html: path.resolve(__dirname, 'public', 'index.html'),
		entry: path.resolve(__dirname, 'src', 'index.tsx'),
		output: path.resolve(__dirname, 'dist'),
		src: path.resolve(__dirname, 'src'),
	};

	const config: webpack.Configuration = buildWebpack({
		port: env.port ?? 3000,
		mode: env.mode ?? 'development',
		paths,
		analyzer: false
	});

	return config;
};
