const bcrypt = require("bcryptjs"); //for hashing password

const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10); //generate salt
  const hashedpassword = await bcrypt.hash(password, salt); //hash the user password

  return hashedpassword;
};

module.exports = hashPassword;
