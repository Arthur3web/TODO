import React, { useState } from 'react';
import "./ModalMenuTaskParameters.css";
import ModalDeleteTask from "./ModalDeleteTask";
import ModalEditTask from "./ModalEditTask";



function ModalMenuTaskParameters ({ closeModal, deleteTask, setTaskList, saveEditTask, task }) {
    const [openModalDeleteTask, setOpenModalDeleteTask] = useState(false);
    const [openModalEditTask, setOpenModalEditTask] = useState(false);

    

    return (
        <div className="MenuOperationTask">
            <button className="editButton" onClick={() => setOpenModalEditTask(true)}>
                <img src="/assets/Group_2.svg" alt='group_2' />
            </button>
            {openModalEditTask && <ModalEditTask closeModal={setOpenModalEditTask} task={task} 
            setTaskList={setTaskList} saveEditTask={saveEditTask}/>}
            <button className="deleteButton" onClick={() => setOpenModalDeleteTask(true)}>
                <img src="/assets/delete-button.svg" alt="delete" />
            </button>
            {openModalDeleteTask && <ModalDeleteTask closeModal={setOpenModalDeleteTask} deleteTask={deleteTask} task={task}/>}
        </div>
    )
}

export default ModalMenuTaskParameters