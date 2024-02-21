import React from "react";
import {
  Flex,
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
  Container,
} from "@chakra-ui/react";

function CreateAccountModal({
  isCreateAccountModalOpen,
  onCreateAccountModalClose,
  isError,
  handleInputEmailChange,
  input,
}) {
  return (
    <Modal
      isOpen={isCreateAccountModalOpen}
      onClose={onCreateAccountModalClose}
      isCentered
    >
      <ModalOverlay />
      <ModalContent w="450px" h="310px">
        <ModalHeader h='50px'>Create your account</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl isInvalid={isError} isRequired>
            <FormLabel>Email adress</FormLabel>
            <Input
              type="email"
              value={input}
              onChange={handleInputEmailChange}
              width="400px"
            />
            {!isError ? (
              <FormHelperText>
                Enter the email address you would like to register an account
                with.
              </FormHelperText>
            ) : (
              <FormErrorMessage>Email is required.</FormErrorMessage>
            )}
          </FormControl>

          <FormControl isRequired>
            <FormLabel>First name</FormLabel>
            <Input placeholder="Last name" />
          </FormControl>
        </ModalBody>

        <ModalFooter h="40px" mb="15px">
          <Container variant="modalFooterContainer">
            <Button variant="saveTaskButton">
              Save
            </Button>
            <Button
              variant="closeModalButton"
              onClick={onCreateAccountModalClose}
            >
              Cancel
            </Button>
          </Container>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default CreateAccountModal;
