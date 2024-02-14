import React from "react";
import Task from "./Task";
import { Flex,Box } from "@chakra-ui/react";

function TasksList({
  selectedStatus,
  deleteTask,
  saveEditTask,
  toggleTaskStatus,
  isOpenModalDeleteTask,
  isOpenModalEditTask,
  setOpenModalDeleteTask,
  setOpenModalEditTask,
  taskList,
}) {
  const filteredTaskList = taskList.filter((el) => {
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
              isOpenModalEditTask={isOpenModalEditTask}
              setOpenModalEditTask={setOpenModalEditTask}
              isOpenModalDeleteTask={isOpenModalDeleteTask}
              setOpenModalDeleteTask={setOpenModalDeleteTask}
            />
          ))}
      </Box>
    </Flex>
  );
}

export default TasksList;
