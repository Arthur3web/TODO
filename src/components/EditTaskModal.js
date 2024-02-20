import React, { useState } from "react";
import {
  Flex,
  Image,
  Input,
  Heading,
  Button,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  ModalBody,
  ModalHeader,
  Modal,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

function EditTaskModal({
  saveEditTask,
  isEditingTask,
  isClickEditTaskButton,
  closeModal,
}) {

  const [note, setNote] = useState(isEditingTask.title);
  const [noteTime, setNoteTime] = useState(new Date(isEditingTask.timeEnd));
  
  function editTask(id) {
    if (note !== "") {
      saveEditTask(isEditingTask.id, note, new Date(noteTime));
      closeModal(false)
      console.log(isEditingTask);
    }
  }
  function handleInputChangeEditTask(e) {
    setNote(e.target.value);
  }
  function handleInputChangeEditTaskTime(e) {
    setNoteTime(e.target.value);
  }
  const handleKeyDown = (event) => {
    //настройка закрытия модального окна при нажатии на клавиши Enter и Esc
    if (event.key === "Enter") {
      if (note !== "") {
        saveEditTask(isEditingTask.id, note, new Date(noteTime));
        closeModal(false)
      }
    }
    if (event.key === "Escape") {
      closeModal(false)
    }
  };

  return (
    <Modal isOpen={isClickEditTaskButton} onClose={() => closeModal(false)} isCentered>
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
            Edit task
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
              value={note}
              onChange={handleInputChangeEditTask}
              autoFocus={true}
              onKeyDown={handleKeyDown}
              required
            />
            <Input
              type="date"
              w="40%"
              bg="#F3F3F3"
              borderRadius="10px"
              border="1px solid #6B7280"
              value={noteTime}
              onChange={handleInputChangeEditTaskTime}
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
              leftIcon={<CheckCircleIcon fontSize="larger" />}
              onClick={() => editTask(isEditingTask.id, note)}
              variant='saveTaskButton'
            >
              Save
            </Button>
            <Button
              onClick={() => closeModal(false)}
              variant="closeModalButton"
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

export default EditTaskModal;
