import React, { useState } from 'react';
import "./ModalEditTask.css"



function ModalEditTask ({ closeModal, task, saveEditTask }) {
    const [note, setNote] = useState(task.title);
    const [newTaskList, setNewTaskList] = useState();
   

    function handleInputChangeEditTask (p)  {
        setNote(p.target.value);
        // console.log(note) 
        // console.log(task) 
    }
    
   
    function editTask (id) { 
        saveEditTask(task.id, note);
        closeModal(false);
        
    }
    
    

    return (
        <div className='ModalBackgroundEditTask'>
            <div className='ModalTodoWrapperEditTask'>
                <div className='Title'>
                    <h1 className="TitleModal">Edit task</h1>
                </div>
                <div className='Body'>
                    <input className="InputBody" value={note} onChange={handleInputChangeEditTask} autoFocus={true} />
                </div>
                    <div className='Footer'>
                    <button className='SaveButton' onClick={() => editTask(task.id, note)} >
                        <img src="/assets/Check_ring.svg" alt="Check_ring"/>
                        <p className='SaveButtonContent'>Save</p>
                    </button>
                    <button className='CloseButton' onClick={() => closeModal(false)}>
                        <img src="/assets/Vector_s.svg" alt="Vector_s"/>
                        <p>Close</p>
                    </button>
                </div>
            </div>
        </div>
    );


}

export default ModalEditTask