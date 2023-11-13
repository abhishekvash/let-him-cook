export type Recipe = {
	name: string;
	description: string;
	files: Record<string, string>;
};

export type RecipeWithIngredients = Recipe & {
	dependencies: string[];
	devDependencies: string[];
};
