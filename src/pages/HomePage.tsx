import { Navbar } from "@/components/Navbar";
import { Package } from "@/components/Package";
import { IconSearch } from "@tabler/icons-react";
import { SearchResult, searchPackages } from "query-registry";
import { useEffect, useState } from "react";

export function HomePage() {
	const [npmPackages, setNpmPackages] = useState<SearchResult[]>([]);
	const [searchString, setSearchString] = useState<string>("");
	const [loading, setLoading] = useState(false);

	async function loadPackages(str = "") {
		setLoading(true);
		const results = await searchPackages({
			query: { text: str },
		});

		// Output: 'query-registry'
		setNpmPackages(results.objects);
		setLoading(false);
	}

	useEffect(() => {
		loadPackages();
	}, []);

	async function search() {
		loadPackages(searchString);
	}

	return (
		<>
			<Navbar />
			<main className="grid grid-cols-6 px-2 py-4">
				<div className="col-span-4">
					<div className="mb-4 flex w-full items-center gap-2">
						<div className="flex flex-grow items-center gap-2 rounded p-2 outline-1 outline-primary/50 has-[input:focus]:bg-base-100 has-[input:focus]:outline">
							<IconSearch
								className="text-base-content"
								size={16}
							/>
							<input
								type="text"
								placeholder="Search For Packages"
								value={searchString}
								onChange={e => setSearchString(e.target.value)}
								className="w-30 bg-transparent outline-none md:w-auto"
							/>
						</div>

						<button
							className="btn btn-primary btn-sm"
							onClick={async () => await search()}
						>
							Search
						</button>
					</div>

					{loading ? (
						<p>Loading ...</p>
					) : npmPackages.length > 0 ? (
						<div className="flex max-h-[80vh] flex-col gap-4 overflow-y-scroll">
							{npmPackages.map(npmPackage => {
								return (
									<Package
										npmPackage={npmPackage}
										key={npmPackage.package.name}
									/>
								);
							})}
						</div>
					) : (
						<div>No results</div>
					)}
				</div>
			</main>
		</>
	);
}
