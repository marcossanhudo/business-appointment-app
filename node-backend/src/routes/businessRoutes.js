import express from "express";

const router = express.Router();

router.get("/businesses", BusinessController.getAllBusinesses);
router.get("/businesses/:id", BusinessController.getBusiness);
router.post("/businesses", BusinessController.createBusiness);
router.put("/businesses/:id", BusinessController.updateBusiness);
router.delete("/businesses/:id", BusinessController.deleteBusiness);

export default router;