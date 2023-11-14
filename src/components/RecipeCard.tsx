import { IconBox, IconFileSettings } from "@tabler/icons-react";
import { Link } from "react-router-dom";

export function RecipeCard({
	name,
	description,
	noOfDependencies,
	noOfConfigFiles,
}: {
	name: string;
	description: string;
	noOfDependencies: number;
	noOfConfigFiles: number;
}) {
	return (
		<div className="card w-full rounded bg-base-100 bg-primary/20 shadow-xl">
			<div className="card-body">
				<h2 className="card-title">{name}</h2>
				<p>{description ? description : "No description"}</p>
				<div className="card-actions mt-4 items-center justify-between">
					<div className="flex items-center gap-1">
						<IconBox size={16} />
						{noOfDependencies}

						<IconFileSettings size={16} className="ml-2" />
						{noOfConfigFiles}
					</div>
					<Link to={`/recipes/${name}`}>
						<button className="btn btn-primary btn-sm rounded">
							View
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}
