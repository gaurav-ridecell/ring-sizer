
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
				border: 'hsl(var(--ring-sizer-border))',
				input: 'hsl(var(--ring-sizer-input))',
				ring: 'hsl(var(--ring-sizer-ring))',
				background: 'hsl(var(--ring-sizer-background))',
				foreground: 'hsl(var(--ring-sizer-foreground))',
				primary: {
					DEFAULT: 'hsl(var(--ring-sizer-primary))',
					foreground: 'hsl(var(--ring-sizer-primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--ring-sizer-secondary))',
					foreground: 'hsl(var(--ring-sizer-secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--ring-sizer-destructive))',
					foreground: 'hsl(var(--ring-sizer-destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--ring-sizer-muted))',
					foreground: 'hsl(var(--ring-sizer-muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--ring-sizer-accent))',
					foreground: 'hsl(var(--ring-sizer-accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--ring-sizer-popover))',
					foreground: 'hsl(var(--ring-sizer-popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--ring-sizer-card))',
					foreground: 'hsl(var(--ring-sizer-card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--ring-sizer-sidebar-background))',
					foreground: 'hsl(var(--ring-sizer-sidebar-foreground))',
					primary: 'hsl(var(--ring-sizer-sidebar-primary))',
					'primary-foreground': 'hsl(var(--ring-sizer-sidebar-primary-foreground))',
					accent: 'hsl(var(--ring-sizer-sidebar-accent))',
					'accent-foreground': 'hsl(var(--ring-sizer-sidebar-accent-foreground))',
					border: 'hsl(var(--ring-sizer-sidebar-border))',
					ring: 'hsl(var(--ring-sizer-sidebar-ring))'
				},
				// Add custom colors for the app
				burgundy: {
					DEFAULT: '#5A0E25',
					light: '#7A1E35',
					dark: '#4A0A15',
				},
				cream: {
					DEFAULT: '#F5F1EB',
					light: '#FFF9F3',
					dark: '#E5E1DB',
				},
				gold: {
					DEFAULT: '#D4AF37',
					light: '#F4CF47',
					dark: '#B48F27',
				},
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				serif: ['Cormorant Garamond', 'serif'],
				display: ['Playfair Display', 'serif'],
			},
			borderRadius: {
				lg: 'var(--ring-sizer-radius)',
				md: 'calc(var(--ring-sizer-radius) - 2px)',
				sm: 'calc(var(--ring-sizer-radius) - 4px)'
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
				'pulse-ring': {
					'0%': {
						transform: 'scale(0.95)',
						boxShadow: '0 0 0 0 rgba(90, 14, 37, 0.7)',
					},
					'70%': {
						transform: 'scale(1)',
						boxShadow: '0 0 0 10px rgba(90, 14, 37, 0)',
					},
					'100%': {
						transform: 'scale(0.95)',
						boxShadow: '0 0 0 0 rgba(90, 14, 37, 0)',
					},
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				'slide-up': {
					'0%': { transform: 'translateY(10px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' },
				},
				'zoom-in': {
					'0%': { transform: 'scale(0.95)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'pulse-ring': 'pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				'fade-in': 'fade-in 0.5s ease-in-out',
				'slide-up': 'slide-up 0.5s ease-out',
				'zoom-in': 'zoom-in 0.5s ease-out',
			},
			backdropFilter: {
				'none': 'none',
				'blur': 'blur(20px)',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
