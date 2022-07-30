import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ImgMediaCard from "./Card";
import { Button } from "./Button";
const CartDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  margin-top: 50px;
  .checkout {
    margin-top: 100px;
  }

  .prod {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    text-align: start;
    justify-content: center;
    align-items: center;
  }

  @media only screen and (min-width: 0px) and (max-width: 420px) {
    grid-template-columns: repeat(1, 1fr);
    margin-left: 30px;
    .prod {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      text-align: start;
      justify-content: center;
      align-items: center;
    }

    .data {
      margin-left: 20px;
      button {
        padding: 10px 90px;
      }
    }
  }
  @media only screen and (min-width: 420px) and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    button {
      padding: 10px 60px;
    }
  }
`;
export const Cart = () => {
  const [cartArr, setCartArr] = useState([]);
  const [click, setClick] = useState(false);
  useEffect(() => {
    const Arr = JSON.parse(localStorage.getItem("product")) || [];
    setCartArr(Arr);
  }, [click]);
  let sum = 0;
  cartArr.map((e) => (sum += e.price));
  const removeCart = (i) => {
    cartArr.splice(i, 1);
    localStorage.setItem("product", JSON.stringify(cartArr));
    setClick(!click);
  };
  return (
    <CartDiv>
      <div className="cart">
        {cartArr?.map((e, i) => {
          return (
            <div className="prod">
              <div>
                <img src={e.image} alt="" />
              </div>
              <div className="data">
                <h4>{e.desc.toUpperCase()}</h4>
                <h4>Rs-{e.price}</h4>
                <h4>Brand-{e.brand}</h4>
                {e.size.map((e) => (
                  <button style={{ border: "none", padding: "10px" }}>
                    {e}
                  </button>
                ))}
                <Button
                  name={"Remove From Cart"}
                  handle={removeCart}
                  index={i}
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="checkout">
        <h3>SubTotal:{sum}</h3>
        <hr />
        <Button name={"CheckOut"} />
      </div>
    </CartDiv>
  );
};
