const mongoose = require("mongoose"); //require from node modules

//create document Schema
//create document model from schema
//export to external file

const product_schema = new mongoose.Schema(
  {
    price: { type: Number, required: true },
    name: { type: String, required: true },
    image: { type: String, required: true },
    numReviews: { type: Number, required: true },
    rating: { type: Number, required: true },
    description: { type: String, required: true },
    inStockCount: { type: Number, required: true },
  },
  { collection: "products" }
); //create a database schema

//create database model
const product_model = mongoose.model("productModel", product_schema); //create a database model

module.exports = product_model; //export for external file to use
