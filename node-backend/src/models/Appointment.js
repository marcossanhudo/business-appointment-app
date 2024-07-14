import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    serviceId: { type: mongoose.Schema.Types.ObjectId, required: true },
    customerId: { type: mongoose.Schema.Types.ObjectId, required: true },
    dateTime: { type: Date, required: true },
    customerNotes: { type: String },
    status: { type: String, required: true }  // pending, completed, cancelled
}, { versionKey: false });

const appointment = mongoose.model("appointments", appointmentSchema);

export default appointment;