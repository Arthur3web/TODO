import React, { useState } from "react";
import Modal from "./Modal";

function TasksList({taskList, addTask,task}) {
    const [isOpen, setOpen] = useState(false);



    return (
        <div className="TaskList">
            <div className="Task">
                <div className="Content">
                    <label class="checkbox style-f">
                        <input type="checkbox"/>
                        <div class="checkbox__checkmark"></div>
                    </label>
                    <p className='TaskContent'>{task.title}</p>
                </div>
                <div className="TimeTask">
                    <p className='DateTask'>{task.time}</p>
                    <div className="ParameterTask">
                        <button className="ParameterTaskButton" onClick={()=>{setOpen(!isOpen)}}>
                            <img src="/assets/Vector_3.svg" alt="vector_3" />
                        </button>
                        {isOpen && (
                            <div className="MenuOperationTask">
                                <img src="/assets/Group_2.svg" alt='group_2'/>
                                <img src="/assets/delete-button.svg" alt="delete" />
                            </div>
                        )}
                    </div>
                </div>
            </div> 
        </div>
    );
}

export default TasksList