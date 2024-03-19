import React from "react";
import Task from "./Task";
import { Box, Flex } from "@chakra-ui/react";

function TasksList({ width, tasks, setTasks, filterTasks }) {

  return (
    <Flex className="task-list">
      <Box>
        {tasks && tasks.length ? (
          tasks.map((task) => (
            <Task key={task.id} task={task} width={width} setTasks={setTasks} filterTasks={filterTasks} />
          ))
        ) : (
          <p></p>
        )}
      </Box>
    </Flex>
  );
}

export default TasksList;
