import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  darkMode: false,
  theme: {
    colors: {
      black: '#000000',
      grey: {
        light: '#F7F7F7'
      },
      white: '#FFFFFF',
      blue: {
        primary: '#3036D0',
        secondary: '#5357E2'
      },
      orange: {
        primary: '#E13D31'
      }
    },
    fontFamily: {
      'monospace': ['Arimo', 'sans-serif']
    }
  }
})