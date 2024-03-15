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
  width,
}) => {
  
  return (
    <Flex className="task">
      <Flex className="task-content">
        <Flex className="task-content-title">
          <Checkbox
            variant="circular"
            border="gray"
            colorScheme="purple"
            isChecked={task.is_completed}
            onChange={() => toggleTaskStatus(task.id)}
          />
          <Text
            className={task.is_completed ? "crossText" : "listItem"}
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
              className={task.is_completed ? "crossText" : "listItem"}
            >
              {task.time_end/*.toLocaleDateString("en-ca")*/}
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
                  <MenuItem /*onClick={handleOpenedModalEditTask}*/>
                    <EditIcon color="#8687E7" />
                  </MenuItem>
                  <MenuItem /*onClick={handleOpenedModalDeleteTask}*/>
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
                <MenuItem /*onClick={handleOpenedModalEditTask}*/>
                  <EditIcon color="#8687E7" />
                </MenuItem>
                <MenuItem /*onClick={handleOpenedModalDeleteTask}*/>
                  <DeleteIcon color="#F56497" />
                </MenuItem>
              </Container>
            </MenuList>
          </Menu>
        )}
      </Flex>
    </Flex>
  );
};

export default Task;
