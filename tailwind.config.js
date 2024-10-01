/** @type {import('tailwindcss').Config} */
module.exports = {
	// Remueve la opción de cambiar entre modo claro y oscuro.
	darkMode: "class", // Mantén el darkMode como "class" para que siempre utilice estilos oscuros.
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				// Define los colores para un modo oscuro consistente
				background: '#000000', // Fondo negro para el black mode
				foreground: '#ffffff', // Texto blanco o claro para contraste

				// Configura los colores de los componentes para que funcionen bien con fondo negro
				card: {
					DEFAULT: '#1e1e1e', // Fondo oscuro para las tarjetas
					foreground: '#ffffff', // Texto claro en las tarjetas
				},
				popover: {
					DEFAULT: '#2c2c2c', // Fondo oscuro para popovers
					foreground: '#ffffff', // Texto claro
				},
				primary: {
					DEFAULT: '#ff5722', // Color primario en modo oscuro (puedes ajustar)
					foreground: '#ffffff',
				},
				secondary: {
					DEFAULT: '#03a9f4', // Color secundario en modo oscuro
					foreground: '#ffffff',
				},
				muted: {
					DEFAULT: '#757575', // Color muted más oscuro
					foreground: '#ffffff',
				},
				accent: {
					DEFAULT: '#8bc34a', // Color acentuado para elementos
					foreground: '#ffffff',
				},
				destructive: {
					DEFAULT: '#f44336', // Color para acciones destructivas (ej. botones de borrar)
					foreground: '#ffffff',
				},
				border: '#303030', // Bordes oscuros
				input: '#1e1e1e', // Color para inputs con fondo oscuro
				ring: '#616161', // Color del anillo de enfoque en modo oscuro

				// Colores para gráficos (charts) adaptados al black mode
				chart: {
					'1': '#ff5722',
					'2': '#03a9f4',
					'3': '#8bc34a',
					'4': '#ffeb3b',
					'5': '#f44336',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};
