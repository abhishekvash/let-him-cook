import { CommandPreview } from "@/components/CommandPreview";
import { RecipeForm } from "@/components/RecipeForm";
import {
	IngredientActions,
	IngredientContext,
} from "@/contexts/IngredientsContext";
import { RecipeActions, RecipeContext } from "@/contexts/RecipeContext";
import { saveRecipeToStorage } from "@/utils/recipes";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export function CreateRecipePage() {
	const {
		ingredients: { dependencies, devDependencies },
		changeIngredients,
	} = useContext(IngredientContext)!;
	const { recipe, changeRecipe } = useContext(RecipeContext)!;

	const navigate = useNavigate();

	async function saveRecipe() {
		const complete = await saveRecipeToStorage(
			recipe,
			dependencies,
			devDependencies,
		);
		if (!complete) {
			toast.error(
				<>
					<p>Recipe could not be saved</p>
					<div className="mt-2 text-[12px] font-light">
						Please check whether the recipe:
						<ul className="list-inside list-disc">
							<li> There is a name</li>
							<li> Atleast one dependency</li>
						</ul>
					</div>
				</>,
			);
			return;
		}
		toast.success("Recipe saved!");
		navigate("/");
		changeRecipe({ type: RecipeActions.CLEAR_RECIPE });
		changeIngredients({
			type: IngredientActions.CLEAR_ALL_DEPENDENCIES,
		});
	}

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
					<button
						className="btn btn-primary btn-sm mt-4 w-full rounded"
						onClick={saveRecipe}
					>
						Save recipe
					</button>
					<button
						className="btn btn-outline btn-primary btn-sm mt-4 w-full rounded"
						onClick={() => navigate("/recipes")}
					>
						Add more dependencies
					</button>
				</div>
			</div>
		</div>
	);
}
