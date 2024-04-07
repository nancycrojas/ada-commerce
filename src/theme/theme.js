import { extendTheme } from '@chakra-ui/react'

const base = {
  colors: {
    brand: {
      50: '#f7e1e9',
      100: '#eeb8c9',
      200: '#e58faa',
      300: '#dc658a',
      400: '#d33c6b',
      500: '#be3969',
      600: '#a9325f',
      700: '#932b55',
      800: '#7d244b',
      900: '#671d41',
    },
  },
  semanticTokens: {
    colors: {
      background: {
        default: '#e8e8e6',
      },
    },
  },
}

export default extendTheme(base)
