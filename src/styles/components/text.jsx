import { defineStyleConfig } from "@chakra-ui/react";

export const Text = defineStyleConfig({
  variants: {
    titleTodoHeaderContainerText: {
      color: "#9333EA",
      fontFamily: "Roboto",
      fontSize: "20px",
      lineHeight: "23.44px",
      fontWeight: "700",
    },
    userNameTodoHeaderContainerText: {
      color: "#9333EA",
      fontFamily: "Roboto",
      fontSize: "16px",
      lineHeight: "18.75px",
      fontWeight: "400",
    },
    popoverFooterContentContainerText: {
      color: "#6B7280",
      fontFamily: "Roboto",
      fontSize: "14px",
      fontWeight: "200",
    },
    sideBarFilterContentText: {
      fontFamily: "Roboto",
      fontSize: "16px",
      lineHeight: "18.75px",
      fontWeight: "400",
    },
    addTaskButtonContentText: {
      color: "#9333EA",
      fontFamily: "Roboto",
      fontSize: "16px",
      lineHeight: "18.75px",
      fontWeight: "400",
    },
    taskContentTitleContainerText: { 
      p: "2",
      // w: "270px",
      // w: '70%',
      // maxW: '270px',
      // maxW: '75%',
      bg: "inherit",
      fontSize: "14px",
      fontWeight: "400",
      fontFamily: "Roboto",
      lineHeight: "18.75px",
      display: 'inline-block',
      overflowX: 'scroll',
      _hover: {
        textOverflow: 'clip',      
      },
    },
    taskContentDateContainerText: {
      w: '80px',
      fontSize: "14px",
      fontWeight: "400",
      fontFamily: "Roboto",
      lineHeight: "16.41px",
      color: "#6b7280",
    },
    deleteTaskModalContentContainerText: {
      fontSize: "20px",
      fontWeight: "700",
      fontFamily: "Roboto",
      lineHeight: "23.44px",
      color: "#9333EA",
    },
  },
});
