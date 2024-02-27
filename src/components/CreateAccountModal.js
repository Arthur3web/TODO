import React from "react";
import {
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
  handleInputEmailUserChange,
  inputUserData,
}) {
  return (
    <Modal
      isOpen={isCreateAccountModalOpen}
      onClose={onCreateAccountModalClose}
      variant='createAccountkModal'
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
              value={inputUserData}
              onChange={handleInputEmailUserChange}
              width="100%"
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

        <ModalFooter>
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
