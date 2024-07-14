import express from "express";

const router = express.Router();

router.get("/customers", CustomerController.getAllCustomers);
router.get("/customers/:id", CustomerController.getCustomer);
router.post("/customers", CustomerController.createCustomer);
router.put("/customers/:id", CustomerController.updateCustomer);
router.delete("/customers/:id", CustomerController.deleteCustomer);

export default router;