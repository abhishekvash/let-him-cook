import localforage from "localforage";
import { Recipe, RecipeWithIngredients } from "@/types/recipe";

export async function saveRecipeToStorage(
	recipe: Recipe,
	dependencies: Set<string>,
	devDependencies: Set<string>,
) {
	if (!recipe.name) {
		return false;
	}

	if (dependencies.size === 0 && devDependencies.size === 0) {
		return false;
	}

	await localforage.setItem(recipe.name, {
		description: recipe.description,
		dependencies: Array.from(dependencies),
		devDependencies: Array.from(devDependencies),
		files: recipe.files,
	});

	return true;
}

export async function getAllRecipesFromStorage() {
	const recipes: RecipeWithIngredients[] = [];

	await localforage.iterate(
		(
			value: {
				description: string;
				dependencies: string[];
				devDependencies: string[];
				files: Record<string, string>;
			},
			key,
		) => {
			recipes.push({
				name: key,
				...value,
			});
		},
	);

	return recipes;
}

export async function getRecipeFromStorage(name: string) {
	const recipe: Record<string, string> = (await localforage.getItem(name))!;

	return {
		name: name,
		...recipe,
	} as RecipeWithIngredients;
}
