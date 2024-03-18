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
import { delete_task } from "../http/taskAPI";

function DeleteTaskModal({
  isClickDeleteTaskButton,
  closeModal,
  task,
}) {
  const deleteTask = async () => {
    try {
      await delete_task(task.id); // Вызываем функцию удаления задачи из API
      closeModal(false); // Закрываем модальное окно после успешного удаления задачи
    } catch (error) {
      console.error("Error deleting task:", error);
      // Обработка ошибки удаления задачи
    }
  };

  return (
    <Modal
      variant='deleteTaskModal'
      isOpen={isClickDeleteTaskButton}
      onClose={() => closeModal(false)}
      isCentered
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Heading variant="modalHeaderContentHeading">Delete task</Heading>
        </ModalHeader>
        <ModalBody>
          <Container variant="deleteTaskModalContentContainer">
            <Text variant="deleteTaskModalContentContainerText">
              Are you sure about deleting this task?
            </Text>
          </Container>
        </ModalBody>
        <ModalFooter>
          <Container variant="modalFooterContainer">
            <Button
              leftIcon={<DeleteIcon fontSize="larger" />}
              onClick={deleteTask}
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
