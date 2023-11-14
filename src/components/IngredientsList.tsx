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
			<div className="mb-4 flex items-center gap-2 border-b border-white pb-2 text-xl font-semibold lg:text-2xl">
				{typeOfList === "dependencies" ? (
					<IconBox />
				) : (
					<IconPackageImport />
				)}
				{typeOfList === "dependencies"
					? "Dependencies"
					: "Dev Dependencies"}
			</div>
			<div className="flex max-h-[20vh] flex-col gap-2 overflow-clip overflow-y-auto">
				{dependencies.map(dep => (
					<div
						className="grid grid-cols-3 items-center gap-2"
						key={dep}
					>
						<p className="col-span-2" key={dep}>
							{dep}
						</p>
						<button
							className="btn btn-outline btn-primary btn-xs rounded font-bold"
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
