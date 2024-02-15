import React, { useState } from "react";
import {
  Container,
  Flex,
  Text,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  Input,
  Heading,
  Button,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  ModalBody,
  ModalHeader,
  Modal,
  Checkbox,
} from "@chakra-ui/react";
import {
  EditIcon,
  DeleteIcon,
  CheckCircleIcon,
  CloseIcon,
} from "@chakra-ui/icons";

const Task = ({ task, deleteTask, toggleTaskStatus, saveEditTask }) => {
  //Деструктуризация
  const [note, setNote] = useState(task.title);
  const [noteTime, setNoteTime] = useState(new Date(task.timeEnd));

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

  function handleInputChangeEditTask(e) {
    setNote(e.target.value);
  }
  function handleInputChangeEditTaskTime(e) {
    setNoteTime(e.target.value);
  }

  function editTask(id) {
    if (note !== "") {
      saveEditTask(task.id, note, new Date(noteTime));
      onEditModalClose(true);
      console.log(task);
    }
  }

  function deleteTaskButton(id) {
    deleteTask(id);
    onDeleteModalClose(true);
  }

  const handleKeyDown = (event) => {
    //настройка закрытия модального окна при нажатии на клавиши Enter и Esc
    if (event.key === "Enter") {
      if (note !== "") {
        saveEditTask(task.id, note, new Date(noteTime));
        onDeleteModalClose(true);
        onEditModalClose(true);
      }
    }
    if (event.key === "Escape") {
      onDeleteModalClose(true);
      onEditModalClose(true);
    }
  };

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
          <Checkbox
            border='gray'
            colorScheme='purple'
            isChecked={task.isCompleted}
            onChange={() => toggleTaskStatus(task.id)}
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

          <Menu>
            <MenuButton bg="inherit" size="xs" aria-label="Options">
              <Image boxSize="13px" src="/assets/Vector_3.svg" alt="Vector_3" />
            </MenuButton>
            <MenuList
              borderRadius="10px"
              border="1px solid #9333EA"
              bg="white"
              size="xs"
              minW="100%"
              m="5px 0 0 -53px"
            >
              <Flex>
                <MenuItem w="50%" onClick={onEditModalOpen}>
                  <EditIcon color="gray.600" />
                </MenuItem>
                <Modal isOpen={isEditModalOpen} onClose={onEditModalClose}>
                  <ModalOverlay />
                  <ModalContent
                    w="466px"
                    h="181px"
                    borderRadius="10px"
                    bg="white"
                  >
                    <ModalHeader
                      borderRadius="10px 10px 0 0"
                      bg="linear-gradient(#F5EDFD,#FEEFF5)"
                      h="48px"
                    >
                      <Heading
                        fontFamily="Roboto"
                        fontSize="20px"
                        fontWeight="700"
                        lineHeight="23.44px"
                        color="#9333EA"
                      >
                        Edit task
                      </Heading>
                    </ModalHeader>
                    <ModalBody p="25px 15px 5px 25px">
                      <Input
                        h="27px"
                        w="350px"
                        border="1px solid #6B7280"
                        bg="#F3F3F3"
                        borderRadius="10px"
                        pl="27px"
                        value={note}
                        onChange={handleInputChangeEditTask}
                        autoFocus={true}
                        onKeyDown={handleKeyDown}
                        // _invalid={{borderColor: 'red'}}
                        // _valid={{borderColor: '#ccc'}}
                        required
                      />
                      <Input
                        type="date"
                        w="50px"
                        border="0"
                        h="27px"
                        value={noteTime}
                        onChange={handleInputChangeEditTaskTime}
                      />
                    </ModalBody>
                    <ModalFooter py="17px">
                      <Flex
                        alignItems="center"
                        justifyContent="space-between"
                        width="422px"
                      >
                        <Button
                          leftIcon={<CheckCircleIcon fontSize="larger" />}
                          onClick={() => editTask(task.id, note)}
                          width="185px"
                          height="40px"
                          lineHeight="1.2"
                          transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                          borderRadius="10px"
                          fontSize="16px"
                          bg="linear-gradient(300deg, #B9D5FF, #F6D1FC 98.93%)"
                          color="#9333EA"
                          _hover={{
                            bg: "linear-gradient(300deg, #B9D5FF, #F6D1FC 98.93%)",
                          }}
                          _active={{
                            transform: "scale(0.9)",
                          }}
                          _focus={{
                            boxShadow:
                              "0 0 1px 2px , 0 1px 1px rgba(0, 0, 0, .15)",
                          }}
                        >
                          Save
                        </Button>
                        <Button
                          leftIcon={<CloseIcon fontSize="xs" />}
                          width="185px"
                          height="40px"
                          lineHeight="1.2"
                          transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                          borderRadius="10px"
                          fontSize="16px"
                          fontWeight="semibold"
                          bg="#6B7280"
                          color="white"
                          _hover={{ bg: "gray.500" }}
                          _active={{
                            bg: "gray.500",
                            transform: "scale(0.9)",
                          }}
                          _focus={{
                            boxShadow:
                              "0 0 1px 2px black, 0 1px 1px rgba(0, 0, 0, .15)",
                          }}
                          onClick={onEditModalClose}
                        >
                          Close
                        </Button>
                      </Flex>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
                <MenuItem w="50%" onClick={onDeleteModalOpen}>
                  <DeleteIcon color="red.600" />
                </MenuItem>
                <Modal isOpen={isDeleteModalOpen} onClose={onDeleteModalClose}>
                  <ModalOverlay />
                  <ModalContent
                    w="466px"
                    h="181px"
                    borderRadius="10px"
                    bg="white"
                  >
                    <ModalHeader
                      borderRadius="10px 10px 0 0"
                      bg="linear-gradient(#F5EDFD,#FEEFF5)"
                      h="48px"
                    >
                      <Heading
                        fontFamily="Roboto"
                        fontSize="20px"
                        fontWeight="700"
                        lineHeight="23.44px"
                        color="#9333EA"
                      >
                        Delete task
                      </Heading>
                    </ModalHeader>
                      <ModalBody w="448px" >
                    <Flex alignItems="center" justifyContent='center'>
                        <Text
                          fontFamily="Roboto"
                          fontSize="20px"
                          fontWeight="700"
                          lineHeight="23.44px"
                          pt='15px'
                        >
                          Are you sure about deleting this task?
                        </Text>
                    </Flex>
                      </ModalBody>
                    <ModalFooter h='40px' my='15px'>
                      <Flex
                        alignItems="center"
                        justifyContent="space-between"
                        width="422px"
                      >
                        <Button
                          leftIcon={<DeleteIcon fontSize="larger" />}
                          className="delete-button"
                          onClick={() => deleteTaskButton(task.id)}
                          width="185px"
                          height="40px"
                          lineHeight="1.2"
                          transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                          borderRadius="10px"
                          fontSize="16px"
                          bg="rgba(245, 108, 156, 0.35)"
                          color="red"
                          _hover={{
                            bg: "rgba(245, 108, 156, 0.35)",
                          }}
                          _active={{
                            transform: "scale(0.9)",
                          }}
                          _focus={{
                            boxShadow:
                              "0 0 1px 2px , 0 1px 1px rgba(0, 0, 0, .15)",
                          }}
                        >
                          Delete
                        </Button>
                        <Button
                          leftIcon={<CloseIcon fontSize="xs" />}
                          width="185px"
                          height="40px"
                          lineHeight="1.2"
                          transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                          borderRadius="10px"
                          fontSize="16px"
                          fontWeight="semibold"
                          bg="#6B7280"
                          color="white"
                          _hover={{ bg: "gray.500" }}
                          _active={{
                            bg: "gray.500",
                            transform: "scale(0.9)",
                          }}
                          _focus={{
                            boxShadow:
                              "0 0 1px 2px black, 0 1px 1px rgba(0, 0, 0, .15)",
                          }}
                          onClick={onDeleteModalClose}
                        >
                          Close
                        </Button>
                      </Flex>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
              </Flex>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Task;
