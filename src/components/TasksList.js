import React, { useState } from "react";
import Task from "./Task";
import { Flex,Box } from "@chakra-ui/react";
import { isToday } from "date-fns";

function TasksList({
  selectedStatus,
  deleteTask,
  saveEditTask,
  toggleTaskStatus,
  onDeleteModalOpen,
  onDeleteModalClose,
  isDeleteModalOpen,
  onEditModalOpen,
  onEditModalClose,
  isEditModalOpen,
  taskList,
  setTodaySelected,
  isTodaySelected,
  sideBarFilter
}) {
  
  const filteredTaskList = taskList.filter((el) => {
    if (isTodaySelected) {
      // if (selectedStatus === 'Done' && isToday(el.timeEnd)) return el.isCompleted
      // if (selectedStatus === 'Undone'&& isToday(el.timeEnd)) return !el.isCompleted
      return isToday(el.timeEnd)
    }

  
    if (selectedStatus === 'Done') return el.isCompleted
    if (selectedStatus === 'Undone') return !el.isCompleted
    return true
  })

  return (
    
    <Flex flexDirection='column'
    w='466px'
    h='312px'
    borderRadius='10px'
    bg='rgba(244, 244, 244, 1)'
    p='31px 17px 21px 21px'
    gap='10px'
    overflowY='auto'
    css={{
      WebkitOverflowScrolling: "touch",
      msOverflowStyle: "-ms-autohiding-scrollbar"
    }}
    >
      <Box className="tasks">
        {filteredTaskList
          .map((elem) => (
            <Task
              key={elem.id}
              task={elem}
              deleteTask={deleteTask}
              toggleTaskStatus={toggleTaskStatus}
              saveEditTask={saveEditTask}
              onDeleteModalOpen={onDeleteModalOpen}
              onDeleteModalClose={onDeleteModalClose}
              isDeleteModalOpen={isDeleteModalOpen}
              onEditModalOpen={onEditModalOpen}
              onEditModalClose={onEditModalClose}
              isEditModalOpen={isEditModalOpen}
            />
          ))}
      </Box>
    </Flex>
  );
}

export default TasksList;
