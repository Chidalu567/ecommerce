/**
 *
 * @param {Object} sI -This is abbr for shippingInfo
 * @param {Object} cI -This is abbr for cartItems
 * @param {String} pM -This is abbr for paymentMethod
 * @param {Number} tP -This is abbr for totalPrice
 * @description This function is to make ajax post request to the server to save
 * the user order details and the user making the order using jwt token.
 * We are not going to persist the data in localStorage beacause it is too large
 * We will clear all the datas in localStorage after all the order has been successfully made
 * @returns
 */

const axios = require("axios");

export const mOrder = (sI, cI, pM, tP) => async (dispatch) => {
  dispatch({ type: "request" });
  try {
  } catch {}
};
