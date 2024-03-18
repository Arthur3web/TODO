import React, { useEffect, useState } from "react";
import Task from "./Task";
import { Box, Flex } from "@chakra-ui/react";
import { getAll } from "../http/taskAPI";

function TasksList({ width, tasks, setTasks, renderTasks, setRenderTasks }) {
  const fetchData = async () => {
    try {
      const data = await getAll();
      setTasks(data.tasks);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    
    setRenderTasks(tasks); // Обновляем список задач при изменении tasks
  }, [tasks]);

  // console.log(tasklist)
  return (
    <Flex className="task-list">
      <Box>
        {renderTasks && renderTasks.length ? (
          renderTasks.map((task) => (
            <Task key={task.id} task={task} width={width} setTasks={setTasks} fetchData={fetchData}/>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </Box>
    </Flex>
  );
}

export default TasksList;
