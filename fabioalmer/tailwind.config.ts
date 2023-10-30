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

      colors: {
        "butterscotch": "#E09647",
      },

      animation: {
        "run": "run 30s linear infinite"
      },

      keyframes : {
        "run": {
            "0%":{left: "0", transform :"translate-x-0"},
            "100%" : {left:"100%", transform : "-translate-x-full" }
        }
      }
    },
  },
  plugins: [require("daisyui")],
}
export default config
