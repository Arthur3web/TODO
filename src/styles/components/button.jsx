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
        boxShadow: "0 1px 1px rgba(0, 0, 0, .15)",
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
    addTaskButtonMobileSidebar: {
      w: "100%",
      h: "40px",
      borderRadius: "10px",
      border: "1px solid gray",
      bg: "rgba(147, 51, 234, 0.06)",
      _hover: {
        bg: "#E2E8F0",
        boxShadow: "0 1px 1px rgba(0, 0, 0, .15)",
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
      w: "150px",
      h: "40px",
      lineHeight: "1.2",
      transition: "all 0.2s cubic-bezier(.08,.52,.52,1)",
      borderRadius: "10px",
      fontSize: "16px",
      bg: "rgba(103, 184, 203, 0.06)",
      color: "#67B8CB",
      _hover: {
        bg: "rgba(103, 184, 203, 0.03)",
        boxShadow: "0 1px 1px rgba(0, 0, 0, .15)",
      },
      _active: {
        transform: "scale(0.9)",
      },
      _focus: {
        boxShadow: "0 1px 1px rgba(0, 0, 0, .15)",
      },
    },
    closeModalButton: {
      w: "45%",
      h: "40px",
      lineHeight: "1.2",
      transition: "all 0.2s cubic-bezier(.08,.52,.52,1)",
      borderRadius: "10px",
      fontSize: "16px",
      fontWeight: "semibold",
      bg: "rgba(107, 114, 128, 0.06)",
      color: "#6B7280",
      _hover: {
        bg: "rgba(107, 114, 128, 0.03)",
        boxShadow: "0 1px 1px rgba(0, 0, 0, .15)",
      },
      _active: {
        transform: "scale(0.9)",
      },
      _focus: {
        boxShadow: "0 1px 1px rgba(0, 0, 0, .15)",
      },
    },
    deleteTaskButton: {
      w: "45%",
      h: "40px",
      transition: "all 0.2s cubic-bezier(.08,.52,.52,1)",
      borderRadius: "10px",
      bg: "rgba(245, 100, 151, 0.06)",
      color: "#F56497",
      _hover: {
        bg: "rgba(245, 100, 151, 0.03)",
        boxShadow: "0 1px 1px rgba(0, 0, 0, .15)",
      },
      _active: {
        transform: "scale(0.9)",
      },
      _focus: {
        boxShadow: "0 1px 1px rgba(0, 0, 0, .15)",
      },
    },
    loginButton: {
      w: "150px",
      h: "40px",
      transition: "all 0.2s cubic-bezier(.08,.52,.52,1)",
      borderRadius: "10px",
      bg: "purple.200",
      color: "black",
      _hover: {
        bg: "purple.100",
        boxShadow: "0 1px 1px rgba(0, 0, 0, .15)",
      },
      _active: {
        transform: "scale(0.9)",
      },
      _focus: {
        boxShadow: "0 1px 1px rgba(0, 0, 0, .15)",
      },
    },
    userRegistrationButton: {
      w: "150px",
      h: "40px",
      transition: "all 0.2s cubic-bezier(.08,.52,.52,1)",
      borderRadius: "10px",
      bg: "pink.200",
      color: "black",
      _hover: {
        bg: "pink.100",
        boxShadow: "0 1px 1px rgba(0, 0, 0, .15)",
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
