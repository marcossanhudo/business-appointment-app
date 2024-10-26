import express from "express";
import CustomerController from "../controllers/customerController.js";

const router = express.Router();

router.get("/customers", CustomerController.getCustomers);
router.get("/customers/:id/appointments/firstUpcoming", CustomerController.getCustomerFirstUpcomingAppointment);
router.get("/customers/:id/appointments/day/:day", CustomerController.getCustomerAppointmentsForSpecificDay);
router.get("/customers/:id/appointments", CustomerController.getCustomerAppointments);
router.get("/customers/:id", CustomerController.getCustomer);
router.post("/customers", CustomerController.createCustomer);
router.put("/customers/:id", CustomerController.updateCustomer);
router.delete("/customers/:id", CustomerController.deleteCustomer);

export default router;