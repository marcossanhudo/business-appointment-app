import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    name: { type: String, required: true },
    description: { type: String },
    appointmentDurationInMinutes: { type: Number },
    appointmentPrice: { type: Number },
    businessId: { type: String, required: true }
}, { versionKey: false });

const service = mongoose.model("services", serviceSchema);

export default service;