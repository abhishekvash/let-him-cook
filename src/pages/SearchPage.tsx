import { Navbar } from "@/components/Navbar";
import { Package } from "@/components/Package";
import { IconSearch } from "@tabler/icons-react";
import { SearchResult } from "query-registry";
import { FormEvent, useState } from "react";
import { useLoaderData, useSearchParams } from "react-router-dom";

export function SearchPage() {
	const [searchParam, setSearchParam] = useSearchParams();
	const [searchString, setSearchString] = useState<string>(
		searchParam.get("q") ?? "",
	);

	let npmPackages: SearchResult[] = [];

	const loaderData = useLoaderData();

	if (loaderData) npmPackages = loaderData as SearchResult[];

	async function search(e: FormEvent) {
		e.preventDefault();
		setSearchParam(`q=${searchString}`);
	}

	return (
		<>
			<Navbar />
			<main className="grid grid-cols-6 px-2 py-2">
				<div className="col-span-4">
					<form
						className="mb-4 flex w-full items-center gap-2"
						onSubmit={e => search(e)}
					>
						<div className="flex flex-grow items-center gap-2 rounded px-2 py-1 outline-1 outline-primary/50 has-[input:focus]:bg-base-100 has-[input:focus]:outline">
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
							className="btn btn-primary btn-sm rounded"
							type="submit"
						>
							Search
						</button>
					</form>

					{npmPackages.length > 0 ? (
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
