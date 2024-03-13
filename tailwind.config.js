import defaultTheme from 'tailwindcss/defaultTheme'
import colors from 'tailwindcss/colors'
const plugin = require('tailwindcss/plugin')

export const content = [
  './*.html',
  "./src/**/*.{html,js,ts,jsx,tsx}",
]
export const theme = {
  container: {
    center: true,
    padding: '1.25rem',
  },
  screens: {
    'sm': '640px',
    'md': '768px',
    'lg': '1024px',
    'xl': '1280px',
    '2xl': '1280px',
  },
  extend: {
    colors: {
      accent: {
        500: '#FF6600',
      }
    },
    fontFamily: {
      'sans': ['Inter', ...defaultTheme.fontFamily.sans],
    },
  },
}
export const plugins = [
  plugin(function({ matchUtilities, theme }) {
    matchUtilities({ title: (value) => ({ fontSize: `calc(calc(1vw + 1vh) * ${value})` })})
    matchUtilities({ ptop: (value) => ({ paddingTop: `calc(calc(1vw + 1vh) * ${value})` })})
    matchUtilities({ plr: (value) => ({ paddingLeft: `calc(calc(1vw + 1vh) * ${value})`, paddingRight: `calc(calc(1vw + 1vh) * ${value})` })})
    matchUtilities({ t: (value) => ({ top: `calc(calc(1vw + 1vh) * ${value})`})})
    matchUtilities({ r: (value) => ({ right: `calc(calc(1vw + 1vh) * ${value})`})})
    matchUtilities({ b: (value) => ({ bottom: `calc(calc(1vw + 1vh) * ${value})`})})
    matchUtilities({ l: (value) => ({ left: `calc(calc(1vw + 1vh) * ${value})`})})
  })
]

