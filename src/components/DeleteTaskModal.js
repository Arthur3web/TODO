import React from "react";
import {
  Flex,
  Text,
  Image,
  Heading,
  Button,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  ModalBody,
  ModalHeader,
  Modal,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

function DeleteTaskModal({
  isClickDeleteTaskButton,
  deleteTask,
  closeModal,
  isDeletedTask,
}) {
  function deleteTaskButton(id) {
    deleteTask(id);
    closeModal(false);
  }

  const handleKeyDown = (event) => {
    //настройка закрытия модального окна при нажатии на клавиши Enter и Esc
    if (event.key === "Enter") {
      closeModal(false);
    }
    if (event.key === "Escape") {
      closeModal(false);
    }
  };

  return (
    <Modal
      isOpen={isClickDeleteTaskButton}
      onClose={() => closeModal(false)}
      isCentered
    >
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
        <ModalBody w="448px">
          <Flex alignItems="center" justifyContent="center">
            <Text
              fontFamily="Roboto"
              fontSize="20px"
              fontWeight="700"
              lineHeight="23.44px"
              pt="15px"
            >
              Are you sure about deleting this task?
            </Text>
          </Flex>
        </ModalBody>
        <ModalFooter h="40px" my="15px">
          <Flex
            alignItems="center"
            justifyContent="space-between"
            width="422px"
          >
            <Button
              leftIcon={<DeleteIcon fontSize="larger" />}
              onClick={() => deleteTaskButton(isDeletedTask.id)}
              variant="deleteTaskButton"
            >
              Delete
            </Button>
            <Button
              variant="closeModalButton"
              onClick={() => closeModal(false)}
            >
              <Image src="/assets/Vector_s.svg" alt="close-button" mr="10px" />
              Close
            </Button>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default DeleteTaskModal;
