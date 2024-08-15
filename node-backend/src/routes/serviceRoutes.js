import express from "express";
import ServiceController from "../controllers/serviceController.js";

const router = express.Router();

router.get("/services/availableTimes", ServiceController.getServiceAvailableTimes);
router.get("/services", ServiceController.getServicesFromBusiness);
router.get("/services", ServiceController.getAllServices);
router.get("/services/:id", ServiceController.getService);
router.post("/services", ServiceController.createService);
router.put("/services/:id", ServiceController.updateService);
router.delete("/services/:id", ServiceController.deleteService);

export default router;