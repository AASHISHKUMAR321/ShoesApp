import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./Button";

const ShowDiv = styled.div`
  width: 80%;
  margin: auto;
  margin-top: 70px;
  .Show {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  div {
  }
  .data > h4 {
    margin-top: 50px;
  }
  .data {
    text-align: start;
  }
  @media only screen and (min-width: 0px) and (max-width: 700px) {
    margin-top: 10px;
    .Show {
      grid-template-columns: repeat(1, 1fr);
    }
    .data > h4 {
      margin-top: 0px;
    }
  }
`;

export const Details = () => {
  const [product, setProduct] = useState();
  const cartArr = JSON.parse(localStorage.getItem("product")) || [];

  console.log(cartArr);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://ak-ecommerce-app.herokuapp.com/shoes/${id}`)
      .then(({ data }) => setProduct(data));
  }, []);

  const cardHandler = () => {
    console.log("add to cart");
    cartArr.push(product);
    localStorage.setItem("product", JSON.stringify(cartArr));
    alert(`Your item is added to cart`);
  };
  console.log(product);
  return (
    <ShowDiv>
      {product ? (
        <div className="Show">
          <div>
            <img src={product.image} alt="" />
          </div>
          <div className="data">
            <h4>{product.desc.toUpperCase()}</h4>
            <h4>Rs-{product.price}</h4>
            <h4>Brand-{product.brand[0]}</h4>

            <h4>
              {product.size.map((e) => (
                <button style={{ border: "none", padding: "10px" }}>{e}</button>
              ))}
            </h4>
            <Button name={"Add To Cart"} handle={cardHandler} />
          </div>
        </div>
      ) : (
        ""
      )}
    </ShowDiv>
  );
};
