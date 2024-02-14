import React, { useState, useRef, useEffect } from "react";
import ModalDeleteTask from "./ModalDeleteTask";
import ModalEditTask from "./ModalEditTask";
import { Container, Flex, IconButton, Heading, CheckIcon } from '@chakra-ui/react'


const Task = ({
  task,
  deleteTask,
  toggleTaskStatus,
  saveEditTask,
  isOpenModalEditTask,
  setOpenModalEditTask,
  isOpenModalDeleteTask,
  setOpenModalDeleteTask,
}) => {
  //Деструктуризация
  const [isOpenParameters, setOpenParameters] = useState(false);

  let menuRef = useRef();

  // useEffect(() => {
  //   let handler = (event) => {
  //     if (!menuRef.current.contains(event.target)) {
  //       setOpenParameters(false);
  //     }
  //   };
  //   document.addEventListener("mousedown", handler);
  //   return () => {
  //     document.removeEventListener("mousedown", handler);
  //   };
  // });

  return (
    <Container maxW='428px' bg='purple.100' borderRadius='10px' mb='10px'  _hover={{ bg: 'purple.200' }}>
      <Flex gap='10px' alignItems='center' justifyContent='space-between'>
        <Flex gap='10px' alignItems='center' >
          <IconButton
          type='checkbox'
          checked={task.isCompleted}
          onChange={() => toggleTaskStatus(task.id)}
          isRound={true}
          variant='outline'
          colorScheme='teal'
          aria-label='Done'
          fontSize='13px'
          // icon={<CheckIcon />}
          size='xs'
          />
          <Heading className={task.isCompleted ? "crossText" : "listItem"} padding='2' maxW='290px' bg='inherit' color='black' fontSize='14px' fontWeight='400' fontFamily='Roboto' lineHeight='18.75px' isTruncated >
          {task.title}
          </Heading>
        </Flex>
        <Heading fontSize='14px' color='#6b7280' fontFamily='Roboto' fontWeight='400' lineHeight='16.41px' >
        {task.timeEnd.toLocaleDateString()}
        </Heading>
      </Flex>
    </Container>
    // <div className="task" >
    //   <div className="task-content">
    //     <label className="custom-checkbox">
    //       <input
    //         type="checkbox"
    //         className="hidden-checkbox"
    //         id="checkbox"
    //         checked={task.isCompleted}
    //         onChange={() => toggleTaskStatus(task.id)}
    //       />
    //       <div className="checkbox">
    //         <img
    //           className="checkmark"
    //           src="/assets/Vector-mark.svg"
    //           alt="vector-mark"
    //         />
    //       </div>
    //     </label>
    //     <div className={task.isCompleted ? "crossText" : "listItem"}>
    //       {task.title}
    //     </div>
    //   </div>
    //   <div className="task-content-date">
    //     <p className="task-content-date-end">{task.timeEnd.toLocaleDateString()}</p>
    //     <div ref={menuRef} className="task-contetnt-parameter-task">
    //       <button
    //         className="parameter-task-button"
    //         onClick={() => setOpenParameters(!isOpenParameters)}
    //       >
    //         <img src="/assets/Vector_3.svg" alt="vector_3" />
    //       </button>
    //       {isOpenParameters && (
    //         <div className="menu-operation-task">
    //           <button
    //             className="menu-operation-task-edit-button"
    //             onClick={() => setOpenModalEditTask(true)}
    //           >
    //             <img src="/assets/Group_2.svg" alt="group_2" />
    //           </button>
    //           {isOpenModalEditTask && (
    //             <ModalEditTask
    //               closeModal={setOpenModalEditTask}
    //               task={task}
    //               saveEditTask={saveEditTask}
    //               setOpenParameters={setOpenParameters}
    //             />
    //           )}
    //           <button
    //             className="menu-operation-task-delete-button"
    //             onClick={() => setOpenModalDeleteTask(true)}
    //           >
    //             <img src="/assets/delete-button.svg" alt="delete" />
    //           </button>
    //           {isOpenModalDeleteTask && (
    //             <ModalDeleteTask
    //               closeModal={setOpenModalDeleteTask}
    //               deleteTask={deleteTask}
    //               task={task}
    //               setOpenParameters={setOpenParameters}
    //             />
    //           )}
    //         </div>
    //       )}
    //     </div>
    //   </div>
    // </div>
  );
};

export default Task;
