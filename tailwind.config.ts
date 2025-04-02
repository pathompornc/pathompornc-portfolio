
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				warm: {
					50: '#f8f5f2',
					100: '#f1ebe4',
					200: '#e5d8cd',
					300: '#d4bfad',
					400: '#c0a086',
					500: '#ae876b',
					600: '#9c7259',
					700: '#825a47',
					800: '#6c4b3d',
					900: '#5a4033',
					950: '#302119',
				},
				cream: {
					50: '#fdfaf5',
					100: '#f9f0e5',
					200: '#f3e3cc',
					300: '#ecceab',
					400: '#e2b183',
					500: '#d6945e',
					600: '#c97a46',
					700: '#a6613c',
					800: '#854f35',
					900: '#6b422d',
					950: '#391f15',
				},
				evergreen: {
					50: '#f2f9f6',
					100: '#e0f1ea',
					200: '#c3e4d6',
					300: '#98d0ba',
					400: '#66b597',
					500: '#3d9c7a',
					600: '#2b7d62',
					700: '#256451',
					800: '#215042',
					900: '#1d4338',
					950: '#0e2720',
				},
				navy: {
					50: '#f0f4f8',
					100: '#dde7f3',
					200: '#c3d5e9',
					300: '#9dbbdb',
					400: '#7298c9',
					500: '#527ab8',
					600: '#4161a4',
					700: '#354e86',
					800: '#2f436e',
					900: '#293a5b',
					950: '#1a253c',
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'fade-up': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out',
				'fade-up': 'fade-up 0.7s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
