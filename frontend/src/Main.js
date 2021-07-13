import React from "react";
import data from "./data/data";
import Product from "./component/Product";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homescreen from "./component/routes/screens/Homescreen";
import Productviewscreen from "./component/routes/screens/ProductViewScreen";

const Main = () => {
  return (
    <Router>
      <div className="grid-container">
        <header className="row">
          {/*The brand section*/}
          <div>
            <a href="" className="brand">
              Amazon
            </a>
          </div>

          {/*The cart and sign-in section*/}
          <div>
            <a href="">cart</a>
            <a href="">sign-in</a>
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
