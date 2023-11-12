import { IconSoup } from "@tabler/icons-react";

export function Pot() {
	return (
		<div className="flex w-full flex-col items-center">
			<IconSoup size={120} stroke={1} className="text-primary" />
			<p>Oh. That is one sad empty pot :(</p>
			<p>Add some packages and get cooking!</p>
		</div>
	);
}
