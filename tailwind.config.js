import defaultTheme from 'tailwindcss/defaultTheme'
import colors from 'tailwindcss/colors'

export const content = [
  './*.html',
  "./src/**/*.{html,js,ts,jsx,tsx}",
]
export const theme = {
  container: {
    center: true,
    padding: '1.25rem',
  },
  extend: {
    colors: {},
    fontFamily: {
      'sans': ['Roboto', ...defaultTheme.fontFamily.sans],
    },
  },
}
export const plugins = []

