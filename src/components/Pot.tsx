import { PotActions, PotContext } from "@/contexts/PotProvider";
import { IconSoup } from "@tabler/icons-react";
import { useContext } from "react";
import { IngredientsList } from "./IngredientsList";

export function Pot() {
	const {
		pot: { dependencies: d, devDependencies: dd },
		changeRecipe,
	} = useContext(PotContext)!;

	// Ideal to use useMemo here, but React apparently can't track when a Set changes so
	const dependencies = Array.from(d);

	const devDependencies = Array.from(dd);

	function removeDependency(name: string) {
		changeRecipe({
			type: PotActions.REMOVE_FROM_DEPENDENCY,
			payload: name,
		});
	}

	function removeDevDependency(name: string) {
		changeRecipe({
			type: PotActions.REMOVE_FROM_DEV_DEPENDENCY,
			payload: name,
		});
	}

	return (
		<div className="flex w-full flex-col items-center">
			<IconSoup size={120} stroke={1} className="mb-8 text-primary" />
			{dependencies.length === 0 && devDependencies.length === 0 ? (
				<>
					<p>Oh. That is one sad empty pot :(</p>
					<p>Add some packages and get cooking!</p>
				</>
			) : (
				<div className="grid w-full gap-8">
					{dependencies.length > 0 && (
						<IngredientsList
							typeOfList={"dependencies"}
							dependencies={dependencies}
							removeFn={removeDependency}
						/>
					)}
					{devDependencies.length > 0 && (
						<IngredientsList
							typeOfList={"devDependencies"}
							dependencies={devDependencies}
							removeFn={removeDevDependency}
						/>
					)}
				</div>
			)}
		</div>
	);
}
