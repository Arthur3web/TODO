import { defineStyleConfig } from "@chakra-ui/react";

export const Input = defineStyleConfig({
  variants: {
    titleTaskInput: {
      h: "40px",
      w: "270px",
      bg: "#F3F3F3",
      borderRadius: "10px",
      pl: "27px",
      placeholder: "Enter text...",
      autoFocus: true,
      _focus: {border: "1px solid rgba(147, 51, 234, 0.06)"},
    },
    timeEndTaskInput: {
      type: "date",
      w: "40%",
      bg: "#F3F3F3",
      borderRadius: "10px",
      focus: {border: "1px solid rgba(147, 51, 234, 0.06)"},
    },
  },
});
