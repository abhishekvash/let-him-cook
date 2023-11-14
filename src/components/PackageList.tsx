import {
	IngredientActions,
	IngredientContext,
} from "@/contexts/IngredientsContext";
import { IconBrandGoogleAnalytics, IconBrandNpm } from "@tabler/icons-react";
import { SearchResult } from "query-registry";
import { useCallback, useContext } from "react";

function Package({
	npmPackage,
	isAdded,
}: {
	npmPackage: SearchResult;
	isAdded: boolean;
}) {
	const { changeIngredients } = useContext(IngredientContext)!;

	const convertToPercentage = useCallback((score: number) => {
		return (score * 100).toFixed(0);
	}, []);

	return (
		<div
			className={`package w-full rounded bg-primary/10 p-2 ${
				isAdded ? "outline outline-1 outline-primary" : ""
			}`}
		>
			<div className="mb-2 flex flex-wrap items-center justify-between">
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
			<div className="flex flex-wrap gap-4">
				<div className="flex w-full gap-1 text-[12px] md:w-auto">
					<IconBrandNpm size={14} />
					<a
						href={npmPackage.package.links.npm}
						target="_blank"
						rel="noreferrer"
						className="cursor-pointer break-all font-semibold text-blue-400"
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
				<div className="flex w-full flex-wrap gap-2 md:ml-auto md:w-auto">
					<button
						className="btn btn-primary btn-xs w-full rounded font-bold md:w-auto"
						onClick={() =>
							changeIngredients({
								type: IngredientActions.ADD_AS_DEPENDENCY,
								payload: npmPackage.package.name,
							})
						}
					>
						Add as dependency
					</button>
					<button
						className="btn btn-outline btn-primary btn-xs w-full rounded font-bold md:w-auto"
						onClick={() =>
							changeIngredients({
								type: IngredientActions.ADD_AS_DEV_DEPENDENCY,
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
	const { ingredients } = useContext(IngredientContext)!;

	const isAdded = useCallback(
		(name: string) => {
			return (
				ingredients.dependencies.has(name) ||
				ingredients.devDependencies.has(name)
			);
		},
		[ingredients],
	);

	return (
		<div className="flex flex-col gap-4 overflow-y-auto p-2 md:max-h-[79vh]">
			{packages.map(npmPackage => {
				return (
					<Package
						npmPackage={npmPackage}
						isAdded={isAdded(npmPackage.package.name)}
						key={npmPackage.package.name}
					/>
				);
			})}
		</div>
	);
}
export default PackageList;
