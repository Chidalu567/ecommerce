const express = require("express"); //require data from node module
const router = express.Router();
const joi = require("joi"); //require from nodemodule
const userModel = require("../model/user_model"); //require
const bcrypt = require("bcryptjs"); //for hashing password
const gToken = require("../utils/Authentication");
// const hashPassword = require("../utils/hashpass");

//for valdating signin
/**
 * get the (password,email)
 * validate the data type of the values
 * check if the email exist already
 * {compare the password}
 * if pass, log the user in
 */

//create a validating schema
const signinSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().min(6).required(),
});

/**
 * @param {OBJECT} req this contains all request made by the client
 * @param {OBJECT} res this is our response to the client after a request is made
 */
//-----signin user-------//
debugger;
router.post("/signin", async (req, res) => {
  const { email, password } = req.body; //decontruct the value from object

  //validate the data

  const { error } = await signinSchema.validate(req.body); //validate the data comming in
  if (error) res.status(400).send({ error: error.details[0].message });

  //check if email exist

  const emailExist = await userModel.findOne({
    email: email,
  });
  if (!emailExist) {
    res.status(404).send("Email not found");
  }
  if (emailExist) {
    const result = await bcrypt.compare(password, emailExist.password); //compare the password together

    if (result) {
      //generate token for the user

      const token = gToken(emailExist);
      res
        .status(200)
        .json({ msg: "Sign in successfully", user: [emailExist, token] });
      res.end();
    }
  }
}); //post method
//----------------//

//-------Register user--------//

const registerSchema = joi.object({
  username: joi.string().min(6).required(),
  email: joi.string().min(6).email().required(),
  password: joi.string().min(6).required(),
}); //registerschema for validateing user register from req body

router.post("/register", async (req, res) => {
  //validate the req.body schema
  const { error } = await registerSchema.validate(req.body); //validate the body
  if (error) res.status(404).json({ msg: error.details[0].message }); //send this as response if error occur

  //get the body of request
  const { username, email, password } = req.body;

  //check if email exist or username exist
  const emailExist = await userModel.findOne({ email: email }); //check if email exist
  if (emailExist) {
    res.status(404).json({ msg: "Username or Email taken already" }); //send as response to user
  }

  //hashing user password
  //hashPassword
  const salt = await bcrypt.genSalt(10); //generate salt
  const hashedPass = await bcrypt.hash(password, salt); //hash password

  //save user to database

  const newUser = await userModel.create({
    username: username,
    email: email,
    password: hashedPass,
  });

  res.status(302).json({ msg: "Registered successfully" }); //redirect("http://localhost:3000"); //redirect user to hoe screen
}); //post method

module.exports = router; //export for external file to use
