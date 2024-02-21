import { menuAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(menuAnatomy.keys);

const variants = {
  sideBar: {
    button: {
      w: "185px",
      h: "40px",
      borderRadius: "10px",
      pl: "13px",
      _hover: {
        bg: "#d3c8fc",
        boxShadow: "0 1px 1px rgba(0, 0, 0, .15)",
      },
      transition: "all 0.2s cubic-bezier(.08,.52,.52,1)",
    },
    list: {
      bg: "#d3c8fb",
      border: "0",
      minW: "185px",
      h: "152px",
    },
    item: {
      gap: "10px",
      w: "171px",
      h: "40px",
      m: "0 0 0 7px",
      mb: "8px",
      borderRadius: "10px", //отступы меню
      _hover: { bg: "#e2d9ff" },
    },
  },
  parametersTask: {
    button: {
      bg: "inherit",
      size: "xs",
      ariaLabel: "Options",
    },
    list: {
      borderRadius: "10px",
      border: "1px solid #7D40FF",
      minW: "53px",
      h: "24px",
      m: "1.5px 0 0 0",
      py: "4px",
    },
    item: {
      boxSize: '15px',
      p: 0,
    },
  },
};
export const Menu = defineMultiStyleConfig({ variants });
