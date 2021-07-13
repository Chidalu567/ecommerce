import { get_products } from "../types";

const Product_Reducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case get_products:
      return { ...state, products: action.payload };
    default:
      return state;
  }
};

export default Product_Reducer; //export for external file to use
