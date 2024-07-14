import mongoose from "mongoose";

const businessSchema = new mongoose.Schema({
    id: { type: String },
    name: { type: String, required: true },
    openingTime: { type: String, required: true },
    closingTime: { type: String, required: true }
}, { versionKey: false });

const business = mongoose.model("businesses", businessSchema);

export default business;