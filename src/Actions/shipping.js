//---------Function-----------//
/**
 persist the shipping info  in the localstorage
 */
export const shipping = (param) => async (dispatch, getState) => {
  dispatch({ type: "shipping", payload: param });
  localStorage.setItem(
    "shippingInfo",
    JSON.stringify(getState().shipping.shippingInfo)
  ); //perist in localstorage
};
