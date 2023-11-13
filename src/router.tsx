import { createBrowserRouter, defer } from "react-router-dom";

import { fetchPackages } from "@/api/packages";

import { DefaultLayout } from "@/layouts/DefaultLayout";

import { SearchPage } from "@/pages/SearchPage";
import { CreateRecipe } from "@/pages/CreateRecipe";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <DefaultLayout />,
		children: [
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
				element: <CreateRecipe />,
			},
		],
	},
]);
