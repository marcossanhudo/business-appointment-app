import mongoose from "mongoose";

const businessSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    name: { type: String, required: true },
    openingTime: { type: Number, required: true },
    closingTime: { type: Number, required: true },
    address: { type: String, required: true },
    description: { type: String, required: true },
    paymentOptions: {
        cash: { type: Boolean, required: true },
        debit: [ { cardCompanyName: { type: String, required: true } } ],
        credit: [ { cardCompanyName: { type: String, required: true } } ]
    }
}, { versionKey: false });

const business = mongoose.model("businesses", businessSchema);

export default business;