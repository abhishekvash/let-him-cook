import { Recipe } from "@/types/recipe";
import { Dispatch, ReactNode, createContext, useReducer } from "react";

export const RecipeActions = {
	UPDATE_NAME: "updateName",
	UPDATE_DESCRIPTION: "updateDescription",
	ADD_FILE: "addFile",
	UPDATE_FILE: "updateFile",
	REMOVE_FILE: "removeFile",
	CLEAR_RECIPE: "clearRecipe",
} as const;

type RecipeAction =
	| {
			type: "updateName";
			payload: string;
	  }
	| {
			type: "updateDescription";
			payload: string;
	  }
	| {
			type: "addFile" | "updateFile" | "removeFile";
			payload: Record<string, string>;
	  }
	| {
			type: "clearRecipe";
	  };

export const RecipeContext = createContext<{
	recipe: Recipe;
	changeRecipe: Dispatch<RecipeAction>;
} | null>(null);

function reducer(state: Recipe, action: RecipeAction) {
	switch (action.type) {
		case RecipeActions.UPDATE_NAME:
			return {
				...state,
				name: action.payload,
			};
		case RecipeActions.UPDATE_DESCRIPTION:
			return {
				...state,
				description: action.payload,
			};
		case RecipeActions.ADD_FILE:
		case RecipeActions.UPDATE_FILE:
			return {
				...state,
				files: {
					...state.files,
					...action.payload,
				},
			};
		case RecipeActions.REMOVE_FILE:
			if (state.files) {
				delete state.files[Object.keys(action.payload)[0]];
				return {
					...state,
				};
			}
			return {
				...state,
			};
		case RecipeActions.CLEAR_RECIPE:
			return {
				name: "",
				description: "",
				files: {},
			};
	}
}

export function RecipeProvider({ children }: { children: ReactNode }) {
	const [recipe, changeRecipe] = useReducer(reducer, {
		name: "",
		description: "",
		files: {},
	});

	return (
		<RecipeContext.Provider
			value={{
				recipe,
				changeRecipe,
			}}
		>
			{children}
		</RecipeContext.Provider>
	);
}
