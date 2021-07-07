import React from "react";
import { Link, useParams } from "react-router-dom";
import data from "../../../data/data";
import Rating from "../../rating";

/*When the user navigate to the path /product/:id, we ge the product that matches the id
in this component Productviewscreen
then we create a page for the specific product 
*/
const Productviewscreen = () => {
  const { id } = useParams(); //get the id parsed from the url
  //find the data whose id mathes the passed id
  const product = data.find((prod) => {
    return prod._id === parseInt(id);
  }); //iterate throgh the array and return the object that passes the condition

  return (
    <div className="row top">
      <Link to="/">
        <span>
          <i class="fa fa-arrow-left" aria-hidden="true"></i> Back to Home
        </span>
      </Link>

      <div className="col-2">
        <img className="large" src={product.image} alt={product.name} />
      </div>
      <div className="col-1">
        <ul>
          <li>Name: {product.name}</li>
          <li>
            <Rating rating={product.rating} numReviews={product.numReviews} />
          </li>
          <li>Description: {product.description}</li>
          <li>Price: {product.price}</li>
        </ul>
      </div>
      <div className="col-1">
        <div className="card card-body">
          <ul>
            <li>
              <div className="row">
                <div>Price</div>
                <div>{product.price}</div>
              </div>
            </li>
            <li>
              <div>
                <Rating
                  rating={product.rating}
                  numReviews={product.numReviews}
                />
              </div>
            </li>
            <li>
              <div className="row">
                <div>Stock</div>
                <div>
                  <span
                    className={
                      product.inStockCount >= 5
                        ? "primary"
                        : product.inStockCount < 5 && product.inStockCount > 0
                        ? "primary low"
                        : "danger"
                    }
                  >
                    InStock({product.inStockCount})
                  </span>
                </div>
              </div>
            </li>
            <li className="row center">
              <button type="button" className="btn">
                Add to cart
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}; //react component definition

export default Productviewscreen; //export for external file to use
