import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  FormErrorMessage,
  Container,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  useDisclosure,
  Link,
} from "@chakra-ui/react";
import axios from "axios";
import { LOGIN_ROUTE } from "../utils/consts";

function RegistrationPage({
  isError,
  handleInputEmailUserChange,
  inputUserData,
}) {
  const { onClose: onCreateAccountModalClose } = useDisclosure();

  const [password, setPassword] = useState(""); // Добавляем состояние для пароля

  const handleRegistration = async () => {
    try {
      // Отправляем запрос на сервер для регистрации
      const response = await axios.post("/api/register", {
        email: inputUserData,
        password: password,
      });

      // Обработка успешной регистрации
      console.log("User registered successfully:", response.data);

      // Закрываем модальное окно
      onCreateAccountModalClose();
    } catch (error) {
      // Обработка ошибки регистрации
      console.error("Registration error:", error.response.data);
    }
  };

  return (
    <Container display="flex" justifyContent="center" alignItems="center">
      <Card>
        <CardHeader
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Text fontSize={30} color="#9333EA">
            Create your account
          </Text>
        </CardHeader>

        <CardBody>
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
            <FormLabel>Password</FormLabel>
            <Input type="password" />
          </FormControl>
        </CardBody>
        <CardFooter>
          <Container variant="modalFooterContainer">
          <div>
            Do you have an account?{" "}
            <Link href={LOGIN_ROUTE} color="red">
              Login
            </Link>
          </div>
            <Button variant="saveTaskButton" onClick={handleRegistration}>
              Save
            </Button>
          </Container>
        </CardFooter>
      </Card>
    </Container>
  );
}

export default RegistrationPage;
