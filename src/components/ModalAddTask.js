import React, { useState, useRef, useEffect } from "react";
import "./Modal.css";
import {
  Button,
  Flex,
  Heading,
  Input,
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalContent,
  ModalFooter,
} from "@chakra-ui/react";
import { CheckCircleIcon, CloseIcon } from "@chakra-ui/icons";

function ModalAddTask({
  closeModal,
  addTask,
  handleInputChange,
  task,
  handleTimeChange,
  setTaskNew,
}) {
  const [value, setValue] = useState("");

  let menuRef = useRef(); //настройка закрытия модального окна

  // useEffect(() => {
  //   let handler = (event) => {
  //     if (!menuRef.current.contains(event.target)) {
  //       closeModal(false);
  //       setTaskNew({
  //         title: "",
  //         // timeEnd: ''
  //       });
  //     }
  //   };
  //   document.addEventListener("mousedown", handler);
  //   return () => {
  //     document.removeEventListener("mousedown", handler);
  //   };
  // });

  // const handleKeyDown = (event) => {
  //   if (event.key === "Enter") {
  //     //   console.log('✅ Enter key pressed');
  //     if (task !== "") {
  //       addTask(value);
  //       event.preventDefault();
  //       closeModal(false);
  //     }
  //   }
  //   if (event.key === "Escape") {
  //     closeModal(false);
  //     setTaskNew({
  //       title: "",
  //       timeEnd: "",
  //     });
  //   }
  // };

  function saveTask() {
    if (task !== "") {
      addTask(value);
      closeModal(false);
    }
  }

  return (
    <Modal
      w="466px"
      h="181px"
      borderRadius="10px"
      pl="16px"
      gap="26px"
      bg="white"
    >
      <ModalOverlay
        w="100vw"
        h="100vh"
        top="0"
        left="0"
        bg="#000000d"
        opacity="0.7"
      />
      <ModalHeader
        display="flex"
        w="465px"
        h="48px"
        borderRadius="10px 10px 0 0"
        bg="linear-gradient(#F5EDFD,#FEEFF5)"
        alignItems="center"
      >
        <Heading
          fontFamily="Roboto"
          fontSize="20px"
          fontWeight="70"
          lineHeight="23.44px"
          color="#9333EA"
        >
          Create task
        </Heading>
      </ModalHeader>
      <ModalContent>
        <Flex
          w="407px"
          h="35px"
          alignItems="center"
          justifyContent="center"
          gap="10px"
        >
          <Input
            w="388px"
            h="27px"
            border="1px solid #6B7280"
            bg="#F3F3F3"
            borderRadius="10px"
            pl="27px"
            placeholder="Enter text..."
            onChange={handleInputChange}
            value={task}
            autoFocus={true}
            // onKeyDown={handleKeyDown}
            required
          ></Input>
          <Input
            type="date"
            className="modal-content-date-end"
            onChange={handleTimeChange}
          />
        </Flex>
      </ModalContent>
      <ModalFooter>
        <Flex
          alignItems="center"
          justifyContent="space-evenly"
          width="422px"
          height="40px"
        >
          <Button
            leftIcon={<CheckCircleIcon fontSize="larger" />}
            onClick={saveTask}
            width="185px"
            height="40px"
            lineHeight="1.2"
            transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
            borderRadius="10px"
            fontSize="16px"
            bg="linear-gradient(300deg, #B9D5FF, #F6D1FC 98.93%)"
            color="#9333EA"
            _hover={{
              bg: "linear-gradient(300deg, #B9D5FF, #F6D1FC 98.93%)",
            }}
            _active={{
              transform: "scale(0.9)",
            }}
            _focus={{
              boxShadow: "0 0 1px 2px , 0 1px 1px rgba(0, 0, 0, .15)",
            }}
          >
            Save Task
          </Button>
          <Button
            leftIcon={<CloseIcon fontSize="xs" />}
            onClick={() => closeModal(false)}
            width="185px"
            height="40px"
            lineHeight="1.2"
            transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
            borderRadius="10px"
            fontSize="16px"
            fontWeight="semibold"
            bg="gray.500"
            color="white"
            _hover={{ bg: "gray.500" }}
            _active={{
              bg: "gray.500",
              transform: "scale(0.9)",
            }}
            _focus={{
              boxShadow: "0 0 1px 2px black, 0 1px 1px rgba(0, 0, 0, .15)",
            }}
          >
            Close
          </Button>
        </Flex>
      </ModalFooter>
    </Modal>
  );
}

export default ModalAddTask;
