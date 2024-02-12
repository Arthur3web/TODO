import React, { useState, useRef, useEffect } from "react";
import "./ModalEditTask.css";

function ModalEditTask({ closeModal, task, saveEditTask, setOpenParameters }) {
  const [note, setNote] = useState(task.title);
  const [noteTime, setNoteTime] = useState(task.timeEnd);

  let menuRef = useRef(); //настройка закрытия модального окна при клике вне его поля

  useEffect(() => {
    let handler = (event) => {
      if (!menuRef.current.contains(event.target)) {
        closeModal(false);
        setOpenParameters(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const handleKeyDown = (event) => {
    //настройка закрытия модального окна при нажатии на клавиши Enter и Esc
    if (event.key === "Enter") {
      if (note !== "") {
        saveEditTask(task.id, note, noteTime);
        closeModal(false);
        setOpenParameters(false);
      }
    }
    if (event.key === "Escape") {
      closeModal(false);
      setOpenParameters(false);
    }
  };

  function handleInputChangeEditTask(e) {
    setNote(e.target.value);
  }
  function handleInputChangeEditTaskTime(e) {
    setNoteTime(e.target.value);
  }

  function editTask(id) {
    if (note !== "") {
      saveEditTask(task.id, note, noteTime);
      closeModal(false);
      setOpenParameters(false);
      console.log(task);
    }
  }

  return (
    <div className="background-modal-edit-task">
      <div className="wrapper-modal-edit-task" ref={menuRef}>
        <div className="modal-header">
          <h1 className="modal-title">Edit task</h1>
        </div>
        <div className="modal-content">
          <input
            className="modal-content-input"
            value={note}
            onChange={handleInputChangeEditTask}
            autoFocus={true}
            onKeyDown={handleKeyDown}
            required
          />
          <input
            type="date"
            className="modal-content-date-end"
            value={noteTime}
            onChange={handleInputChangeEditTaskTime}
          />
        </div>
        <div className="modal-footer">
          <button
            className="save-button"
            onClick={() => editTask(task.id, note)}
          >
            <img src="/assets/Check_ring.svg" alt="Check_ring" />
            <p className="save-button-content">Save</p>
          </button>
          <button
            className="close-button"
            onClick={() => {
              closeModal(false);
              setOpenParameters(false);
            }}
          >
            <img src="/assets/Vector_s.svg" alt="Vector_s" />
            <p>Close</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalEditTask;
