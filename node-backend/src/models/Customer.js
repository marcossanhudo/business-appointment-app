import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    name: { type: String, required: true }
}, { versionKey: false });

const customer = mongoose.model("customers", customerSchema);

export default customer;