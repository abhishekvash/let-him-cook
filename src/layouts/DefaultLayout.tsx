import { Navbar } from "@/components/Navbar";
import { Outlet } from "react-router-dom";

export function DefaultLayout() {
	return (
		<>
			<Navbar />
			<main className="w-full px-2 py-3">
				<Outlet />
			</main>
		</>
	);
}
