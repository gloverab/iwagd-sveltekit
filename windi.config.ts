import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  darkMode: false,
  theme: {
    colors: {
      black: '#000000',
      tan: '#F7EBE4',
      grey: {
        light: '#F7F7F7',
        mid: '#b5b6ba',
        darkest: '#1C1C1C'
      },
      white: '#FFFFFF',
      rememory: {
        blue: {
          dark: '#0B0C1B'
        }
      },
      primary: {
        dark: '#0e0f23',
        default: '#0B0C1B'
      },
      secondary: "#E13D31"
    },
    extend: {
      backgroundImage: (theme) => ({
        ...theme,
        'scroll-gradient-b': 'linear-gradient(180deg, rgba(11, 12, 27, 0) 0%, #0B0C1B 100%);',
        'scroll-gradient-t': 'linear-gradient(180deg, #0B0C1B 0%, rgba(11, 12, 27, 0) 100%);',
        'yellow-green': 'linear-gradient(316.96deg, rgba(255, 232, 49, 0.7) 31.42%, rgba(48, 210, 184, 0.7) 95.28%);',
        'paper-texture': 'url(\'/src/assets/images/paper-texture.png\')',
        'g1-l1': 'linear-gradient(90.44deg, #4938AC 0%, #D18DD2 51.48%, #D6E5F6 98.84%);',
        'g1-l2': 'linear-gradient(147.89deg, rgba(243, 246, 251, 0) 33.22%, #F3F6FB 80.01%);',
        'g1-l3': 'linear-gradient(169.06deg, rgba(243, 246, 251, 0) 29.89%, #F3F6FB 82.29%);'
      })
    },
    backdropFilter: {
      none: 'none',
      blur: 'blur(20px)',
    },
    fontFamily: {
      'arimo': ['Arimo', 'sans-serif'],
      'courier': ['Courier'],
      'display': ['Enigma'],
      'tight': ['"Agrandir Tight"'],
      'wbi': ['"Agrandir WideBlackItalic"']
    }
  },
  plugins: [
    require('windicss/plugin/aspect-ratio'),
    require('windicss/plugin/filters'),
    require('@windicss/plugin-scrollbar')
  ]
})