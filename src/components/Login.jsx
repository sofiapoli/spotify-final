import React from "react";
import { Redirect, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const userDataRequest = location.hash.split("&");

  const userAccessToken = userDataRequest[0].split("=")[1];

  dispatch({ type: "login", token: userAccessToken });

  return <Redirect to="/" />;
};

export default Login;
