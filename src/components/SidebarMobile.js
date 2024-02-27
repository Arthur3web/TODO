import React from "react";
import AddTaskModal from "./AddTaskModal";

function Sidebar({
  task,
  addTask,
  setTodaySelected,
  isTodaySelected,
  setTaskNew,
  handleInputChange,
  handleFilterChange,
  handleTimeChange,
  onAddModalOpen,
  onAddModalClose,
  isAddModalOpen,
  statusList,
  setSelectedStatus,
}) {
  const handleOpenedFilter = () => {
      setTodaySelected(!isTodaySelected);
      console.log(isTodaySelected);
      setSelectedStatus("All");
  };

  return (
    <div className="sidebar-mobile">
      <button 
      className="today-button" 
      onClick={() => handleOpenedFilter()}
      >Today</button>
      <div className="filter-task" gap="10px">
      {statusList.map((el, ind) => (
        <button
        key={el}
          className="button-filter"
          onClick={() => handleFilterChange(el)}
        >
          {el}
        </button>
      ))}
      </div>
      <button className="add-task-button" onClick={onAddModalOpen}>
        AddTask
      </button>
      <AddTaskModal
        isAddModalOpen={isAddModalOpen}
        onAddModalClose={onAddModalClose}
        handleInputChange={handleInputChange}
        handleTimeChange={handleTimeChange}
        task={task}
        addTask={addTask}
        setTaskNew={setTaskNew}
      />
    </div>
  );
}

export default Sidebar;
