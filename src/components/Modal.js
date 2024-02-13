import React, { useState, useRef, useEffect } from "react";
import "./Modal.css";
import { Button, Box, DeleteIcon } from '@chakra-ui/react'

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
        <Box
          display='flex'
          alignItems='center'
          justifyContent='space-evenly'
          width='422px'
          height='40px'
        >
            <Button
              onClick={saveTask}
              width='185px'
              height='40px'
              lineHeight='1.2'
              transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
              borderRadius='10px'
              fontSize='16px'
              fontWeight='semibold'
              bg='#ebedf0'
              color='#67b8cb'
              _hover={{ bg: '#E0FFFF' }}
              _active={{
                bg: '#E0FFFF',
                transform: 'scale(0.9)',
                color: '#4682B4', 
              }}
              _focus={{
                boxShadow:
                '0 0 1px 2px , 0 1px 1px rgba(0, 0, 0, .15)',
              }}
              >
                {/* <DeleteIcon /> */}
                {/* <img src="/assets/Check_ring.svg" alt="Check_ring" /> */}
                Save Task
              </Button>
            <Button
              onClick={()=>closeModal(false)}
              colorScheme='blackAlpha'
              width='185px'
              height='40px'
              lineHeight='1.2'
              transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
              borderRadius='10px'
              fontSize='16px'
              fontWeight='semibold'
              bg='#6B7280'
              _active={{
                bg: '#6B7280',
                transform: 'scale(0.9)',
                color: 'white', 
              }}
              _focus={{
                boxShadow:
                '0 0 1px 2px black, 0 1px 1px rgba(0, 0, 0, .15)',
              }}
            >
            Close
            </Button>
          </Box>
      </div>
    </div>
  );
}

export default Modal;
