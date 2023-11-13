import localforage from "localforage";
import { Recipe } from "@/types/recipe";

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
