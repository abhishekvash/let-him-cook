import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

import "./index.css";
import "@fontsource-variable/raleway";
import { IngredientsProvider } from "./contexts/IngredientsContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<IngredientsProvider>
			<RouterProvider router={router} />
		</IngredientsProvider>
	</React.StrictMode>,
);
