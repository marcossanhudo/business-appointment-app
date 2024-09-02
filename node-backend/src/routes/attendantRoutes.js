import express from "express";
import AttendantController from "../controllers/attendantController.js";

const router = new express.Router();

router.get("/attendants", AttendantController.getAllAttendants);
router.get("/attendants/:id", AttendantController.getAttendant);
router.post("/attendants", AttendantController.createAttendant);
router.put("/attendants/:id", AttendantController.updateAttendant);
router.delete("/attendants/:id", AttendantController.deleteAttendant);

export default router;