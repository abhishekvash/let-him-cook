import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { IngredientsProvider } from "./contexts/IngredientsContext";
import { RecipeProvider } from "./contexts/RecipeContext";
import { ToastContainer } from "react-toastify";
import localforage from "localforage";

import "./index.css";
import "@fontsource-variable/raleway";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ToastContainer theme="colored" />
		<RecipeProvider>
			<IngredientsProvider>
				<RouterProvider router={router} />
			</IngredientsProvider>
		</RecipeProvider>
	</React.StrictMode>,
);

localforage.config({
	driver: localforage.INDEXEDDB,
	name: "let-him-cook",
	version: 0.1,
	size: 49807360, // Size of database, in bytes.
	storeName: "recipes",
	description: "Store JS recipes",
});
