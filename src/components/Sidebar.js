import React, { useState } from "react";
// import ModalAddTask from "./ModalAddTask";

import {
  Image,
  Button,
  Text,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Heading,
  Input,
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalContent,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/react";
import { CheckCircleIcon, CloseIcon } from "@chakra-ui/icons";

function Sidebar({
  addTask,
  handleInputChange,
  task,
  selectedStatus,
  handleFilterChange,
  statusList,
  setOpen,
  handleTimeChange,
  setTaskNew,
  sideBarFilter,
  taskList,
  setSelectedStatus,
}) {
  const handleOpenedFilter = (name) => {
    if (name == "Today") {
      console.log(taskList.taskTime);
      setSelectedStatus("All");
      console.log("AAAAAAAAAAAAAAAAA");
    } else if (name == selectedStatus) {
      setOpen(!isOpen);
    }
  };
  const [value, setValue] = useState("");

  function saveTask() {
    if (task !== "") {
      addTask(value);
      setValue("")
      onClose(true)
    }
  }
  const { onOpen, onClose, isOpen, onToggle } = useDisclosure();

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      if (task !== "") {
        addTask(value);
        event.preventDefault();
        onClose(true)
      }
    }
    if (event.key === "Escape") {
      onClose(true)
      setTaskNew({
        title: "",
        timeEnd: "",
      });
    }
  };

  return (
    <Flex flexDirection="column" justifyContent="space-between">
      <Flex flexDirection="column" gap="21px">
        {sideBarFilter.map((item) => (
          <Menu key={item.id}>
            <MenuButton
              w="185px"
              h="40px"
              borderRadius="10px"
              pl="13px"
              _hover={{ bg: "rgba(147, 51, 234, 0.25)" }}
              _active={{ bg: "rgba(147, 51, 234, 0.25)" }}
              onClick={() => handleOpenedFilter(item.name)}
            >
              <Flex alignItems="center" gap="10px">
                <CheckCircleIcon color="#6B7280" fontSize="20px" />
                <Text
                  fontFamily="Roboto"
                  fontSize="16px"
                  fontWeight="400"
                  lineHeight="18.75px"
                  color="#404040"
                >
                  {item.name}
                </Text>
              </Flex>
            </MenuButton>
            {item.name === selectedStatus && onToggle && (
              <MenuList
                bg="linear-gradient(300deg, #B9D5FF 0, #F6D1FC 98.93%)"
                border="0"
                minW="185px"
                gap="10px"
              >
                {statusList.map((el, ind) => (
                  <MenuItem
                    key={el + ind}
                    bg="inherit"
                    gap="10px"
                    borderRadius="10px" //отступы меню
                    _hover={{ bg: "rgba(147, 51, 234, 0.25)" }}
                    _active={{
                      bg: "rgba(147, 51, 234, 0.25)",
                      color: "#9333EA",
                    }}
                    // className={`availables-marks + ${
                    //   el === selectedStatus && "active"
                    // }`}
                    onClick={() => handleFilterChange(el)}
                  >
                    <CheckCircleIcon color="#6B7280" fontSize="20px" />
                    <Text
                      fontFamily="Roboto"
                      fontSize="16px"
                      fontWeight="400"
                      lineHeight="18.75px"
                      color="#404040"
                    >
                      {el}
                    </Text>
                  </MenuItem>
                ))}
              </MenuList>
            )}
          </Menu>
        ))}
      </Flex>
      <Button
        w="185px"
        h="40px"
        borderRadius="10px"
        bg="rgba(147, 51, 234, 0.06)"
        _hover={{ bg: "rgba(147, 51, 234, 0.25)" }}
        _active={{
          bg: "rgba(147, 51, 234, 0.25)",
          color: "#9333EA",
          transform: "scale(0.9)",
        }}
        transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
        _focus={{
          boxShadow: "0 0 1px 2px #9333EA, 0 1px 1px rgba(0, 0, 0, .15)",
          bg: "rgba(147, 51, 234, 0.25",
        }}
        onClick={onOpen}
      >
        <Image mr="10px" src="/assets/Vector_2.svg" alt="add-task" />
        <Text
          w="63px"
          h="19px"
          fontFamily="Roboto"
          fontSize="16px"
          fontWeight="400"
          lineHeight="18.75px"
          color="#9333EA"
        >
          AddTask
        </Text>
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
          <ModalContent
            w="466px"
            h="181px"
            borderRadius="10px"
            // gap="26px"
            bg="white"
          >
            <ModalHeader
              borderRadius="10px 10px 0 0"
              bg="linear-gradient(#F5EDFD,#FEEFF5)"
              h='48px'
            >
              <Heading
                fontFamily="Roboto"
                fontSize="20px"
                fontWeight="700"
                lineHeight="23.44px"
                color="#9333EA"
                >
                Create task
              </Heading>
            </ModalHeader>
            <ModalBody>
              <Flex alignItems="center" justifyContent="center" gap="10px">
                <Input
                  h="27px"
                  border="1px solid #6B7280"
                  bg="#F3F3F3"
                  borderRadius="10px"
                  pl="27px"
                  placeholder="Enter text..."
                  onChange={handleInputChange}
                  value={task}
                  autoFocus={true}
                  onKeyDown={handleKeyDown}
                  required
                ></Input>
                <Input
                  type="date"
                  w="55px"
                  border="0"
                  onChange={handleTimeChange}
                />
              </Flex>
            </ModalBody>
            <ModalFooter py='17px'>
              <Flex
                alignItems="center"
                justifyContent="space-between"
                width="422px"
              >
                <Button
                  leftIcon={<CheckCircleIcon fontSize="larger" />}
                  onClick={saveTask}
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
                    boxShadow: "0 0 1px 2px , 0 1px 1px rgba(0, 0, 0, .15)",
                  }}
                >
                  Save Task
                </Button>
                <Button
                  leftIcon={<CloseIcon fontSize="xs" />}
                  onClick={onClose}
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
                >
                  Close
                </Button>
              </Flex>
            </ModalFooter>
          </ModalContent>
      </Modal>
    </Flex>
  );
}

export default Sidebar;
