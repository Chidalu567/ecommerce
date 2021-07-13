const express = require("express"); //require express data from module
const router = express.Router(); //use express router
const data = require("../data/data");

/*Request methods*/
router.get("/", (req, res) => {
  if (data) {
    //if data exist
    res.status(200).json(data); //send json as response to user
    res.end(); //end responsr
  } else {
    res.status(400).json({ msg: "No data to render to user" }); //send json as response to user
    res.end(); //end response
  }
}); //get method

//dynamic parameter of the specific products
router.get("/:id", (req, res) => {
  const { id } = req.params; //get the iid parameter from request
  const product = data.filter((product) => {
    return product._id === parseInt(id);
  });
  res.status(200).json(product); //send response as json to user
  res.end();
});

module.exports = router; //export for external file to use
