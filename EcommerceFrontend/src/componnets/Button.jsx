import React from "react";
import styled from "styled-components";
const ButtonDiv = styled.div`
  margin-top: 20px;
  button {
    padding: 10px 104px;

    background-color: #1cb803;
    color: white;
    border: none;
  }
`;

export const Button = ({ name, handle }) => {
  return (
    <ButtonDiv>
      <button onClick={handle}>{name}</button>
    </ButtonDiv>
  );
};
