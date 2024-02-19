import React, { useState } from "react";

import {
  Button,
  Text,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Heading,
  Input,
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalContent,
  ModalBody,
  ModalFooter,
  Image,
} from "@chakra-ui/react";
import { CheckCircleIcon, CloseIcon, AddIcon } from "@chakra-ui/icons";
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
  const [value, setValue] = useState("");

  function saveTask() {
    if (task !== "") {
      addTask(value);
      setValue("");
      onAddModalClose(true);
    }
  }

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      if (task !== "") {
        addTask(value);
        event.preventDefault();
        onAddModalClose(true);
      }
    }
    if (event.key === "Escape") {
      onAddModalClose(true);
      setTaskNew({
        title: "",
        timeEnd: "",
      });
    }
  };

  return (
    <Flex flexDirection="column" justifyContent="space-between">
      <Flex flexDirection="column" gap="21px">
        {sideBarFilter.map((item) => (
          <Menu key={item.id}>
            <MenuButton
              w="185px"
              h="40px"
              borderRadius="10px"
              pl="13px"
              bg={
                isTodaySelected && item.id === "Today"
                  ? "rgba(147, 51, 234, 0.25)"
                  : !isTodaySelected &&
                    item.id === "All" &&
                    (selectedStatus === "All", "Done", "Undone")
                  ? "rgba(147, 51, 234, 0.25)"
                  : "inherit"
              }
              _hover={{ bg: "rgba(147, 51, 234, 0.25)" }}
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
                bg="#d3c9fc"
                border="0"
                minW="185px"
                // gap="10px"
              >
                {statusList.map((el, ind) => (
                  <MenuItem
                    key={el + ind}
                    bg={el === selectedStatus ? "#C6ABF9" : "inherit"}
                    gap="10px"
                    w="171px"
                    h="40px"
                    m="0 0 0 7px"
                    borderRadius="10px" //отступы меню
                    _hover={{ bg: "rgba(147, 51, 234, 0.25)" }}
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
        // variant='searchItem'
        w="185px"
        h="40px"
        borderRadius="10px"
        bg="rgba(147, 51, 234, 0.06)"
        _hover={{ bg: "rgba(147, 51, 234, 0.25)" }}
        _active={{
          bg: "rgba(147, 51, 234, 0.25)",
          color: "#9333EA",
          transform: "scale(0.9)",
        }}
        transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
        _focus={{
          boxShadow: "0 0 1px 2px #9333EA, 0 1px 1px rgba(0, 0, 0, .15)",
          bg: "rgba(147, 51, 234, 0.25",
        }}
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
        handleKeyDown={handleKeyDown}
        handleTimeChange={handleTimeChange}
        saveTask={saveTask}
        task={task}
      />
    </Flex>
  );
}

export default Sidebar;
