import {
  product_view_success,
  product_view_loading,
  product_view_error,
} from "../types";

const Product_View = (
  state = { single_product: {}, loading: true},
  action
) => {
  switch (action.type) {
    case product_view_loading:
      return { ...state, loading: true };
    case product_view_success:
      return { ...state, single_product: action.payload, loading: false };
    default:
      return state;
  }
};

export default Product_View; // export for external file to use
