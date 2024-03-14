import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import "./responsive.css";
import { ChakraProvider } from "@chakra-ui/react";
import AppRouter from "./components/AppRouter.js";
const Wrapper = ({ children }) => {
  return (
    <ChakraProvider>
      <Router>{children}</Router>
    </ChakraProvider>
  );
};
function App() {
  return (
    <Wrapper>
      <AppRouter />
    </Wrapper>
  );
}

export default App;
