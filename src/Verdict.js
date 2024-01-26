import React, { useState } from "react";
import Vector from "./Vector.svg";
import Done_circle from "./done circle.svg";
import arrows from "./arrows 1.svg";
import vector_2 from "./Vector_2.svg";

function Verdict({ temp }) {
  return (<div className="Kolonna">
    <div className="class">
      <div className="finish">
        <img id="vector" src={Vector} alt="Vector"/>
        <p id="Today">Today</p>
        </div>
      <div className='All'>
        <img id="done_circle" src={Done_circle} alt="Done_circle"/>
        <p id="All">All</p>
      </div>
      <div className="Date">
        <img src={arrows} alt="arrows"/>
        <p id="date">Date</p>
        </div>
      {/* <img src={Avatar} alt="avatar"/> */}
    </div>
    <div className="AddTask">
      <img src={vector_2} alt="vector_2"/> 
      <p id="AddTask">AddTask</p>
    </div>
    </div>
  );
}

export default Verdict;
