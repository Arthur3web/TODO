import React, { useState, useRef, useEffect } from "react";
import ModalDeleteTask from "./ModalDeleteTask";
import ModalEditTask from "./ModalEditTask";
import {
  Container,
  Flex,
  IconButton,
  Text,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { CheckIcon, EditIcon, DeleteIcon } from "@chakra-ui/icons";

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
    <Container
      maxW="428px"
      bg="purple.100"
      borderRadius="10px"
      mb="10px"
      _hover={{ bg: "purple.200" }}
    >
      <Flex gap="10px" alignItems="center" justifyContent="space-between">
        <Flex gap="10px" alignItems="center">
          <IconButton
            onClick={() => toggleTaskStatus(task.id)}
            isRound={true}
            variant="outline"
            colorScheme="gray.900"
            aria-label="Done"
            fontSize="10px"
            size='xs'
            icon={<CheckIcon />}
          />
          <Text
            className={task.isCompleted ? "crossText" : "listItem"}
            padding="2"
            maxW="257px"
            bg="inherit"
            fontSize="14px"
            fontWeight="400"
            fontFamily="Roboto"
            lineHeight="18.75px"
            isTruncated
          >
            {task.title}
          </Text>
        </Flex>
        <Flex alignItems="center" gap="10px">
          <Text
            fontSize="14px"
            color="#6b7280"
            fontFamily="Roboto"
            fontWeight="400"
            lineHeight="16.41px"
          >
            {task.timeEnd.toLocaleDateString()}
          </Text>

          <Menu >
            <MenuButton
              // onClick={() => setOpenParameters(!isOpenParameters)}
              bg="inherit"
              size="xs"
              aria-label="Options"
            >
              <Image boxSize="13px" src="/assets/Vector_3.svg" alt="Vector_3" />
            </MenuButton>
            <MenuList 
              borderRadius="10px"
              border="1px solid #9333EA"
              bg="white"
              size='xs'
              
            >
              <MenuItem
              onClick={() => setOpenModalEditTask(true)}
              >
                <EditIcon color="gray.600" />
              </MenuItem>
              {isOpenModalEditTask && (
                <ModalEditTask
                  closeModal={setOpenModalEditTask}
                  task={task}
                  saveEditTask={saveEditTask}
                  setOpenParameters={setOpenParameters}
                />
              )}
              <MenuItem 
              onClick={() => setOpenModalDeleteTask(true)}
              >
                <DeleteIcon color="red.600" />
              </MenuItem>
              {isOpenModalDeleteTask && (
                <ModalDeleteTask
                  closeModal={setOpenModalDeleteTask}
                  deleteTask={deleteTask}
                  task={task}
                  setOpenParameters={setOpenParameters}
                />
              )}
            </MenuList>
          </Menu>
        </Flex>
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
