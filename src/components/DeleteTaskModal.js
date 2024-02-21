import React from "react";
import {
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
  Container,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

function DeleteTaskModal({
  isClickDeleteTaskButton,
  deleteTask,
  closeModal,
  isDeletedTask,
}) {
  function deletingTask(id) {
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
          <Heading variant="modalHeaderContentHeading" >
            Delete task
          </Heading>
        </ModalHeader>
        <ModalBody >
          <Container variant="deleteTaskModalContentContainer">
            <Text
              variant='deleteTaskModalContentContainerText'
            >
              Are you sure about deleting this task?
            </Text>
          </Container>
        </ModalBody>
        <ModalFooter h="40px" mb="15px">
          <Container variant="modalFooterContainer" >
            <Button
              leftIcon={<DeleteIcon fontSize="larger" />}
              onClick={() => deletingTask(isDeletedTask.id)}
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
          </Container>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default DeleteTaskModal;
