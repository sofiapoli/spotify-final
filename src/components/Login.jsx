import React from "react";
import { Redirect, useLocation } from "react-router-dom";

const Login = () => {
  const location = useLocation();
  const userDataRequest = location.hash.split("&");
  console.log(userDataRequest);

  const userAccessToken = userDataRequest[0].split("=")[1];
  const userIsLogged = userDataRequest[3].split("=")[1];

  console.log(userIsLogged);
  let userData = {
    token: userAccessToken,
    isLogged: Boolean(userAccessToken),
  };

  localStorage.setItem("userData", JSON.stringify(userData));

  return <Redirect to="/" />;
};

export default Login;
