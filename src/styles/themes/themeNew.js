import { extendTheme } from '@chakra-ui/react';
import { Button } from '../components/button'
import { MenuButton } from '../components/menuButton';


const themeNew = extendTheme({
  components: {
    Button,
    MenuButton,
  }

});

export default themeNew