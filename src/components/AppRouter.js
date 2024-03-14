import React, { useContext } from "react";
import { Route, Routes } from "react-router";
import { authRoutes, publicRoutes } from "../routes";
import { Navigate } from "react-router-dom";
import { Context } from "..";

const AppRouter = () => {
  const {user, isAuth} = useContext(Context)
  console.log(user, isAuth)
  return (
    <Routes>
      {isAuth ? (
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} exact />
        ))
      ) : (
        <Route path="*" element={<Navigate to="/login" />} />
      )}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} exact />
      ))}
    </Routes>
  );
};

export default AppRouter;
