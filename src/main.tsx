import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

import "./index.css";
import "@fontsource-variable/raleway";
import { PotProvider } from "./contexts/PotProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<PotProvider>
			<RouterProvider router={router} />
		</PotProvider>
	</React.StrictMode>,
);
