const jwt = require("jsonwebtoken");

export const isAuth = (req, res, next) => {
  const auth = req.headers.Authorization;
  if (auth) {
    const token = auth.slice("7", auth.length); //if length is 9 slice(7,9);
    jwt.verify(token, process.env.U_S_K, (err, data) => {
      if (err) {
        res.status(404); //unAuthorized
      }
      if (data) {
        console.log(data);
        next();
      }
    });
  }
};
