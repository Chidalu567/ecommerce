import React from "react";
import "../../../styles/order.css";
import { Checkout } from "../../Checkout";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { addToCart } from "../../../Actions/addToCart";
import { removeAction } from "../../../Actions/removeFromCart";
import { Button } from "antd";
import { RightSquareOutlined } from "@ant-design/icons";
import { mOrder } from "../../../Actions/makeOrder";

export const Order = () => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.shipping);
  const { shippingInfo } = user;
  const address =
    shippingInfo.address +
    " " +
    shippingInfo.city.charAt(0).toUpperCase() +
    shippingInfo.city.slice(1) +
    "," +
    shippingInfo.country.charAt(0).toUpperCase() +
    shippingInfo.country.slice(1) +
    "," +
    shippingInfo.postal;
  const payment = localStorage.getItem("payment");
  const price = cartItems.reduce((a, x) => a + Number(x.qty * x.price), 0);
  const tP = Number((10 / 100) * price * 5);
  const handleSubmit = () => {
    dispatch(mOrder(shippingInfo, cartItems, payment, tP));
    history.push("/order_detail");
  };
  return (
    <div>
      <Checkout step={4} step3="process" step1="finish" step2="finish" />
      <div className="Order_Container">
        <div className="i1">
          <h3>Shipping</h3>
          <h5>Name: {shippingInfo.username}</h5>
          <h5>Address:{address}</h5>
        </div>
        <div className="i3">
          <h3>Order Summary</h3>
          <h5>
            Order price:
            {cartItems.reduce((a, x) => a + Number(x.qty + x.price), 0)}
          </h5>
          <h5>Order Gst: 10%</h5>
          <h5>Tax: $5</h5>
          <h5>Total price:{Number((10 / 100) * price * 5)}</h5>
          <Button
            type="primary"
            onClick={handleSubmit}
            icon={<RightSquareOutlined />}
          >
            Make Order
          </Button>
        </div>
        <div className="i2">
          <h3>Payment</h3>
          <h5>Method:{payment}</h5>
        </div>

        <div className="i4">
          <h3>Order Item</h3>
          <div>
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
          </div>
        </div>
      </div>
    </div>
  );
}; //javascript funtion definition
