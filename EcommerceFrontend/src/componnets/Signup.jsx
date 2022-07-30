import React, { useReducer } from "react";
import FullWidthTextField from "./Input";
import styled from "styled-components";
import { Button } from "./Button";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../redux/Auth/action";
const SignupDiv = styled.div`
  width: 100%;

  margin: auto;
  margin-top: 50px;
  a {
    text-decoration: none;
  }
`;

export const Signup = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const bollen = useSelector((store) => store.auth.signup);

  const dispatch = useDispatch();

  const handle = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const HandleClick = () => {
    dispatch(signUp({ user }));
  };

  return (
    <SignupDiv>
      <FullWidthTextField text={"UserName"} name={"username"} handle={handle} />
      <FullWidthTextField text={"Email"} name={"email"} handle={handle} />
      <FullWidthTextField text={"Password"} name={"password"} handle={handle} />
      <Button name={"SignUp"} handle={HandleClick} />
      <br />
      <h6>
        I Have Account ? <Link to={"/login"}>Login</Link>{" "}
      </h6>

      {bollen ? navigate("/login") : ""}
    </SignupDiv>
  );
};
