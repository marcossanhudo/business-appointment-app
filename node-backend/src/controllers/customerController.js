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
            let args = { customerId: req.params.id };
            let sort = null;
            let limit = null;

            if (req.query.onOrAfter)
                args = { ...args, startDateTime: { ...args.startDateTime, $gte: req.query.onOrAfter }};

            if (req.query.after)
                args = { ...args, startDateTime: { ...args.startDateTime, $gt: req.query.after }};

            if (req.query.onOrBefore)
                args = { ...args, startDateTime: { ...args.startDateTime, $lte: req.query.onOrBefore }};

            if (req.query.before)
                args = { ...args, startDateTime: { ...args.startDateTime, $lt: req.query.before }};

            if (req.query.sortBy && req.query.sortOrder)
                sort = { [req.query.sortBy]: req.query.sortOrder }

            if (req.query.limit)
                limit = req.query.limit;

            const foundAppointments = await appointment.find(args)
                    .sort(sort)
                    .limit(limit);

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

    static async getCustomerLaterAppointments(req, res) {
        const LATER_APPOINTMENTS_FILTERS = {
            onOrAfter: req.params.day, // check whether this is correct
            sortBy: "startDateTime",
            sortOrder: "asc",
            limit: 3
        }

        req.query = { ...req.query, ...LATER_APPOINTMENTS_FILTERS };

        try {
            await CustomerController.getCustomerAppointments(req, res);
        } catch (error) {
            res.status(500).json({
                message: "Internal server error on CustomerController.getCustomerLaterAppointments(): " + error.message
            });
        }
    }

    static async getCustomerAllUpcomingAppointments(req, res) {
        const ALL_UPCOMING_APPOINTMENTS_FILTERS = {
            onOrAfter: req.params.day,
            sortBy: "startDateTime",
            sortOrder: "asc"
        }

        req.query = { ...req.query, ...ALL_UPCOMING_APPOINTMENTS_FILTERS };

        try {
            await CustomerController.getCustomerAppointments(req, res);
        } catch (error) {
            res.status(500).json({
                message: "Internal server error on CustomerController.getCustomerAllUpcomingAppointments(): " + error.message
            });
        }
    }

    static async getCustomerAllPastAppointments(req, res) {
        const ALL_PAST_APPOINTMENTS_FILTERS = {
            before: req.params.day,
            sortBy: "startDateTime",
            sortOrder: "asc"
        }

        req.query = { ...req.query, ...ALL_PAST_APPOINTMENTS_FILTERS };

        try {
            await CustomerController.getCustomerAppointments(req, res);
        } catch (error) {
            res.status(500).json({
                message: "Internal server error on CustomerController.getCustomerAllPastAppointments(): " + error.message
            });
        }
    }

    static async getCustomerAppointmentsForSpecificDay(req, res) {
        const userMidnight = midnightOf(req.params.day);

        const SPECIFIC_DAYS_APPOINTMENTS_FILTERS = {
            onOrAfter: userMidnight,
            before: userMidnight + DAY_DURATION_IN_MILLISECONDS,
            sortBy: "startDateTime",
            sortOrder: "asc"
        }

        req.query = { ...req.query, ...SPECIFIC_DAYS_APPOINTMENTS_FILTERS };

        try {
            await CustomerController.getCustomerAppointments(req, res);
        } catch (error) {
            res.status(500).json({
                message: "Internal server error on CustomerController.getCustomerAppointmentsForSpecificDay(): " + error.message
            });
        }
    }

    static async getCustomerFirstUpcomingAppointment(req, res) {
        const FIRST_UPCOMING_APPOINTMENT_FILTERS = {
            onOrAfter: req.params.currentDateTime,
            sortBy: "startDateTime",
            sortOrder: "asc",
            limit: 1
        }

        req.query = { ...req.query, ...FIRST_UPCOMING_APPOINTMENT_FILTERS };

        try {
            await CustomerController.getCustomerAppointments(req, res);            
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