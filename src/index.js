import React from "react";
import ReactDom from "react-dom";
import Main from "./Main";
import "./styles/index.css";
import store from "./store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}; //react component definition

ReactDom.render(<App />, document.getElementById("root")); //render element to the id root
