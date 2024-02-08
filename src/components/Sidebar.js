import React from "react";
import Modal from "./Modal";



function Sidebar({ addTask, handleInputChange, task, selectedData, handleChange, arr, setOpen, isOpen, openModal, setOpenModal, compare }) {
  



  return (
    <div className="SideBar">
      <div className="BodySidebar">
        <div className="CalendarButton">
          <img className="CalendarIcon" src="/assets/Vector.svg" alt="Vector" />
          <p className="CalendarDate">Today</p>
        </div>
        <div className="WrapperFilterTaskList">
          <button className="MenuButtonFilterTaskList" onClick={() => setOpen(!isOpen)}  >
            <div className="MarkAll">
              <img src="/assets/done-circle.svg" alt="Done_circle" />
              <p className="ValueMark">{selectedData}</p>
            </div>
          </button>
          {isOpen && (
            <div className="MenuListFilterTaskList">
              {arr.map((el) => (
                <div className="AvailablesMarks" onClick={() => handleChange(el)}>
                  <img src="/assets/done-circle.svg" alt="Done_circle" />
                  <p>{el}</p>
                </div>
              ))}
            </div>
          )}
        </div>
        <button className="DateFilterTaskButton" onClick={()=>compare}>
          <img src="/assets/arrows.svg" alt="arrows" />
          <p className="DateFilterTaskButtonContent">Date</p>
        </button>
      </div>
      <button className="AddTaskButton" onClick={()=>{setOpenModal(true)}}>
        <img src="/assets/Vector_2.svg" alt="vector_2"  />
        <p className="AddTaskButtonContent" >AddTask</p>
      </button>
        {openModal && <Modal closeModal={setOpenModal} addTask={addTask} 
        handleInputChange={handleInputChange} task={task} />}
    </div>
  );
}

export default Sidebar;
