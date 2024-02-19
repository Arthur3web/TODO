import React from "react";

function DeleteTaskModal() {
  return (
    <Modal isOpen={isDeleteModalOpen} onClose={onDeleteModalClose} isCentered>
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
            Delete task
          </Heading>
        </ModalHeader>
        <ModalBody w="448px">
          <Flex alignItems="center" justifyContent="center">
            <Text
              fontFamily="Roboto"
              fontSize="20px"
              fontWeight="700"
              lineHeight="23.44px"
              pt="15px"
            >
              Are you sure about deleting this task?
            </Text>
          </Flex>
        </ModalBody>
        <ModalFooter h="40px" my="15px">
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
              bg="rgba(245, 108, 156, 0.45)"
              color="red"
              _hover={{
                bg: "rgba(245, 108, 156, 0.25)",
              }}
              _active={{
                transform: "scale(0.9)",
              }}
              _focus={{
                boxShadow: "0 1px 1px rgba(0, 0, 0, .15)",
              }}
            >
              Delete
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
              onClick={onDeleteModalClose}
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

export default DeleteTaskModal;
