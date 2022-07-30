import React from "react";
import FullWidthTextField from "./Input";
import styled from "styled-components";
import { Button } from "./Button";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAuth, LoginAction } from "../redux/Auth/action";
const LoginDiv = styled.div`
  width: 100%;

  margin: auto;
  margin-top: 50px;
  a {
    text-decoration: none;
  }
`;

export const Login = () => {
  const [user, setUser] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const bollen = useSelector((store) => store.auth.auth);
  console.log(bollen);

  const handle = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const HandleClick = () => {
    dispatch(LoginAction({ user }));
  };

  return (
    <LoginDiv>
      <FullWidthTextField text={"Email"} name={"email"} handle={handle} />
      <FullWidthTextField text={"Password"} name={"password"} handle={handle} />
      <Button name={"Login"} handle={HandleClick} />
      <br />
      <h6>
        Don't Have Account ? <Link to={"/signup"}>Sign</Link>{" "}
      </h6>
      {bollen ? navigate("/") : ""}
    </LoginDiv>
  );
};
