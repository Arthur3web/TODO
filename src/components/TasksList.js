import React from "react";
import Task from "./Task";
import { Box, Container } from "@chakra-ui/react";
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
    <Container variant="taskListContainer" className="task-list">
      <Box>
        {filteredTaskList.map((elem) => (
          <Task
            key={elem.id}
            task={elem}
            toggleTaskStatus={toggleTaskStatus}
            handleEditTask={handleEditTask}
            isClickEditTaskButton={isClickEditTaskButton}
            setClickEditTaskButton={setClickEditTaskButton}
            handleDeleteTask={handleDeleteTask}
            setClickDeleteTaskButton={setClickDeleteTaskButton}
          />
        ))}
      </Box>
    </Container>
  );
}

export default TasksList;
