import { PotActions, PotContext } from "@/contexts/PotProvider";
import { IconBrandGoogleAnalytics, IconBrandNpm } from "@tabler/icons-react";
import { SearchResult } from "query-registry";
import { useContext } from "react";

function Package({ npmPackage }: { npmPackage: SearchResult }) {
	const { changeRecipe } = useContext(PotContext)!;

	function convertToPercentage(score: number) {
		return (score * 100).toFixed(0);
	}

	return (
		<div className="package w-full rounded bg-primary/10 p-2">
			<div className="mb-2 flex items-center justify-between">
				<span className="text-2xl text-white">
					{npmPackage.package.name}
				</span>
				<span className="text-xs font-light">
					Latest Version: v{npmPackage.package.version}
				</span>
			</div>
			<p className="mb-3 text-sm font-light">
				{npmPackage.package.description}
			</p>
			<div className="flex gap-4">
				<div className="flex gap-1 text-[12px]">
					<IconBrandNpm size={14} />
					<a
						href={npmPackage.package.links.npm}
						target="_blank"
						rel="noreferrer"
						className="cursor-pointer font-semibold text-blue-400"
					>
						{npmPackage.package.links.npm}
					</a>
				</div>
				<div className="flex gap-1 text-[12px]">
					<IconBrandGoogleAnalytics size={14} />
					<a
						href={npmPackage.package.links.homepage}
						target="_blank"
						rel="noreferrer"
						className="cursor-pointer font-semibold"
					>
						{convertToPercentage(
							npmPackage.score.detail.popularity,
						)}
						%
					</a>
				</div>
				<div className="ml-auto flex gap-2">
					<button
						className="btn btn-primary btn-xs rounded font-bold"
						onClick={() =>
							changeRecipe({
								type: PotActions.ADD_AS_DEPENDENCY,
								payload: npmPackage.package.name,
							})
						}
					>
						Add as dependency
					</button>
					<button
						className="btn btn-primary btn-outline btn-xs rounded font-bold"
						onClick={() =>
							changeRecipe({
								type: PotActions.ADD_AS_DEV_DEPENDENCY,
								payload: npmPackage.package.name,
							})
						}
					>
						Add as dev dependency
					</button>
				</div>
			</div>
		</div>
	);
}

export function PackageList({ packages }: { packages: SearchResult[] }) {
	return (
		<div className="flex max-h-[80vh] flex-col gap-4 overflow-y-scroll">
			{packages.map(npmPackage => {
				return (
					<Package
						npmPackage={npmPackage}
						key={npmPackage.package.name}
					/>
				);
			})}
		</div>
	);
}
export default PackageList;
