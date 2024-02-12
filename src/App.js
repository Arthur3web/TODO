import React, { useEffect, useState } from "react";
import "./App.css";
import TasksList from "./components/TasksList.js";
import Sidebar from "./components/Sidebar.js";

function App() {
  const [taskList, setTaskList] = useState([]);
  // const [filteredTaskList, setFilteredTaskList] = useState(taskList); // гэть

  const [selectedStatus, setSelectedStatus] = useState("All"); //sidebar
  const statusList = ["All", "Done", "Undone"]; //
  const sideBarFilter = [
    {
      name: "Today",
      path: "/assets/Vector_4.svg",
    },
    {
      name: /*"All"*/ selectedStatus,
      path: "/assets/done-circle.svg",
    },
    {
      name: "Date",
      path: "/assets/arrows.svg",
    },
  ]; //

  const [isOpen, setOpen] = useState(false);
  const [isOpenModalAddTask, setOpenModalAddTask] = useState(false); 
  const [isOpenModalEditTask, setOpenModalEditTask] = useState(false); 
  const [isOpenModalDeleteTask, setOpenModalDeleteTask] = useState(false); 

  function handleFilterChange(el) { 
    //фильтр
    setSelectedStatus(el);
    switch (el) {
      case "Done":
        const done = (taskList.filter((hero) => hero.isCompleted));
        console.log(done)
        break;
      case "Undone":
        const undone = (taskList.filter((hero) => !hero.isCompleted));
        console.log(undone)
        break;
      default:
        setTaskList(taskList);
        console.log(taskList)
    }
    setOpen(false);
    // console.log(taskList)
  }

  const [taskNew, setTaskNew] = useState({
    title: "",
    timeEnd: new Date().getDay(),
  });

  // useEffect(() => {
  //   setTaskList(taskList);
  //   setTaskList(selectedStatus);
  // }, [taskList]); //

  const handleInputChange = (e) => {
    setTaskNew({...taskNew, title: e.target.value}); 

  };

  const handleTimeChange = (e) => { 
    setTaskNew({...taskNew, timeEnd: e.target.value});
  };

  const addTask = () => {
    const newTask = {
      id: Date.now(),
      ...taskNew,
      timeStart: new Date().toLocaleDateString(),
      isCompleted: false,
    };
    setTaskNew({
      title: "",
      timeEnd: "",
    });
    setTaskList([...taskList, newTask]);
  };

  function saveEditTask(id, title, timeEnd) {
    const newTodo = taskList.map((item) => {
      if (item.id == id) {
        return {
          ...item,
          title: title,
          timeEnd: timeEnd,
          isCompleted: false,
        };
      }
      return item;
    });
    setTaskList(newTodo);
  }

  const deleteTask = (id) => {
    setTaskList(taskList.filter((item) => item.id !== id));
  };

  const toggleTaskStatus = (id) => { 
    const element = taskList.findIndex((elem) => elem.id == id);
    const newTaskList = [...taskList];
    newTaskList[element] = {
      ...newTaskList[element],
      isCompleted: !newTaskList[element].isCompleted,
    };
    setTaskList(newTaskList);
  };

  return (
    <div className="wrapper">
      <div className="title-wrapper"> 
        To-Do <span id="text">UI</span>
      </div>
      <div className="todo-container">
        <div className="todo-container-header"> 
          <p className="title">To-Do</p> 
          <p className="username">UserName</p>
          <img
            className="user"
            src="/assets/bi_person-circle.svg"
            alt="avatar"
          />
        </div>
        <div className="todo-container-content">
          <Sidebar
            addTask={addTask}
            handleInputChange={handleInputChange}
            task={taskNew.title}
            taskTime={taskList.timeEnd}
            handleFilterChange={handleFilterChange}
            selectedStatus={selectedStatus}
            setOpen={setOpen}
            statusList={statusList}
            isOpen={isOpen}
            isOpenModalAddTask={isOpenModalAddTask}
            setOpenModalAddTask={setOpenModalAddTask}
            handleTimeChange={handleTimeChange}
            setTaskNew={setTaskNew}
            sideBarFilter={sideBarFilter}
            // setFilteredTaskList={setFilteredTaskList}
            taskList={taskList}
            setSelectedStatus={setSelectedStatus}
          />
          <TasksList
            deleteTask={deleteTask}
            // filteredTaskList={filteredTaskList}
            saveEditTask={saveEditTask}
            toggleTaskStatus={toggleTaskStatus}
            isOpenModalDeleteTask={isOpenModalDeleteTask}
            setOpenModalDeleteTask={setOpenModalDeleteTask}
            isOpenModalEditTask={isOpenModalEditTask}
            setOpenModalEditTask={setOpenModalEditTask}
            taskList={taskList}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
