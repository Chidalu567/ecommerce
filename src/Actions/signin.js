const axios = require("axios"); //require from node module

export const Signin = (param) => async (dispatch, getState) => {
  //get the user email and password when action is called

  const { email, password } = param;

  const result = await axios
    .post("https://ekenecom.herokuapp.com/api/users/signin", {
      email: email,
      password: password,
    })
    .catch((err) => dispatch({ type: "error", payload: err.message })); //make an ajax request

  try {
    //try to only get the data from server then dispatch to reducer
    const { data } = result;
    //dispatch to reducer
    dispatch({ type: "signIn", payload: data });
    localStorage.setItem("userInfo", JSON.stringify(getState().user.userInfo)); //set userINfo in localstorage
  } catch (err) {
    dispatch({ type: "error", payload: err.message });
  }
};

export const signOut = () => async (dispatch) => {
  localStorage.removeItem("userInfo"); //remove item from local storage
  localStorage.removeItem("cartItems"); //remove item from local storage
};
