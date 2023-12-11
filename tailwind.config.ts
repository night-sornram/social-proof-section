import type { Config } from 'tailwindcss'

const { colors: defaultColors } = require('tailwindcss/defaultTheme')

const colors = {
    ...defaultColors,
    ...{
        "custom": {
            "100": "hsl(300, 43%, 22%)",
            "200" : "hsl(333, 80%, 67%)",
            "300" : "hsl(303, 10%, 53%)",
            "400" : "hsl(300, 24%, 96%)",
        },
    },
}

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors : colors,
    },
  },
  plugins: [],
}
export default config
