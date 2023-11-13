import { CommandPreview } from "@/components/CommandPreview";
import { RecipeForm } from "@/components/RecipeForm";
import { IngredientContext } from "@/contexts/IngredientsContext";
import { useContext } from "react";

export function CreateRecipe() {
	const {
		ingredients: { dependencies, devDependencies },
	} = useContext(IngredientContext)!;

	return (
		<div>
			<h1 className="mb-2 border-b pb-2 text-2xl font-semibold">
				Create Recipe
			</h1>
			<div className="grid grid-cols-3 gap-4 pt-4">
				<RecipeForm />
				<div className="col-span-3 md:col-span-1">
					<h2 className="mb-2 text-xl font-semibold">
						Sample Command
					</h2>
					<CommandPreview
						dependencies={dependencies}
						devDependencies={devDependencies}
					/>
					<button className="btn btn-primary btn-sm mt-4 w-full rounded">
						Save recipe
					</button>
				</div>
			</div>
		</div>
	);
}
