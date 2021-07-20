import React from "react";
import data from "./data/data";
import Product from "./component/Product";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Homescreen from "./component/routes/screens/Homescreen";
import Productviewscreen from "./component/routes/screens/ProductViewScreen";
import CartScreen from "./component/routes/screens/CartScreen";
import { useSelector } from "react-redux";
import { Signin } from "./component/routes/screens/Signin";
const Main = () => {
  //For cart items
  //we get the cartItem from reducer state saved in initial state of store
  //if the length is greater than 0 we show the badge number based on the length of the cartItem array
  const cart = useSelector((state) => state.cart); //get the state from the reducer state
  const { cartItems } = cart; //cartItems
  return (
    <Router>
      <div className="grid-container">
        <header className="row">
          {/*The brand section*/}
          <div>
            <Link to="/" className="brand">
              Amazon
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
            <Link to="/sign-in">sign-in</Link>
          </div>
        </header>

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
            <Route path="/sign-in" children={<Signin />}></Route>
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
