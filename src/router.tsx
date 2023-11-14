import { Suspense, lazy } from "react";
import { createBrowserRouter, defer } from "react-router-dom";

import { fetchPackages } from "@/api/packages";

import { DefaultLayout } from "@/layouts/DefaultLayout";
import { HomePage } from "@/pages/HomePage";
// Lazy loading the page components (looks complicated, since the components files have named exports, much cleaner if they are default exports)
const SearchPage = lazy(() =>
	import("@/pages/SearchPage").then(module => ({
		default: module.SearchPage,
	})),
);
const CreateRecipePage = lazy(() =>
	import("@/pages/CreateRecipePage").then(module => ({
		default: module.CreateRecipePage,
	})),
);
const MyRecipesPage = lazy(() =>
	import("./pages/MyRecipesPage").then(module => ({
		default: module.MyRecipesPage,
	})),
);
const RecipeDetailsPage = lazy(() =>
	import("./pages/RecipeDetailsPage").then(module => ({
		default: module.RecipeDetailsPage,
	})),
);

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
				element: (
					<Suspense fallback={<div>Loading...</div>}>
						<SearchPage />
					</Suspense>
				),
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
				element: (
					<Suspense fallback={<div>Loading...</div>}>
						<CreateRecipePage />
					</Suspense>
				),
			},
			{
				path: "recipes",
				element: (
					<Suspense fallback={<div>Loading...</div>}>
						<MyRecipesPage />
					</Suspense>
				),
				loader: async () => {
					const recipes = getAllRecipesFromStorage();
					return defer({
						recipes,
					});
				},
			},
			{
				path: "recipes/:recipeName",

				element: (
					<Suspense fallback={<div>Loading...</div>}>
						<RecipeDetailsPage />
					</Suspense>
				),
				loader: async ({ params: { recipeName } }) => {
					if (!recipeName) return null;
					const recipe = await getRecipeFromStorage(recipeName);
					return recipe;
				},
			},
		],
	},
]);
