import React from "react";
import { useState } from "react";
import { RegisterAction } from "../../../Actions/register";
import { useDispatch } from "react-redux";

export const RegisterScreen = () => {
  /**Saaving user
   * get the value from the input
   * store in state value
   * call the dispatch the action to reducer
   * add user to database
   */
  const [person, setPerson] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  }); //usestate definition

  const dispatch = useDispatch(); //for calling action and taking then to reducer

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setPerson({ ...person, [name]: value }); //state handler call
  };

  const handleSubmit = (e) => {
    dispatch(RegisterAction(person)); //dispatch action to reducer
    setPerson({ firstname: "", lastname: "", email: "", password: "" });
  }; //javascript function call

  return (
    <React.Fragment>
      <div className="form_block">
        <form>
          <input
            type="text"
            name="firstname"
            placeholder="Firstname"
            value={person.firstname}
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastname"
            placeholder="Lastname"
            value={person.lastname}
            onChange={handleChange}
          />
          <input
            type="text"
            name="email"
            placeholder="a@gmail.com"
            value={person.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={person.password}
            onChange={handleChange}
          />
          <button type="button" onClick={handleSubmit}>
            Register
          </button>
        </form>
      </div>
    </React.Fragment>
  );
}; //React component definition
