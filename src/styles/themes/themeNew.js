import { extendTheme } from '@chakra-ui/react';
import { Button } from '../components/button'
import { MenuButton } from '../components/menuButton';
import { Input } from '../components/input';
import { Container } from '../components/container';
import { Heading } from '../components/heading';
import { Text } from '../components/text';


const themeNew = extendTheme({
  components: {
    Button,
    MenuButton,
    Input,
    Container,
    Heading,
    Text,
  }

});

export default themeNew