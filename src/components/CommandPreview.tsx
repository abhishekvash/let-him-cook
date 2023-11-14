export function CommandPreview({
	dependencies,
	devDependencies,
}: {
	dependencies: Set<string> | string[];
	devDependencies: Set<string> | string[];
}) {
	const deps = Array.from(dependencies);
	const devDeps = Array.from(devDependencies);

	return (
		<div className="bg-zinc-800 p-4">
			<p className="font-mono">
				npm install {deps.join(" ")}{" "}
				{devDeps.length > 0 && (
					<> -D {Array.from(devDependencies).join(" ")}</>
				)}
			</p>
		</div>
	);
}
