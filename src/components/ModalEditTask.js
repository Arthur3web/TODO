import React, { useState, useRef, useEffect } from 'react';
import "./ModalEditTask.css"



function ModalEditTask ({ closeModal, task, saveEditTask, setOpenParameters }) {
    const [note, setNote] = useState(task.title);
   
    
    let menuRef = useRef(); //настройка закрытия модального окна при клике вне его поля
    
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


    const handleKeyDown = event => { //настройка закрытия модального окна при нажатии на клавиши Enter и Esc  
        if (event.key === 'Enter') {
            if (note !== "") {
                saveEditTask(task.id, note);
                closeModal(false);  
                setOpenParameters(false); 
            }                
        }
        if (event.key === 'Escape') {
            closeModal(false);
            setOpenParameters(false)
        }
    }


    function handleInputChangeEditTask (e)  {
        setNote(e.target.value);
    }
    
   
    function editTask (id) { 
        if (note !== "") {
            saveEditTask(task.id, note);
            closeModal(false);
            setOpenParameters(false);
            console.log(task) 
        }
    }
    
    


    return (
        <div className='ModalBackgroundEditTask'>
            <div className='ModalTodoWrapperEditTask' ref={menuRef}>
                <div className='Title'>
                    <h1 className="TitleModal">Edit task</h1>
                </div>
                <div className='Body'>
                    <input className="InputBody" value={note} onChange={handleInputChangeEditTask} autoFocus={true} onKeyDown={handleKeyDown} required/>
                </div>
                    <div className='Footer'>
                    <button className='SaveButton' onClick={() => editTask(task.id, note)} >
                        <img src="/assets/Check_ring.svg" alt="Check_ring"/>
                        <p className='SaveButtonContent'>Save</p>
                    </button>
                    <button className='CloseButton' onClick={() => {closeModal(false); setOpenParameters(false)}}>
                        <img src="/assets/Vector_s.svg" alt="Vector_s"/>
                        <p>Close</p>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ModalEditTask