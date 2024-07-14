//import Business from "../models/Business.js";

class BusinessController {

    static async getAllBusinesses(req, res) {
        try {
            res.status(200).json();
        } catch (error) {
            res.status(500).json({
                message: "Internal server error on BusinessController.getAllBusinesses(): " + error
            });
        }
    }

    static async getBusiness(req, res) {
        try {
            res.status(200).json();
        } catch (error) {
            res.status(500).json({
                message: "Internal server error on BusinessController.getBusiness(): " + error
            });
        }
    }

    static async createBusiness(req, res) {
        try {
            res.status(200).json();
        } catch (error) {
            res.status(500).json({
                message: "Internal server error on BusinessController.createBusiness(): " + error
            });
        }
    }

    static async updateBusiness(req, res) {
        try {
            res.status(200).json();
        } catch (error) {
            res.status(500).json({
                message: "Internal server error on BusinessController.updateBusiness(): " + error
            })
        }
    }

    static async deleteBusiness(req, res) {
        try {
            res.status(200).json();
        } catch (error) {
            res.status(500).json({
                message: "Internal server error on BusinessController.deleteBusiness(): " + error
            })
        }
    }

}

export default BusinessController;