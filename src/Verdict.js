import React, { useState } from "react";
import Vector from "./Vector.svg";
import Done_circle from "./done circle.svg";
import arrows from "./arrows 1.svg";
import vector_2 from "./Vector_2.svg";
import { getValue } from "@testing-library/user-event/dist/utils";

function Verdict({ temp }) {
  const [isOpen, setOpen] = useState(false);
  const [selectedData, setSelectedData] = useState("All");
  const arr = ["All", "Done", "Undone"];

  function handleChange(el) {
    // const result = arr.map((elem) => {
    //   if (elem === index) return { elem };
    //   return elem;
    // });
    // setSelectedData(result);
    // console.log(result);
    setSelectedData(el);
    setOpen(false);

  }

  return (
    <div className="Kolonna">
      <div className="class">
        <div className="finish">
          <img id="vector" src={Vector} alt="Vector" />
          <p id="Today">Today</p>
        </div>

        <div className="header">
          <button className="menu-button" onClick={() => setOpen(!isOpen)}>
            <div className="All">
              <img id="done_circle" src={Done_circle} alt="Done_circle" />
              <p id="All">{selectedData}</p>
            </div>
          </button>
          {isOpen && (
            <div className="menu-list">
              {arr.map((el) => (
                <div className="option" onClick={() => handleChange(el)}>
                  <img id="done_circle" src={Done_circle} alt="Done_circle" />
                  <p id="option">{el}</p>
                </div>
              ))}
              {/* <div className="option" onClick={handleChange}>
              <img id="done_circle" src={Done_circle} alt="Done_circle"/>
                <p id="option_1">All</p>
              </div>
              <div className="option" onClick={()=>setSelectedData("Done")}>
              <img id="done_circle" src={Done_circle} alt="Done_circle"/>
                <p id="option_2">Done</p>
              </div>
              <div className="option" onClick={()=>setSelectedData("Undone")}>
              <img id="done_circle" src={Done_circle} alt="Done_circle"/>
                <p id="option_3">Undone</p>
              </div> */}
            </div>
          )}
        </div>

        <div className="Date">
          <img src={arrows} alt="arrows" />
          <p id="date">Date</p>
        </div>
        {/* <img src={Avatar} alt="avatar"/> */}
      </div>
      <div className="AddTask">
        <img src={vector_2} alt="vector_2" />
        <p id="AddTask">AddTask</p>
      </div>
    </div>
  );
}

export default Verdict;
