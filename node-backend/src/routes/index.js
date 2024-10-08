import express from "express";
import appointmentRoutes from "./appointmentRoutes.js";
import attendantRouters from "./attendantRoutes.js";
import businessRoutes from "./businessRoutes.js";
import customerRoutes from "./customerRoutes.js";
import serviceRoutes from "./serviceRoutes.js";

const router = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Business Node server"));
    app.use(express.json(), appointmentRoutes, attendantRouters, businessRoutes, customerRoutes, serviceRoutes);
}

export default router;