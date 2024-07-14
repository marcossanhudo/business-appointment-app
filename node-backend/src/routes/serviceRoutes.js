import express from "express";

const router = express.Router();

router.get("/services", ServiceController.getAllServices);
router.get("/services/:id", ServiceController.getService);
router.post("/services", ServiceController.getService);
router.put("/services/:id", ServiceController.updateService);
router.delete("/services/:id", ServiceController.deleteService);

export default router;