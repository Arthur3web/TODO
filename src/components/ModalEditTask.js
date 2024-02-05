import React, { useState } from 'react';
import "./ModalEditTask.css"



function ModalEditTask ({ closeModal, task, setTaskList }) {
    const [note, setNote] = useState(task.title);
    const [editTask, setEditTask] = useState('');
   
    function editTaskButton (id) { 
        // editTask(id);
        closeModal(false);
    
    }

    function handleInputChangeEditTask  (p)  {
        setNote(p.target.value);
        // console.log(note) 
        // console.log(task) 
    }
    
   
    function saveEditTask (id) {
        // editTask = {
        //     title: {note}
        // }
        const tmp = task.map((el) => {
            if (el.id === id) return {...el, title: {note}}
                return el;
        })
            setTaskList(tmp)
       
    }
    
    

    return (
        <div className='ModalBackgroundEditTask'>
            <div className='ModalTodoWrapperEditTask'>
                <div className='Title'>
                    <h1 className="TitleModal">Edit task</h1>
                </div>
                <div className='Body'>
                    <input className="InputBody" value={note} onChange={handleInputChangeEditTask} />
                </div>
                <div className='Footer'>
                    <button className='SaveButton'  >
                        <img src="/assets/Check_ring.svg" alt="Check_ring"/>
                        <p className='SaveButtonContent'>Save</p>
                    </button>
                    <button className='CloseButton' onClick={()=>closeModal(false)}>
                        <img src="/assets/Vector_s.svg" alt="Vector_s"/>
                        <p>Close</p>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ModalEditTask