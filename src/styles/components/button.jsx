import type { ComponentStyleConfig } from '@chakra-ui/theme'

export const Button: ComponentStyleConfig = {
  variants: {
    resetStyleBtn: {
      p: 0,
      bgColor: 'transparent',
      _hover: {
        bgColor: 'transparent',
      },
    },
    inputSearchButton: {
      p: 0,
      borderRadius: 0,
      bg: 'search.bg',
      _focus: {
        opacity: 0.7,
        boxShadow: 'none',
      },
      _hover: {
        opacity: 0.7,
      },
      _active: {
        opacity: 0.7,
      },
    },
    showMore: {
      w: 'fit-content',
      borderRadius: 60,
      fontWeight: 'bold',
      px: 10,
      py: 4,
      border: '1px solid black',
      bgColor: 'transparent',
      _focus: {
        boxShadow: 'none',
      },
      _hover: {
        border: '2px solid',
      },
    },
    showFeatures: {
      p: 0,
      height: 'max-content',
      fontSize: 'sm',
      color: 'black',
      bgColor: 'none',
      boxShadow: 'none',
      span: { m: 0 },
    },
    searchItem: {
      _hover: { color: 'primary' },
      _focus: { color: 'primary' },
      whiteSpace: 'pre-wrap',
      cursor: 'pointer',
      h: 'auto',
      minW: 'none',
      minH: 'none',
      textAlign: 'center',
      fontSize: 16,
      fontWeight: 'normal',
      my: 2,
      p: 0,
    },
  },
}

// export default Button