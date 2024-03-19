import React from "react";
import AddTaskModal from "./AddTaskModal";
import { Button, Flex } from "@chakra-ui/react";
import { statusList } from "../utils/consts";

function SidebarMobile({
  setTodaySelected,
  isTodaySelected,
  handleFilterChange,
  setSelectedStatus,
  selectedStatus,
  isAddModalOpen,
  onAddModalClose,
  onAddModalOpen,
  setTasks,
  filterTasks,
}) {
  const handleOpenedFilter = () => {
    setTodaySelected(!isTodaySelected);
    console.log(isTodaySelected);
    setSelectedStatus("All");
  };

  return (
    <Flex className="sidebar-mobile">
      <Button
        className="today-button"
        onClick={() => handleOpenedFilter()}
        color={isTodaySelected ? "#9333EA" : "#404040"}
        bg={isTodaySelected ? "#d1d3fd" : "#d3c8fc"}
      >
        Today
      </Button>
      <Flex className="filter-task" gap="10px">
        {statusList.map((el, ind) => (
          <Button
            key={el + ind}
            className="button-filter"
            onClick={() => handleFilterChange(el)}
            color={
              (!isTodaySelected || isTodaySelected) && el === selectedStatus ? "#9333EA" : "#404040"
            }
            bg={
              !isTodaySelected && el === selectedStatus ? "#d1d3fd" : "#d3c8fc"
            }
          >
            {el}
          </Button>
        ))}
      </Flex>
      <Button variant="addTaskButtonMobileSidebar" onClick={onAddModalOpen}>
        AddTask
      </Button>
      <AddTaskModal
        isAddModalOpen={isAddModalOpen}
        onAddModalClose={onAddModalClose}
        setTasks={setTasks}
        filterTasks={filterTasks}
      />
    </Flex>
  );
}

export default SidebarMobile;
