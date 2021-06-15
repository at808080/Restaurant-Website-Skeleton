import express from "express";
import User from "../Models/UserModel.js";
import data from "../UserData.js";
import expressAsyncHandler from "express-async-handler";

const UserRouter = express.Router();

UserRouter.get(
    "/seed", //handle api/users/seed
    expressAsyncHandler(async(req, res) => {
    //Only for debug purposes initially - to avoid duplicates, first remove all users before adding them again
    await User.remove({});
    const CreatedUsers = await User.insertMany(data.users);
    res.send({ CreatedUsers });
}));

export default UserRouter;

// 4:11 https://www.youtube.com/watch?v=TRCDsB9i3bI&t=10646s&ab_channel=CodingwithBasir