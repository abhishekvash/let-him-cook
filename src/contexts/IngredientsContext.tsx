import { Dispatch, ReactNode, createContext, useReducer } from "react";

export const IngredientActions = {
	ADD_AS_DEPENDENCY: "addAsDependency",
	ADD_AS_DEV_DEPENDENCY: "addAsDevDependency",
	REMOVE_FROM_DEPENDENCY: "removeFromDependency",
	REMOVE_FROM_DEV_DEPENDENCY: "removeFromDevDependency",
	CLEAR_ALL_DEPENDENCIES: "clearAllDependencies",
} as const;

type IngredientAction = {
	type: (typeof IngredientActions)[keyof typeof IngredientActions];
	payload: string;
};

type Ingredients = {
	dependencies: Set<string>;
	devDependencies: Set<string>;
};

export const IngredientContext = createContext<{
	ingredients: Ingredients;
	changeIngredients: Dispatch<IngredientAction>;
} | null>(null);

function reducer(state: Ingredients, action: IngredientAction) {
	switch (action.type) {
		case IngredientActions.ADD_AS_DEPENDENCY:
			state.devDependencies.delete(action.payload);
			state.dependencies.add(action.payload);
			return {
				...state,
			};
		case IngredientActions.ADD_AS_DEV_DEPENDENCY:
			state.dependencies.delete(action.payload);
			state.devDependencies.add(action.payload);
			return {
				...state,
			};
		case IngredientActions.REMOVE_FROM_DEPENDENCY:
			state.dependencies.delete(action.payload);
			return {
				...state,
			};
		case IngredientActions.REMOVE_FROM_DEV_DEPENDENCY:
			state.devDependencies.delete(action.payload);
			return {
				...state,
			};
		case IngredientActions.CLEAR_ALL_DEPENDENCIES:
			return {
				dependencies: new Set<string>(),
				devDependencies: new Set<string>(),
			};
	}
}

export function IngredientsProvider({ children }: { children: ReactNode }) {
	const [ingredients, changeIngredients] = useReducer(reducer, {
		dependencies: new Set<string>(),
		devDependencies: new Set<string>(),
	});

	return (
		<IngredientContext.Provider
			value={{
				ingredients,
				changeIngredients,
			}}
		>
			{children}
		</IngredientContext.Provider>
	);
}
