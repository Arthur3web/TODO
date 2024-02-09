import React from "react";
import Task from "./Task";


function TasksList({ deleteTask, filtered, saveEditTask, taskCompleted, openModalDeleteTask, openModalEditTask, setOpenModalDeleteTask, setOpenModalEditTask }) {
    
    
   

    return (
        <div className="TaskList" id="TaskList" >
            <div className="Tasks">
                {filtered.map((elem) => (
                    <Task key={elem.id} task={elem} deleteTask={deleteTask} taskCompleted={taskCompleted} 
                    saveEditTask={saveEditTask} openModalEditTask={openModalEditTask} setOpenModalEditTask={setOpenModalEditTask}
                    openModalDeleteTask={openModalDeleteTask} setOpenModalDeleteTask={setOpenModalDeleteTask}/>
                ))} 
            </div>
        </div>
       
    );  
}  

export default TasksList

           