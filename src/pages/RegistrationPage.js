import React, { useContext, useState } from "react";
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
  Link,
  ChakraProvider,
} from "@chakra-ui/react";
import { LOGIN_ROUTE } from "../utils/consts";
import { registration } from "../http/userAPI";
import { Context } from "..";

function RegistrationPage() {
  const { user, setUser, setIsAuth } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const isError = email === "";

  const handleRegistration = async () => {
      let data;
      try {
        // Отправляем запрос на сервер для регистрации
        data = await registration(email, password, username);
        setUser(user);
        setIsAuth(true);

        // Обработка успешной регистрации
        console.log(data);
      } catch (error) {
        // Обработка ошибки регистрации
        console.log("Registration error");
      }
  };

  return (
    <ChakraProvider>
      <Container display="flex" justifyContent="center" alignItems="center">
        <Card width="600px">
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Username</FormLabel>
              <Input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </FormControl>
          </CardBody>
          <CardFooter
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            pl={5}
            pr={5}
          >
            <Text>
              Do you have an account?{" "}
              <Link href={LOGIN_ROUTE} color="red">
                Login
              </Link>
            </Text>
            <Button
              w="120px"
              h="40px"
              lineHeight="1.2"
              transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
              borderRadius="10px"
              border="1px solid silver"
              fontSize="16px"
              bg="rgba(103, 184, 203, 0.06)"
              color="#67B8CB"
              _hover={{
                bg: "rgba(103, 184, 203, 0.03)",
                boxShadow: "0 1px 1px rgba(0, 0, 0, .15)",
              }}
              _active={{
                transform: "scale(0.9)",
              }}
              _focus={{
                boxShadow: "0 1px 1px rgba(0, 0, 0, .15)",
              }}
              onClick={handleRegistration}
            >
              Register
            </Button>
          </CardFooter>
        </Card>
      </Container>
    </ChakraProvider>
  );
}

export default RegistrationPage;
