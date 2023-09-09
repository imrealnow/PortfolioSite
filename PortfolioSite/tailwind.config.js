/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		"node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#FFFCF2",
				secondary: "#CCC5B9",
				shadowGray: "#333947",
				shadowBlack: "#161616",
				dimWhite: "rgba(255, 255, 255, 0.7)",
				highlightBlue: "#5067A9",
				dimBlue: "#637282",
				dullBlue: "#486187",
				lightBlue: "#9db4ce",
				background: "#1f1f1f",
				foreground: "#6d9ccf",
			},
			fontFamily: {
				poppins: ["Poppins", "sans-serif"],
			},
			transitionProperty: {
				width: "width",
			},
			screens: {
				xs: "480px",
				ss: "620px",
				sm: "768px",
				md: "1060px",
				lg: "1200px",
				xl: "1700px",
			},
		},
	},
	plugins: [
		require("@tailwindcss/typography"),
		require("flowbite/plugin"),
		require("tailwind-scrollbar"),
	],
};
