import React, { useState } from "react";
import {
  Container,
  Flex,
  Text,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Checkbox,
} from "@chakra-ui/react";
import {
  EditIcon,
  DeleteIcon,
} from "@chakra-ui/icons";
import EditTaskModal from "./EditTaskModal";
import DeleteTaskModal from "./DeleteTaskModal";

const Task = ({
  task,
  deleteTask,
  toggleTaskStatus,
  saveEditTask,
  onDeleteModalOpen,
  onDeleteModalClose,
  isDeleteModalOpen,
  onEditModalOpen,
  onEditModalClose,
  isEditModalOpen,
}) => {
  //Деструктуризация
  const [note, setNote] = useState(task.title);
  const [noteTime, setNoteTime] = useState(new Date(task.timeEnd));

  function handleInputChangeEditTask(e) {
    setNote(e.target.value);
  }
  function handleInputChangeEditTaskTime(e) {
    setNoteTime(e.target.value);
  }

  function editTask(id) {
    if (note !== "") {
      saveEditTask(task.id, note, new Date(noteTime));
      onEditModalClose(true);
      console.log(task);
    }
  }

  function deleteTaskButton(id) {
    deleteTask(id);
    onDeleteModalClose(true);
  }

  const handleKeyDown = (event) => {
    //настройка закрытия модального окна при нажатии на клавиши Enter и Esc
    if (event.key === "Enter") {
      if (note !== "") {
        saveEditTask(task.id, note, new Date(noteTime));
        onDeleteModalClose(true);
        onEditModalClose(true);
      }
    }
    if (event.key === "Escape") {
      onDeleteModalClose(true);
      onEditModalClose(true);
    }
  };

  return (
    <Container
      maxW="428px"
      bg="purple.100"
      borderRadius="10px"
      mb="10px"
      _hover={{ bg: "purple.200" }}
    >
      <Flex gap="10px" alignItems="center" justifyContent="space-between">
        <Flex gap="10px" alignItems="center">
          <Checkbox
            border="gray"
            colorScheme="purple"
            isChecked={task.isCompleted}
            onChange={() => toggleTaskStatus(task.id)}
          />
          <Text
            className={task.isCompleted ? "crossText" : "listItem"}
            padding="2"
            maxW="257px"
            bg="inherit"
            fontSize="14px"
            fontWeight="400"
            fontFamily="Roboto"
            lineHeight="18.75px"
            isTruncated
          >
            {task.title}
          </Text>
        </Flex>
        <Flex alignItems="center" gap="10px">
          <Text
            fontSize="14px"
            color="#6b7280"
            fontFamily="Roboto"
            fontWeight="400"
            lineHeight="16.41px"
          >
            {task.timeEnd.toLocaleDateString()}
          </Text>

          <Menu>
            <MenuButton bg="inherit" size="xs" aria-label="Options">
              <Image boxSize="13px" src="/assets/Vector_3.svg" alt="Vector_3" />
            </MenuButton>
            <MenuList
              borderRadius="10px"
              border="1px solid #9333EA"
              bg="white"
              size="xs"
              minW="100%"
              m="5px 0 0 -53px"
            >
              <Flex>
                <MenuItem w="50%" onClick={onEditModalOpen}>
                  <EditIcon color="gray.600" />
                </MenuItem>
                <EditTaskModal 
                isEditModalOpen={isEditModalOpen}
                onEditModalClose={onEditModalClose}
                handleInputChangeEditTask={handleInputChangeEditTask}
                handleInputChangeEditTaskTime={handleInputChangeEditTaskTime}
                handleKeyDown={handleKeyDown}
                noteTime={noteTime}
                editTask={editTask}
                task={task}
                note={note}
                />
                <MenuItem w="50%" onClick={onDeleteModalOpen}>
                  <DeleteIcon color="red.600" />
                </MenuItem>
                <DeleteTaskModal 
                isDeleteModalOpen={isDeleteModalOpen}
                onDeleteModalClose={onDeleteModalClose}
                task={task}
                deleteTaskButton={deleteTaskButton}
                />
              </Flex>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Task;
