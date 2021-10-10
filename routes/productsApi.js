const express = require("express"); //require express data from module
const router = express.Router(); //use express router
const data = require("../data/data");
const ProductModel = require("../model/productModel"); //require data from node modules
const ObjectId = require("mongodb").ObjectId;

//get Method
router.get("/", async (req, res) => {
  // const products = await ProductModel.insertMany(data.products); //iinsert many documents into database
  const products = await ProductModel.find({}); //find all document in database
  if (products) {
    //send json as response to user
    res.status(200).json({ data: products });
  } else {
    res.status(404).json({ msg: "Product empty" });
  }
}); //get method

//for individual product
router.get("/:id", async (req, res) => {
  //destructure the value of id from object
  const { id } = req.params;
  const product = await ProductModel.find({ _id: ObjectId(id) }); //find a document in database
  if (product) {
    res.status(200).json({ data: product }); //send json as response to user
  } else {
    res.status(400).json({ msg: "product not found" }); //send json as response to user
  }
}); //get methodwith dynamic parameter

module.exports = router; //export for external file to use
