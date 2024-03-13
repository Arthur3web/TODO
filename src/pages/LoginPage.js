import React, { useState } from "react";

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
} from "@chakra-ui/react";
import { REGISTRATION_ROUTE } from "../utils/consts";
import axios from "axios";

const LoginModal = ({ onLogin }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/login`,
        { email, password }
      );

      // Если ответ успешен (например, код ответа 200), вызываем колбэк onLogin
      if (response.status === 200) {
        onLogin();
      } else {
        setError("Invalid email or password");
      }
    } catch (error) {
      setError("Invalid email or password");
    }
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
          <FormControl mt={3}>
            {error && <Text color="red.500">{error}</Text>}
            <Input
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              mb={3}
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              mb={3}
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
          <div>
            Don't have an account?{" "}
            <Link href={REGISTRATION_ROUTE} color="red">
              Register
            </Link>
          </div>
          <Button onClick={handleLogin}>Login</Button>
        </CardFooter>
      </Card>
    </Container>
  );
};

export default LoginModal;