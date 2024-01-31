// const App = () => {
//   const [tasksList, setTasksList] = useState([]);
//   const addTask = (newTask) => {
//     setTasksList([...tasksList, newTask]);
//   };

//   return (
//     <div>
//       <TasksList addTask={addTask} tasksList={tasksList} />
//     </div>
//   );
// };

// const AddTaskModal = ({ addTask }) => {
//   const [value, setValue] = useState("");
//   const handleInputChange = (val) => {
//     setValue(val);
//   };
//   return (
//     <div>
//       <input onChange={handleInputChange} value={value} />
//       <button onClick={() => addTask(value)}></button>
//     </div>
//   );
// };

// const TasksList = ({ tasksList, addTask }) => {
//   return (
//     <div>
//       <AddTaskModal addTask={addTask} />

//       {tasksList.map((el) => (
//         <Task task={el} />
//       ))}
//     </div>
//   );
// };

// const Task = ({ task }) => {
//   <div>{task.text}</div>;
// };











/////////const [taskList, setTaskList] = useState(
    // {
    //     title: "Task",
    //     time: "Today at 18:30",
    //     isCheked: false,
    //   },
    // );




    //TaskList



