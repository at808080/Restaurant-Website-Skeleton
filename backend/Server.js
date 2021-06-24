import express from "express";
//import data from "./MenuData.js";
import mongoose from "mongoose";
import UserRouter from "./Routers/UserRouter.js"
import MenuItemRouter from "./Routers/MenuItemRouter.js";
import dotenv from "dotenv";

dotenv.config()


//https://www.youtube.com/watch?v=7CqJlxBYj-M&ab_channel=freeCodeCamp.org
const app = express();

//all requests containing data will be translated correctly
//used to return user from post request in signin function
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


mongoose.connect(process.env.MONGODV_URL || "mongodb://localhost/ebistrot", { //if ebistrot does not exist, it creates ebistrot database
    useNewUrlParser: true,                                                  //connect to either the url in the environment or just to the localhost url by default
    useUnifiedTopology: true,
    useCreateIndex: true,
});

/* This method only displays local data on the server. Disabled to load data from mongodb
app.get("/api/menu", (req, res) => {
    res.send(data.menuitems);
});
*/
app.get("/", (req, res) => {
    res.send("Server ready");
});

//direct this url to the userrouter
app.use("/api/users", UserRouter);
//direct this url to the userrouter
app.use("/api/menu", MenuItemRouter);

//Catch errors
app.use((err, req, res, next) => {
    res.status(500).send({message: err.message});
});
const port = process.env.PORT || 6060;
app.listen(port, () => {
    console.log(`Serving at http://localhost:${port}`);
});
