import React from "react";
import Task from "./Task";

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
    <div className="task-list">
      <div className="tasks">
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
      </div>
    </div>
  );
}

export default TasksList;
