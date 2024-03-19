import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import "./responsive.css";
import { ChakraProvider } from "@chakra-ui/react";
import AppRouter from "./components/AppRouter.js";
import { check } from "./http/userAPI.js";
import { Context } from "./index.js";

const Wrapper = ({ children }) => {
  return (
    <ChakraProvider>
      <Router>{children}</Router>
    </ChakraProvider>
  );
};
function App() {
  const { isAuth, setUser, setIsAuth} = useContext(Context);

  useEffect(() => {
    // console.log('AAAAAAAAAAAAAAAAAAAAAAA')
    const checkTokenValidity = async () => {
      try {
        const userData = await check();
        // Если токен действителен, устанавливаем пользователя и флаг авторизации
        setUser(userData);
        setIsAuth(true);
        // console.log(userData)
      } catch (error) {
        console.log(isAuth)
        console.log('токен не действителен')
      }
    };
    checkTokenValidity();
  }, [isAuth]);


  return (
    <Wrapper>
      <AppRouter />
    </Wrapper>
  );
}

export default App;
