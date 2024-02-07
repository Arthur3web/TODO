import React, { useState, useRef, useEffect } from 'react';
import ModalDeleteTask from "./ModalDeleteTask";
import ModalEditTask from "./ModalEditTask";



const Task = ({ task, deleteTask, taskCompleted, setTaskList, saveEditTask }) => { //Деструктуризация
    const [isOpen, setOpen] = useState(false);
    const [openModalDeleteTask, setOpenModalDeleteTask] = useState(false);
    const [openModalEditTask, setOpenModalEditTask] = useState(false);
   

    
    let menuRef = useRef();
        
    useEffect(() => {
        let handler = (event) => {
        if (!menuRef.current.contains(event.target)) {
            setOpen(false);
        }
    };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler)
        };
    });




    return (
        <div className="Task" id="Task" >
                        <div className="Content">
                            <label class="custom-checkbox">
                                <input type="checkbox" className="hidden-checkbox" id="checkbox" onChange={() => taskCompleted(task.id)} />
                                <div className="checkbox">
                                <img class="checkmark" src="/assets/Vector-mark.svg" alt="vector-mark" />
                                </div>
                            </label>
                            <div className={task.isCompleted ? "crossText" : "listItem"} >{task.title}</div>
                        </div>
                        <div className="TimeTask">
                            <p className='DateTask'>{task.time}</p>
                            <div ref={menuRef} className="ParameterTask">                         
                                <button className="ParameterTaskButton" onClick={() => setOpen(!isOpen)}>
                                    <img src="/assets/Vector_3.svg" alt="vector_3" />
                                </button>
                                {isOpen && (
                                    <div className="MenuOperationTask">
                                        <button className="editButton" onClick={() => setOpenModalEditTask(true)}  >
                                            <img src="/assets/Group_2.svg" alt='group_2' />
                                        </button>
                                        {openModalEditTask && <ModalEditTask closeModal={setOpenModalEditTask} task={task} 
                                        setTaskList={setTaskList} saveEditTask={saveEditTask} setOpen={setOpen}/>}
                                        <button className="deleteButton" onClick={() => setOpenModalDeleteTask(true)}>
                                            <img src="/assets/delete-button.svg" alt="delete" />
                                        </button>
                                        {openModalDeleteTask && <ModalDeleteTask closeModal={setOpenModalDeleteTask} 
                                        deleteTask={deleteTask} task={task} setOpen={setOpen}/>}
                                    </div>
                                )}
                                
                            </div>
                        </div>
        </div> 
    )
}

export default Task