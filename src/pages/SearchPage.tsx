import { Navbar } from "@/components/Navbar";
import { PackageList } from "@/components/PackageList";
import { SearchBar } from "@/components/SearchBar";
import { SearchResult } from "query-registry";
import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";

export function SearchPage() {
	const data = useLoaderData() as { packages: SearchResult[] };

	return (
		<>
			<Navbar />
			<main className="grid grid-cols-6 px-2 py-2">
				<div className="col-span-4">
					<SearchBar />
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
				</div>
			</main>
		</>
	);
}
