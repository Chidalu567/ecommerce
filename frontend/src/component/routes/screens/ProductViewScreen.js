import React from "react";
import { Link, useParams, useHistory } from "react-router-dom";

import Rating from "../../rating";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import productView from "../../../Actions/productView"; //action

import { Loading } from "../Loading";

/*When the user navigate to the path /product/:id, we ge the product that matches the id
in this component Productviewscreen
then we create a page for the specific product 
*/
const Productviewscreen = () => {
  const { id } = useParams(); //get the id parsed from the url
  const history = useHistory(); //allows us to manually route a path

  const dispatch = useDispatch(); //dispatch definition
  const [quantity, setQuantity] = useState(1); //useState definition

  useEffect(() => {
    dispatch(productView(id)); //action call to transport action to reducer
  }, [dispatch, id]);

  const { single_product, loading } = useSelector(
    (state) => state.product_view
  ); //get the state value of the reducer in the store

  const product = single_product[0];

  const handleAddToCart = (e) => {
    history.push(`/cart/${id}?qty=${quantity}`); //manually route to a path
  }; //javascript function definition

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        //start of html
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
                <Rating
                  rating={product.rating}
                  numReviews={product.numReviews}
                />
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
                            : product.inStockCount < 5 &&
                              product.inStockCount > 0
                            ? "primary low"
                            : "danger"
                        }
                      >
                        InStock({product.inStockCount})
                      </span>
                    </div>
                  </div>
                </li>
                {product.inStockCount > 0 && (
                  <>
                    <div className="row">
                      <li>
                        <div>Qty:</div>
                        <div>
                          <select
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                          >
                            {[...Array(product.inStockCount).keys()].map(
                              (x) => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              )
                            )}
                          </select>
                        </div>
                      </li>
                    </div>
                    <li className="row center">
                      <button
                        type="button"
                        className="btn"
                        onClick={handleAddToCart}
                      >
                        Add to cart
                      </button>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
        //end of html
      )}
    </div>
  );
}; //react component definition

export default Productviewscreen; //export for external file to use
