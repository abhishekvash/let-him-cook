import { RecipeContext, RecipeActions } from "@/contexts/RecipeContext";
import { useContext, useState } from "react";
import { AddConfigFile } from "./AddConfigFile";
import { CodeBlock } from "./CodeBlock";

export function RecipeForm() {
	const { recipe, changeRecipe } = useContext(RecipeContext)!;

	const [recipeName, setRecipeName] = useState(recipe.name);
	const [recipeDescription, setRecipeDescription] = useState(
		recipe.description,
	);

	return (
		<div className="col-span-3 flex flex-col gap-2 md:col-span-2">
			<label htmlFor="name" className="font-semibold">
				Recipe Name
			</label>
			<input
				type="text"
				name="name"
				id="name"
				placeholder="Everything has to be called something!"
				required
				value={recipeName}
				onChange={e => setRecipeName(e.target.value)}
				onBlur={() =>
					changeRecipe({
						type: RecipeActions.UPDATE_NAME,
						payload: recipeName,
					})
				}
				className="input input-bordered input-md mb-4 w-full rounded"
			/>
			<label htmlFor="description" className="font-semibold">
				Recipe Description
			</label>
			<textarea
				name="description"
				id="description"
				rows={4}
				placeholder="To help you remember what you'll be making"
				value={recipeDescription}
				onChange={e => setRecipeDescription(e.target.value)}
				onBlur={() =>
					changeRecipe({
						type: RecipeActions.UPDATE_DESCRIPTION,
						payload: recipeDescription,
					})
				}
				className="textarea textarea-bordered mb-4 w-full rounded"
			/>

			<p className="font-semibold">Config Files</p>
			<AddConfigFile />
			{Object.keys(recipe.files).length > 0 && (
				<>
					{Object.keys(recipe.files).map(file => (
						<CodeBlock
							key={file}
							filename={file}
							contents={recipe.files[file]}
						/>
					))}
				</>
			)}
		</div>
	);
}
