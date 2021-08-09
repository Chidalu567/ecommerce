import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import Product_Reducer from "./Reducers/Product_Reducer";
import Product_View from "./Reducers/Product_View";
import thunk from "redux-thunk";
import { AddToCart } from "./Reducers/AddToCart";
import { SignIn } from "./Reducers/Signin";
import { Register } from "./Reducers/Register";
import { Shipping } from "./Reducers/Shipping";

const allReducers = combineReducers({
  products: Product_Reducer,
  product_view: Product_View,
  cart: AddToCart,
  user: SignIn,
  register: Register,
  shipping: Shipping,
});
const composeEnhanced = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const initialState = {
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
  },
  user: {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : [],
  },
  shipping: {
    shippingInfo: localStorage.getItem("shipping")
      ? JSON.parse(localStorage.getItem("shipping"))
      : [],
  },
};
const store = createStore(
  allReducers,
  initialState,
  composeEnhanced(applyMiddleware(thunk))
); //create a globalize store

export default store; //export for external file to use
