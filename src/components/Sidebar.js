import React from "react";
import ModalAddTask from "./ModalAddTask";

function Sidebar({
  addTask,
  handleInputChange,
  task,
  selectedStatus,
  handleFilterChange,
  statusList,
  setOpen,
  isOpen,
  isOpenModalAddTask,
  setOpenModalAddTask,
  handleTimeChange,
  taskTime,
  setTaskNew,
  sideBarFilter,
  taskList,
  setSelectedStatus,
}) {
  const handleOpenedFilter = (name) => {
    if (name == "Today") {
      console.log(taskList.taskTime);
      setSelectedStatus("All");
      console.log("AAAAAAAAAAAAAAAAA");
    } else if (name == selectedStatus) {
      setOpen(!isOpen);
    }
  };

  return (
    <div className="side-bar">
      <div className="side-bar-content">
        {sideBarFilter.map((item) => (
          <div key={item.id}> 
            <div 
              className="filter-button"
              onClick={() => handleOpenedFilter(item.name)}
            >
              <img src={item.path} alt="Vector" className="calendar-icon" />
              <p className="calendar-date">{item.name}</p>
            </div>
            {item.name === selectedStatus && isOpen && (
              <div className="menu-filter-task-list">
                {statusList.map((el, ind) => (
                  <div
                    key={el + ind}
                    className={`availables-marks + ${
                      el === selectedStatus && "active"
                    }`}
                    onClick={() => handleFilterChange(el)}
                  >
                    <img src="/assets/done-circle.svg" alt="Done_circle" />
                    <p>{el}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <button
        className="add-task-button"
        onClick={() => {
          setOpenModalAddTask(true);
        }}
      >
        <img src="/assets/Vector_2.svg" alt="vector_2" />
        <p className="add-task-button-content">AddTask</p>
      </button>
      {isOpenModalAddTask && (
        <ModalAddTask
          closeModal={setOpenModalAddTask}
          addTask={addTask}
          taskTime={taskTime}
          handleInputChange={handleInputChange}
          task={task}
          handleTimeChange={handleTimeChange}
          setTaskNew={setTaskNew}
        />
      )}
    </div>
  );
}

export default Sidebar;
