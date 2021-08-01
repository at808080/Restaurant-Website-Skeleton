import express from "express";
import User from "../Models/UserModel.js";
import data from "../UserData.js";
import expressAsyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
import { generateToken } from "../Utils/utils.js";
const UserRouter = express.Router();


UserRouter.get(
    "/seed", //handle api/users/seed
    expressAsyncHandler(async(req, res) => {
    //Only for debug purposes initially - to avoid duplicates, first remove all users before adding them again
    await User.remove({});
    const CreatedUsers = await User.insertMany(data.users);
    res.send({ CreatedUsers });
}));

UserRouter.post(
    '/signin',
    expressAsyncHandler(async (req, res) => {
        const user = await User.findOne({ email: req.body.email });
        if (user) {
            if (bcrypt.compareSync(req.body.password, user.password)) {
                res.send({
                    _id: user._id,
                    firstname: user.firstname,
                    lastname: user.lastname,
                    email: user.email,
                    isAdmin: user.isAdmin,
                    token: generateToken(user),
                });
                return;
            }
        }
        res.status(401).send({ message: 'Invalid email or password' });
    })
);





UserRouter.post("/register", expressAsyncHandler(async(req, res) => {
    
    const user = new User({
        isAdmin: req.body.isAdmin,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
    });
    
    const createdUser = await user.save();
    res.send({
        _id: createdUser._id,
        firstname: createdUser.firstname,
        lastname: createdUser.lastname,
        email: createdUser.email,
        isAdmin: createdUser.isAdmin,
        token: generateToken(createdUser),
    });                  
    })
);

UserRouter.get(":/id", expressAsyncHandler(async(req, res) => {
    const user = await User.findById(req.params.id);
    if (user) {
        res.send(user);
    } else {
        res.status(404).send( { message: "User Not Found" });
    }
    })
);

export default UserRouter;
