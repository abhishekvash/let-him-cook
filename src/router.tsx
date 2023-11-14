import { createBrowserRouter, defer } from "react-router-dom";

import { fetchPackages } from "@/api/packages";

import { DefaultLayout } from "@/layouts/DefaultLayout";

import { SearchPage } from "@/pages/SearchPage";
import { CreateRecipePage } from "@/pages/CreateRecipePage";
import { HomePage } from "@/pages/HomePage";
import { MyRecipesPage } from "./pages/MyRecipesPage";
import { RecipeDetailsPage } from "./pages/RecipeDetailsPage";

import {
	getAllRecipesFromStorage,
	getRecipeFromStorage,
} from "./utils/recipes";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <DefaultLayout />,
		children: [
			{
				path: "",
				element: <HomePage />,
			},
			{
				path: "search",
				element: <SearchPage />,
				loader: async ({ request }) => {
					const searchTerm = new URL(request.url).searchParams.get(
						"q",
					);
					if (!searchTerm) return null;
					const packages = fetchPackages(searchTerm);
					return defer({
						packages,
					});
				},
			},
			{
				path: "create-recipe",
				element: <CreateRecipePage />,
			},
			{
				path: "recipes",
				element: <MyRecipesPage />,
				loader: async () => {
					const recipes = getAllRecipesFromStorage();
					return defer({
						recipes,
					});
				},
			},
			{
				path: "recipes/:recipeName",
				element: <RecipeDetailsPage />,
				loader: async ({ params: { recipeName } }) => {
					if (!recipeName) return null;
					const recipe = await getRecipeFromStorage(recipeName);
					return recipe;
				},
			},
		],
	},
]);
