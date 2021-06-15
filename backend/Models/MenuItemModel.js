import mongoose from "mongoose";

const MenuItemSchema = new mongoose.Schema({
    //_id: {type: String, required: true},
    name: {type: String, required: true},
    price: {type: Number, required: true, unique: false},    //{type: Float32Array, required: true},
    source: {type: String, required: true, unique: true},
}, {
    timestamps: true
});

const MenuItem = mongoose.model("MenuItem", MenuItemSchema);
export default MenuItem;