import React from "react";
import { useState } from "react";
import { Signin } from "../../../Actions/signin";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import "../../../styles/signin.css";

export const Signin_screen = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.userInfo);

  //state for storing user email and password in input field
  const [people, setPeople] = useState({ email: "", password: "" }); //state value and handler definition

  //function to update the state value
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setPeople({ ...people, [name]: value }); //state handler call
  };
  const history = useHistory();
  //function to call the action signin
  const handleSubmit = () => {
    if (people) {
      dispatch(Signin(people));
      setPeople({ email: "", password: "" }); //state handler call
      const url = history.location.search.split("=")[1];
      if (url == "shipping") {
        history.push("/shipping");
      }
    } else {
      alert("Enter your email or password");
    }
  };

  return (
    <React.Fragment>
      <div className="form_block">
        <form>
          <input
            type="text"
            name="email"
            value={people.email}
            placeholder="Enter your email"
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            value={people.password}
            placeholder="Enter your password"
            onChange={handleChange}
          />
          <button type="button" onClick={handleSubmit}>
            Signin
          </button>
          <p>
            Create an account? <Link to="/Register">Register</Link>
          </p>
        </form>
      </div>
    </React.Fragment>
  );
}; //javascript function definition
