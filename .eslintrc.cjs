module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react-hooks/recommended",
		"plugin:@typescript-eslint/stylistic-type-checked",
		"eslint-config-prettier",
		"plugin:react/recommended",
		"plugin:react/jsx-runtime",
	],
	ignorePatterns: [
		"dist",
		".eslintrc.cjs",
		".prettierrc.js",
		"index.html",
		"README.md",
		"vite.config.ts",
		"tailwind.config.js",
		"postcss.config.js",
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		project: "./tsconfig.json",
		ecmaFeatures: {
			jsx: true,
		},
	},
	settings: {
		react: {
			version: "detect",
		},
	},
	plugins: ["react", "react-hooks", "react-refresh", "prettier"],
	rules: {
		"react-refresh/only-export-components": [
			"warn",
			{ allowConstantExport: true },
		],
		"prettier/prettier": "error",
	},
};
