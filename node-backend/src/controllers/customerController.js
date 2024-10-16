import customer from "../models/Customer.js";
import appointment from "../models/Appointment.js";
import service from "../models/Service.js";
import business from "../models/Business.js";

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

    static async getCustomerFirstUpcomingAppointment(req, res) {
        try {
            let firstUpcomingAppointment = {};
            let serviceName = "";
            let businessName = "";

            await appointment.find({ customerId: req.query.customerId, startDateTime: { $gte: req.query.onOrAfter } })
                .then(foundAppointments => firstUpcomingAppointment = foundAppointments[0])
                .then(serviceName = await service.findById(firstUpcomingAppointment.serviceId).name)
                .then(businessName = await business.findById(firstUpcomingAppointment.businessId).name)
                .then(
                    await res.status(200).json({
                        _id: firstUpcomingAppointment._id,
                        serviceName: serviceName,
                        startDateTime: firstUpcomingAppointment.startDateTime,
                        businessName: businessName
                    })
                );
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