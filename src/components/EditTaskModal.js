import React, { useEffect, useState } from "react";
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
import { change_task } from "../http/taskAPI";

function EditTaskModal({
  isClickEditTaskButton,
  closeModal,
  task
}) {
  const [note, setNote] = useState(task.title); // Состояние для заголовка задачи
  const [noteTime, setNoteTime] = useState(task.timeend); // Состояние для времени окончания задачи
  const [isError, setIsError] = useState(false);

  // Обновление состояния isError при изменении note
  useEffect(() => {
    setIsError(note === "");
  }, [note]);

  const editTask = async () => {
    try {
      const data = await change_task(task.id, { title: note, timeend: noteTime }); // Изменяем задачу на сервере
      closeModal(); 
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };


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
              onChange={(e) => setNote(e.target.value)}
            />
            <Input
              type="datetime-local"
              className="time-end"
              value={noteTime}
              onChange={(e) => setNoteTime(e.target.value)}
            />
          </Container>
        </ModalBody>
        <ModalFooter>
          <Container variant="modalFooterContainer">
            <Button
              leftIcon={<CheckCircleIcon fontSize="larger" />}
              onClick={editTask}
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
