import { removeFromCart } from "../types";

export const removeAction = (id) => async (dispatch, getState) => {
  dispatch({ type: removeFromCart, payload: id }); //dispatch action to reducer to handle
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems)); //set value to key in localstorage
};
