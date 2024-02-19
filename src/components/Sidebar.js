import React, { useState } from "react";

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
  handleTimeChange,
  setTaskNew,
  sideBarFilter,
  taskList,
  setTaskList,
  setSelectedStatus,
  onAddModalOpen,
  onAddModalClose,
  isAddModalOpen,
  setTodaySelected,
  isTodaySelected,
  isDateSelected,
  setDateSelected,
}) {
  const handleOpenedFilter = (name) => {
    if (name == "Today") {
      setTodaySelected(!isTodaySelected);
      console.log(isTodaySelected);
      setSelectedStatus("All");
    } else if (name == "Date") {
      setDateSelected(!isDateSelected)
      taskList.sort(function(a, b) {
        if (isDateSelected) {
          return new Date(a.timeEnd) - new Date(b.timeEnd);
        } else {
          return new Date(b.timeEnd) - new Date(a.timeEnd);
        } 
      })
      // console.log(taskList);
    }
  };
  const [value, setValue] = useState("");

  function compare(a, b) {
    return new Date(b.timeEnd) - new Date(a.timeEnd);  
  };
  function saveTask() {
    if (task !== "") {
      addTask(value);
      setValue("");
      onAddModalClose(true);
    }
  }
  const { onToggle } = useDisclosure();

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      if (task !== "") {
        addTask(value);
        event.preventDefault();
        onAddModalClose(true);
      }
    }
    if (event.key === "Escape") {
      onAddModalClose(true);
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
              // bg={item.id==='All' && (selectedStatus=== 'All', 'Done', 'Undone') ? "rgba(147, 51, 234, 0.25)" : 'none'}
              bg={item.id==='Today' ? "rgba(147, 51, 234, 0.25)" : 'none'}

              _hover={{ bg: "rgba(147, 51, 234, 0.25)" }}
              _active={{ bg: "rgba(147, 51, 234, 0.25)" }}
              onClick={() => handleOpenedFilter(item.name)}
            >
              <Flex alignItems="center" gap="10px">
                <CheckCircleIcon color={item.id==='Today' ? "#9333EA" : '#6B7280'} /*color="#6B7280"*/ fontSize="20px" />
                <Text
                  fontFamily="Roboto"
                  fontSize="16px"
                  fontWeight="400"
                  lineHeight="18.75px"
                  // color="#404040"
                  color={item.id==='Today' ? "#9333EA" : '#404040'}
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
                // gap="10px"
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
        // variant='searchItem'
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
        onClick={onAddModalOpen}
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

      <Modal isOpen={isAddModalOpen} onClose={onAddModalClose} isCentered>
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
            h="48px"
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
          <ModalBody p="15px 25px 5px 25px">
            <Flex>
              <Input
                h="40px"
                w="275px"
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
              <Input type="date" w="40%" onChange={handleTimeChange} />
            </Flex>
          </ModalBody>
          <ModalFooter py="17px">
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
                onClick={onAddModalClose}
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
                  boxShadow: "0 0 1px 2px black, 0 1px 1px rgba(0, 0, 0, .15)",
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
