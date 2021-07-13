import { get_products } from "../types";
const axios = require("axios"); //require from node_module

export const getProducts = () => async (dispatch) => {
  await axios({
    method: "GET",
    url: "http://localhost:5000/api/products",
  }).then((res) => {
    dispatch({ type: get_products, payload: res.data });
  });
};
