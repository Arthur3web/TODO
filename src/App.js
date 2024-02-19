import React, { useState, useEffect } from "react";
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
  useDisclosure,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Portal,
  IconButton,
  Button,
} from "@chakra-ui/react";
import { WarningIcon } from "@chakra-ui/icons";
// import theme from "./styles/themes/theme.js";

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
  const [isTodaySelected, setTodaySelected] = useState(true);
  const [isDateSelected, setDateSelected] = useState(true);
  const {
    onOpen: onAddModalOpen,
    onClose: onAddModalClose,
    isOpen: isAddModalOpen,
  } = useDisclosure();
  const {
    onOpen: onDeleteModalOpen,
    onClose: onDeleteModalClose,
    isOpen: isDeleteModalOpen,
  } = useDisclosure();
  const {
    onOpen: onEditModalOpen,
    onClose: onEditModalClose,
    isOpen: isEditModalOpen,
  } = useDisclosure();

  // console.log('selectedStatus', selectedStatus)
  function handleFilterChange(el) {
    //фильтр
    setSelectedStatus(el);
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
    <ChakraProvider >
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
              <Popover placement="bottom-end" isLazy>
                <PopoverTrigger>
                  <IconButton
                    isRound={true}
                    variant='solid'
                    size='1.5rem'
                    icon={<Image
                      src="/assets/bi_person-circle.svg"
                      alt="avatar"
                    />}
                  />
                </PopoverTrigger>
                <Portal>
                  <PopoverContent width='330px' zIndex={40} >
                    <PopoverArrow />
                    <PopoverHeader fontFamily="Roboto" fontSize='20px' fontWeight='400'>Добро пожаловать!</PopoverHeader>
                    <PopoverCloseButton />
                    <PopoverBody >
                      <Flex alignItems='center' justifyContent='space-around'>
                        <Button colorScheme='purple'>Войти</Button>
                        <Button colorScheme='pink'>Зарегистрироваться</Button>
                      </Flex>
                    </PopoverBody>
                    <PopoverFooter><Flex alignItems='center' gap='10px'><WarningIcon color='red.500' /><Text fontFamily="Roboto" fontSize='14px' fontWeight='200' color='#6B7280'>Для продолжения выберите один из вариантов</Text></Flex></PopoverFooter>
                  </PopoverContent>
                </Portal>
              </Popover>
            </Flex>
            <Flex w="672px" h="343px" pt="31px" justifyContent="space-between">
              <Sidebar
                task={taskNew.title}
                addTask={addTask}
                taskList={taskList}
                setTaskList={setTaskList}
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
              />
              <TasksList
                taskList={taskList}
                sideBarFilter={sideBarFilter}
                selectedStatus={selectedStatus}
                setTodaySelected={setTodaySelected}
                isTodaySelected={isTodaySelected}
                deleteTask={deleteTask}
                saveEditTask={saveEditTask}
                toggleTaskStatus={toggleTaskStatus}
                onEditModalOpen={onEditModalOpen}
                onEditModalClose={onEditModalClose}
                isEditModalOpen={isEditModalOpen}
                onDeleteModalOpen={onDeleteModalOpen}
                onDeleteModalClose={onDeleteModalClose}
                isDeleteModalOpen={isDeleteModalOpen}
              />
            </Flex>
          </Flex>
        </Container>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
