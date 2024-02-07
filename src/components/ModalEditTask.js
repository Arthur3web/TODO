import React, { useState, useRef, useEffect } from 'react';
import "./ModalEditTask.css"



function ModalEditTask ({ closeModal, task, saveEditTask, setOpen }) {
    const [note, setNote] = useState(task.title);
    const [newTaskList, setNewTaskList] = useState();
   
    
    
    let menuRef = useRef(); //настройка закрытия модального окна при клике вне его поля
    
    useEffect(() => { 
        let handler = (event) => {
        if (!menuRef.current.contains(event.target)) {
            closeModal(false);
            setOpen(false);
        }
    };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler)
        };
    });

    //////


    const handleKeyDown = event => { //настройка закрытия модального окна при нажатии на клавиши Enter и Esc
        // console.log(event.key);
    
        if (event.key === 'Enter') {
        //   console.log('✅ Enter key pressed');
            
            closeModal(false);  
            setOpen(false);                 
        }
        
        if (event.key === 'Escape') {
            closeModal(false);
            setOpen(false)
        }
    }
    //////


    function handleInputChangeEditTask (p)  {
        setNote(p.target.value);
        // console.log(note) 
        // console.log(task) 
    }
    
   
    function editTask (id) { 
        saveEditTask(task.id, note);
        closeModal(false);
        setOpen(false);
        console.log(task)
        
    }
    
    

    return (
        <div className='ModalBackgroundEditTask'>
            <div className='ModalTodoWrapperEditTask' ref={menuRef}>
                <div className='Title'>
                    <h1 className="TitleModal">Edit task</h1>
                </div>
                <div className='Body'>
                    <input className="InputBody" value={note} onChange={handleInputChangeEditTask} autoFocus={true} onKeyDown={handleKeyDown}/>
                </div>
                    <div className='Footer'>
                    <button className='SaveButton' onClick={() => editTask(task.id, note)} >
                        <img src="/assets/Check_ring.svg" alt="Check_ring"/>
                        <p className='SaveButtonContent'>Save</p>
                    </button>
                    <button className='CloseButton' onClick={() => {closeModal(false); setOpen(false)}}>
                        <img src="/assets/Vector_s.svg" alt="Vector_s"/>
                        <p>Close</p>
                    </button>
                </div>
            </div>
        </div>
    );


}

export default ModalEditTask