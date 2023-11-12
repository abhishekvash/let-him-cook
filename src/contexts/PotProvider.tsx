import { Dispatch, ReactNode, createContext, useReducer } from "react";

export const PotActions = {
	ADD_AS_DEPENDENCY: "addAsDependency",
	ADD_AS_DEV_DEPENDENCY: "addAsDevDependency",
	REMOVE_FROM_DEPENDENCY: "removeFromDependency",
	REMOVE_FROM_DEV_DEPENDENCY: "removeFromDevDependency",
} as const;

type PotAction = {
	type: (typeof PotActions)[keyof typeof PotActions];
	payload: string;
};

type State = {
	dependencies: Set<string>;
	devDependencies: Set<string>;
};

export const PotContext = createContext<{
	pot: State;
	changeRecipe: Dispatch<PotAction>;
} | null>(null);

function reducer(state: State, action: PotAction) {
	switch (action.type) {
		case PotActions.ADD_AS_DEPENDENCY:
			state.devDependencies.delete(action.payload);
			state.dependencies.add(action.payload);
			return {
				...state,
			};
		case PotActions.ADD_AS_DEV_DEPENDENCY:
			state.dependencies.delete(action.payload);
			state.devDependencies.add(action.payload);
			return {
				...state,
			};
		case PotActions.REMOVE_FROM_DEPENDENCY:
			state.dependencies.delete(action.payload);
			return {
				...state,
			};
		case PotActions.REMOVE_FROM_DEV_DEPENDENCY:
			state.devDependencies.delete(action.payload);
			return {
				...state,
			};
	}
}

export function PotProvider({ children }: { children: ReactNode }) {
	const [pot, changeRecipe] = useReducer(reducer, {
		dependencies: new Set<string>(),
		devDependencies: new Set<string>(),
	});

	return (
		<PotContext.Provider
			value={{
				pot,
				changeRecipe,
			}}
		>
			{children}
		</PotContext.Provider>
	);
}
