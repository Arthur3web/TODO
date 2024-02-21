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
  Container,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

function EditTaskModal({
  editTask,
  isEditingTask,
  isClickEditTaskButton,
  closeModal,
}) {

  const [note, setNote] = useState(isEditingTask.title);
  const [noteTime, setNoteTime] = useState(new Date(isEditingTask.timeEnd));
  const isError = note === "";
  function saveEditTask(id) {
    if (note !== "") {
      editTask(isEditingTask.id, note, new Date(noteTime));
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
        editTask(isEditingTask.id, note, new Date(noteTime));
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
          <Heading variant="modalHeaderContentHeading" >
            Edit task
          </Heading>
        </ModalHeader>
        <ModalBody p="15px 25px 5px 25px">
          <Flex gap="10px">
            <Input
              isInvalid={isError}
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
          <Container variant="modalFooterContainer" >
            <Button
              leftIcon={<CheckCircleIcon fontSize="larger" />}
              onClick={() => saveEditTask(isEditingTask.id, note)}
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
          </Container>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default EditTaskModal;
