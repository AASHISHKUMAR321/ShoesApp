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
const HomeDiv = styled.div`
  .shoes {
    width: 90%;

    margin: auto;
    margin-top: 80px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 40px;
  }
  .filterAndsort {
    display: flex;
    justify-content: center;
    margin-top: 50px;
    gap: 50px;
  }
`;

export const Home = () => {
  const dispatch = useDispatch();
  const [sort, setSort] = React.useState(true);
  const [filter, setFilter] = useState("puma");

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
            />
          );
        })}
      </div>
      <Stack spacing={10}>
        <Pagination
          count={10}
          variant="outlined"
          shape="rounded"
          page={page}
          onChange={handlePage}
          sx={{ marginLeft: "100px" }}
        />
      </Stack>
    </HomeDiv>
  );
};
