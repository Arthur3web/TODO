import React, { useRef, useEffect } from 'react';
import "./ModalDeleteTask.css"



function ModalDeleteTask ({ closeModal, deleteTask, task, setOpenParameters }) {
   
    let menuRef = useRef(); //настройка закрытия модального окна
    
    useEffect(() => { 
        let handler = (event) => {
        if (!menuRef.current.contains(event.target)) {
            closeModal(false);
            setOpenParameters(false);
        }
    };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler)
        };
    });


    // const handleKeyDown = event => {
        
    //     if (event.key === 'Escape') {
    //         closeModal(false);
    //         setOpenParameters(false);
    //         alert("вы нажали кнопку ESC")
    //     }
    // }


    function deleteTaskButton (id) { 
        deleteTask(id);
        closeModal(false);
        setOpenParameters(false);
    }



    return (
        <div className='ModalBackgroundDeleteTask' >
            <div className='ModalTodoWrapperDeleteTask' ref={menuRef} >
                <div className='Title' >
                    <h1 className="TitleModal">Delete task</h1>
                </div>
                <div className='BodyModalEditTask'>
                    <p className="BodyModalEditTaskContent">Are you sure about deleting this task?</p>
                </div>
                <div className='Footer' >
                    <button className='DeleteButton' onClick={() => deleteTaskButton(task.id)} >
                        <img src="/assets/trash.svg" alt="trash" />
                        <p className='DeleteButtonContent'>Delete</p>
                    </button>
                    <button className='CloseButton' onClick={()=>{closeModal(false); setOpenParameters(false)}}>
                        <img src="/assets/Vector_s.svg" alt="Vector_s"/>
                        <p>Close</p>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ModalDeleteTask