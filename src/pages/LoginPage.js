import React, { useContext, useState } from "react";

import {
  Card,
  Container,
  Button,
  FormControl,
  Link,
  Input,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  useToast,
} from "@chakra-ui/react";
import { REGISTRATION_ROUTE } from "../utils/consts";
import { login } from "../http/userAPI";
import { Context } from "..";

const LoginModal = () => {
  const { setUser, isAuth, setIsAuth } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();

  const handleLogin = async () => {
    let data;
    try {
      data = await login(email, password);
      setUser(data);
      setIsAuth(true);
      console.log(data);
    } catch (error) {
      toast({
        title: "Login error",
        description: error.response.data.message,
        status: "error",
        position: "top",
        duration: 5000,
        isClosable: true,
      });
    }
    // localStorage.setItem("authorithation", isAuth)
    // console.log(isAuth)
  };

  return (
    <Container
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="54px"
    >
      <Card width="600px">
        <CardHeader display="flex" justifyContent="center">
          <Text fontSize={30} color="#9333EA">
            Authorithation
          </Text>
        </CardHeader>
        <CardBody display="flex" flexDirection="column">
          <form>
            <FormControl mt={3}>
              <Input
                id="emailInput"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="current-email"
                mb={3}
              />
              <Input
                id="passwordInput"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                mb={3}
              />
            </FormControl>
          </form>
        </CardBody>
        <CardFooter
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          pl={5}
          pr={5}
        >
          <div>
            Don't have an account?{" "}
            <Link href={REGISTRATION_ROUTE} color="red">
              Register
            </Link>
          </div>
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
            onClick={handleLogin}
          >
            Login
          </Button>
        </CardFooter>
      </Card>
    </Container>
  );
};

export default LoginModal;
