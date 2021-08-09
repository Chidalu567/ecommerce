import {
  product_view_success,
  product_view_loading,
  product_view_error,
} from "../types";

const axios = require("axios"); //require data from node_module

const productView = (_id) => async (dispatch) => {
  //have loading action before data is gotten
  //transport the data to the reducer

  dispatch({ type: product_view_loading }); //dispatch to transport action to reducer
  try {
    const { data } = await axios.get(
      `http://localhost:5000/api/products/${_id}`
    ); //make an ajax request to server
    dispatch({ type: product_view_success, payload: data.data }); //dispatch action to reducer
  } catch (error) {
    console.log(error);
  }
};

export default productView; //export for external file to use
