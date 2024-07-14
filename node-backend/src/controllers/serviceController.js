import { service as serviceModel } from "../models/Service.js";

class ServiceController {

    static async getAllServices(req, res) {
        try {
            const services = await serviceModel.find({});
            res.status(200).json(services);
        } catch (error) {
            res.status(500).json({
                message: "Internal server error on ServiceController.getAllServices(): " + error.message
            })
        }
    }

    static async getService(req, res) {
        try {
            const service = await serviceModel.findById(req.params.id);
            res.status(200).json(service);
        } catch (error) {
            res.status(500).json({
                message: "Internal server error on ServiceController.getService(): " + error.message
            })
        }
    }

    static async createService(req, res) {
        try {
            const service = await serviceModel.create(req.body);
            res.status(200).json({
                message: "Service successfully created.",
                service: service
            });
        } catch (error) {
            res.status(500).json({
                message: "Internal server error on ServiceController.createService(): " + error.message
            })
        }
    }

    static async updateService(req, res) {
        try {
            const service = await serviceModel.findByIdAndUpdate(req.params.id, req.body);
            res.status(200).json({
                message: "Service successfully updated.",
                service: service
            });
        } catch (error) {
            res.status(500).json({
                message: "Internal server error on ServiceController.updateService(): " + error.message
            })
        }
    }

    static async deleteService(req, res) {
        try {
            const service = await serviceModel.findByIdAndDelete(req.params.id);
            res.status(200).json({
                message: "Service successfully deleted.",
                service: service
            });
        } catch (error) {
            res.status(500).json({
                message: "Internal server error on ServiceController.deleteService(): " + error.message
            })
        }
    }

}

export default ServiceController;