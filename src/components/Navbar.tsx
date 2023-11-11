import { IconSearch } from "@tabler/icons-react";
import LogoNoBackgroundSVG from "@/assets/LogoNoBackground.svg";
export function Navbar() {
	return (
		<>
			<div className="navbar bg-secondary/10 text-secondary-content backdrop-blur">
				<div className="flex-1">
					<img
						className="h-5"
						src={LogoNoBackgroundSVG}
						alt="Let Him Cook Logo"
					/>
				</div>
				<div className="flex-none gap-2">
					<div className="flex items-center gap-2 rounded p-2 outline-1 outline-secondary-content/30 has-[input:focus]:bg-base-100 has-[input:focus]:outline">
						<IconSearch className="text-base-content" size={16} />
						<input
							type="text"
							placeholder="Search For Packages"
							className="w-30 bg-transparent outline-none md:w-auto"
						/>
					</div>
				</div>
			</div>
		</>
	);
}
