import express from "express";
import MenuItem from "../Models/MenuItemModel.js";
import data from "../MenuData.js";
import expressAsyncHandler from "express-async-handler";

const MenuItemRouter = express.Router();

//API for all products
MenuItemRouter.get(
    "/", 
    expressAsyncHandler(async(req, res) => {
    const MenuItems = await MenuItem.find({});
    res.send({ MenuItems });
}));

MenuItemRouter.get(
    "/seed", 
    expressAsyncHandler(async(req, res) => {
    //Only for debug purposes initially - to avoid duplicates, first remove all users before adding them again
    await MenuItem.remove({});
    const CreatedMenuItems = await MenuItem.insertMany(data.menuitems);
    res.send({ CreatedMenuItems });
}));

export default MenuItemRouter;

//API for individual products
//at the end of the program so that /seed ^ is not treated as a product id
MenuItemRouter.get(
    "/:id", 
    expressAsyncHandler(async(req, res) => {
    const menuitem = await MenuItem.findById(req.params.id);
    if (menuitem) {
        res.send({ menuitem });
    }
    else {
        res.status(404).send({message: "Product not found"});
    }
    })
);

// 4:11 https://www.youtube.com/watch?v=TRCDsB9i3bI&t=10646s&ab_channel=CodingwithBasir