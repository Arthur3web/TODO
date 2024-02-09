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
  const arr1 = [
    {
    name: "Today",
    path: "/assets/Vector.svg",
  },
  {
    name: /*"All"*/ selectedData,
    path: "/assets/done-circle.svg",
  },
  {
    name: "Date",
    path: "/assets/arrows.svg",
  },];
  const [menuFiltered, setMenuFiltered] = useState("Today");

  const [isOpen, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false); 
  const [openModalEditTask, setOpenModalEditTask] = useState(false);
  const [openModalDeleteTask, setOpenModalDeleteTask] = useState(false);
  

  function handleChange(el) { //фильтр
    const menu = document.getElementById("MenuButtonFilterTaskList");
    setSelectedData(el);
    switch (el) {
      case "Done":
        setFiltered(taskList.filter(hero => hero.isCompleted))
        // setSelectedData("Done")
        break;
      case "Undone":
        setFiltered(taskList.filter(hero => !hero.isCompleted))
        break;
      default:
        setFiltered(taskList);
        // menu.style.backgroundColor="rgba(147, 51, 234, 0.25)";
    }
    setOpen(false);

  }

  const [taskNew, setTaskNew] = useState({
    title: '',
    timeEnd: new Date().toLocaleDateString()
  })

  useEffect( () => {
    setFiltered(taskList);
    handleChange(selectedData)
  }, [taskList])


  const handleInputChange = (e) => {
    setTaskNew(prev => prev, taskNew.title = e.target.value)
    setTask(e.target.value)
  }

  const handleTime = (e) => {
    setTaskNew(prev => prev, taskNew.timeEnd = e.target.value)
  }
  const addTask = () => {
      const newTask = {
        id: Date.now(),
        ...taskNew,
        // title: task,
        time: new Date().toLocaleDateString(),
        // timeEnd: Date(),
        isCompleted: false,
      }
      setTaskNew({
        title: '',
        timeEnd: ''
      })
        setTaskList([...taskList, newTask]);
        // setTask("");
  };


  function saveEditTask (id,title,timeEnd) {   
    const newTodo = taskList.map(item => {
        if(item.id == id) {
            return ({
                ...item,
                title: title,
                timeEnd: timeEnd,
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

  // function compare () {
 
  //   setFiltered(taskList.sort(function (a,b) {
  //     if (a.time > b.time) {
  //       return 1;
  //     }
  //     if (a.time < b.time) {
  //       return -1;
  //     }
  //     return 0;
  //   }))
  //   console.log("1111111")
  // }



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
          <Sidebar addTask={addTask} handleInputChange={handleInputChange} task={taskNew.title} taskTime={taskNew.timeEnd} handleChange={handleChange} 
          selectedData={selectedData} setOpen={setOpen} arr={arr} isOpen={isOpen} openModal={openModal} setOpenModal={setOpenModal} 
          handleTime={handleTime} setTaskNew={setTaskNew} arr1={arr1} setFiltered={setFiltered} taskList={taskList} setSelectedData={setSelectedData} />
          <TasksList deleteTask={deleteTask} filtered={filtered} saveEditTask={saveEditTask} taskCompleted={taskCompleted} 
          openModalDeleteTask={openModalDeleteTask} setOpenModalDeleteTask={setOpenModalDeleteTask} openModalEditTask={openModalEditTask}
          setOpenModalEditTask={setOpenModalEditTask} />
        </div>
      </div>
    </div>
  );
}

export default App;

