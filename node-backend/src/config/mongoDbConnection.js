import mongoose from "mongoose";

async function connectToDatabase() {
    mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
    return mongoose.connection;
}

export default connectToDatabase;