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
  Flex,
} from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";

const Task = ({
  task,
  toggleTaskStatus,
  handleEditTask,
  setClickEditTaskButton,
  setClickDeleteTaskButton,
  handleDeleteTask,
  width,
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

  console.log("task.timeEnd", task.timeEnd);
  return (
    <Flex className="task" /*variant="taskContainer"*/>
      <Flex className="task-content">
        <Container variant="taskContentTitleContainer">
          <Checkbox
            variant="circular"
            border="gray"
            colorScheme="purple"
            isChecked={task.isCompleted}
            onChange={() => toggleTaskStatus(task.id)}
          />
          <Text
            className={task.isCompleted ? "crossText" : "listItem"}
            variant="taskContentTitleContainerText"
            isTruncated
          >
            {task.title}
          </Text>
        </Container>
          {width >= 480 ? 
          (<Container variant="taskContentDateContainer"> {/*проверить*/}
            <Text
              variant="taskContentDateContainerText"
              className={task.isCompleted ? "crossText" : "listItem"}
            >
              {task.timeEnd.toLocaleDateString("en-ca")}
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
                  <MenuItem onClick={handleOpenedModalEditTask}>
                    <EditIcon color="#8687E7" />
                  </MenuItem>
                  <MenuItem onClick={handleOpenedModalDeleteTask}>
                    <DeleteIcon color="#F56497" />
                  </MenuItem>
                </Container>
              </MenuList>
            </Menu>
          </Container>) : 
          ( <Menu variant="parametersTask" placement="bottom-end">
              <MenuButton>
                <Image
                  boxSize="13px"
                  src="/assets/Vector_3.svg"
                  alt="Vector_3"
                />
              </MenuButton>
              <MenuList>
                <Container variant="menuOperationTaskContainer">
                  <MenuItem onClick={handleOpenedModalEditTask}>
                    <EditIcon color="#8687E7" />
                  </MenuItem>
                  <MenuItem onClick={handleOpenedModalDeleteTask}>
                    <DeleteIcon color="#F56497" />
                  </MenuItem>
                </Container>
              </MenuList>
            </Menu>)
}
      </Flex>
    </Flex>
  );
};

export default Task;
