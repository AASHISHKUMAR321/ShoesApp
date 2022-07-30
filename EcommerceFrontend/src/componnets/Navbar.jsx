import React from "react";
import styled from "styled-components";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import logo from "../../../images/logo.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const NavDiv = styled.div`
  width: 95%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* grid-template-rows: repeat(3,1fr); */
  /* border: 1px solid green; */
  div {
    /* border: 1px solid red; */
  }
  .search {
    width: 100%;
    margin-top: 10px;
    height: 30px;
    display: grid;
    grid-template-columns: 70% 30%;
  }
  .search > input {
    height: 30px;
    outline: none;
  }
  .link ul {
    display: flex;
    list-style: none;
    cursor: pointer;
  }
  ul li {
    margin-top: 10px;
    margin-left: 30px;
  }
  button {
    background-color: #1cb803;
    color: white;
    border: 0px;
    margin-left: -10px;
    cursor: pointer;
  }
  a {
    color: black;
    text-decoration: none;
  }

  @media only screen and (min-width: 0px) and (max-width: 375px) {
    ul li {
      margin-left: 10px;
    }
  }
  @media only screen and (min-width: 0px) and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    /* .search{
       
            width: 90%;
            margin-top: 70px;
            margin-left: 20px;
            position: absolute;
        background-color: green;
        } */
    .search {
      width: 80%;
      margin-top: 10px;
      height: 30px;
      display: grid;
      grid-template-columns: 70% 30%;
      margin-top: 70px;
      margin-left: 20px;
      position: absolute;
      margin-left: 10%;
    }
  }
`;

export const Navbar = () => {
  const bollen = useSelector((store) => store.auth.auth);
  console.log(bollen);

  return (
    <NavDiv>
      <div>
        <Link to={"/"}>
          <img src={logo} alt="" width="100px" height="60px" />
        </Link>
      </div>
      <div className="search">
        <input type="text" placeholder=" Search here" />
        <button>search</button>
      </div>
      <div className="link">
        <ul>
          <Link to={"/signup"}>
            <li>{bollen ? "" : "Register"}</li>
          </Link>
          <Link to={"/login"}>
            <li>{bollen ? `${bollen.username}` : "Login"}</li>
          </Link>
          <Link to={"/cart"}>
            <li>
              <ShoppingBagIcon />
            </li>
          </Link>
        </ul>
      </div>
    </NavDiv>
  );
};
