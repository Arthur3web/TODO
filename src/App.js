import React, { useState } from "react";
import "./App.css";
import TasksList from "./components/TasksList.js";
import Sidebar from "./components/Sidebar.js";
import {
  ChakraProvider,
  Flex,
  Container,
  Image,
  Heading,
  Text,
  HStack,
} from "@chakra-ui/react";
// import { newStyleTheme } from "./styles/theme.js";

function App() {
  const [taskList, setTaskList] = useState([]);

  const [selectedStatus, setSelectedStatus] = useState("All"); //sidebar
  const statusList = ["All", "Done", "Undone"]; //
  const sideBarFilter = [
    {
      id: "Today",
      name: "Today",
      path: "/assets/Vector_4.svg",
    },
    {
      id: "All",
      name: /*"All"*/ selectedStatus,
      path: "/assets/done-circle.svg",
    },
    {
      id: "Date",
      name: "Date",
      path: "/assets/arrows.svg",
    },
  ]; //

  const [isOpen, setOpen] = useState(false);
  const [isOpenModalAddTask, setOpenModalAddTask] = useState(false);
  const [isOpenModalEditTask, setOpenModalEditTask] = useState(false);
  const [isOpenModalDeleteTask, setOpenModalDeleteTask] = useState(false);



  // console.log('selectedStatus', selectedStatus)
  function handleFilterChange(el) {
    //фильтр
    setSelectedStatus(el);
    setOpen(false);
    // console.log(taskList);
  }

  const [taskNew, setTaskNew] = useState({
    title: "",
    timeEnd: new Date(),
  });

  const handleInputChange = (e) => {
    setTaskNew({ ...taskNew, title: e.target.value });
  };

  const handleTimeChange = (e) => {
    setTaskNew({ ...taskNew, timeEnd: new Date(e.target.value) });
  };

  const addTask = () => {
    const newTask = {
      id: Date.now(),
      ...taskNew,
      timeStart: /*new Date().toLocaleDateString()*/ new Date(),
      isCompleted: false,
    };
    setTaskNew({
      title: "",
      timeEnd: new Date(),
    });
    setTaskList([...taskList, newTask]);
  };

  function saveEditTask(id, title, timeEnd) {
    const newTodo = taskList.map((item) => {
      if (item.id == id) {
        return {
          ...item,
          title: title,
          timeEnd: timeEnd,
          isCompleted: false,
        };
      }
      return item;
    });
    setTaskList(newTodo);
  }

  const deleteTask = (id) => {
    setTaskList(taskList.filter((item) => item.id !== id));
  };

  const toggleTaskStatus = (id) => {
    const element = taskList.findIndex((elem) => elem.id == id);
    const newTaskList = [...taskList];
    newTaskList[element] = {
      ...newTaskList[element],
      isCompleted: !newTaskList[element].isCompleted,
    };
    setTaskList(newTaskList);
  };

  return (
    <ChakraProvider /*theme={newStyleTheme}*/>
      <Flex
        maxW="1366px"
        maxH="1024px"
        w="100%"
        h="100%"
        alignItems="center"
        justifyContent="space-between"
      >
        <HStack>
          <Heading
            color="#404040"
            fontSize="96px"
            fontFamily="Roboto"
            fontWeight="700"
            // textStyle='h1'
            ml="65px"
          >
            To-Do
          </Heading>{" "}
          <Text
            color="#9333EA"
            fontSize="96px"
            fontFamily="Roboto"
            fontWeight="700"
          >
            UI
          </Text>
        </HStack>

        <Container>
          <Flex flexDirection="column" alignItems="baseline" mr="90px">
            <Flex
              w="672px"
              h="47px"
              bg="rgba(244, 244, 244, 1)"
              borderRadius="10px"
              p="16px 20px 16px 20px"
              justifyContent="space-between"
              alignItems="center"
            >
              <Text
                w="55px"
                h="23px"
                color="#9333EA"
                fontFamily="Roboto"
                fontSize="20px"
                lineHeight="23.44px"
                fontWeight="700"
              >
                To-Do
              </Text>
              <Text
                w="76px"
                h="19px"
                color="#9333EA"
                fontFamily="Roboto"
                fontSize="16px"
                lineHeight="18.75px"
                fontWeight="400"
              >
                UserName
              </Text>
              <Image
                src="/assets/bi_person-circle.svg"
                alt="avatar"
                size="1.5rem"
              />
            </Flex>
            <Flex w="672px" h="343px" pt="31px" justifyContent="space-between">
              <Sidebar
                addTask={addTask}
                handleInputChange={handleInputChange}
                task={taskNew.title}
                taskTime={taskList.timeEnd}
                handleFilterChange={handleFilterChange}
                selectedStatus={selectedStatus}
                setOpen={setOpen}
                statusList={statusList}
                isOpen={isOpen}
                isOpenModalAddTask={isOpenModalAddTask}
                setOpenModalAddTask={setOpenModalAddTask}
                handleTimeChange={handleTimeChange}
                setTaskNew={setTaskNew}
                sideBarFilter={sideBarFilter}
                taskList={taskList}
                setSelectedStatus={setSelectedStatus}
              />
              <TasksList
                selectedStatus={selectedStatus}
                deleteTask={deleteTask}
                saveEditTask={saveEditTask}
                toggleTaskStatus={toggleTaskStatus}
                isOpenModalDeleteTask={isOpenModalDeleteTask}
                setOpenModalDeleteTask={setOpenModalDeleteTask}
                isOpenModalEditTask={isOpenModalEditTask}
                setOpenModalEditTask={setOpenModalEditTask}
                taskList={taskList}
              />
            </Flex>
          </Flex>
        </Container>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
