import { useState } from "react";
import ModalDeleteTask from "./ModalDeleteTask";
import ModalEditTask from "./ModalEditTask";
// import ModalMenuTaskParameters from "./ModalMenuTaskParameters";

const Task = ({ task, deleteTask, taskCompleted, setTaskList, saveEditTask }) => { //Деструктуризация
    const [isOpen, setOpen] = useState(false);
    // const [openModalMenuTaskParameters, setOpenModalMenuTaskParameters] = useState(false);
    const [openModalDeleteTask, setOpenModalDeleteTask] = useState(false);
    const [openModalEditTask, setOpenModalEditTask] = useState(false);


    

    return (
        <div className="Task" id="Task">
                        <div className="Content">
                            <label class="checkbox style-f">
                                <input type="checkbox" onChange={() => taskCompleted(task.id)} />
                                <div class="checkbox__checkmark" ></div>
                            </label>
                            <div className={task.isCompleted ? "crossText" : "listItem"}>{task.title}</div>
                        </div>
                        <div className="TimeTask">
                            <p className='DateTask'>{task.time}</p>
                            <div className="ParameterTask">
                              

                                <button className="ParameterTaskButton" onClick={() => setOpen(!isOpen)}>
                                    <img src="/assets/Vector_3.svg" alt="vector_3" />
                                </button>
                                {/* {openModalMenuTaskParameters && <ModalMenuTaskParameters closeModal={setOpenModalMenuTaskParameters} task={task} 
                                deleteTask={deleteTask} setTaskList={setTaskList} saveEditTask={saveEditTask}/>} */}
                                {isOpen && (
                                    <div className="MenuOperationTask">
                                        <button className="editButton" onClick={() => setOpenModalEditTask(true)}>
                                            <img src="/assets/Group_2.svg" alt='group_2' />
                                        </button>
                                        {openModalEditTask && <ModalEditTask closeModal={setOpenModalEditTask} task={task} 
                                        setTaskList={setTaskList} saveEditTask={saveEditTask}/>}
                                        <button className="deleteButton" onClick={() => setOpenModalDeleteTask(true)}>
                                            <img src="/assets/delete-button.svg" alt="delete" />
                                        </button>
                                        {openModalDeleteTask && <ModalDeleteTask closeModal={setOpenModalDeleteTask} deleteTask={deleteTask} task={task}/>}
                                    </div>
                                )}
                                
                            </div>
                        </div>
                    </div> 
    )
}

export default Task