/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			sans: ['Roboto', 'sans-serif'],
		},
		extend: {
			colors: {
				primary: '#003459',
				primary40: '#0078CD',
				primary60: '#00528C',
				primary80: '#002A48',
				secondary: '#F7DBA7',
				secondary40: '#FCEED5',
				secondary60: '#F1D092',
				secondary80: '#EEC77E',
				blueSea: '#00A7E7',
			},
		},
	},
	plugins: [],
};
