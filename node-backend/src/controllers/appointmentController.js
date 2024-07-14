import { appointment as appointmentModel } from "../models/Appointment.js";

class AppointmentController {

    static async getAllAppointments(req, res) {
        try {
            const appointments = await appointmentModel.find({});
            res.status(200).json(appointments);
        } catch (error) {
            res.status(500).json({
                message: "Internal server error on AppointmentController.getAllAppointments(): " + error
            })
        }
    }

    static async getAppointment(req, res) {
        try {
            const appointment = await appointmentModel.findById(req.params.id);
            res.status(200).json(appointment);
        } catch (error) {
            res.status(500).json({
                message: "Internal server error on AppointmentController.getAppointment(): " + error
            })
        }
    }

    static async createAppointment(req, res) {
        try {
            const appointment = await appointmentModel.create(req.body);
            res.status(200).json({
                message: "Appointment successfully created.",
                appointment: appointment
            });
        } catch (error) {
            res.status(500).json({
                message: "Internal server error on AppointmentController.createAppointment(): " + error
            })
        }
    }

    static async updateAppointment(req, res) {
        try {
            const appointment = await appointmentModel.findByIdAndUpdate(req.params.id, req.body);
            res.status(200).json({
                message: "Appointment successfully updated.",
                appointment: appointment
            });
        } catch (error) {
            res.status(500).json({
                message: "Internal server error on AppointmentController.updateAppointment(): " + error
            })
        }
    }

    static async deleteAppointment(req, res) {
        try {
            const appointment = await appointmentModel.findByIdAndDelete(req.params.id);
            res.status(200).json({
                message: "Appointment successfully deleted.",
                appointment: appointment
            });
        } catch (error) {
            res.status(500).json({
                message: "Internal server error on AppointmentController.deleteAppointment(): " + error
            })
        }
    }

}

export default AppointmentController;