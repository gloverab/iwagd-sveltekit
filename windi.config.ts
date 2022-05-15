import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  darkMode: false,
  theme: {
    colors: {
      black: '#000000',
      grey: {
        light: '#F7F7F7',
        darkest: '#1C1C1C'
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
      'arimo': ['Arimo', 'sans-serif'],
      'display': ['Enigma'],
      'tight': ['"Agrandir Tight"'],
      'wbi': ['"Agrandir WideBlackItalic"']
    }
  },
  plugins: [
    require('windicss/plugin/aspect-ratio')
  ]
})