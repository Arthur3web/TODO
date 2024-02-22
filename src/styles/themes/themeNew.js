import { extendTheme } from '@chakra-ui/react';
import { Button } from '../components/button'
import { Input } from '../components/input';
import { Container } from '../components/container';
import { Heading } from '../components/heading';
import { Text } from '../components/text';
import { Menu } from '../components/menu';
import { Checkbox } from '../components/checkbox';
import { Modal } from '../components/modal';
import { Popover } from '../components/popover';
import { IconButton } from '../components/iconButton';

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
    Popover,
    IconButton,
  }

});

export default themeNew