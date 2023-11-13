import LogoNoBackgroundSVG from "@/assets/LogoNoBackground.svg";
import { Link } from "react-router-dom";
export function Navbar() {
	return (
		<>
			<nav className="navbar sticky top-0 min-h-0 bg-primary/40 py-4 text-primary-content backdrop-blur">
				<div className="flex-1">
					<Link to="/">
						<img
							className="h-5"
							src={LogoNoBackgroundSVG}
							alt="Let Him Cook Logo"
						/>
					</Link>
				</div>
			</nav>
		</>
	);
}
