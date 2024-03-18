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
import {
  ArrowDownIcon,
  ArrowUpIcon,
  CalendarIcon,
  CheckCircleIcon,
} from "@chakra-ui/icons";
import themeNew from "../styles/themes/themeNew.js";
import { Context } from "../index.js";
import { useNavigate } from "react-router-dom";
import { LOGIN_ROUTE } from "../utils/consts.js";
import { getAll } from "../http/taskAPI.js";

function App() {
  const { user, setUser, setIsAuth } = useContext(Context);
  const [tasks, setTasks] = useState([]);
  const [renderTasks, setRenderTasks] = useState(tasks);

  const fetchData = async () => {
    try {
      const data = await getAll();
      setTasks(data.tasks);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  
  const [filterObject, SetFilterObject] = useState({
    filterBy: "Today",
    sortBy: "null",
    selectedStatus: "All",
  });
  const [isTodaySelected, setTodaySelected] = useState(true); //today
  const [isDateSelected, setDateSelected] = useState(true); //date
  const [selectedStatus, setSelectedStatus] = useState("All"); //status
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

  const {
    //добавление задачи
    onOpen: onAddModalOpen,
    onClose: onAddModalClose,
    isOpen: isAddModalOpen,
  } = useDisclosure();
  const { onToggle } = useDisclosure(); //фильтр задач

  function handleFilterChange(el) {
    //фильтр
    setSelectedStatus(el);
  }

  //popover
  const {
    onOpen: onUserLoginWindowOpen,
    onClose: onUserLoginWindowClose,
    isOpen: isUserLoginWindowOpen,
  } = useDisclosure();

  const navigate = useNavigate();

  // настройка выхода
  const logOut = () => {
    setUser({});
    setIsAuth(false);
    localStorage.removeItem("token");
    navigate(LOGIN_ROUTE);
  };

  useEffect(() => {
    const filterData = async () => {
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
    filterData();
  }, [isTodaySelected, isDateSelected, selectedStatus]);

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
                  <PopoverHeader>Welcome!</PopoverHeader>
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
                fetchData={fetchData}
                filterObject={filterObject}
                renderTasks={renderTasks}
                setRenderTasks={setRenderTasks}
                setTodaySelected={setTodaySelected}
                isTodaySelected={isTodaySelected}
                isDateSelected={isDateSelected}
                setDateSelected={setDateSelected}
                handleFilterChange={handleFilterChange}
                onAddModalOpen={onAddModalOpen}
                onAddModalClose={onAddModalClose}
                isAddModalOpen={isAddModalOpen}
                sideBarFilter={sideBarFilter}
                selectedStatus={selectedStatus}
                setSelectedStatus={setSelectedStatus}
                onToggle={onToggle}
              />
            ) : (
              <SidebarMobile
                tasks={tasks}
                setTasks={setTasks}
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
              fetchData={fetchData}
              renderTasks={renderTasks}
              setRenderTasks={setRenderTasks}
              selectedStatus={selectedStatus}
              isTodaySelected={isTodaySelected}
              width={width}
            />
          </Flex>
        </Container>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
