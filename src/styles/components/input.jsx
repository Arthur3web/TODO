import { inputAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

const titleTaskInput = definePartsStyle({
  field: {
    h: "40px",
    w: "270px",
    bg: "#F3F3F3",
    borderRadius: "10px",
    pl: "27px",
    autoFocus: true,
    _focus: { border: "1px solid gray" },
    // _invalid: { border: "2px sold red" },
  },
});
const timeEndTaskInput = definePartsStyle({
  field: {
    w: "40%",
    bg: "#F3F3F3",
    borderRadius: "10px",
    _focus: { border: "1px solid gray" },
  },
});

export const Input = defineMultiStyleConfig({
  variants: { titleTaskInput, timeEndTaskInput },
});
