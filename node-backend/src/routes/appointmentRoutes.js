import express from "express";
import AppointmentController from "../controllers/appointmentController.js";

const router = express.Router();

router.get("/appointments", AppointmentController.getAllAppointments);
router.get("/appointments/:id", AppointmentController.getAppointment);
router.post("/appointments", AppointmentController.getAppointment);
router.put("/appointments/:id", AppointmentController.updateAppointment);
router.delete("/appointments/:id", AppointmentController.deleteAppointment);

export default router;