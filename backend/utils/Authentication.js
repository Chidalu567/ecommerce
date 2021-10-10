const jwt = require("jsonwebtoken");

//-------Function definition---------//
const gToken = (param) => {
  const token = jwt.sign(
    { param },
    process.env.U_S_K,
    { expiresIn: "10d" },
    { algorithm: "RS256" }
  ); //generate a token for user
  return token;
}; // //function definiton

module.exports = gToken;
