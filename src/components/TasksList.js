import React from "react";
import Task from "./Task";
import { Box, Flex } from "@chakra-ui/react";
import { isToday } from "date-fns";

function TasksList({
  taskList,
  selectedStatus,
  isTodaySelected,
  toggleTaskStatus,
  handleEditTask,
  isClickEditTaskButton,
  setClickEditTaskButton,
  handleDeleteTask,
  setClickDeleteTaskButton,
  width,
}) {
  const filteredTaskList = taskList.filter((el) => {
    if (isTodaySelected) {
      if (selectedStatus === "Done" && isToday(el.timeEnd))
        return el.isCompleted;
      if (selectedStatus === "Undone" && isToday(el.timeEnd))
        return !el.isCompleted;
      return isToday(el.timeEnd);
    }
    if (selectedStatus === "Done") return el.isCompleted;
    if (selectedStatus === "Undone") return !el.isCompleted;
    return true;
  });

  return (
    <Flex className="task-list">
      <Box>
        {filteredTaskList.map((elem) => (
          <Task
            key={elem.id}
            task={elem}
            width={width}
            toggleTaskStatus={toggleTaskStatus}
            handleEditTask={handleEditTask}
            isClickEditTaskButton={isClickEditTaskButton}
            setClickEditTaskButton={setClickEditTaskButton}
            handleDeleteTask={handleDeleteTask}
            setClickDeleteTaskButton={setClickDeleteTaskButton}
          />
        ))}
      </Box>
    </Flex>
  );
}

export default TasksList;
