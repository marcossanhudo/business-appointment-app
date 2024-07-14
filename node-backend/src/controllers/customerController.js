import customer, { customer as customerModel } from "../models/Customer.js";

class CustomerController {

    static async getAllCustomers(req, res) {
        try {
            const customers = await customerModel.find({});
            res.status(200).json(customers);
        } catch (error) {
            res.status(500).json({
                message: "Internal server error on CustomerController.getAllCustomers(): " + error.message
            })
        }
    }

    static async getCustomer(req, res) {
        try {
            const customer = await customerModel.findById(req.params.id);
            res.status(200).json(customer);
        } catch (error) {
            res.status(500).json({
                message: "Internal server error on CustomerController.getCustomer(): " + error.message
            })
        }
    }

    static async createCustomer(req, res) {
        try {
            const customer = await customerModel.create(req.body);
            res.status(200).json({
                message: "Customer successfully created.",
                customer: customer
            });
        } catch (error) {
            res.status(500).json({
                message: "Internal server error on CustomerController.createCustomer(): " + error.message
            })
        }
    }

    static async updateCustomer(req, res) {
        try {
            const customer = await customerModel.findByIdAndUpdate(req.params.id, req.body);
            res.status(200).json({
                message: "Customer successfully updated.",
                customer: customer
            });
        } catch (error) {
            res.status(500).json({
                message: "Internal server error on CustomerController.updateCustomer(): " + error.message
            })
        }
    }

    static async deleteCustomer(req, res) {
        try {
            const customer = await customerModel.findByAndDelete(req.params.id);
            res.status(200).json({
                message: "Customer successfully deleted.",
                customer: customer
            });
        } catch (error) {
            res.status(500).json({
                message: "Internal server error on CustomerController.deleteCustomer(): " + error.message
            })
        }
    }

}

export default CustomerController;