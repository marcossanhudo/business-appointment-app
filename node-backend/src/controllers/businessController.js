import { business as businessModel } from "../models/Business.js";

class BusinessController {

    static async getAllBusinesses(req, res) {
        try {
            const businesses = await businessModel.find({});
            res.status(200).json(businesses);
        } catch (error) {
            res.status(500).json({
                message: "Internal server error on BusinessController.getAllBusinesses(): " + error
            });
        }
    }

    static async getBusiness(req, res) {
        try {
            const business = await businessModel.findById(req.params.id);
            res.status(200).json(business);
        } catch (error) {
            res.status(500).json({
                message: "Internal server error on BusinessController.getBusiness(): " + error
            });
        }
    }

    static async createBusiness(req, res) {
        try {
            const business = await businessModel.create(req.body);
            res.status(200).json({
                message: "Business successfully created.",
                business: business
            });
        } catch (error) {
            res.status(500).json({
                message: "Internal server error on BusinessController.createBusiness(): " + error
            });
        }
    }

    static async updateBusiness(req, res) {
        try {
            const business = await businessModel.findByIdAndUpdate(req.params.id, req.body);
            res.status(200).json({
                message: "Business successfully updated.",
                business: business
            });
        } catch (error) {
            res.status(500).json({
                message: "Internal server error on BusinessController.updateBusiness(): " + error
            })
        }
    }

    static async deleteBusiness(req, res) {
        try {
            const business = await businessModel.findByIdAndDelete(req.params.id);
            res.status(200).json({
                message: "Business successfully deleted.",
                business: business
            });
        } catch (error) {
            res.status(500).json({
                message: "Internal server error on BusinessController.deleteBusiness(): " + error
            })
        }
    }

}

export default BusinessController;