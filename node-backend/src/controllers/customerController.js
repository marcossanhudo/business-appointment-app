import customer from "../models/Customer.js";

class CustomerController {

    static async getAllCustomers(req, res) {
        try {
            res.status(200).json();
        } catch (error) {
            res.status(500).json({
                message: "Internal server error on CustomerController.getAllCustomers(): " + error
            })
        }
    }

    static async getCustomer(req, res) {
        try {
            res.status(200).json();
        } catch (error) {
            res.status(500).json({
                message: "Internal server error on CustomerController.getCustomer(): " + error
            })
        }
    }

    static async createCustomer(req, res) {
        try {
            res.status(200).json();
        } catch (error) {
            res.status(500).json({
                message: "Internal server error on CustomerController.createCustomer(): " + error
            })
        }
    }

    static async updateCustomer(req, res) {
        try {
            res.status(200).json();
        } catch (error) {
            res.status(500).json({
                message: "Internal server error on CustomerController.updateCustomer(): " + error
            })
        }
    }

    static async deleteCustomer(req, res) {
        try {
            res.status(200).json();
        } catch (error) {
            res.status(500).json({
                message: "Internal server error on CustomerController.deleteCustomer(): " + error
            })
        }
    }

}

export default CustomerController;