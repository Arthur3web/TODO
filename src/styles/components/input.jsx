import { inputAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

const titleTaskInput = definePartsStyle({
  field: {
    h: "40px",
    // w: "270px",
    w: '90%',
    bg: "#F3F3F3",
    borderRadius: "10px",
    pl: "27px",
    autoFocus: true,
    _focus: { border: "1px solid gray" },
    _invalid: { border: "2px solid red" }
  },
});
const timeEndTaskInput = definePartsStyle({
  field: {
    w: "180px",
    bg: "#F3F3F3",
    borderRadius: "10px",
    _focus: { border: "1px solid gray" },
    // p: '0 6px 0 6px'
  },
});

export const Input = defineMultiStyleConfig({
  variants: { titleTaskInput, timeEndTaskInput },
});
