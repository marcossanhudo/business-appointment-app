import mongoose from "mongoose";

const attendantSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    name: { type: String, required: true }
}, { versionKey: false });

const attendant = mongoose.model("Attendants", attendantSchema);

export default attendant;