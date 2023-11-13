import { PackageList } from "@/components/PackageList";
import { Ingredients } from "@/components/Ingredients";
import { SearchBar } from "@/components/SearchBar";
import { SearchResult } from "query-registry";
import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";

export function SearchPage() {
	const data = useLoaderData() as { packages: SearchResult[] };

	return (
		<>
			<div className="grid grid-cols-3 gap-4">
				<div className="col-span-3 md:col-span-2">
					<SearchBar />
					{data && (
						<Suspense fallback={<div>Loading...</div>}>
							<Await resolve={data.packages}>
								{(packages: SearchResult[]) =>
									packages.length > 0 ? (
										<PackageList packages={packages} />
									) : (
										<div>No results</div>
									)
								}
							</Await>
						</Suspense>
					)}
				</div>
				<div className="col-span-3 md:col-span-1">
					<Ingredients />
				</div>
			</div>
		</>
	);
}
