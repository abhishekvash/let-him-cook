import { searchPackages } from "query-registry";

export async function fetchPackages(str: string) {
	const results = await searchPackages({
		query: { text: str },
	});

	return results.objects;
}
