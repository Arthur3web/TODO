import React, { useState, useRef, useEffect } from 'react';
import "./Modal.css"




function Modal ({ closeModal, addTask, handleInputChange, task, handleTime, taskTime, setTaskNew}) {
    const [value, setValue]=useState("");


    let menuRef = useRef(); //настройка закрытия модального окна
    
    useEffect(() => { 
        let handler = (event) => {
        if (!menuRef.current.contains(event.target)) {
            closeModal(false);
            setTaskNew({
                title: '',
                // timeEnd: ''
            })
        }
    };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler)
        };
    });


    const handleKeyDown = event => {
        if (event.key === 'Enter') {
        //   console.log('✅ Enter key pressed');
            if (task !== "") {
                addTask(value);
                event.preventDefault();
                closeModal(false);                   
            } 
        }
        if (event.key === 'Escape') {
            closeModal(false);
            setTaskNew({
                title: '',
                timeEnd: ''
            })
        }
    }


   function saveTask () {
    if ((task !== "") ) {
      addTask(value)
      closeModal(false);
    }
   }





    return (
        <div className='ModalBackground' >
            <div className='ModalTodoWrapper' ref={menuRef}>
                <div className='Title'>
                    <h1 className="TitleModal">Create task</h1>
                </div>
                <div className='Body'>
                    <input className="InputBody" placeholder="Enter text..." 
                    onChange={handleInputChange} value={task} autoFocus={true}
                    onKeyDown={handleKeyDown} required/>
                    <input type="date" className='DateEnd' onChange={handleTime}/>
                </div>
                <div className='Footer'>
                    <button className='SaveButton' onClick={saveTask}>
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

export default Modal