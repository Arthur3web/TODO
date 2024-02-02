import React, { useState } from 'react';



function ModalEditTask ({closeModal}) {
   

      

    return (
        <div className='ModalBackgroundEditTask'>
            <div className='ModalTodoWrapperEditTask'>
                <div className='Title'>
                    <h1 className="TitleModal">Edit task</h1>
                </div>
                <div className='Body'>
                    <input className="InputBody" placeholder="Enter text..." />
                </div>
                <div className='Footer'>
                    <button className='SaveButton' >
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