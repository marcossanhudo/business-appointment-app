import service from "../models/Service.js";
import business from "../models/Business.js";
import { minutesToMilliseconds, midnightOf, timeToMilliseconds, UTCStringTimeToLocalMilliseconds, getTimeZone, addTimeZone } from "../utils/conversions.js";

class ServiceController {

    static async getServices(req, res) {
        try {
            const foundServices = await service.find(req.query);
            res.status(200).json(foundServices);
        } catch (error) {
            res.status(500).json({
                message: "Internal server error on ServiceController.getServices(): " + error.message
            });
        }
    }

    static async getServiceAttendants(req, res) {
        try {
            const foundService = await service.findById(req.params.id);
            const foundAttendants = foundService.attendantIds;
            res.status(200).json(foundAttendants);
        } catch (error) {
            res.status(500).json({
                message: "Internal server error on ServiceController.getServiceAttendants(): " + error.message
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

    static async getServiceAvailableTimes(req, res) {
        try {
            const availableTimes = [];

            const queryDateTime = Number.parseFloat(req.query.appointmentDate);
            const appointmentService = await service.findById(req.params.id);
            const appointmentBusiness = await business.findById(appointmentService.businessId);
            const appointmentDurationInMinutes = appointmentService.appointmentDurationInMinutes;
            
            const appointmentDurationInMilliseconds = minutesToMilliseconds(appointmentDurationInMinutes);
            const appointmentDateMidnight = midnightOf(queryDateTime);
            const businessOpeningTimeOnAppointmentDate = appointmentDateMidnight + appointmentBusiness.openingTime;
            const businessClosingTimeOnAppointmentDate = appointmentDateMidnight + appointmentBusiness.closingTime;

            var startTime = businessOpeningTimeOnAppointmentDate;
            var endTime = startTime + appointmentDurationInMilliseconds;

            while (endTime <= businessClosingTimeOnAppointmentDate) {
                availableTimes.push({
                    startTime: startTime,
                    endTime: endTime
                });
                startTime += appointmentDurationInMilliseconds;
                endTime += appointmentDurationInMilliseconds;
            }

            res.status(200).json(availableTimes);
        } catch (error) {
            res.status(500).json({
                message: "Internal server error on ServiceController.getServiceAvailableTimes(): " + error.message
            });
        }
    }

}

export default ServiceController;