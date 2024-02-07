import React, { useEffect, useState } from "react";
import "./App.css";
import TasksList from "./components/TasksList.js";
import Sidebar from "./components/Sidebar.js"



function App() {
  const [task, setTask]=useState("");
  const [taskList, setTaskList] = useState([]);
  const [filtered, setFiltered] = useState(taskList);



  useEffect( () => {
    setFiltered(taskList)
  }, [taskList])


  
  
  const handleInputChange = (p) => {
    setTask(p.target.value)
  }

 


  const addTask = () => {
      const newTask = {
        id: Math.floor(Math.random()*1000),
        title: task,
        time: new Date().toLocaleDateString(),
        isCompleted: false,
      }
        setTaskList([...taskList, newTask]);
        setTask("")
      
  };


  const deleteTask = (id) => {
    // console.log(id)
    setTaskList(taskList.filter(item => item.id !== id))    
  };
    
  

  return (
    <div className="Wrapper">
      <div className="TitleWrapper">
        To-Do <span id="text">UI</span>
      </div>
      <div className="TodoContainer">
      <div className ='CapTodoContainer'>
          <p className='To-Do-Cap'>To-Do</p>
          <p className='Username-Cap'>UserName</p>
          <img className="Avatar-Cap" src="/assets/bi_person-circle.svg" alt="avatar"/>
        </div>
        <div className='BodyTodoContainer'>
          <Sidebar addTask={addTask} handleInputChange={handleInputChange} task={task} taskList={taskList} setTaskList={setTaskList} setFiltered={setFiltered} />
          <TasksList tasklist={taskList} setTaskList={setTaskList} addTask={addTask} deleteTask={deleteTask} filtered={filtered} />
        </div>
      </div>
    </div>
  );
}

export default App;

