import React, { useState } from "react";
import {
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
  newEditTask,
  isClickEditTaskButton,
  closeModal,
}) {
  const [note, setNote] = useState(newEditTask.title);
  const [noteTime, setNoteTime] = useState(new Date(newEditTask.timeEnd));
  const isError = note === "";
  function handleTaskEdit(id) {
    if (note !== "") {
      editTask(newEditTask.id, note, new Date(noteTime));
      closeModal(false);
      // console.log(newEditTask);
    }
  }

  function handleInputChangeEditTask(e) {
    setNote(e.target.value);
  }
  function handleInputChangeEditTaskTime(e) {
    setNoteTime(new Date(e.target.value));
  }
  const handleKeyDown = (event) => {
    //настройка закрытия модального окна при нажатии на клавиши Enter и Esc
    if (event.key === "Enter") {
      if (note !== "") {
        editTask(newEditTask.id, note, new Date(noteTime));
        closeModal(false);
      }
    }
    if (event.key === "Escape") {
      closeModal(false);
    }
  };
  console.log(noteTime);
  return (
    <Modal
      isOpen={isClickEditTaskButton}
      onClose={() => closeModal(false)}
      variant="taskModal"
      isCentered
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Heading variant="modalHeaderContentHeading">Edit task</Heading>
        </ModalHeader>
        <ModalBody>
          <Container variant="taskModalBodyContainer">
            <Input
              isInvalid={isError}
              variant="titleTaskInput"
              value={note}
              onChange={handleInputChangeEditTask}
              onKeyDown={handleKeyDown}
            />
            <Input
              type="datetime-local"
              className="time-end"
              value={noteTime.toLocaleDateString("en-ca")}
              onChange={handleInputChangeEditTaskTime}
            />
          </Container>
        </ModalBody>
        <ModalFooter>
          <Container variant="modalFooterContainer">
            <Button
              leftIcon={<CheckCircleIcon fontSize="larger" />}
              onClick={() => handleTaskEdit(newEditTask.id, note)}
              variant="saveTaskButton"
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
