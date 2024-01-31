import React, { useState } from 'react';
import "./Modal.css"


function Modal ({closeModal}) {
    const [value, setValue]=useState("");

    const handleInputChange = (val) => {
        setValue(val.target.value)
    }

    return (
        <div className='ModalBackground'>
            <div className='ModalTodoWrapper'>
                <div className='Title'>
                    <h1 className="TitleModal">Create task</h1>
                </div>
                <div className='Body'>
                    <input className="InputBody" placeholder="Enter text..." 
                    onChange={handleInputChange} value={value}/>
                </div>
                <div className='Footer'>
                    <button className='SaveButton' >
                        <img src="/assets/Check_ring.svg" alt="Check_ring"/>
                        <p>Save</p>
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