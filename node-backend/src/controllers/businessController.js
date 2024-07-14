import business from "../models/Business.js";

class BusinessController {

    static async getAllBusinesses(req, res) {
        try {
            const foundBusinesses = await business.find({});
            res.status(200).json(foundBusinesses);
        } catch (error) {
            res.status(500).json({
                message: "Internal server error on BusinessController.getAllBusinesses(): " + error
            });
        }
    }

    static async getBusiness(req, res) {
        try {
            const foundBusiness = await business.findById(req.params.id);
            res.status(200).json(foundBusiness);
        } catch (error) {
            res.status(500).json({
                message: "Internal server error on BusinessController.getBusiness(): " + error
            });
        }
    }

    static async createBusiness(req, res) {
        try {
            const createdBusiness = await business.create(req.body);
            res.status(200).json({
                message: "Business successfully created.",
                business: createdBusiness
            });
        } catch (error) {
            res.status(500).json({
                message: "Internal server error on BusinessController.createBusiness(): " + error
            });
        }
    }

    static async updateBusiness(req, res) {
        try {
            const updatedBusiness = await business.findByIdAndUpdate(req.params.id, req.body);
            res.status(200).json({
                message: "Business successfully updated.",
                business: updatedBusiness
            });
        } catch (error) {
            res.status(500).json({
                message: "Internal server error on BusinessController.updateBusiness(): " + error
            });
        }
    }

    static async deleteBusiness(req, res) {
        try {
            const deletedBusiness = await business.findByIdAndDelete(req.params.id);
            res.status(200).json({
                message: "Business successfully deleted.",
                business: deletedBusiness
            });
        } catch (error) {
            res.status(500).json({
                message: "Internal server error on BusinessController.deleteBusiness(): " + error
            });
        }
    }

}

export default BusinessController;