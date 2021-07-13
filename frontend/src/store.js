import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import Product_Reducer from "./Reducers/Product_Reducer";
import Product_View from "./Reducers/Product_View";
import thunk from "redux-thunk";

const allReducers = combineReducers({
  products: Product_Reducer,
  product_view: Product_View,
});
const composeEnhanced = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const initialState = {};
const store = createStore(
  allReducers,
  initialState,
  composeEnhanced(applyMiddleware(thunk))
); //create a globalize store

export default store; //export for external file to use
