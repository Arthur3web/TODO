import React, { useEffect, useState } from "react";
import {
  Container,
  Text,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Checkbox,
  Flex,
} from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { changeTask } from "../http/taskAPI";
import DeleteTaskModal from "../components/DeleteTaskModal.js";
import EditTaskModal from "./EditTaskModal.js";

const Task = ({ task, width, setTasks, filterTasks }) => {
  const [isClickEditTaskButton, setClickEditTaskButton] = useState(false);
  const [isClickDeleteTaskButton, setClickDeleteTaskButton] = useState(false);
  
  const toggleTaskStatus = async () => {
    try {
      const data = await changeTask(task.id, { iscompleted: !task.iscompleted });
      setTasks(prevTasks =>
        prevTasks.map(prevTask =>
          prevTask.id === task.id ? { ...prevTask, iscompleted: !prevTask.iscompleted } : prevTask
        )
      );
      console.log(task.iscompleted)
      filterTasks()
    } catch (error) {
      console.error("Error updating task status:", error);
    }
  };

  const formatDateTime = (dateTimeString) => {
    const options = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    };
    const dateTime = new Date(dateTimeString);
    return dateTime.toLocaleString("en-US", options);
  };

  const handleOpenedModalEditTask = () => {
    setClickEditTaskButton(true);
  };

  const handleOpenedModalDeleteTask = () => {
    setClickDeleteTaskButton(true);
  };
  // console.log(task)
 
  return (
    <Flex className="task">
      <Flex className="task-content">
        <Flex className="task-content-title">
          <Checkbox
            variant="circular"
            border="gray"
            colorScheme="purple"
            key={task.id}
            checked={task.iscompleted}
            onChange={toggleTaskStatus}
          />
          <Text
            className={task.iscompleted ? "crossText" : "listItem"}
            variant="taskContentTitleContainerText"
            isTruncated
          >
            {task.title}
          </Text>
        </Flex>
        {width >= 480 ? (
          <Container variant="taskContentDateContainer">
            {" "}
            <Text
              variant="taskContentDateContainerText"
              className={task.iscompleted ? "crossText" : "listItem"}
            >
              {formatDateTime(task.timeend)}
            </Text>
            <Menu variant="parametersTask" placement="bottom-end">
              <MenuButton>
                <Image
                  boxSize="13px"
                  src="/assets/Vector_3.svg"
                  alt="Vector_3"
                />
              </MenuButton>
              <MenuList>
                <Container variant="menuOperationTaskContainer">
                  <MenuItem onClick={() => handleOpenedModalEditTask(task.id)}>
                    <EditIcon color="#8687E7" />
                  </MenuItem>
                  <MenuItem
                    onClick={() => handleOpenedModalDeleteTask(task.id)}
                  >
                    <DeleteIcon color="#F56497" />
                  </MenuItem>
                </Container>
              </MenuList>
            </Menu>
          </Container>
        ) : (
          <Menu variant="parametersTask" placement="bottom-end">
            <MenuButton>
              <Image boxSize="13px" src="/assets/Vector_3.svg" alt="Vector_3" />
            </MenuButton>
            <MenuList>
              <Container variant="menuOperationTaskContainer">
                <MenuItem onClick={() => handleOpenedModalEditTask(task.id)}>
                  <EditIcon color="#8687E7" />
                </MenuItem>
                <MenuItem onClick={() => handleOpenedModalDeleteTask(task.id)}>
                  <DeleteIcon color="#F56497" />
                </MenuItem>
              </Container>
            </MenuList>
          </Menu>
        )}
      </Flex>
      <EditTaskModal
        isClickEditTaskButton={isClickEditTaskButton}
        closeModal={setClickEditTaskButton}
        task={task}
        setTasks={setTasks}
        filterTasks={filterTasks}
      />
      <DeleteTaskModal
        isClickDeleteTaskButton={isClickDeleteTaskButton}
        closeModal={setClickDeleteTaskButton}
        task={task}
        setTasks={setTasks}
        filterTasks={filterTasks}
      />
    </Flex>
  );
};

export default Task;
