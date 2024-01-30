import React, { useState } from "react";
import Group from './img/Group.svg';
import vector_3 from "./img/Vector (2).svg";
import Delete from "./img/delete.svg";
import Group_2 from "./img/Group_2.svg";

function TempInp({task}) {
    const [isOpen, setOpen] = useState(false);


    // console.log(el)
    return (<div className="kok">
        {/* {
            taskList.compareDocumentPosition()
        } */}
        <div className="Task">
            <div className="podTask">
            <label class="checkbox style-f">
                <input type="checkbox"/>
                <div class="checkbox__checkmark"></div>
            </label>
                <p id='temp'>{task.title}</p>
            </div>
            <div className="Time">
                <p id='DateTask'>{task.time}</p>
                <div className="tutorial">
                    <button className="vector" onClick={()=>{setOpen(!isOpen)}}>
                        <img src={vector_3} alt="vector_3" />
                    </button>
                    {isOpen && (
                    <div className="menu-operation-task">
                        <img id="group_2" src={Group_2} alt='group_2'/>
                        <img id="delete" src={Delete} alt="delete" />
                    </div>
                )}
                </div>
            </div>
        </div> 
    
    </div>)

}

export default TempInp