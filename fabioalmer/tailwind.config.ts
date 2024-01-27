import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        'custom': {'raw':'(min-height: 800px )'}
      },
      colors: {
        "butterscotch": "#E09647",
      },

      animation: {
        "slide-left": "slide-left 1s 1 var(--easing) both",
        "card-preview-in": "card-preview-in var(--duration) var(--easing) both 1",
        "card-preview-out" : "card-preview-out var(--duration) var(--easing) both 1"
      },

      keyframes : {
        "slide-left": {
          from: {transform: "translateX(-100vw)"},
          to: {transform:"none"}

        },
        "card-preview-in": {
          from: {transform:"translateY(2vh)", opacity:"0"},
          to: {transform:"none",opacity:"1"}
        },
        "card-preview-out": {
          from : {transform:"none",opacity:"1"},
          to: {transform: "translateY(2vh)",opacity:"0"}
        }
      },
      fontFamily: {
        montserrat:['Montserrat', 'sans-serif'],
        inter:['Inter','libre'],
        // crimsonText :['var(--crimson-font)', 'sans-serif']
      }
    },
  },
  plugins: [require("daisyui")],
}
export default config
