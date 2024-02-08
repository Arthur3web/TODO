import React, { useEffect, useState } from "react";
import "./App.css";
import TasksList from "./components/TasksList.js";
import Sidebar from "./components/Sidebar.js"



function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [filtered, setFiltered] = useState(taskList);

  const [selectedData, setSelectedData] = useState("All"); //sidebar
  const arr = ["All", "Done", "Undone"];

  const [isOpen, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  

  function handleChange(el) { //фильтр
    setSelectedData(el);
    switch (el) {
      case "Done":
        setFiltered(taskList.filter(hero => hero.isCompleted))
        console.log('!!!!!!!!!!!!!!');
        // console.log(done)
        break;
      case "Undone":
        setFiltered(taskList.filter(hero => !hero.isCompleted))
        // console.log(undone)
        break;
      default:
        setFiltered(taskList);
    }
    setOpen(false);

  }


  useEffect( () => {
    setFiltered(taskList)
  }, [taskList])


  const handleInputChange = (e) => {
    setTask(e.target.value)
  }


  const addTask = () => {
      const newTask = {
        id: Date.now(),
        title: task,
        time: new Date().toLocaleDateString(),
        isCompleted: false,
      }
        setTaskList([...taskList, newTask]);
        setTask("")  
  };


  function saveEditTask (id,title) {   
    const newTodo = taskList.map(item => {
        if(item.id == id) {
            return ({
                ...item,
                title: title,
                isCompleted: false,
            })
        }
        return item
    })
    setTaskList(newTodo);  
  }


  const deleteTask = (id) => {
    setTaskList(taskList.filter(item => item.id !== id))    
  };
  
  
  const taskCompleted = (id) => {
    const element = taskList.findIndex(elem => elem.id == id);
    const newTaskList = [...taskList];
    newTaskList[element] = {
        ...newTaskList[element],
        isCompleted: !newTaskList[element].isCompleted,
    }
    setTaskList(newTaskList);
  }

  function compare () {
 
    setFiltered(taskList.sort(function (a,b) {
      if (a.time > b.time) {
        return 1;
      }
      if (a.time < b.time) {
        return -1;
      }
      return 0;
    }))
    console.log("1111111")
  }



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
          <Sidebar addTask={addTask} handleInputChange={handleInputChange} task={task} handleChange={handleChange} compare={compare}
          selectedData={selectedData} setOpen={setOpen} arr={arr} isOpen={isOpen} openModal={openModal} setOpenModal={setOpenModal}/>
          <TasksList deleteTask={deleteTask} filtered={filtered} saveEditTask={saveEditTask} taskCompleted={taskCompleted} />
        </div>
      </div>
    </div>
  );
}

export default App;

