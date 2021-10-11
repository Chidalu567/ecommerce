export const Shipping = (state = { shippingInfo: {} }, action) => {
  switch (action.type) {
    case "shipping":
      return { ...state, shippingInfo: action.payload };
    default:
      return state;
  }
};
