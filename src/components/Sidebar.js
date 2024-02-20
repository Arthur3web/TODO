import React from "react";

import {
  Button,
  Text,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Image,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import AddTaskModal from "./AddTaskModal";

function Sidebar({
  task,
  addTask,
  taskList,
  setTodaySelected,
  isTodaySelected,
  isDateSelected,
  setDateSelected,
  setTaskNew,
  handleInputChange,
  handleFilterChange,
  handleTimeChange,
  onAddModalOpen,
  onAddModalClose,
  isAddModalOpen,
  statusList,
  sideBarFilter,
  selectedStatus,
  setSelectedStatus,
  onToggle,
}) {
  const handleOpenedFilter = (name) => {
    //функция вызова действий при нажатии на элементы sidebar
    if (name == "Today") {
      setTodaySelected(!isTodaySelected);
      console.log(isTodaySelected);
      setSelectedStatus("All");
    } else if (name == "Date") {
      setDateSelected(!isDateSelected);
      taskList.sort(function (a, b) {
        if (isDateSelected) {
          return new Date(a.timeEnd) - new Date(b.timeEnd);
        } else {
          return new Date(b.timeEnd) - new Date(a.timeEnd);
        }
      });
      console.log(taskList);
    }
  };

  return (
    <Flex flexDirection="column" justifyContent="space-between">
      <Flex flexDirection="column" gap="21px">
        {sideBarFilter.map((item) => (
          <Menu key={item.id}>
            <MenuButton
              variant="sideBarButton"
              bg={
                isTodaySelected && item.id === "Today"
                  ? "#d3c8fc"
                  : !isTodaySelected &&
                    item.id === "All" &&
                    (selectedStatus === "All", "Done", "Undone")
                  ? "#d3c8fc"
                  : "inherit"
              }
              onClick={() => handleOpenedFilter(item.name)}
            >
              <Flex alignItems="center" gap="10px">
                <Flex
                  w="27px"
                  h="27px"
                  alignItems="center"
                  justifyContent="center"
                >
                  {item.path}
                </Flex>
                <Text
                  fontFamily="Roboto"
                  fontSize="16px"
                  fontWeight="400"
                  lineHeight="18.75px"
                  color={
                    isTodaySelected && item.id === "Today"
                      ? "#9333EA"
                      : !isTodaySelected &&
                        item.id === "All" &&
                        (selectedStatus === "All", "Done", "Undone")
                      ? "#9333EA"
                      : "#404040"
                  }
                >
                  {item.name}
                </Text>
              </Flex>
            </MenuButton>
            {item.name === selectedStatus && onToggle && (
              <MenuList
                bg="#d3c8fb"
                border="0"
                minW="185px"
                // gap="10px"
              >
                {statusList.map((el, ind) => (
                  <MenuItem
                    key={el + ind}
                    bg={el === selectedStatus ? "#cfc0fc" : "inherit"}
                    gap="10px"
                    w="171px"
                    h="40px"
                    m="0 0 0 7px"
                    borderRadius="10px" //отступы меню
                    _hover={{ bg: "#cfc0fc" }}
                    onClick={() => handleFilterChange(el)}
                  >
                    <CheckCircleIcon
                      color={el === selectedStatus ? "#9333EA" : "#6B7280"}
                      fontSize="20px"
                    />
                    <Text
                      fontFamily="Roboto"
                      fontSize="16px"
                      fontWeight="400"
                      lineHeight="18.75px"
                      color={el === selectedStatus ? "#9333EA" : "#404040"}
                    >
                      {el}
                    </Text>
                  </MenuItem>
                ))}
              </MenuList>
            )}
          </Menu>
        ))}
      </Flex>
      <Button
        variant='addTaskButton'
        onClick={onAddModalOpen}
      >
        <Image src="/assets/Vector_2.svg" alt="add-task-button" mr="10px" />
        <Text
          w="63px"
          h="19px"
          fontFamily="Roboto"
          fontSize="16px"
          fontWeight="400"
          lineHeight="18.75px"
          color="#9333EA"
        >
          AddTask
        </Text>
      </Button>
      <AddTaskModal
        isAddModalOpen={isAddModalOpen}
        onAddModalClose={onAddModalClose}
        handleInputChange={handleInputChange}
        handleTimeChange={handleTimeChange}
        task={task}
        addTask={addTask}
        setTaskNew={setTaskNew}
      />
    </Flex>
  );
}

export default Sidebar;
