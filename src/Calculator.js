import React, { useState } from "react";
import Verdict from "./Verdict";
import TempInp from "./TempInp";
import Avatar from "./img/bi_person-circle.svg";
// import Chekbox from "../public/Group.svg"

function Calculator({task,setClick}) {
    const [temp, setTemp] = useState(0);

    // function changeTemp(event) {
    //     setTemp(event.target.value)
    // }

    return <>
        <div className ='kek'>
            <p id='To-Do'>To-Do</p>
            <p id='Username'>UserName</p>
            <img id="Avatar" src={Avatar} alt="avatar"/>

         </div>
        <div className='kek2'>
            <Verdict temp={temp} />
            {task.map(el => {
                return (
                    <TempInp temp={temp} changeTemp={setTemp} task={el} setClick={setClick}/>
                )
            })}
        </div>
    </>;
}

export default Calculator