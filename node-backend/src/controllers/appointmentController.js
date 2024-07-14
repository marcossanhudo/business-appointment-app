import appointment from "../models/Appointment.js";

class AppointmentController {

    static async getAllAppointments(req, res) {
        try {
            res.status(200).json();
        } catch (error) {
            res.status(500).json({
                message: "Internal server error on AppointmentController.getAllAppointments(): " + error
            })
        }
    }

    static async getAppointment(req, res) {
        try {
            res.status(200).json();
        } catch (error) {
            res.status(500).json({
                message: "Internal server error on AppointmentController.getAppointment(): " + error
            })
        }
    }

    static async createAppointment(req, res) {
        try {
            res.status(200).json();
        } catch (error) {
            res.status(500).json({
                message: "Internal server error on AppointmentController.createAppointment(): " + error
            })
        }
    }

    static async updateAppointment(req, res) {
        try {
            res.status(200).json();
        } catch (error) {
            res.status(500).json({
                message: "Internal server error on AppointmentController.updateAppointment(): " + error
            })
        }
    }

    static async deleteAppointment(req, res) {
        try {
            res.status(200).json();
        } catch (error) {
            res.status(500).json({
                message: "Internal server error on AppointmentController.deleteAppointment(): " + error
            })
        }
    }

}

export default AppointmentController;