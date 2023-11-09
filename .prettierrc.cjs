/** @type {import("prettier").Config} */
module.exports = {
	singleQuote: false,
	semi: true,
	useTabs: true,
	tabWidth: 4,
	trailingComma: "all",
	arrowParens: "avoid",
	plugins: ["prettier-plugin-tailwindcss"],
};
