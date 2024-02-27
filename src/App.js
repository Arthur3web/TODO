import React, { useState } from "react";
import "./App.css";
import TasksList from "./components/TasksList.js";
import Sidebar from "./components/Sidebar.js";
import SidebarMobile from "./components/SidebarMobile.js";
import EditTaskModal from "./components/EditTaskModal.js";
import DeleteTaskModal from "./components/DeleteTaskModal.js";
import CreateAccountModal from "./components/CreateAccountModal.js";
// import AddTaskModal from "./AddTaskModal";
import useWindowSize from "./useWindowSize.jsx";
import "./responsive.css";
import {
  ChakraProvider,
  Flex,
  Container,
  Image,
  Text,
  useDisclosure,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  Portal,
  IconButton,
  Button,
} from "@chakra-ui/react";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  CalendarIcon,
  CheckCircleIcon,
  WarningIcon,
} from "@chakra-ui/icons";
import themeNew from "./styles/themes/themeNew.js";

function App() {
  const [taskList, setTaskList] = useState([]); //tasklist
  const [isTodaySelected, setTodaySelected] = useState(true); //today
  const [isDateSelected, setDateSelected] = useState(true); //date
  const [selectedStatus, setSelectedStatus] = useState("All"); //status
  const statusList = ["All", "Done", "Undone"]; //menu-filter

  const { height, width } = useWindowSize();
  const sideBarFilter = [
    //sidebar
    {
      id: "Today",
      name: "Today",
      path: (
        <CalendarIcon
          fontSize="17px"
          color={isTodaySelected && "Today" ? "#9333EA" : "#404040"}
        />
      ),
    },
    {
      id: "All",
      name: /*"All"*/ selectedStatus,
      path: (
        <CheckCircleIcon
          fontSize="20px"
          color={
            !isTodaySelected &&
            "All" &&
            (selectedStatus === "All", "Done", "Undone")
              ? "#9333EA"
              : "#6B7280"
          }
        />
      ),
    },
    {
      id: "Date",
      name: "Date",
      path: (
        <Flex>
          <ArrowDownIcon
            fontSize="small"
            color={isDateSelected ? "#9333EA" : "#404040"}
          />
          <ArrowUpIcon
            fontSize="small"
            color={!isDateSelected ? "#9333EA" : "#404040"}
          />
        </Flex>
      ),
    },
  ]; //
  const [taskNew, setTaskNew] = useState({
    title: "",
    timeEnd: new Date(),
  });
  const {
    //добавление задачи
    onOpen: onAddModalOpen,
    onClose: onAddModalClose,
    isOpen: isAddModalOpen,
  } = useDisclosure();
  const { onToggle } = useDisclosure(); //фильтр задач
  const {
    //регистрация пользователя
    onOpen: onCreateAccountModalOpen,
    onClose: onCreateAccountModalClose,
    isOpen: isCreateAccountModalOpen,
  } = useDisclosure();

  function handleFilterChange(el) {
    //фильтр
    setSelectedStatus(el);
  }

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

  function editTask(id, title, timeEnd) {
    const newTodo = taskList.map((item) => {
      if (item.id === id) {
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
    const element = taskList.findIndex((elem) => elem.id === id);
    const newTaskList = [...taskList];
    newTaskList[element] = {
      ...newTaskList[element],
      isCompleted: !newTaskList[element].isCompleted,
    };
    setTaskList(newTaskList);
  };

  //CreateAccountModal
  const [inputUserData, setInputUserData] = useState("");
  const handleInputEmailUserChange = (e) => setInputUserData(e.target.value);
  const isError = inputUserData === "";

  //EditTaskModal
  const [newEditTask, setNewEditTask] = useState();
  const [isClickEditTaskButton, setClickEditTaskButton] = useState(false);
  const handleEditTask = (el) => {
    setNewEditTask(el);
  };

  //DeleteTaskModal
  const [isDeletedTask, setDeletedTask] = useState();
  const [isClickDeleteTaskButton, setClickDeleteTaskButton] = useState(false);
  const handleDeleteTask = (el) => {
    setDeletedTask(el);
  };
  //UserLoginWindow
  const {
    onOpen: onUserLoginWindowOpen,
    onClose: onUserLoginWindowClose,
    isOpen: isUserLoginWindowOpen,
  } = useDisclosure();

  console.log({ width });
  return (
    <ChakraProvider theme={themeNew}>
      <Flex className="wrapper">
        {height >= 480 ? (
          <Text className="title-wrapper">
            To-Do{" "}
            <Text as="span" id="text">
              UI
            </Text>
          </Text>
        ) : (
          ""
        )}

        <Container variant="todoContainer">
          <Flex className="todo-header">
            <Text variant="titleTodoHeaderContainerText">To-Do</Text>
            <Text variant="userNameTodoHeaderContainerText">UserName</Text>
            <Popover
              variant="custom"
              placement="bottom-end"
              onClose={onUserLoginWindowClose}
              onOpen={onUserLoginWindowOpen}
              isOpen={isUserLoginWindowOpen}
              isLazy
            >
              <PopoverTrigger>
                <IconButton
                  variant="avatarUser"
                  icon={
                    <Image src="/assets/bi_person-circle.svg" alt="avatar" />
                  }
                />
              </PopoverTrigger>
              <Portal>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverHeader>Welcome!</PopoverHeader>
                  <PopoverBody>
                    <Container variant="popoverBodyContainer">
                      <Button variant="loginButton">Login</Button>
                      <Button
                        variant="userRegistrationButton"
                        onClick={onCreateAccountModalOpen}
                      >
                        Register
                      </Button>
                    </Container>
                  </PopoverBody>
                  <PopoverFooter>
                    <Container variant="popoverFooterContentContainer">
                      <WarningIcon color="red.500" />
                      <Text variant="popoverFooterContentContainerText">
                        To save your checklist, you must log in to your account.
                      </Text>
                    </Container>
                  </PopoverFooter>
                </PopoverContent>
              </Portal>
            </Popover>
          </Flex>
          <CreateAccountModal
            isCreateAccountModalOpen={isCreateAccountModalOpen}
            onCreateAccountModalClose={onCreateAccountModalClose}
            isError={isError}
            handleInputEmailUserChange={handleInputEmailUserChange}
            inputUserData={inputUserData}
          />
          <Flex className="todo-content">
            {width >= 771 ? (
              <Sidebar
                task={taskNew.title}
                addTask={addTask}
                taskList={taskList}
                setTodaySelected={setTodaySelected}
                isTodaySelected={isTodaySelected}
                isDateSelected={isDateSelected}
                setDateSelected={setDateSelected}
                setTaskNew={setTaskNew}
                handleInputChange={handleInputChange}
                handleFilterChange={handleFilterChange}
                handleTimeChange={handleTimeChange}
                onAddModalOpen={onAddModalOpen}
                onAddModalClose={onAddModalClose}
                isAddModalOpen={isAddModalOpen}
                statusList={statusList}
                sideBarFilter={sideBarFilter}
                selectedStatus={selectedStatus}
                setSelectedStatus={setSelectedStatus}
                onToggle={onToggle}
              />
            ) : (
              <SidebarMobile
                task={taskNew.title}
                addTask={addTask}
                taskList={taskList}
                setTodaySelected={setTodaySelected}
                isTodaySelected={isTodaySelected}
                setTaskNew={setTaskNew}
                handleInputChange={handleInputChange}
                handleFilterChange={handleFilterChange}
                handleTimeChange={handleTimeChange}
                onAddModalOpen={onAddModalOpen}
                onAddModalClose={onAddModalClose}
                isAddModalOpen={isAddModalOpen}
                statusList={statusList}
                selectedStatus={selectedStatus}
                setSelectedStatus={setSelectedStatus}
              />
            )}
            <TasksList
              taskList={taskList}
              selectedStatus={selectedStatus}
              isTodaySelected={isTodaySelected}
              toggleTaskStatus={toggleTaskStatus}
              handleEditTask={handleEditTask}
              isClickEditTaskButton={isClickEditTaskButton}
              setClickEditTaskButton={setClickEditTaskButton}
              handleDeleteTask={handleDeleteTask}
              setClickDeleteTaskButton={setClickDeleteTaskButton}
              width={width}
            />
          </Flex>
        </Container>
      </Flex>
      {isClickEditTaskButton && (
        <EditTaskModal
          isClickEditTaskButton={isClickEditTaskButton}
          editTask={editTask}
          newEditTask={newEditTask}
          closeModal={setClickEditTaskButton}
          setNewEditTask={setNewEditTask}
        />
      )}
      {isClickDeleteTaskButton && (
        <DeleteTaskModal
          isClickDeleteTaskButton={isClickDeleteTaskButton}
          deleteTask={deleteTask}
          closeModal={setClickDeleteTaskButton}
          isDeletedTask={isDeletedTask}
        />
      )}
    </ChakraProvider>
  );
}

export default App;
