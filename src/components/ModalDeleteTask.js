import React, { useRef, useEffect } from "react";
import "./ModalDeleteTask.css";

function ModalDeleteTask({ closeModal, deleteTask, task, setOpenParameters }) {
  let menuRef = useRef(); //настройка закрытия модального окна

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

  function deleteTaskButton(id) {
    deleteTask(id);
    closeModal(false);
    setOpenParameters(false);
  }

  return (
    <div className="background-modal-delete-task">
      <div className="wrapper-modal-delete-task" ref={menuRef}>
        <div className="modal-header">
          <h1 className="modal-title">Delete task</h1>
        </div>
        <div className="modal-content">
          <p className="text">
            Are you sure about deleting this task?
          </p>
        </div>
        <div className="modal-footer">
          <button
            className="delete-button"
            onClick={() => deleteTaskButton(task.id)}
          >
            <img src="/assets/trash.svg" alt="trash" />
            <p className="delete-button-content">Delete</p>
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

export default ModalDeleteTask;
