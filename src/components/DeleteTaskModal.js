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
import { deleteTask } from "../http/taskAPI";

function DeleteTaskModal({
  onDeleteTaskModalClose,
  isDeleteTaskModalOpen,
  task,
  setTasks,
  filterTasks
}) {
  const handleDeleteTask = async () => {
    try {
      const data = await deleteTask(task.id);
      setTasks(data.tasks);
      onDeleteTaskModalClose();
      filterTasks()
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <Modal
      variant='deleteTaskModal'
      isOpen={isDeleteTaskModalOpen}
      onClose={onDeleteTaskModalClose}
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
              onClick={handleDeleteTask}
              variant="deleteTaskButton"
            >
              Delete
            </Button>
            <Button
              variant="closeModalButton"
              onClick={onDeleteTaskModalClose}
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
