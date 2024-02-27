import { popoverAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const custom = definePartsStyle({
  content: defineStyle({
    mt: "10px",
    w: "350px",
  }),
  header: defineStyle({
    fontFamily: "Roboto",
    fontSize: "20px",
    fontWeight: "400",
  }),
});
export const Popover = defineMultiStyleConfig({
  variants: { custom },
});
