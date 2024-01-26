import React, { useState } from "react";
import Group from './Group.svg';
import vector_3 from "./Vector (2).svg";

function TempInp({changeTemp}) {
    const [temp1, setTemp]=useState();


    return (<div className="kok">
        <div className="Task">
            <div className="podTask">
            <label class="checkbox style-f">
                <input type="checkbox"/>
                <div class="checkbox__checkmark"></div>
            </label>
                {/* <img className="group" src={Group} alt="Group"/> */}
                <p id='temp'>Task 1</p>
            </div>
            <div className="Time">
                <p id='DateTask'>Today at 18.30</p>
                <img src={vector_3} alt="vector_3"/>
            </div>
        </div> 
        <div className="Chery">
        <label class="checkbox style-f">
            <input type="checkbox"/>
            <div class="checkbox__checkmark"></div>
        </label>
        </div>
    
    </div>)

}

export default TempInp