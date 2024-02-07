import React, { useState } from "react";
import Task from "./Task";


function TasksList({ tasklist, deleteTask, setTaskList, filtered }) {
    const [checked, setChecked] = useState(false)
    
    
    const taskCompleted = (id) => {
        // console.log(id)
        const element = tasklist.findIndex(elem => elem.id == id);
        const newTaskList = [...tasklist];
        newTaskList[element] = {
            ...newTaskList[element],
            isCompleted: !newTaskList[element].isCompleted,
        }
        setTaskList(newTaskList);
        // setChecked(!checked)
        // console.log(newTaskList)
    }

    function saveEditTask (id,title) {   
        const newTodo = tasklist.map(item => {
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
        // saveToLocalStorage(); //сохраняем список задач в хранилище браузера LocalStorage
        
        


        
    }

    return (
        <div className="TaskList" id="TaskList">
            <div className="Tasks">
                {filtered.map((elem) => (
                    <Task task={elem} deleteTask={deleteTask} taskCompleted={taskCompleted} 
                    setTaskList={setTaskList} saveEditTask={saveEditTask}/>
                ))} 
            </div>
        </div>
       
    );  
}  

export default TasksList

           