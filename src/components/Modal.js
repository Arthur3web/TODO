import React, { useState, useRef, useEffect } from "react";
import "./Modal.css";

function Modal({
  closeModal,
  addTask,
  handleInputChange,
  task,
  handleTimeChange,
  setTaskNew,
}) {
  const [value, setValue] = useState("");

  let menuRef = useRef(); //настройка закрытия модального окна

  useEffect(() => {
    let handler = (event) => {
      if (!menuRef.current.contains(event.target)) {
        closeModal(false);
        setTaskNew({
          title: "",
          // timeEnd: ''
        });
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      //   console.log('✅ Enter key pressed');
      if (task !== "") {
        addTask(value);
        event.preventDefault();
        closeModal(false);
      }
    }
    if (event.key === "Escape") {
      closeModal(false);
      setTaskNew({
        title: "",
        timeEnd: "",
      });
    }
  };

  function saveTask() {
    if (task !== "") {
      addTask(value);
      closeModal(false);
    }
  }

  return (
    <div className="background-modal-add-task">
      <div className="wrapper-modal-add-task" ref={menuRef}>
        <div className="modal-header">
          <h1 className="modal-title">Create task</h1>
        </div>
        <div className="modal-content">
          <input
            className="modal-content-input"
            placeholder="Enter text..."
            onChange={handleInputChange}
            value={task}
            autoFocus={true}
            onKeyDown={handleKeyDown}
            required
          />
          <input type="date" className="modal-content-date-end" onChange={handleTimeChange} />
        </div>
        <div className="modal-footer">
          <button className="save-button" onClick={saveTask}>
            <img src="/assets/Check_ring.svg" alt="Check_ring" />
            <p className="save-button-content">Save</p>
          </button>
          <button className="close-button" onClick={() => closeModal(false)}>
            <img src="/assets/Vector_s.svg" alt="Vector_s" />
            <p>Close</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
