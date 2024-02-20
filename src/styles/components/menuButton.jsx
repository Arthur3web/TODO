import { defineStyleConfig } from "@chakra-ui/react";

export const MenuButton = defineStyleConfig({
  variants: {
    sideBarButton: {
      w: "185px",
      h: "40px",
      borderRadius: "10px",
      pl: "13px",
      _hover: { bg: "d3c8fc" },
    },
  },
});
