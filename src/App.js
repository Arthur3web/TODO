import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage.js"
import RegistrationPage from "./pages/RegistrationPage.js";
import LoginPage from "./pages/LoginPage.js";
import "./responsive.css";
import { ChakraProvider, Flex, useDisclosure } from "@chakra-ui/react";
import { LOGIN_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE } from "./utils/consts.js";
const Wrapper = ({ children }) => {
  return (
    <ChakraProvider>
      <Router>{children}</Router>
    </ChakraProvider>
  );
};
function App() {
  //Проверка авторизации пользователя
  const [isLoggedIn, setLoggedIn] = useState(false); // Состояние для отслеживания авторизации

  // const navigate = useNavigate();

  return (
    <Wrapper>
      <Routes>
        {/* Главная страница */}
        <Route path={MAIN_ROUTE} element={<MainPage />} />
        {/* Страница регистрации */}
        <Route path={REGISTRATION_ROUTE} element={<RegistrationPage />} />
        {/* Страница входа */}
        <Route path={LOGIN_ROUTE} element={<LoginPage />} />
      </Routes>
    </Wrapper>
  );
}

export default App;
