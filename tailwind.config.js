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
export const plugins = []

