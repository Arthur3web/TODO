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
  useToast,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { changeTask } from "../http/taskAPI";

function EditTaskModal({
  onEditTaskModalClose,
  isEditTaskModalOpen,
  task,
  setTasks,
  filterTasks
}) {
  const [note, setNote] = useState(task.title);
  const [noteTime, setNoteTime] = useState(task.timeend); 
  const [isError, setIsError] = useState(false);
  const toast = useToast();

  useEffect(() => {
    setIsError(note === "");
  }, [note]);

  useEffect(() => {
    if (!isEditTaskModalOpen) {
      setNote(task.title);
      setNoteTime(task.timeend);
      setIsError(false);
    }
  }, [isEditTaskModalOpen, task]);
  
  const editTask = async () => {
    try {
      const data = await changeTask(task.id, { title: note, timeend: noteTime }); // Изменяем задачу на сервере
      setTasks(prevTasks =>
        prevTasks.map(prevTask =>
          prevTask.id === task.id ? { ...prevTask, data } : prevTask
        )
      );
      onEditTaskModalClose(); 
      console.log(data);
      filterTasks()
    } catch (error) {
      toast({
        title: "Edit task error",
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
      isOpen={isEditTaskModalOpen}
      onClose={onEditTaskModalClose}
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
              variant='timeEndTaskInput'
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
              onClick={onEditTaskModalClose}
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
