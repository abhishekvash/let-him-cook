import { RecipeCard } from "@/components/RecipeCard";
import { RecipeWithIngredients } from "@/types/recipe";
import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";

export function MyRecipesPage() {
	const data = useLoaderData() as { recipes: RecipeWithIngredients[] };

	return (
		<div>
			<h1 className="mb-6 border-b pb-2 text-2xl font-semibold">
				Recipes
			</h1>
			{data && (
				<Suspense fallback={<div>Loading...</div>}>
					<Await resolve={data.recipes}>
						{(recipes: RecipeWithIngredients[]) =>
							recipes.length > 0 ? (
								<div className="grid grid-cols-5 gap-4">
									{recipes.map(recipe => {
										return (
											<RecipeCard
												key={recipe.name}
												name={recipe.name}
												description={recipe.description}
												noOfDependencies={
													recipe.dependencies.length +
													recipe.devDependencies
														.length
												}
												noOfConfigFiles={
													Object.keys(recipe.files)
														.length
												}
											/>
										);
									})}
								</div>
							) : (
								<div>No results</div>
							)
						}
					</Await>
				</Suspense>
			)}
		</div>
	);
}
