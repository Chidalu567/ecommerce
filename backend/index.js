/*All imports*/
const express = require("express");
const data = require("./data/data"); //require data from module
const cors = require("cors"); //require cross-origin-resourse-sharing
const helmet = require("helmet"); //require helmetjs from node_modules
const app = express(); //create express application
const ProductsRouter = require("./routes/productsApi"); //require data from module

//middlewares
/*express.json(),external router,urlencoded extended false,cors,helmet*/
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    optionsSuccessStatus: 200,
  })
); //use cors on our server
app.use(helmet.xssFilter()); //avoid xxs
app.use(helmet.noSniff()); //avoid sniffing through mime/types
app.use(helmet.contentSecurityPolicy());
app.use(helmet.hidePoweredBy()); //hide the server engine used
app.use("/api/products", ProductsRouter); //middle to use external routers



const port = process.env.port || 5000;
app.listen(port, "localhost", () => {
  console.log(`server is running on localhost:${port}`);
});
