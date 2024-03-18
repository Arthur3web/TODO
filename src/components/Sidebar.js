import React, { useEffect } from "react";

import {
  Button,
  Text,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Image,
  Container,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import AddTaskModal from "./AddTaskModal";
import { getAll } from "../http/taskAPI";
import { statusList } from "../utils/consts";

function Sidebar({
  setTodaySelected,
  isTodaySelected,
  isDateSelected,
  setDateSelected,
  handleFilterChange,
  onAddModalOpen,
  onAddModalClose,
  isAddModalOpen,
  sideBarFilter,
  selectedStatus,
  setSelectedStatus,
  onToggle,
  setTasks,
  fetchData
}) {
  const handleOpenedFilter = async (name) => {
    if (name === "Today") {
      setSelectedStatus("All");
      setTodaySelected(!isTodaySelected);
    } else if (name === "Date") {
      setDateSelected(!isDateSelected);
    } else {
      setSelectedStatus(name);
    }
  };
 
  return (
    <Container variant="sideBarContainer">
      <Container variant="sideBarContentContainer">
        {sideBarFilter.map((item) => (
          <Menu key={item.id} variant="sideBar">
            <MenuButton
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
              <Container variant="sideBarFilterButtonContentContainer">
                <Flex
                  w="27px"
                  h="27px"
                  alignItems="center"
                  justifyContent="center"
                >
                  {item.path}
                </Flex>
                <Text
                  variant="sideBarFilterContentText"
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
              </Container>
            </MenuButton>
            {item.name === selectedStatus && onToggle && (
              <MenuList>
                {statusList.map((el, ind) => (
                  <MenuItem
                    key={el + ind}
                    bg={el === selectedStatus ? "#e2d9ff" : "inherit"}
                    onClick={() => handleFilterChange(el)}
                  >
                    <CheckCircleIcon
                      color={el === selectedStatus ? "#9333EA" : "#6B7280"}
                      fontSize="20px"
                    />
                    <Text
                      variant="sideBarFilterContentText"
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
      </Container>
      <Button variant="addTaskButton" onClick={onAddModalOpen}>
        <Image src="/assets/Vector_2.svg" alt="add-task-button" mr="10px" />
        <Text variant="addTaskButtonContentText">AddTask</Text>
      </Button>
      <AddTaskModal
        setTasks={setTasks}
        isAddModalOpen={isAddModalOpen}
        onAddModalClose={onAddModalClose}
        fetchData={fetchData}
      />
    </Container>
  );
}

export default Sidebar;
