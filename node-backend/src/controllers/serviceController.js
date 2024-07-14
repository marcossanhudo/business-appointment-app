import service from "../models/Service.js";

class ServiceController {

    static async getAllServices(req, res) {
        try {
            const foundServices = await service.find({});
            res.status(200).json(foundServices);
        } catch (error) {
            res.status(500).json({
                message: "Internal server error on ServiceController.getAllServices(): " + error.message
            });
        }
    }

    static async getService(req, res) {
        try {
            const foundService = await service.findById(req.params.id);
            res.status(200).json(foundService);
        } catch (error) {
            res.status(500).json({
                message: "Internal server error on ServiceController.getService(): " + error.message
            });
        }
    }

    static async createService(req, res) {
        try {
            const createdService = await service.create(req.body);
            res.status(200).json({
                message: "Service successfully created.",
                service: createdService
            });
        } catch (error) {
            res.status(500).json({
                message: "Internal server error on ServiceController.createService(): " + error.message
            });
        }
    }

    static async updateService(req, res) {
        try {
            const updatedService = await service.findByIdAndUpdate(req.params.id, req.body);
            res.status(200).json({
                message: "Service successfully updated.",
                service: updatedService
            });
        } catch (error) {
            res.status(500).json({
                message: "Internal server error on ServiceController.updateService(): " + error.message
            });
        }
    }

    static async deleteService(req, res) {
        try {
            const deletedService = await service.findByIdAndDelete(req.params.id);
            res.status(200).json({
                message: "Service successfully deleted.",
                service: deletedService
            });
        } catch (error) {
            res.status(500).json({
                message: "Internal server error on ServiceController.deleteService(): " + error.message
            });
        }
    }

}

export default ServiceController;