import { IconBrandGoogleAnalytics, IconBrandNpm } from "@tabler/icons-react";
import { SearchResult } from "query-registry";

export function Package({ npmPackage }: { npmPackage: SearchResult }) {
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
					<button className="btn btn-primary btn-xs font-bold">
						Add as dependency
					</button>
					<button className="btn btn-primary btn-outline btn-xs font-bold">
						Add as dev dependency
					</button>
				</div>
			</div>
		</div>
	);
}
