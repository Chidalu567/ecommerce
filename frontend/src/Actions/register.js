const axios = require("axios"); //for ajax request

export const RegisterAction = (param) => async (dispatch) => {
  const { firstname, lastname, email, password } = param;
  const username = firstname + " " + lastname;
  const user = axios
    .post("http://localhost:5000/api/users/register", {
      username,
      email,
      password,
    })
    .catch((err) => dispatch({ type: "error", payload: err.message })); //make an ajax request
  dispatch({ type: "register", payload: user }); //dispatch action to reducer
};
