import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import TasksList from "../components/TasksList";


function TodoWrapper({task,addTask}) {
    const [temp, setTemp] = useState(0);



    return <>
        <div className ='CapTodoContainer'>
            <p className='To-Do-Cap'>To-Do</p>
            <p className='Username-Cap'>UserName</p>
            <img className="Avatar-Cap" src="/assets/bi_person-circle.svg" alt="avatar"/>

         </div>
        <div className='BodyTodoContainer'>
            <Sidebar temp={temp} />
            {task.map(el => {
                return (
                    <TasksList temp={temp} changeTemp={setTemp} task={el} addTask={addTask}/>
                )
            })}
        </div>
    </>;
}

export default TodoWrapper