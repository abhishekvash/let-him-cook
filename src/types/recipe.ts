export type Recipe = {
	name: string;
	description: string;
	dependencies: string[];
	devDependencies: string[];
	files?: File[];
};

export type File = {
	name: string;
	content: string;
};
