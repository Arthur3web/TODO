import React, { useEffect, useState } from "react";
import {
  Button,
  Heading,
  Input,
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalContent,
  ModalBody,
  ModalFooter,
  Image,
  Container,
  Flex,
  useToast,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { createTask } from "../http/taskAPI";

function AddTaskModal({
  isAddModalOpen,
  onAddModalClose,
  setTasks,
  filterTasks,
}) {
  const [title, setTitle] = useState("");
  const [timeend, setTimeend] = useState("");
  const [isError, setIsError] = useState(false);
  const toast = useToast();

  useEffect(() => {
    setIsError(title === "");
  }, [title]);

  const handleAddTask = async () => {
    try {
      const data = await createTask(title, timeend); 
      setTasks(data.tasks); 
      onAddModalClose(); 
      console.log(data);
      filterTasks()
    } catch (error) {
      toast({
        title: "Creat task error",
        description: error.response.data.message,
        status: "error",
        position: "top",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Modal
      isOpen={isAddModalOpen}
      onClose={onAddModalClose}
      variant="taskModal"
      isCentered
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Heading variant="modalHeaderContentHeading">Create task</Heading>
        </ModalHeader>
        <ModalBody>
          <Flex className="modal-body">
            <Input
              isInvalid={isError}
              variant="titleTaskInput"
              placeholder="Enter text..."
              onChange={(e) => setTitle(e.target.value)}
            />
            <Input
              className="time-end"
              variant='timeEndTaskInput'
              type="datetime-local"
              onChange={(e) => setTimeend(e.target.value)}
            />
          </Flex>
        </ModalBody>
        <ModalFooter>
          <Container variant="modalFooterContainer">
            <Button
              leftIcon={<CheckCircleIcon boxSize="20px" />}
              onClick={handleAddTask}
              variant="saveTaskButton"
            >
              Save Task
            </Button>
            <Button onClick={onAddModalClose} variant="closeModalButton">
              <Image src="/assets/Vector_s.svg" alt="close-button" mr="10px" />
              Close
            </Button>
          </Container>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default AddTaskModal;
