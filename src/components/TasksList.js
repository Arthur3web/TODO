import React from "react";
import Task from "./Task";


function TasksList({ deleteTask, filtered, saveEditTask, taskCompleted }) {
    
    
   

    return (
        <div className="TaskList" id="TaskList" >
            <div className="Tasks">
                {filtered.map((elem) => (
                    <Task key={elem.id} task={elem} deleteTask={deleteTask} taskCompleted={taskCompleted} 
                    saveEditTask={saveEditTask} />
                ))} 
            </div>
        </div>
       
    );  
}  

export default TasksList

           