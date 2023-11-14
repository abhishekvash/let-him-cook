import { CodeBlock } from "@/components/CodeBlock";
import { CommandPreview } from "@/components/CommandPreview";
import { RecipeWithIngredients } from "@/types/recipe";
import { useLoaderData } from "react-router-dom";

export function RecipeDetailsPage() {
	const recipe = useLoaderData() as RecipeWithIngredients | null;

	return (
		<>
			{recipe && (
				<div className="grid gap-4">
					<h1 className="mb-2 border-b pb-2 text-2xl font-semibold">
						{recipe.name}
					</h1>
					<div>
						<h2 className="mb-1 text-xl font-semibold">
							Description
						</h2>
						<p>{recipe.description}</p>
					</div>
					<div>
						<h2 className="mb-1 text-xl font-semibold">Command</h2>
						<CommandPreview
							dependencies={recipe.dependencies}
							devDependencies={recipe.devDependencies}
						/>
					</div>

					<div>
						<h2 className="mb-1 text-xl font-semibold">
							Config Files
						</h2>
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
				</div>
			)}
		</>
	);
}
