import React from "react";
import ReactDom from "react-dom";
import Main from "./Main";
import "./index.css";

const App = () => {
  return <Main />;
}; //react component definition

ReactDom.render(<App />, document.getElementById("root")); //render element to the id root
