import express from "express";
import ServiceController from "../controllers/serviceController.js";

const router = express.Router();

router.get("/services", ServiceController.getAllServices);
router.get("/services/:id", ServiceController.getService);
router.get("/services/:businessId", ServiceController.getServicesFromBusiness);
router.post("/services", ServiceController.createService);
router.put("/services/:id", ServiceController.updateService);
router.delete("/services/:id", ServiceController.deleteService);

export default router;