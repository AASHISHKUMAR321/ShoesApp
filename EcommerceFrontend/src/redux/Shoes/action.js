export const GETSHOES = "GETSHOES";
import axios from "axios";

export const addShoes = (data) => {
  return {
    type: GETSHOES,
    payload: data,
  };
};

export const getshoes =
  ({ page, sort, filter }) =>
  async (dispatch) => {
    const data = await axios.get(
      `http://localhost:5000/shoes?page=${page}&sort=${
        sort ? 1 : -1
      }&filter=${filter}`
    );
    dispatch(addShoes(data.data));
  };
