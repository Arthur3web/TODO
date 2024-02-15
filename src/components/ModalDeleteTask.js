import React, { useRef, useEffect } from "react";
import "./ModalDeleteTask.css";
import {
  Flex,
  Text,
  Heading,
  Button,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  ModalBody,
  ModalHeader,
  Modal,
  useDisclosure,
} from "@chakra-ui/react";
import {
  DeleteIcon,
  CloseIcon,
} from "@chakra-ui/icons";

function ModalDeleteTask({ closeModal, deleteTask, task, setOpenParameters }) {
  let menuRef = useRef(); //настройка закрытия модального окна
  const { isActive, onOpen, onClose, isOpen } = useDisclosure();
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

  function deleteTaskButton(id) {
    deleteTask(id);
    closeModal(false);
    setOpenParameters(false);
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
            Delete task
          </Heading>
        </ModalHeader>
        <ModalBody w='407px' h='35px'>
            <Text 
              fontFamily='Roboto' 
              fontSize='20px' 
              fontWeight='700' 
              lineHeight='23.44px'
            >
              Are you sure about deleting this task?
            </Text>
        </ModalBody>
        <ModalFooter className="modal-footer">
          <Flex>
            <Button
              leftIcon={<DeleteIcon fontSize="larger" />}
              className="delete-button"
              onClick={() => deleteTaskButton(task.id)}
              width="185px"
              height="40px"
              lineHeight="1.2"
              transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
              borderRadius="10px"
              fontSize="16px"
              bg="red"
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
              <img src="/assets/trash.svg" alt="trash" />
              <p className="delete-button-content">Delete</p>
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

export default ModalDeleteTask;
