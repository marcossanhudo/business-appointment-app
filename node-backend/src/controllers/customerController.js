import customer from "../models/Customer.js";
import appointment from "../models/Appointment.js";
import service from "../models/Service.js";
import business from "../models/Business.js";
import { midnightOf } from "../utils/conversions.js";
import { DAY_DURATION_IN_MILLISECONDS } from "../utils/timeDurations.js";

class CustomerController {

    static async getCustomers(req, res) {
        try {
            const foundCustomers = await customer.find(req.query);
            res.status(200).json(foundCustomers);
        } catch (error) {
            res.status(500).json({
                message: "Internal server error on CustomerController.getCustomers(): " + error.message
            });
        }
    }

    static async getCustomer(req, res) {
        try {
            const foundCustomer = await customer.findById(req.params.id);
            res.status(200).json(foundCustomer);
        } catch (error) {
            res.status(500).json({
                message: "Internal server error on CustomerController.getCustomer(): " + error.message
            });
        }
    }

    static async getCustomerAppointments(req, res) {
        try {
            let args = { customerId: req.params.id, ...req.query };

            if (req.query.onOrAfter)
                args = { ...args, onOrAfter: null, startDateTime: { $gte: req.query.onOrAfter }};

            if (req.query.onOrBefore)
                args = { ...args, onOrBefore: null, startDateTime: { $lte: req.query.onOrBefore }};

            const foundAppointments = await appointment.find(args);

            if (foundAppointments.length === 0) {
                res.status(404).send();
            } else {
                for (let index = 0; index < foundAppointments.length; index++) {
                    let foundAppointment = foundAppointments[index];

                    const appointmentService = await service.findById(foundAppointment.serviceId);
                    const appointmentBusiness = await business.findById(appointmentService.businessId);
                    
                    foundAppointment = { business: appointmentBusiness, service: appointmentService, ...foundAppointment._doc };
                    foundAppointments[index] = foundAppointment;
                }

                res.status(200).json(foundAppointments);
            }
        } catch (error) {
            res.status(500).json({
                message: "Internal server error on CustomerController.getCustomerAppointments(): " + error.message
            });
        }
    }

    static async getCustomerAppointmentsForSpecificDay(req, res) {
        try {
            const midnight = midnightOf(req.params.day);
            const nextMidnight = midnight + DAY_DURATION_IN_MILLISECONDS;

            let foundAppointments = await appointment.find({ customerId: req.params.id, startDateTime: { $gte: midnight, $lt: nextMidnight }});

            if (foundAppointments.length === 0) {
                res.status(404).send();
            } else {
                for (let index = 0; index < foundAppointments.length; index++) {
                    let foundAppointment = foundAppointments[index];

                    const appointmentService = await service.findById(foundAppointment.serviceId);
                    const appointmentBusiness = await business.findById(appointmentService.businessId);
                    
                    foundAppointment = { business: appointmentBusiness, service: appointmentService, ...foundAppointment._doc };
                    foundAppointments[index] = foundAppointment;
                }

                res.status(200).json(foundAppointments);
            }
        } catch (error) {
            res.status(500).json({
                message: "Internal server error on CustomerController.getCustomerAppointmentsForSpecificDay(): " + error.message
            });
        }
    }

    static async getCustomerFirstUpcomingAppointment(req, res) {
        try {
            let firstUpcomingAppointment = {};
            let appointmentService = {};
            let appointmentBusiness = {};

            const foundAppointments = await appointment.find({ customerId: req.params.id, startDateTime: { $gte: req.query.onOrAfter } });

            if (foundAppointments.length === 0) {
                res.status(404).send();
            } else {
                firstUpcomingAppointment = foundAppointments[0];

                appointmentService = await service.findById(firstUpcomingAppointment.serviceId);
                appointmentBusiness = await business.findById(appointmentService.businessId);
                
                res.status(200).json({
                    _id: firstUpcomingAppointment._id,
                    serviceName: appointmentService.name,
                    startDateTime: firstUpcomingAppointment.startDateTime,
                    businessName: appointmentBusiness.name
                });
            }
        } catch (error) {
            res.status(500).json({
                message: "Internal server error on CustomerController.getCustomerFirstUpcomingAppointment(): " + error.message
            })
        }
    }

    static async createCustomer(req, res) {
        try {
            const createdCustomer = await customer.create(req.body);
            res.status(200).json({
                message: "Customer successfully created.",
                customer: createdCustomer
            });
        } catch (error) {
            res.status(500).json({
                message: "Internal server error on CustomerController.createCustomer(): " + error.message
            });
        }
    }

    static async updateCustomer(req, res) {
        try {
            const updatedCustomer = await customer.findByIdAndUpdate(req.params.id, req.body);
            res.status(200).json({
                message: "Customer successfully updated.",
                customer: updatedCustomer
            });
        } catch (error) {
            res.status(500).json({
                message: "Internal server error on CustomerController.updateCustomer(): " + error.message
            });
        }
    }

    static async deleteCustomer(req, res) {
        try {
            const deletedCustomer = await customer.findByAndDelete(req.params.id);
            res.status(200).json({
                message: "Customer successfully deleted.",
                customer: deletedCustomer
            });
        } catch (error) {
            res.status(500).json({
                message: "Internal server error on CustomerController.deleteCustomer(): " + error.message
            });
        }
    }

}

export default CustomerController;