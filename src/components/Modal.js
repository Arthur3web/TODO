import React from 'react';
import "./Modal.css"
import Vector_s from "../img/Vector_s.svg"
import Check_ring from "../img/Check_ring.svg"


function Modal ({closeModal,setClick}) {


    return (
        <div className='modalBackground'>
            <div className='modalContainer'>
                <div className='title'>
                    <h1 id="titleModal">Create task</h1>
                </div>
                <div className='body'>
                    <input className="inputBody" placeholder="Enter text..." />
                </div>
                <div className='footer'>
                    <button className='saveButton' onClick={()=>setClick(false)}>
                        <img src={Check_ring} alt="Check_ring"/>
                        <p>Save</p>
                    </button>
                    <button className='closeButton' onClick={()=>closeModal(false)}>
                        <img src={Vector_s} alt="Vector_s"/>
                        <p id="closeTask">Close</p>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Modal