import React from "react";
import { Banner } from "./Banner";
import ImgMediaCard from "./Card";

import styled from "styled-components";
import MultipleSelectCheckmarks from "./Filter";
import BasicSelect from "./Sort";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getshoes } from "../redux/Shoes/action";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
const HomeDiv = styled.div`
  .shoes {
    width: 90%;

    margin: auto;
    margin-top: 80px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    cursor: pointer;

    gap: 40px;
  }
  .filterAndsort {
    display: flex;
    justify-content: center;
    margin-top: 50px;
    gap: 50px;
  }
  @media only screen and (min-width: 0px) and (max-width: 400px) {
    .shoes {
      grid-template-columns: repeat(1, 1fr);
      justify-content: center;
      align-items: center;
    }
    .filterAndsort {
      display: flex;
      justify-content: center;
      margin-top: 50px;
      gap: 10px;
    }
  }
  @media only screen and (min-width: 400px) and (max-width: 768px) {
    .shoes {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

export const Home = () => {
  const dispatch = useDispatch();
  const [sort, setSort] = React.useState(true);
  const [filter, setFilter] = useState("puma");
  const navigate = useNavigate();

  const handleChange = (event) => {
    setSort(!sort);
  };
  const handleFilter = (e) => {
    setFilter(e.target.value);
  };
  const shoes = useSelector((store) => store.shoes.shoes);
  const [page, setPage] = useState(1);
  useEffect(() => {
    dispatch(getshoes({ page, sort, filter }));
  }, [page, sort, filter]);

  const handlePage = (event, value) => {
    setPage(value);
  };
  const clikHandler = (id) => {
    navigate(`/details/${id}`);
  };
  console.log(filter);
  return (
    <HomeDiv>
      <Banner />
      <div className="filterAndsort">
        <MultipleSelectCheckmarks handleFilter={handleFilter} />

        <BasicSelect handleChange={handleChange} />
      </div>

      <div className="shoes">
        {shoes?.map((e) => {
          return (
            <ImgMediaCard
              image={e.image}
              brand={e.brand}
              price={e.price}
              description={e.desc}
              key={e._id}
              id={e._id}
              handler={clikHandler}
            />
          );
        })}
      </div>
      <Stack spacing={0}>
        <Pagination
          count={10}
          variant="outlined"
          shape="rounded"
          page={page}
          onChange={handlePage}
          sx={{ margin: "auto", marginTop: "20px" }}
        />
      </Stack>
    </HomeDiv>
  );
};
