import appointment from "../models/Appointment.js";
import service from "../models/Service.js";
import business from "../models/Business.js";
import attendant from "../models/Attendant.js";

class AppointmentController {

    static async getAppointments(req, res) {
        try {
            const foundAppointments = await appointment.find(req.query);
            res.status(200).json(foundAppointments);
        } catch (error) {
            res.status(500).json({
                message: "Internal server error on AppointmentController.getAppointments(): " + error.message
            });
        }
    }

    static async getAppointment(req, res) {
        try {
            const foundAppointment = await appointment.findById(req.params.id);
            res.status(200).json(foundAppointment);
        } catch (error) {
            res.status(500).json({
                message: "Internal server error on AppointmentController.getAppointment(): " + error.message
            });
        }
    }

    static async getExtendedAppointment(req, res) {
        try {
            let foundAppointment = await appointment.findById(req.params.id);

            if (foundAppointment === null) {
                res.status(404).send();
            } else {
                let appointmentAttendant = null;
                
                const appointmentService = await service.findById(foundAppointment.serviceId);
                const appointmentBusiness = await business.findById(appointmentService.businessId);

                if (foundAppointment.attendantId !== null) {
                    appointmentAttendant = await attendant.findById(foundAppointment.attendantId);
                }
                
                foundAppointment = { business: appointmentBusiness, service: appointmentService, attendant: appointmentAttendant, ...foundAppointment._doc };

                res.status(200).json(foundAppointment);
            }
        } catch (error) {
            res.status(500).json({
                message: "Internal server error on AppointmentController.getExtendedAppointment(): " + error.message
            });
        }
    }

    static async createAppointment(req, res) {
        try {
            const createdAppointment = await appointment.create(req.body);
            res.status(200).json({
                message: "Appointment successfully created.",
                appointment: createdAppointment
            });
        } catch (error) {
            res.status(500).json({
                message: "Internal server error on AppointmentController.createAppointment(): " + error.message
            });
        }
    }

    static async updateAppointment(req, res) {
        try {
            const updatedAppointment = await appointment.findByIdAndUpdate(req.params.id, req.body);
            res.status(200).json({
                message: "Appointment successfully updated.",
                appointment: updatedAppointment
            });
        } catch (error) {
            res.status(500).json({
                message: "Internal server error on AppointmentController.updateAppointment(): " + error,message
            });
        }
    }

    static async deleteAppointment(req, res) {
        try {
            const deletedAppointment = await appointment.findByIdAndDelete(req.params.id);
            res.status(200).json({
                message: "Appointment successfully deleted.",
                appointment: deletedAppointment
            });
        } catch (error) {
            res.status(500).json({
                message: "Internal server error on AppointmentController.deleteAppointment(): " + error.message
            });
        }
    }

}

export default AppointmentController;