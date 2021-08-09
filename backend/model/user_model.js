const mongoose = require("mongoose"); //require from node modules

//create mongodb schema for Documents
//export the schema

//1
const user_schema = new mongoose.Schema(
  {
    username: { type: String, required: true, min: 6 },
    email: { type: String, required: true, unique: true, min: 6, max: 1024 },
    password: { type: String, required: true, min: 6 },
    isadmin: { type: Boolean, default: false },
  },
  { collection: "AmazonUsers" }
);

//2
const user_model = mongoose.model("user_schema", user_schema);

module.exports = user_model; //export model for external file to use
