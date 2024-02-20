import { defineStyleConfig } from "@chakra-ui/react";

export const Button = defineStyleConfig({
  variants: {
    addTaskButton: {
      w: "185px",
      h: "40px",
      borderRadius: "10px",
      bg: "rgba(147, 51, 234, 0.06)",
      _hover: {
        bg: "rgba(147, 51, 234, 0.06)",
        border: "0.5px solid #9333EA",
      },
      _active: {
        transform: "scale(0.9)",
      },
      transition: "all 0.2s cubic-bezier(.08,.52,.52,1)",
      _focus: {
        boxShadow: " 0 1px 1px rgba(0, 0, 0, .15)",
        bg: "rgba(147, 51, 234, 0.25",
      },
    },
    saveTaskButton: {
      w: "185px",
      h: "40px",
      lineHeight: "1.2",
      transition: "all 0.2s cubic-bezier(.08,.52,.52,1)",
      borderRadius: "10px",
      fontSize: "16px",
      bg: "rgba(103, 184, 203, 0.4)",
      color: "#2A4365",
      _hover: { bg: "rgba(103, 184, 203, 0.2)" },
      _active: {
        transform: "scale(0.9)",
      },
      _focus: {
        boxShadow: "0 1px 1px rgba(0, 0, 0, .15)",
      },
    },
    closeModalButton: {
      w: "185px",
      h: "40px",
      lineHeight: "1.2",
      transition: "all 0.2s cubic-bezier(.08,.52,.52,1)",
      borderRadius: "10px",
      fontSize: "16px",
      fontWeight: "semibold",
      bg: "gray.400",
      color: "white",
      _hover: { bg: "gray.300" },
      _active: {
        transform: "scale(0.9)",
      },
      _focus: {
        boxShadow: "0 1px 1px rgba(0, 0, 0, .15)",
      },
    },
    deleteTaskButton: {
      w: "185px",
      h: "40px",
      lineHeight: "1.2",
      transition: "all 0.2s cubic-bezier(.08,.52,.52,1)",
      borderRadius: "10px",
      fontSize: "16px",
      bg: "rgba(245, 108, 156, 0.45)",
      color: "red",
      _hover: {
        bg: "rgba(245, 108, 156, 0.25)",
      },
      _active: {
        transform: "scale(0.9)",
      },
      _focus: {
        boxShadow: "0 1px 1px rgba(0, 0, 0, .15)",
      },
    },
  },
});
