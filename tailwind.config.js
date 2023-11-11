/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
	},
	plugins: [
		daisyui,
		function ({ matchVariant }) {
			matchVariant("has", value => {
				return `&:has(${value})`;
			});
		},
	],
	daisyui: {
		themes: ["halloween"],
	},
};
