export const AddToCart = (state = { cartItems: [] }, action) => {
  //get the item passed in payload
  //check if item exist already in cart
  //if exist update it
  //if not create a new item object in the array of cartItems
  //return default state  when no action is dispatch

  switch (action.type) {
    case "addToCart":
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x.product === item.product); //we get the one that matches
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        }; //update the object in the array
      } else {
        return { ...state, cartItems: [...state.cartItems, item] }; //create a new object
      }
    default:
      return state;
  }
}; //javascript function definition
