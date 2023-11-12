import { IconSearch } from "@tabler/icons-react";
import { FormEvent, useState } from "react";
import { useSearchParams } from "react-router-dom";

export function SearchBar() {
	const [searchParam, setSearchParam] = useSearchParams();
	const [searchString, setSearchString] = useState<string>(
		searchParam.get("q") ?? "",
	);

	async function search(e: FormEvent) {
		e.preventDefault();
		if (!searchString) return;
		setSearchParam(`q=${searchString}`);
	}

	return (
		<form
			className="mb-8 flex w-full items-center gap-2"
			onSubmit={e => search(e)}
		>
			<div className="flex flex-grow items-center gap-2 rounded border-b border-primary/30 px-2 py-1 outline-1 outline-primary/50 has-[input:focus]:bg-base-100 has-[input:focus]:outline">
				<IconSearch className="text-base-content" size={16} />
				<input
					type="text"
					placeholder="Search For Packages"
					value={searchString}
					onChange={e => setSearchString(e.target.value)}
					className="w-30 bg-transparent outline-none md:w-auto"
				/>
			</div>

			<button className="btn btn-primary btn-sm rounded" type="submit">
				Search
			</button>
		</form>
	);
}
