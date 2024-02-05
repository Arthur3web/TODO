import React, { useState } from "react";
import Task from "./Task";


function TasksList({ task, deleteTask, setTaskList }) {
    const [checked, setChecked] = useState(false)
    
    const taskCompleted = (id) => {
        console.log(id)
        // e.preventDefault();
        const element = task.findIndex(elem => elem.id == id);
        const newTaskList = [...task];
        newTaskList[element] = {
            ...newTaskList[element],
            isCompleted: !newTaskList[element].isCompleted,
        }
        setTaskList(newTaskList);
        setChecked(!checked)
        console.log(newTaskList)
    }


    return (
        <div className="TaskList">
            <div>
                {task.map((elem) => (
                    <Task task={elem} deleteTask={deleteTask} taskCompleted={taskCompleted} checked={checked} 
                    setTaskList={setTaskList} />
                ))} 
            </div>
        </div>
       
    );  
}  

export default TasksList

           