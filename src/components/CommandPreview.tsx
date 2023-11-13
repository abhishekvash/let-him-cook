export function CommandPreview({
	dependencies,
	devDependencies,
}: {
	dependencies: Set<string>;
	devDependencies: Set<string>;
}) {
	return (
		<div className="bg-zinc-800 p-4">
			<p className="font-mono">
				npm install {Array.from(dependencies).join(" ")}{" "}
				{devDependencies.size > 0 && (
					<> -D {Array.from(devDependencies).join(" ")}</>
				)}
			</p>
		</div>
	);
}
