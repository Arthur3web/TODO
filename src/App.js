import React, { useState, useEffect } from "react";
import "./App.css";
import TasksList from "./components/TasksList.js";
import Sidebar from "./components/Sidebar.js";
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
  PopoverCloseButton,
  Portal,
  IconButton,
  Button,
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalContent,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  FormErrorMessage,
} from "@chakra-ui/react";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  CalendarIcon,
  CheckCircleIcon,
  WarningIcon,
} from "@chakra-ui/icons";
// import theme from "./styles/themes/theme.js";

function App() {
  const [taskList, setTaskList] = useState([]);
  const [isTodaySelected, setTodaySelected] = useState(true); //today
  const [isDateSelected, setDateSelected] = useState(true); //date
  const [selectedStatus, setSelectedStatus] = useState("All"); //sidebar
  const statusList = ["All", "Done", "Undone"]; //menu-filter
  const sideBarFilter = [
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
  const { onToggle } = useDisclosure();
  const {
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

  const [input, setInput] = useState("");

  const handleInputEmailChange = (e) => setInput(e.target.value);

  const isError = input === "";

  return (
    <ChakraProvider>
      <Flex
        maxW="1366px"
        maxH="1024px"
        w="100%"
        h="100%"
        alignItems="center"
        justifyContent="space-between"
      >
        <Text
          color="#404040"
          fontSize="96px"
          fontFamily="Roboto"
          fontWeight="700"
          ml="65px"
        >
          To-Do{" "}
          <Text
            as="span"
            color="#9333EA"
            fontSize="96px"
            fontFamily="Roboto"
            fontWeight="700"
          >
            UI
          </Text>
        </Text>

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
                    variant="solid"
                    size="1.5rem"
                    icon={
                      <Image src="/assets/bi_person-circle.svg" alt="avatar" />
                    }
                  />
                </PopoverTrigger>
                <Portal>
                  <PopoverContent width="330px">
                    <PopoverArrow />
                    <PopoverHeader
                      fontFamily="Roboto"
                      fontSize="20px"
                      fontWeight="400"
                    >
                      Добро пожаловать!
                    </PopoverHeader>
                    <PopoverCloseButton />
                    <PopoverBody>
                      <Flex alignItems="center" justifyContent="space-around">
                        <Button colorScheme="purple">Войти</Button>
                        <Button
                          colorScheme="pink"
                          onClick={onCreateAccountModalOpen}
                        >
                          Зарегистрироваться
                        </Button>
                      </Flex>
                    </PopoverBody>
                    <PopoverFooter>
                      <Flex alignItems="center" gap="10px">
                        <WarningIcon color="red.500" />
                        <Text
                          fontFamily="Roboto"
                          fontSize="14px"
                          fontWeight="200"
                          color="#6B7280"
                        >
                          Для продолжения выберите один из вариантов
                        </Text>
                      </Flex>
                    </PopoverFooter>
                  </PopoverContent>
                </Portal>
              </Popover>
            </Flex>
            <Modal
              isOpen={isCreateAccountModalOpen}
              onClose={onCreateAccountModalClose}
              isCentered
            >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Create your account</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <FormControl isInvalid={isError} isRequired>
                    <FormLabel>Email adress</FormLabel>
                    <Input
                      type="email"
                      value={input}
                      onChange={handleInputEmailChange}
                      width='400px'
                    />
                    {!isError ? (
                      <FormHelperText>
                        Enter the email address you would like to register an
                        account with.
                      </FormHelperText>
                    ) : (
                      <FormErrorMessage>Email is required.</FormErrorMessage>
                    )}
                  </FormControl>

                  <FormControl>
                    <FormLabel>First name</FormLabel>
                    <Input placeholder="Last name" />
                  </FormControl>
                </ModalBody>

                <ModalFooter p="10px" >
                  <Flex alignItems="center" justifyContent="space-around" width='422px'>
                    <Button width="185px" height="40px" colorScheme="blue">
                      Save
                    </Button>
                    <Button
                      width="185px"
                      height="40px"
                      onClick={onCreateAccountModalClose}
                      colorScheme="blackAlpha"
                    >
                      Cancel
                    </Button>
                  </Flex>
                </ModalFooter>
              </ModalContent>
            </Modal>
            <Flex w="672px" h="343px" pt="31px" justifyContent="space-between">
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
              <TasksList
                taskList={taskList}
                selectedStatus={selectedStatus}
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
