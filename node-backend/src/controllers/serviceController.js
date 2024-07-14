import Service from "../models/Service.js";

class ServiceController {

    static async getAllServices(req, res) {
        try {
            res.status(200).json();
        } catch (error) {
            res.status(500).json({
                message: "Internal server error on ServiceController.getAllServices(): " + error
            })
        }
    }

    static async getService(req, res) {
        try {
            res.status(200).json();
        } catch (error) {
            res.status(500).json({
                message: "Internal server error on ServiceController.getService(): " + error
            })
        }
    }

    static async createService(req, res) {
        try {
            res.status(200).json();
        } catch (error) {
            res.status(500).json({
                message: "Internal server error on ServiceController.createService(): " + error
            })
        }
    }

    static async updateService(req, res) {
        try {
            res.status(200).json();
        } catch (error) {
            res.status(500).json({
                message: "Internal server error on ServiceController.updateService(): " + error
            })
        }
    }

    static async deleteService(req, res) {
        try {
            res.status(200).json();
        } catch (error) {
            res.status(500).json({
                message: "Internal server error on ServiceController.deleteService(): " + error
            })
        }
    }

}

export default ServiceController;