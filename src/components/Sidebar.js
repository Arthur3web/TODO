import React from "react";
import Modal from "./Modal";

function Sidebar({
  addTask,
  handleInputChange,
  task,
  selectedData,
  handleChange,
  arr,
  setOpen,
  isOpen,
  openModal,
  setOpenModal,
  handleTime,
  taskTime,
  setTaskNew,
  arr1,
  setFiltered,
  taskList,
  setSelectedData,
}) {


  const handleOpenedFilter = (name) => {
    // if(name !== selectedData) return
    // setOpen(!isOpen)
    if(name == "Today") {
      setFiltered(taskList.filter(item => item.taskTime == new Date()))
      setSelectedData("All")
      console.log("AAAAAAAAAAAAAAAAA")
    } else if (name == selectedData) {
      setOpen(!isOpen)
    }

  }

  return (
    <div className="SideBar">
      <div className="BodySidebar">
      {
        arr1.map(item => 
          <div>
            <div className="CalendarButton" onClick={() => handleOpenedFilter(item.name)}> 
              <img src={item.path} alt="Vector" className="CalendarIcon"/>
              <p className="CalendarDate">{item.name}</p>
            </div>
            {
              item.name === selectedData && (isOpen && 
                <div className="MenuListFilterTaskList">
                  {
                    arr.map((el, ind) => 
                    <div
                    id={el + ind}
                    className={`AvailablesMarks + ${
                      el === selectedData && "Active"
                    }`}
                    onClick={() => handleChange(el)}
                  >
                    <img src="/assets/done-circle.svg" alt="Done_circle" />
                    <p>{el}</p>
                  </div>
                    )}
                </div>
                )
            }
          </div>
          )    
      }
      </div>
      <button
        className="AddTaskButton"
        onClick={() => {
          setOpenModal(true);
        }}
      >
        <img src="/assets/Vector_2.svg" alt="vector_2" />
        <p className="AddTaskButtonContent">AddTask</p>
      </button>
      {openModal && (
        <Modal
          closeModal={setOpenModal}
          addTask={addTask}
          taskTime={taskTime}
          handleInputChange={handleInputChange}
          task={task}
          handleTime={handleTime}
          setTaskNew={setTaskNew}
        />
      )}
    </div>
  );
}

export default Sidebar;
