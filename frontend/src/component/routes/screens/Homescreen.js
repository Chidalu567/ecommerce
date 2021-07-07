import React from "react";
import data from "../../../data/data";
import Product from "../../Product";

//The Homescreen component renders all the products when the user navigates to the home path '/'
const Homescreen = () => {
  return (
    <div className="row center">
      {/*This displays all the product */}
      {data.map((product) => {
        return <Product key={product._id} {...product} />;
      })}
    </div>
  );
};

export default Homescreen; //export for external file to use
