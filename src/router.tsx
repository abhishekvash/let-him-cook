import { createBrowserRouter, defer } from "react-router-dom";

import { SearchPage } from "./pages/SearchPage";
import { fetchPackages } from "./api/packages";

export const router = createBrowserRouter([
	{
		path: "/search",
		element: <SearchPage />,
		loader: async ({ request }) => {
			const searchTerm = new URL(request.url).searchParams.get("q");
			if (!searchTerm) return null;
			const packages = fetchPackages(searchTerm);
			return defer({
				packages,
			});
		},
	},
]);
