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
    <Modal isOpen={isAddModalOpen} onClose={onAddModalClose} isCentered>
      <ModalOverlay />
      <ModalContent w="466px" h="181px" borderRadius="10px" bg="white">
        <ModalHeader
          borderRadius="10px 10px 0 0"
          bg="linear-gradient(#F5EDFD,#FEEFF5)"
          h='48px'
        >
          <Heading variant="modalHeaderContentHeading" >
            Create task
          </Heading>
        </ModalHeader>
        <ModalBody p="15px 25px 5px 25px">
          <Flex gap="10px">
            <Input
              isInvalid={isError}
              h="40px"
              w="270px"
              bg="#F3F3F3"
              borderRadius="10px"
              pl="27px"
              placeholder="Enter text..."
              onChange={handleInputChange}
              value={task}
              autoFocus={true}
              _focus={{border: "1px solid rgba(147, 51, 234, 0.06)"}}
              onKeyDown={handleKeyDown}
            ></Input>
            <Input
              // variant="timeEndTaskInput"
              type="date"
              w="40%"
              bg="#F3F3F3"
              borderRadius="10px"
              _focus={{border: "1px solid rgba(147, 51, 234, 0.06)"}}
              onChange={handleTimeChange}
            />
          </Flex>
        </ModalBody>
        <ModalFooter py="17px">
          <Container variant="modalFooterContainer" >
            <Button
              leftIcon={<CheckCircleIcon boxSize="20px" />}
              onClick={saveTask}
              variant='saveTaskButton'
            >
              Save Task
            </Button>
            <Button
              onClick={onAddModalClose}
              variant='closeModalButton'
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

export default AddTaskModal;
