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
          h="48px"
        >
          <Heading
            fontFamily="Roboto"
            fontSize="20px"
            fontWeight="700"
            lineHeight="23.44px"
            color="#9333EA"
          >
            Create task
          </Heading>
        </ModalHeader>
        <ModalBody p="15px 25px 5px 25px">
          <Flex gap="10px">
            <Input
              h="40px"
              w="270px"
              border="1px solid #6B7280"
              bg="#F3F3F3"
              borderRadius="10px"
              pl="27px"
              placeholder="Enter text..."
              onChange={handleInputChange}
              value={task}
              autoFocus={true}
              onKeyDown={handleKeyDown}
              isRequired
            ></Input>
            <Input
              type="date"
              w="40%"
              bg="#F3F3F3"
              borderRadius="10px"
              border="1px solid #6B7280"
              onChange={handleTimeChange}
            />
          </Flex>
        </ModalBody>
        <ModalFooter py="17px">
          <Flex
            alignItems="center"
            justifyContent="space-between"
            width="422px"
          >
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
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default AddTaskModal;
