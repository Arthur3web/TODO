import React from "react";
import {
  Flex,
  Image,
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
import { CheckCircleIcon } from "@chakra-ui/icons";

function EditTaskModal({
  isEditModalOpen,
  onEditModalClose,
  onEditModalOpen,
  handleInputChangeEditTask,
  handleInputChangeEditTaskTime,
  handleKeyDown,
  noteTime,
  editTask,
  task,
  note,
}) {
  return (
    <Modal isOpen={isEditModalOpen} onClose={onEditModalClose} isCentered>
      <ModalOverlay />
      <ModalContent w="466px" h="181px" borderRadius="10px" bg="white">
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
        <ModalBody p="15px 25px 5px 25px">
          <Flex gap="10px">
            <Input
              h="40px"
              w="270px"
              border="1px solid #6B7280"
              bg="#F3F3F3"
              borderRadius="10px"
              pl="27px"
              value={note}
              onChange={handleInputChangeEditTask}
              autoFocus={true}
              onKeyDown={handleKeyDown}
              required
            />
            <Input
              type="date"
              w="40%"
              bg="#F3F3F3"
              borderRadius="10px"
              border="1px solid #6B7280"
              value={noteTime}
              onChange={handleInputChangeEditTaskTime}
            />
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
              onClick={() => editTask(task.id, note)}
              width="185px"
              height="40px"
              lineHeight="1.2"
              transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
              borderRadius="10px"
              fontSize="16px"
              bg="rgba(103, 184, 203, 0.4)"
              color="#2A4365"
              _hover={{ bg: "rgba(103, 184, 203, 0.2)" }}
              _active={{
                transform: "scale(0.9)",
              }}
              _focus={{
                boxShadow: "0 1px 1px rgba(0, 0, 0, .15)",
              }}
            >
              Save
            </Button>
            <Button
              width="185px"
              height="40px"
              lineHeight="1.2"
              transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
              borderRadius="10px"
              fontSize="16px"
              fontWeight="semibold"
              bg="gray.400"
              color="white"
              _hover={{ bg: "gray.300" }}
              _active={{
                transform: "scale(0.9)",
              }}
              _focus={{
                boxShadow: "0 1px 1px rgba(0, 0, 0, .15)",
              }}
              onClick={onEditModalClose}
            >
              <Image src="/assets/Vector_s.svg" alt="close-button" mr="10px" />
              Close
            </Button>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default EditTaskModal;
