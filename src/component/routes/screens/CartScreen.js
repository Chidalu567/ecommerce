import React from "react";
import { useParams, useHistory } from "react-router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../Actions/addToCart";
import { Message } from "../../Message";
import { Link } from "react-router-dom";
import "../../../styles/error.css";
import "../../../styles/cart.css";
import { removeAction } from "../../../Actions/removeFromCart";

const CartScreen = () => {
  //we get the id and query passed from the url using useParams and useHistory
  //we call the action to addToCart on the page render using useEffect
  //we get the item in cart from the reducer state in store
  const dispatch = useDispatch();
  const { id } = useParams(); //get the id when the dynamic route is called
  const history = useHistory();
  const qty = history.location.search.split("=")[1];
  const cart = useSelector((state) => state.cart); //get the state value from reducer state
  const { cartItems } = cart; //object destructuring for value

  useEffect(() => {
    dispatch(addToCart(id, qty));
  }, [dispatch, id, qty]); //useEffect hook definition

  return (
    <div className="main_block">
      <div className="col-1">
        {cartItems.length === 0 ? (
          <Message>
            Cart Empty <Link to="/">Go shopping</Link>
          </Message>
        ) : (
          <ul>
            {cartItems.map((item) => {
              return (
                <main key={item.product} className="main">
                  <div className="cartitems contain">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="cartitems contain image"
                    />
                  </div>
                  <div className="cartitems contain name">
                    <Link to={`/products/${item.product}`}>{item.name}</Link>
                  </div>
                  <div className="cartitems contain">
                    <select
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.product, Number(e.target.value))
                        )
                      }
                    >
                      {[...Array(Number(item.qty)).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="cartitems contain price">{item.price}</div>
                  <div className="cartitems contain">
                    <button
                      type="button"
                      className="cartitems contain button"
                      onClick={() => dispatch(removeAction(item.product))}
                    >
                      remove
                    </button>
                  </div>
                </main>
              );
            })}
          </ul>
        )}
      </div>
      <div className="col-2 cartscreen">
        <div>
          Number of quantities:
          {cartItems.reduce((a, x) => a + Number(x.qty), 0)}
          ($total price:{" "}
          {cartItems.reduce((a, x) => a + Number(x.qty * x.price), 0)})
        </div>
        <div>
          <button
            type="button"
            className="col-2_button"
            disabled={cartItems.length > 0 ? false : true}
            onClick={() => history.push("/sign-in?redirect=shipping")}
          >
            Proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
}; //react component definition

export default CartScreen; //export for external file to use
