import React, { useState } from "react";
import {
  Button,
  Flex,
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
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

function AddTaskModal({
  isAddModalOpen,
  onAddModalClose,
  handleInputChange,
  handleTimeChange,
  task,
  addTask,
  setTaskNew,
}) {
  const [value, setValue] = useState("");
  const isError = task === "";
  function saveTask() {
    if (task !== "") {
      addTask(value);
      setValue("");
      onAddModalClose(true);
      // console.log(task)
    }
  }

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      if (task !== "") {
        addTask(value);
        event.preventDefault();
        onAddModalClose(true);
      }
    }
    if (event.key === "Escape") {
      onAddModalClose(true);
      setTaskNew({
        title: "",
        timeEnd: "",
      });
    }
  };

  return (
    <Modal isOpen={isAddModalOpen} onClose={onAddModalClose} variant="taskModal" isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Heading variant="modalHeaderContentHeading">Create task</Heading>
        </ModalHeader>
        <ModalBody>
          <Flex gap="10px">
            <Input
              isInvalid={isError}
              variant="titleTaskInput"
              placeholder="Enter text..."
              onChange={handleInputChange}
              value={task}
              onKeyDown={handleKeyDown}
            ></Input>
            <Input
              variant="timeEndTaskInput"
              type="date"
              onChange={handleTimeChange}
            />
          </Flex>
        </ModalBody>
        <ModalFooter>
          <Container variant="modalFooterContainer">
            <Button
              leftIcon={<CheckCircleIcon boxSize="20px" />}
              onClick={saveTask}
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
