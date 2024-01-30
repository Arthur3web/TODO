import React, { useState } from "react";
import Vector from "./img/Vector.svg";
import Done_circle from "./img/done circle.svg";
import arrows from "./img/arrows 1.svg";
import vector_2 from "./img/Vector_2.svg";
// import { getValue } from "@testing-library/user-event/dist/utils";
import Modal from "./components/Modal";



function Verdict({ temp }) {
  const [isOpen, setOpen] = useState(false);
  const [selectedData, setSelectedData] = useState("All");
  const arr = ["All", "Done", "Undone"];
  const [openModal, setOpenModal] = useState(false);



  function handleChange(el) {
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
            </div>
          )}
        </div>

        <div className="Date">
          <img src={arrows} alt="arrows" />
          <p id="date">Date</p>
        </div>
        {/* <img src={Avatar} alt="avatar"/> */}
      </div>
      <button className="AddTask" onClick={()=>{setOpenModal(true)}}>
        <img src={vector_2} alt="vector_2"  />
        <p id="AddTask" >AddTask</p>
      </button>
        {openModal && <Modal closeModal={setOpenModal}/>}
      
    </div>
  );
}

export default Verdict;
