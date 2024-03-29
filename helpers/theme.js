import { extendTheme } from '@chakra-ui/react'

import '@fontsource/manrope/200.css'
import '@fontsource/manrope/300.css'
import '@fontsource/manrope/400.css'
import '@fontsource/manrope/500.css'
import '@fontsource/manrope/600.css'
import '@fontsource/manrope/700.css'
import '@fontsource/manrope/800.css'

import _const from './_const'

const themeConfig = {
  colors: {
    blue: {
      500: '#29aae1'
    }
  },
  components: {
    FormLabel: {
      baseStyle: {
        fontSize: 'xs',
        mb: 1,
        ml: 1,
        color: 'gray.500'
      }
    },
    Input: {
      defaultProps: {
        focusBorderColor: `${_const.THEME_COLOR}.500`,
        size: 'sm'
      },
      sizes: {
        sm: {
          field: {
            borderRadius: 5
          }
        }
      }
    },
    Select: {
      defaultProps: {
        size: 'sm'
      },
      sizes: {
        sm: {
          field: {
            borderRadius: 5
          }
        }
      }
    },
    FormControl: {
      baseStyle: {
        my: 2
      }
    },
    Button: {
      baseStyle: {
        rounded: 10
      },
      defaultProps: {
        size: 'sm',
        variant: 'ghost'
      }
    },
    Tooltip: {
      defaultProps: {
        rounded: 5,
        hasArrow: true
      }
    }

  },
  fonts: {
    heading: 'manrope, sans-serif',
    body: 'manrope, sans-serif'
  }
}

const theme = extendTheme(themeConfig)

export default extendTheme(theme)
