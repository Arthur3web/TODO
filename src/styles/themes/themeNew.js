import { extendTheme } from '@chakra-ui/react';
import { Button } from '../components/button'
import { Input } from '../components/input';
import { Container } from '../components/container';
import { Heading } from '../components/heading';
import { Text } from '../components/text';
import { Menu } from '../components/menu';
import { Checkbox } from '../components/checkbox';
import { Modal } from '../components/modal';

const themeNew = extendTheme({
  components: {
    Button,
    Input,
    Container,
    Heading,
    Text,
    Menu,
    Checkbox,
    Modal,
  }

});

export default themeNew