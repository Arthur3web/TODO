import React from "react";
import {
  Container,
  Text,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Checkbox,
} from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";

const Task = ({
  task,
  toggleTaskStatus,
  handleEditTask,
  setClickEditTaskButton,
  setClickDeleteTaskButton,
  handleDeleteTask,
}) => {
  //Деструктуризация

  const handleOpenedModalEditTask = () => {
    handleEditTask(task);
    setClickEditTaskButton(true);
  };
  const handleOpenedModalDeleteTask = () => {
    handleDeleteTask(task);
    setClickDeleteTaskButton(true);
  };

  return (
    <Container variant="taskContainer" >
      <Container variant="taskContentContainer">
        <Container variant="taskContentTitleContainer">
          <Checkbox
            border="gray"
            colorScheme="purple"
            isChecked={task.isCompleted}
            onChange={() => toggleTaskStatus(task.id)}
          />
          <Text
            className={task.isCompleted ? "crossText" : "listItem"}
            variant='taskContentTitleContainerText'
            isTruncated
          >
            {task.title}
          </Text>
        </Container>
        <Container variant='taskContentDateContainer'>
          <Text
            variant='taskContentDateContainerText'
          >
            {/* .toLocaleDateString() */}
            {task.timeEnd.toLocaleDateString()}
          </Text>

          <Menu placement="bottom-end">
            <MenuButton bg="inherit" size="xs" aria-label="Options">
              <Image boxSize="13px" src="/assets/Vector_3.svg" alt="Vector_3" />
            </MenuButton>
            <MenuList
              borderRadius="10px"
              border="1px solid #7D40FF"
              minW="53px"
              h="24px"
              m="1.5px 0 0 0"
              py='4px'
            >
              <Container variant="menuOperationTaskContainer" >
                <MenuItem boxSize='15px' p={0} onClick={handleOpenedModalEditTask}>
                  <EditIcon color="#8687E7" />
                </MenuItem>
                <MenuItem boxSize='15px' p={0} onClick={handleOpenedModalDeleteTask}>
                  <DeleteIcon color="#F56497" />
                </MenuItem>
              </Container>
            </MenuList>
          </Menu>
        </Container>
      </Container>
    </Container>
  );
};

export default Task;
