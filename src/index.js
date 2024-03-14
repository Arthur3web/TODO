import React, { createContext, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.js";
import reportWebVitals from "./reportWebVitals.js";

export const Context = createContext();
export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [isAuth, setIsAuth] = useState(false);

  return (
      <Context.Provider value={{ user, setUser, isAuth, setIsAuth }}>
          {children}
      </Context.Provider>
  );
};
console.log(process.env.REACT_APP_API_URL);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContextProvider
    >
      <App />
    </ContextProvider>
  </React.StrictMode>
);

reportWebVitals();
