/*All imports*/
const express = require("express");
const data = require("./data/data"); //require data from module
const cors = require("cors"); //require cross-origin-resourse-sharing
const helmet = require("helmet"); //require helmetjs from node_modules
const app = express(); //create express application

//middlewares
/*express.json(),external router,urlencoded extended false,cors,helmet*/
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: ["http://localhost:5000/api/products"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    optionsSuccessStatus: 200,
  })
); //use cors on our server
app.use(helmet.xssFilter()); //avoid xxs
app.use(helmet.noSniff()); //avoid sniffing through mime/types
app.use(helmet.contentSecurityPolicy());
app.use(helmet.hidePoweredBy()); //hide the server engine used

/*Request methods*/
app.get("/api/products", (req, res) => {
  if (data) {
    //if data exist
    res.status(200).json(data); //send json as response to user
  } else {
    res.status(400).json({ msg: "No data to render to user" }); //send json as response to user
  }
}); //get method

const port = process.env.port || 5000;
app.listen(port, "localhost", () => {
  console.log(`server is running on localhost:${port}`);
});
