import React, { useContext } from "react";
import { Route, Routes } from "react-router";
import { authRoutes, publicRoutes } from "../routes";
import { Navigate } from "react-router-dom";
import { Context } from "..";
import { MAIN_ROUTE } from "../utils/consts";

const AppRouter = () => {
  const { user, isAuth } = useContext(Context);
  // console.log("!!!!!!!!!!", user, isAuth);
  // localStorage.setItem("authorithation", isAuth)
  // console.log(user.username)
  return (
        <Routes>
          {isAuth ? (
            <>
              <Route path="*" element={<Navigate to={MAIN_ROUTE} />} />
              {authRoutes.map(({ path, Component }) => (
                <Route key={path} path={path} element={<Component />} exact />
              ))}
            </>
          ) : (
            <>
              <Route path="*" element={<Navigate to="/login" />} />
              {publicRoutes.map(({ path, Component }) => (
                <Route key={path} path={path} element={<Component />} exact />
                ))}
            </>
          )}
        </Routes>
  );
};

export default AppRouter;
