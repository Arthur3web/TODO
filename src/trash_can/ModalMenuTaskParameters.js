import React, { useState } from 'react';
import "./ModalMenuTaskParameters.css";
import ModalDeleteTask from "../components/ModalDeleteTask";
import ModalEditTask from "../components/ModalEditTask";



function ModalMenuTaskParameters ({ closeModal, deleteTask, setTaskList, saveEditTask, task, setOpen }) {
    const [openModalDeleteTask, setOpenModalDeleteTask] = useState(false);
    const [openModalEditTask, setOpenModalEditTask] = useState(false);

    

    return (
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
    )
}

export default ModalMenuTaskParameters