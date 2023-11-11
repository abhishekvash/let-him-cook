import LogoNoBackgroundSVG from "@/assets/LogoNoBackground.svg";
export function Navbar() {
	return (
		<>
			<nav className="navbar sticky top-0 bg-primary/40 text-primary-content backdrop-blur">
				<div className="flex-1">
					<img
						className="h-5"
						src={LogoNoBackgroundSVG}
						alt="Let Him Cook Logo"
					/>
				</div>
			</nav>
		</>
	);
}
