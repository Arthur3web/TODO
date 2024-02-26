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
  Container,
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
    if (name === "Today") {
      setTodaySelected(!isTodaySelected);
      console.log(isTodaySelected);
      setSelectedStatus("All");
    } else if (name === "Date") {
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
    <div className="sidebar-mobile">
      <button className="today-button">Today</button>
      <div className="filter-task" gap="10px">
        <button
          className="button-filter"
        //   onClick={() => handleFilterChange()}
        >
          All
        </button>
        <button className="button-filter">Done</button>
        <button className="button-filter">Undone</button>
      </div>
      <button className="add-task-button" onClick={onAddModalOpen}>
        AddTask
      </button>
      <AddTaskModal
        isAddModalOpen={isAddModalOpen}
        onAddModalClose={onAddModalClose}
        handleInputChange={handleInputChange}
        handleTimeChange={handleTimeChange}
        task={task}
        addTask={addTask}
        setTaskNew={setTaskNew}
      />
    </div>
  );
}

export default Sidebar;
