import React, { useState, useRef, useEffect } from 'react';
import ModalDeleteTask from "./ModalDeleteTask";
import ModalEditTask from "./ModalEditTask";



const Task = ({ task, deleteTask, taskCompleted, saveEditTask }) => { //Деструктуризация
    const [isOpenParameters, setOpenParameters] = useState(false);
    const [openModalDeleteTask, setOpenModalDeleteTask] = useState(false);
    const [openModalEditTask, setOpenModalEditTask] = useState(false);

    
    let menuRef = useRef();
        
    useEffect(() => {
        let handler = (event) => {
        if (!menuRef.current.contains(event.target)) {
            setOpenParameters(false);
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
                <label className="custom-checkbox">
                    <input type="checkbox" className="hidden-checkbox" id="checkbox" checked={task.isCompleted} onChange={() => taskCompleted(task.id)} />
                    <div className="checkbox">
                        <img className="checkmark" src="/assets/Vector-mark.svg" alt="vector-mark" />
                    </div>
                </label>
                <div className={task.isCompleted ? "crossText" : "listItem"} >{task.title}</div>
            </div>
            <div className="TimeTask">
                <p className='DateTask'>{task.time}</p>
                <div ref={menuRef} className="ParameterTask">                         
                    <button className="ParameterTaskButton" onClick={() => setOpenParameters(!isOpenParameters)}>
                        <img src="/assets/Vector_3.svg" alt="vector_3" />
                    </button>
                    {isOpenParameters && (
                        <div className="MenuOperationTask">
                            <button className="editButton" onClick={() => setOpenModalEditTask(true)}  >
                                <img src="/assets/Group_2.svg" alt='group_2' />
                            </button>
                            {openModalEditTask && <ModalEditTask closeModal={setOpenModalEditTask} task={task} 
                            saveEditTask={saveEditTask} setOpenParameters={setOpenParameters} />}
                            <button className="deleteButton" onClick={() => setOpenModalDeleteTask(true)}>
                                <img src="/assets/delete-button.svg" alt="delete" />
                            </button>
                            {openModalDeleteTask && <ModalDeleteTask closeModal={setOpenModalDeleteTask} 
                            deleteTask={deleteTask} task={task} setOpenParameters={setOpenParameters}/>}
                        </div>
                    )} 
                </div>
            </div>
        </div> 
    )
}

export default Task