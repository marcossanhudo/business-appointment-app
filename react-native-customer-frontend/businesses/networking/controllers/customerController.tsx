import { customersRoute, customerRoute, customerFirstUpcomingAppointmentRoute, customerAppointmentsForSpecificDayRoute, customerAppointmentsOnOrAfterRoute } from "../routers/customerRouter";

async function getFirstUpcomingAppointment(customerId: string, currentDateTime: number) {
    return await fetch(customerFirstUpcomingAppointmentRoute(customerId, currentDateTime), { method: "GET" })
        .then(res => res.status === 200 ? res.json() : null);
}

async function getAppointmentsForSpecificDay(customerId: string, currentDateTime: number) {
    return await fetch(customerAppointmentsForSpecificDayRoute(customerId, currentDateTime), { method: "GET" })
        .then(res => res.status === 200 ? res.json() : null);
}

async function getAppointmentsOnOrAfter(customerId: string, currentDateTime: number) {
    return await fetch(customerAppointmentsOnOrAfterRoute(customerId, currentDateTime), { method: "GET" })
        .then(res => res.status === 200 ? res.json() : null);
}

export { getFirstUpcomingAppointment, getAppointmentsForSpecificDay, getAppointmentsOnOrAfter };