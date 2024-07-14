import customer, { customer as customer } from "../models/Customer.js";

class CustomerController {

    static async getAllCustomers(req, res) {
        try {
            const foundCustomers = await customer.find({});
            res.status(200).json(foundCustomers);
        } catch (error) {
            res.status(500).json({
                message: "Internal server error on CustomerController.getAllCustomers(): " + error.message
            });
        }
    }

    static async getCustomer(req, res) {
        try {
            const foundCustomer = await customer.findById(req.params.id);
            res.status(200).json(foundCustomer);
        } catch (error) {
            res.status(500).json({
                message: "Internal server error on CustomerController.getCustomer(): " + error.message
            });
        }
    }

    static async createCustomer(req, res) {
        try {
            const createdCustomer = await customer.create(req.body);
            res.status(200).json({
                message: "Customer successfully created.",
                customer: createdCustomer
            });
        } catch (error) {
            res.status(500).json({
                message: "Internal server error on CustomerController.createCustomer(): " + error.message
            });
        }
    }

    static async updateCustomer(req, res) {
        try {
            const updatedCustomer = await customer.findByIdAndUpdate(req.params.id, req.body);
            res.status(200).json({
                message: "Customer successfully updated.",
                customer: updatedCustomer
            });
        } catch (error) {
            res.status(500).json({
                message: "Internal server error on CustomerController.updateCustomer(): " + error.message
            });
        }
    }

    static async deleteCustomer(req, res) {
        try {
            const deletedCustomer = await customer.findByAndDelete(req.params.id);
            res.status(200).json({
                message: "Customer successfully deleted.",
                customer: deletedCustomer
            });
        } catch (error) {
            res.status(500).json({
                message: "Internal server error on CustomerController.deleteCustomer(): " + error.message
            });
        }
    }

}

export default CustomerController;