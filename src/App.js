import React, { useEffect, useState } from "react";
import TodoWrapper from "./components/TodoWrapper";
import "./App.css";
import TasksList from "./components/TasksList";



function App() {
  const [task, setTask]=("");
  const [taskList, setTaskList] = useState([]);


  const addTask = () => {
    if (task !== "") {
      const newTask = {
        id: 1,
        value: task,
        date: Date.now()
      }
      setTaskList([...taskList, newTask]);
    };
  }


  return (
    <div className="Wrapper">
      <div className="TitleWrapper">
        To-Do <span id="text">UI</span>
      </div>
      <div className="TodoContainer">
        <TodoWrapper task={taskList} />
        <TasksList addTask={addTask} taskList={taskList} />
      </div>
    </div>
  );
}

export default App;

