import React from "react";
import Task from "./Task";

function TasksList({
  deleteTask,
  filteredTaskList,
  saveEditTask,
  toggleTaskStatus,
  isOpenModalDeleteTask,
  isOpenModalEditTask,
  setOpenModalDeleteTask,
  setOpenModalEditTask,
  taskList,
})
 {
  return (
    <div className="task-list" >
      <div className="tasks">
        {taskList.filter(item => !item.isCompleted).map((elem) => (
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
      </div>
    </div>
  );
}

export default TasksList;
