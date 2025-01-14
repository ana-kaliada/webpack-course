export type Mode = 'production' | 'development';

export interface BuildPaths { 
	entry: string;
	html: string;
	output: string;
	src: string;
};

export interface BuildOptions {
	port: number;
	paths: BuildPaths;
	mode: Mode
	analyzer: boolean
};