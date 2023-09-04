/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
	theme: {
		extend: {
			colors: {
				stdblue: "#005CA9",
				silver: "#BDC3C7",
				moonstone: "#2571CF",
				stdorange: "#E67E22",
				midnight: "#2D3436",
<<<<<<< HEAD
				stdred: "#EB3B5A"
=======
				concrete: "#7F8C8D",
				red: '#EB3B5A',
>>>>>>> a6ecee83fdbcf9767118e7b5b165f90e9a0be1ba
			},
		},
	},
	plugins: ["prettier-plugin-tailwindcss"],
};
