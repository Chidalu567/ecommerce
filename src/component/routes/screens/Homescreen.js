import React from "react";
import Product from "../../Product";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../../Actions/getProducts";
import { useEffect } from "react";

//The Homescreen component renders all the products when the user navigates to the home path '/'
const Homescreen = () => {
  //dispath the action to getProducts on initial render of page using useDispatch and useEffect
  //get the state value from a reducer using the useSelector
  //use the state value in code

  const dispatch = useDispatch(); //dispatch definition
  useEffect(() => {
    dispatch(getProducts()); //call the action and take it to the reducer
  }, [dispatch]);

  const data = useSelector((state) => state.products); //get the state value from the reducer in the store
  const { products } = data;

  return (
    <div className="row center">
      {/*This displays all the product */}
      {products.map((data) => {
        return <Product key={data._id} {...data} />;
      })}
    </div>
  );
};

export default Homescreen; //export for external file to use
