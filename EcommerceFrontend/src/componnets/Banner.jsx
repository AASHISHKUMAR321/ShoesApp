import React from "react";
import styled from "styled-components";
import banner1 from "../../../images/b1.jpg";
import banner2 from "../../../images/b2.jpg";
import banner3 from "../../../images/b3.jpg";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const BannerDiv = styled.div`
  width: 100%;
  margin: auto;
  margin-top: 50px;

  img {
    width: 90%;
    height: 400px;
  }
  h3 {
    color: white;
  }
  p {
    color: white;
  }
  .etxt {
    margin-top: 30px;
  }
  @media only screen and (min-width: 0px) and (max-width: 375px) {
    img {
      margin-top: 20px;
      width: 300px;
      height: 300px;
    }
  }
  @media only screen and (min-width: 375px) and (max-width: 768px) {
    img {
      margin-top: 20px;
      width: 500px;
      height: 300px;
    }
  }
`;
export const Banner = () => {
  return (
    <BannerDiv>
      <Carousel>
        <Carousel.Item>
          <img src={banner1} alt="First slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={banner2} alt="Second slide" />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={banner3} alt="Third slide" />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </BannerDiv>
  );
};
