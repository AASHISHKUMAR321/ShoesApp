import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const ShowDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border: 1px solid red;
  div {
    border: 1px solid green;
  }
`;

export const Details = () => {
  const [product, setProduct] = useState();
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://ak-ecommerce-app.herokuapp.com/shoes/:${id}`)
      .then(({ data }) => setProduct(data));
  }, []);
  console.log(product);
  return (
    <ShowDiv>
      <div>image</div>
      <div>data</div>
    </ShowDiv>
  );
};
