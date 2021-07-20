const axios = require("axios"); //require from external file

export const addToCart = (_id, qty) => async (dispatch, getState) => {
  //make an ajax request for the single data
  //dipatch the data with the number of quantiry
  //save the items gotten from the reducer state to local storage for persistence
  try {
    const { data } = await axios.get(
      `http://localhost:5000/api/products/${_id}`
    ); //make an ajax request to the server
    const product = data[0]; //get the object
    dispatch({
      type: "addToCart",
      payload: {
        name: product.name,
        price: product.price,
        image: product.image,
        product: product._id,
        qty,
      },
    }); //disatch action to reducer for handling
    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().cart.cartItems)
    ); //save the cartItems in localstorage
  } catch (error) {
    console.log(error.message);
  }
}; //function definition
