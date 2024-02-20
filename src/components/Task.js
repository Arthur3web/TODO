import React from "react";
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
                <MenuItem w="50%" onClick={handleOpenedModalEditTask}>
                  <EditIcon color="gray.600" />
                </MenuItem>
                <MenuItem w="50%" onClick={handleOpenedModalDeleteTask}>
                  <DeleteIcon color="red.600" />
                </MenuItem>
              </Flex>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Task;
