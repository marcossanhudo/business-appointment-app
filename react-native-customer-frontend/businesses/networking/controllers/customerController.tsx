import { customersRoute, customerRoute, customerAppointmentsRoute, customerFirstUpcomingAppointmentRoute, customerAppointmentsForSpecificDayRoute, customerAppointmentsOnOrAfterRoute } from "../routers/customerRouter";

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

/*  Parameters:
 *  - onOrAfter: number
 *  - onOrBefore: number
 *  - limit: number
 *  - sort: { attribute: string, order: string }
 */
async function getAppointments(customerId: string, queryParams: object) {
    return await fetch(customerAppointmentsRoute(customerId, queryParams), { method: "GET" })
        .then(res => res.status === 200 ? res.json() : null);
}

export { getFirstUpcomingAppointment, getAppointmentsForSpecificDay, getAppointmentsOnOrAfter, getAppointments };