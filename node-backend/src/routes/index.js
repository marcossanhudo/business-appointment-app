import express from "express";
import appointmentRoutes from "./appointmentRoutes.js";
import businessRoutes from "./businessRoutes.js";
import customerRoutes from "./customerRoutes.js";
import serviceRoutes from "./serviceRoutes.js";

const router = (app) => {
    app.use(express.json, appointmentRoutes, businessRoutes, customerRoutes, serviceRoutes);
}

export default router;