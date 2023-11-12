import { IconBox, IconPackageImport } from "@tabler/icons-react";

export function IngredientsList({
	typeOfList,
	dependencies,
	removeFn,
}: {
	typeOfList: "dependencies" | "devDependencies";
	dependencies: string[];
	removeFn: (name: string) => void;
}) {
	return (
		<div className="w-full">
			<div className="mb-4 flex items-center gap-2 border-b border-white pb-2 text-2xl font-semibold">
				{typeOfList === "dependencies" ? (
					<IconBox />
				) : (
					<IconPackageImport />
				)}
				{typeOfList === "dependencies"
					? "Dependencies"
					: "Dev Dependencies"}
			</div>
			<div className="flex flex-col gap-2">
				{dependencies.map(dep => (
					<div
						className="grid grid-cols-3 items-center gap-2"
						key={dep}
					>
						<p className="col-span-2" key={dep}>
							{dep}
						</p>
						<button
							className="btn btn-primary btn-outline btn-xs rounded font-bold"
							onClick={() => removeFn(dep)}
						>
							Remove
						</button>
					</div>
				))}
			</div>
		</div>
	);
}
