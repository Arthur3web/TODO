import { modalAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const taskModal = definePartsStyle({
  dialog: {
    w: "466px",
    h: "181px",
    borderRadius: "10px",
    bg: "white",
  },
  header: {
    borderRadius: "10px 10px 0 0",
    bg: "linear-gradient(#F5EDFD,#FEEFF5)",
    h: "48px",
  },
  body: {
    p: "15px 25px 5px 25px",
  },
  footer: {
    py: "17px",
  },
});

const deleteTaskModal = definePartsStyle({
  dialog: {
    w: "466px",
    h: "181px",
    borderRadius: "10px",
    bg: "white",
  },
  header: {
    borderRadius: "10px 10px 0 0",
    bg: "linear-gradient(#F5EDFD,#FEEFF5)",
    h: "48px",
  },
  footer: {
    h: "40px",
    mb: "15px",
  },
});

export const Modal = defineMultiStyleConfig({
  variants: { taskModal, deleteTaskModal },
});
