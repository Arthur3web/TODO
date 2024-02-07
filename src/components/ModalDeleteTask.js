import React, { useState, useRef, useEffect } from 'react';
import "./ModalDeleteTask.css"



function ModalDeleteTask ({ closeModal, deleteTask, task, setOpen }) {
   
    let menuRef = useRef(); //настройка закрытия модального окна
    
    useEffect(() => { 
        let handler = (event) => {
        if (!menuRef.current.contains(event.target)) {
            closeModal(false);
        }
    };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler)
        };
    });

    //////

    // const handleKeyDown = event => {
        
    //     if (event.key === 'Escape') {
    //         closeModal(false);
    //         setOpen(false);
    //     }
    // }


    function deleteTaskButton (id) { 
        deleteTask(id);
        closeModal(false);
        setOpen(false);
    }


    return (
        <div className='ModalBackgroundDeleteTask' >
            <div className='ModalTodoWrapperDeleteTask' ref={menuRef} >
                <div className='Title'>
                    <h1 className="TitleModal">Delete task</h1>
                </div>
                <div className='BodyModalEditTask'>
                    <p className="BodyModalEditTaskContent">Are you sure about deleting this task?</p>
                </div>
                <div className='Footer' >
                    <button className='DeleteButton' onClick={() => deleteTaskButton(task.id)}>
                        <img src="/assets/trash.svg" alt="trash"/>
                        <p className='DeleteButtonContent'>Delete</p>
                    </button>
                    <button className='CloseButton' onClick={()=>{closeModal(false); setOpen(false)}}>
                        <img src="/assets/Vector_s.svg" alt="Vector_s"/>
                        <p>Close</p>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ModalDeleteTask