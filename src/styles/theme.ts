import { extendTheme } from '@chakra-ui/react'

export const newStyleTheme = extendTheme({
  textStyles: {
    h1: { //title-wrapper
      fontFamily: 'Roboto',
      fontSize: '96px',
      fontWeight: '700',
    },
    h2: { //
      fontFamily: 'Roboto',
      fontSize: '16px',
      fontWeight: '400',
      lineHeight: '18.75px',
    },
    h3: {
      fontFamily: 'Roboto',
      fontSize: '20px',
      fontWeight: '700',
      lineHeight: '23.44px',
    },
  },
})
