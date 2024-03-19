import React, { useContext, useEffect, useState } from "react";

import "../App.css";
import TasksList from "../components/TasksList.js";
import Sidebar from "../components/Sidebar.js";
import SidebarMobile from "../components/SidebarMobile.js";
import useWindowSize from "../useWindowSize.jsx";
import "../responsive.css";
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
  PopoverArrow,
  Portal,
  IconButton,
  Button,
} from "@chakra-ui/react";

import themeNew from "../styles/themes/themeNew.js";
import { Context } from "../index.js";
import { useNavigate } from "react-router-dom";
import { LOGIN_ROUTE } from "../utils/consts.js";
import { getAll } from "../http/taskAPI.js";

function App() {
  const { user, setUser, setIsAuth } = useContext(Context);
  const [tasks, setTasks] = useState([]);
  const { height, width } = useWindowSize();
  const navigate = useNavigate();
  
  const todayTasks = async () => {
    try {
      const data = await getAll();
      setTasks(data.tasks);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };
  useEffect(() => {
    todayTasks();
  }, []);

  const [isTodaySelected, setTodaySelected] = useState(true);
  const [isDateSelected, setDateSelected] = useState(true);
  const [selectedStatus, setSelectedStatus] = useState("All");

  const {
    onOpen: onAddModalOpen,
    onClose: onAddModalClose,
    isOpen: isAddModalOpen,
  } = useDisclosure();

  function handleFilterChange(el) {
    setSelectedStatus(el);
  }

  const {
    onOpen: onUserLoginWindowOpen,
    onClose: onUserLoginWindowClose,
    isOpen: isUserLoginWindowOpen,
  } = useDisclosure();

  const logOut = () => {
    setUser({});
    setIsAuth(false);
    localStorage.removeItem("token");
    navigate(LOGIN_ROUTE);
  };

  const filterTasks = async () => {
    try {
      const data = await getAll(
        isTodaySelected ? "Today" : "All",
        isDateSelected ? "Date" : "-Date",
        selectedStatus
      );
      setTasks(data.tasks);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };
  useEffect(() => {
    filterTasks();
  }, [isTodaySelected, isDateSelected, selectedStatus]);

  // console.log(user.username)
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
            <Text variant="userNameTodoHeaderContainerText">
              {user.username}
            </Text>
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
                  <PopoverHeader>Welcome, {user.username}!</PopoverHeader>
                  <PopoverBody>
                    <Container variant="popoverBodyContainer">
                      <Button
                        variant="userRegistrationButton"
                        onClick={() => logOut()}
                      >
                        Exit
                      </Button>
                    </Container>
                  </PopoverBody>
                </PopoverContent>
              </Portal>
            </Popover>
          </Flex>

          <Flex className="todo-content">
            {width >= 771 ? (
              <Sidebar
                tasks={tasks}
                setTasks={setTasks}
                filterTasks={filterTasks}
                setTodaySelected={setTodaySelected}
                isTodaySelected={isTodaySelected}
                isDateSelected={isDateSelected}
                setDateSelected={setDateSelected}
                handleFilterChange={handleFilterChange}
                onAddModalOpen={onAddModalOpen}
                onAddModalClose={onAddModalClose}
                isAddModalOpen={isAddModalOpen}
                selectedStatus={selectedStatus}
                setSelectedStatus={setSelectedStatus}
              />
            ) : (
              <SidebarMobile
                setTasks={setTasks}
                filterTasks={filterTasks}
                setTodaySelected={setTodaySelected}
                isTodaySelected={isTodaySelected}
                handleFilterChange={handleFilterChange}
                onAddModalOpen={onAddModalOpen}
                onAddModalClose={onAddModalClose}
                isAddModalOpen={isAddModalOpen}
                selectedStatus={selectedStatus}
                setSelectedStatus={setSelectedStatus}
              />
            )}
            <TasksList
              tasks={tasks}
              setTasks={setTasks}
              filterTasks={filterTasks}
              width={width}
            />
          </Flex>
        </Container>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
