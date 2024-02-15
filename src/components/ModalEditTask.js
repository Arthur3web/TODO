import React, { useState, useRef, useEffect } from "react";
import "./ModalEditTask.css";
import {
  ModalContent,
  ModalFooter,
  ModalOverlay,
  ModalBody,
  ModalHeader,
  Button,
  Modal,
  Heading,
  Flex,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import { CheckCircleIcon, CloseIcon } from "@chakra-ui/icons";


function ModalEditTask({ closeModal, task, saveEditTask, setOpenParameters }) {
  const [note, setNote] = useState(task.title);
  const [noteTime, setNoteTime] = useState(new Date(task.timeEnd));

  let menuRef = useRef(); //настройка закрытия модального окна при клике вне его поля

  useEffect(() => {
    let handler = (event) => {
      if (!menuRef.current.contains(event.target)) {
        closeModal(false);
        setOpenParameters(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  const { onOpen, onClose, isOpen, } = useDisclosure();
  const handleKeyDown = (event) => {
    //настройка закрытия модального окна при нажатии на клавиши Enter и Esc
    if (event.key === "Enter") {
      if (note !== "") {
        saveEditTask(task.id, note, new Date(noteTime));
        closeModal(false);
        setOpenParameters(false);
      }
    }
    if (event.key === "Escape") {
      closeModal(false);
      setOpenParameters(false);
    }
  };

  function handleInputChangeEditTask(e) {
    setNote(e.target.value);
  }
  function handleInputChangeEditTaskTime(e) {
    setNoteTime(e.target.value);
  }

  function editTask(id) {
    if (note !== "") {
      saveEditTask(task.id, note, new Date(noteTime));
      closeModal(false);
      setOpenParameters(false);
      console.log(task);
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent w="466px" h="181px" borderRadius="10px" bg="white">
        <ModalHeader
          borderRadius="10px 10px 0 0"
          bg="linear-gradient(#F5EDFD,#FEEFF5)"
          h="48px"
        >
          <Heading
            fontFamily="Roboto"
            fontSize="20px"
            fontWeight="700"
            lineHeight="23.44px"
            color="#9333EA"
          >
            Edit task
          </Heading>
        </ModalHeader>
        <ModalBody alignItems="center" justifyContent="center" gap="10px">
          <Flex>
            <Input
              h="27px"
              border="1px solid #6B7280"
              bg="#F3F3F3"
              borderRadius="10px"
              pl="27px"
              value={note}
              onChange={handleInputChangeEditTask}
              autoFocus={true}
              onKeyDown={handleKeyDown}
              required
            />
            <Input
              type="date"
              w="55px"
              border="0"
              value={noteTime}
              onChange={handleInputChangeEditTaskTime}
            />
          </Flex>
        </ModalBody>
        <ModalFooter py="17px">
          <Flex>
            <Button
              leftIcon={<CheckCircleIcon fontSize="larger" />}
              onClick={() => editTask(task.id, note)}
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
              Save
            </Button>
            <Button
              leftIcon={<CloseIcon fontSize="xs" />}
              width="185px"
              height="40px"
              lineHeight="1.2"
              transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
              borderRadius="10px"
              fontSize="16px"
              fontWeight="semibold"
              bg="#6B7280"
              color="white"
              _hover={{ bg: "gray.500" }}
              _active={{
                bg: "gray.500",
                transform: "scale(0.9)",
              }}
              _focus={{
                boxShadow: "0 0 1px 2px black, 0 1px 1px rgba(0, 0, 0, .15)",
              }}
              onClick={onClose}
            >
              Close
            </Button>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default ModalEditTask;
