import React from "react";
import { Button, Drawer } from "antd";
import { DoubleLeftOutlined } from "@ant-design/icons";
import { useState } from "react";
import ShippingScreen from "./component/routes/screens/ShippingScreen";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useHistory,
} from "react-router-dom";
import Homescreen from "./component/routes/screens/Homescreen";
import Productviewscreen from "./component/routes/screens/ProductViewScreen";
import CartScreen from "./component/routes/screens/CartScreen";
import { useSelector, useDispatch } from "react-redux";
import { Signin_screen } from "./component/routes/screens/Signin";
import { signOut } from "./Actions/signin";
import { RegisterScreen } from "./component/routes/screens/Register";
import Payment from "./component/routes/screens/Payment";
import { Order } from "./component/routes/screens/Order";

const Main = () => {
  const history = useHistory(); //for manual routing in search box

  //For cart items
  //we get the cartItem from reducer state saved in initial state of store
  //if the length is greater than 0 we show the badge number based on the length of the cartItem array
  const cart = useSelector((state) => state.cart); //get the state from the reducer state
  const { cartItems } = cart; //cartItems

  //for user
  //check if user is in state already and show their name instead of signin
  //if the length of the array is >0 we show the username else we show signin
  const user = useSelector((state) => state.user); //get the state value of the state
  const { userInfo } = user;

  //signout function to call signout action
  const dispatch = useDispatch();
  const signout = () => {
    dispatch(signOut()); //action call
    window.location.reload(true);
  };

  //for drawer
  const [visible, setVisible] = useState(false); //useState definition
  const userClick = () => {
    setVisible(true);
  };
  const drawerClose = () => {
    setVisible(false);
  };
  return (
    <Router>
      <div className="grid-container">
        <header className="row">
          {/*The brand section*/}
          <div>
            <Link to="/" className="brand">
              Chizzy
            </Link>
          </div>

          {/*The cart and sign-in section*/}
          <div>
            <Link to="/cart">
              cart
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>
            {userInfo.length > 0 ? (
              <Button
                shape="circle"
                style={{ backgroundColor: "orange", color: "white" }}
                onClick={userClick}
              >
                {userInfo[0].username
                  .split(" ")[0]
                  .charAt(0)
                  .concat(userInfo[0].username.split(" ")[1].charAt(0))}
              </Button>
            ) : (
              <Link to="/sign-in">sign-in</Link>
            )}
          </div>
        </header>

        {/* Navigation drawer */}
        <Drawer
          title="Settings"
          placement="left"
          key="left"
          visible={visible}
          onClose={drawerClose}
          headerStyle={{ backgroundColor: "#203040" }}
          bodyStyle={{ backgroundColor: "white" }}
          closeIcon={<DoubleLeftOutlined />}
        >
          {userInfo.length > 0 ? (
            <Link to="#">{userInfo[0].username}</Link>
          ) : (
            <p></p>
          )}
          <p></p>
          <Link to="/" onClick={signout}>
            <i className="fa fa-sign-out" aria-hidden="true">
              Signout
            </i>
          </Link>
        </Drawer>

        <main>
          {/*Routes*/}

          {/*Homeroute to call the homescreen component*/}
          <Switch>
            <Route path="/" exact>
              <Homescreen />
            </Route>

            {/*Route to show the product clicked on*/}
            <Route
              path="/products/:id"
              children={<Productviewscreen />}
            ></Route>

            {/*Route for cart screen*/}
            <Route path="/cart/:id?" children={<CartScreen />}></Route>

            {/*Route for sign in screen*/}
            <Route path="/sign-in" children={<Signin_screen />}></Route>

            {/* Route for Register screen */}
            <Route path="/Register" children={<RegisterScreen />}></Route>

            {/* Route for shipping screen */}
            <Route path="/shipping" children={<ShippingScreen />}></Route>

            {/* Route for payment screen */}
            <Route path="/payment" children={<Payment />}></Route>

            {/*Route for order screen*/}
            <Route path="/make_order" children={<Order />}></Route>
          </Switch>
        </main>

        <footer className="row center">
          <p>@All right reserved</p>
        </footer>
      </div>
    </Router>
  );
}; //react component definition

export default Main; //export for external file to use

/**
 *             (
              {
                /* <div className="dropdown">
                <Link to="#">{userInfo[0].username}</Link>
                <div className="dropdown-content">
                  <Link to="/" onClick={signout}>
                    <i className="fa fa-sign-out" aria-hidden="true">
                      Signout
                    </i>
                  </Link>
                </div>
              </div> */
// }
// )
//  */
