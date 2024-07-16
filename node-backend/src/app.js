import express from "express";
import connectToDatabase from "./config/mongoDbConnection.js";
import router from "./routes/index.js";

const connection = await connectToDatabase();

connection.on("error", (error) => {
    console.error("Connection error", error);
});

connection.once("open", () => {
    console.log("Connection successfully set up");
});

const app = express();
router(app);

export default app;