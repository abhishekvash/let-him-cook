import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { IngredientsProvider } from "./contexts/IngredientsContext";
import { RecipeProvider } from "./contexts/RecipeContext";

import "./index.css";
import "@fontsource-variable/raleway";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RecipeProvider>
			<IngredientsProvider>
				<RouterProvider router={router} />
			</IngredientsProvider>
		</RecipeProvider>
	</React.StrictMode>,
);
