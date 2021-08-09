export const Register = (state = { user: [] }, action) => {
  switch (action.type) {
    case "register":
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
