import React, { useEffect, useState } from "react";
import Task from "./Task";
import { Box, Flex } from "@chakra-ui/react";
import { getAll } from "../http/taskAPI";

function TasksList({
  width,
}) {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAll(); // Получаем список задач
        setTasks(data.tasks); // Обновляем состояние задач
        // console.log(data)
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchData(); // Вызываем функцию для получения данных при монтировании компонента
  }, []);

  console.log(tasks)
  return (
    <Flex className="task-list">
      <Box>
        {tasks.length > 0 ? (
          tasks.map((task) => <Task key={task.id} task={task} width={width} />)
        ) : (
          <p>Loading...</p>
        )}
      </Box>
    </Flex>
  );
}

export default TasksList;
