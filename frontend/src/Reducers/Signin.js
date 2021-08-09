export const SignIn = (state = { userInfo: [], error: "" }, action) => {
  switch (action.type) {
    case "signIn":
      const { user } = action.payload;
      return { ...state, userInfo: user };
    case "error":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
