import { PotContext } from "@/contexts/PotProvider";
import { IconSoup } from "@tabler/icons-react";
import { useContext } from "react";

export function Pot() {
	const {
		pot: { dependencies: d, devDependencies: dd },
	} = useContext(PotContext)!;

	// Ideal to use useMemo here, but React apparently can't track when a Set changes
	const dependencies = Array.from(d);

	const devDependencies = Array.from(dd);

	return (
		<div className="flex w-full flex-col items-center">
			<IconSoup size={120} stroke={1} className="text-primary" />
			{dependencies.length === 0 && devDependencies.length === 0 ? (
				<>
					<p>Oh. That is one sad empty pot :(</p>
					<p>Add some packages and get cooking!</p>
				</>
			) : (
				<>
					{dependencies.map(dependency => (
						<p key={dependency}>{dependency}</p>
					))}
				</>
			)}
		</div>
	);
}
