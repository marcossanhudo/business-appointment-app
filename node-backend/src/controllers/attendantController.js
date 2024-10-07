import attendant from "../models/Attendant.js";

class AttendantController {

    static async getAttendants(req, res) {
        try {
            const foundAttendants = await attendant.find({});
            res.status(200).json(foundAttendants);
        } catch (error) {
            res.status(500).json({
                message: "Internal server error on AttendantController.getAllAttendants(): " + error.message
            });
        }
    }

    static async getAttendant(req, res) {
        try {
            const foundAttendant = await attendant.findById(req.params.id);
            res.status(200).json(foundAttendant);
        } catch (error) {
            res.status(500).json({
                message: "Internal server error on AttendantController.getAttendant(): " + error.message
            });
        }
    }

    static async createAttendant(req, res) {
        try {
            const createdAttendant = await attendant.create(req.body);
            res.status(200).json({
                message: "Attendant successfully created.",
                attendant: createdAttendant
            });
        } catch (error) {
            res.status(500).json({
                message: "Internal server error on AttendantController.createAttendant(): " + error.message
            });
        }
    }

    static async updateAttendant(req, res) {
        try {
            const updatedAttendant = await attendant.findByIdAndUpdate(req.params.id, req.body);
            res.status(200).json({
                message: "Attendant successfully updated.",
                attendant: updatedAttendant
            });
        } catch (error) {
            res.status(500).json({
                message: "Internal server error on AttendantController.updateAttendant(): " + error.message
            });
        }
    }

    static async deleteAttendant(req, res) {
        try {
            const deletedAttendant = await attendant.findByIdAndDelete(req.params.id);
            res.status(200).json({
                message: "Attendant successfully deleted.",
                attendant: deletedAttendant
            })
        } catch (error) {
            res.status(500).json({
                message: "Internal server error on AttendantController.deleteAttendant(): " + error.message
            });
        }
    }

}

export default AttendantController;