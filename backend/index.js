/*All imports*/
const express = require("express");
const data = require("./data/data"); //require data from module
const cors = require("cors"); //require cross-origin-resourse-sharing
const helmet = require("helmet"); //require helmetjs from node_modules
const app = express(); //create express application
const ProductsRouter = require("./routes/productsApi"); //require data from module
const userApi = require("./routes/userApi"); //require from module
const mongoose = require("mongoose"); //require data from node module
const dotenv = require("dotenv");
const OrderRouter = require("./routes/orderApi");

dotenv.config();

//connect to database
mongoose.connect(
  `mongodb+srv://Ecommerce:${process.env.data_pass}@ecommerce.o8zkv.mongodb.net/Ecommerce?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }
);

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

//routers
app.use("/api/products", ProductsRouter); //middle to use external routers
app.use("/api/users/", userApi); //middleware to use external router
app.use("/api/order_detail", OrderRouter); //middle to use external router

//application port number
const port = process.env.PORT || 5000;

app.listen(port, "localhost", () => {
  console.log(`server is running on localhost:${port}`);
});
