import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    firstname: {type: String, required: false},
    lastname: {type: String, required: false},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    isAdmin: {type: Boolean, default: false, required: true}
}, {
    timestamps: true
});

//Create a new collection called Users (automatically updates to pluralised form on mongoose)
//Ensure that objects in USers conform to the USerSchema
const User = mongoose.model("User", UserSchema);
export default User;