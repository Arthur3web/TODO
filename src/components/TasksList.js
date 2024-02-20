import React from "react";
import Task from "./Task";
import { Flex, Box } from "@chakra-ui/react";
import { isToday } from "date-fns";
// import EditTaskModal from "./EditTaskModal";

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
    <Flex
      flexDirection="column"
      className="task-list"
      w="466px"
      h="312px"
      borderRadius="10px"
      bg="rgba(244, 244, 244, 1)"
      p="31px 17px 21px 21px"
      gap="10px"
      overflowY="auto"
    >
      <Box className="tasks">
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
      
      
    </Flex>
  );
}

export default TasksList;
