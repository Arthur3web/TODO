import React, { useContext, useState } from "react";
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
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { create_task } from "../http/taskAPI";
import { Context } from "..";

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

  const { title, time_end} = useContext(Context);

  const createTask = async() => {
    try {
      const data = await create_task(title, time_end);
      console.log(data)
    } catch (e) {
      console.error(e)
      console.log(e)
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
        time_end: "",
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
              onChange={handleInputChange}
              value={task}
              onKeyDown={handleKeyDown}
            />
            <Input
            // width={'auto'}
              className="time-end"
              // variant='timeEndTaskInput'
              type="datetime-local"
              onChange={handleTimeChange}
            />
          </Flex>
        </ModalBody>
        <ModalFooter>
          <Container variant="modalFooterContainer">
            <Button
              leftIcon={<CheckCircleIcon boxSize="20px" />}
              onClick={createTask}
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
