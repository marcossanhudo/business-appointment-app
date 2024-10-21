import { customersRoute, customerRoute, customerFirstUpcomingAppointmentRoute, customerAppointmentsForCurrentDayRoute, customerAppointmentsOnOrAfterRoute } from "../routers/customerRouter";

async function getFirstUpcomingAppointment(customerId: string, currentDateTime: number) {
    return await fetch(customerFirstUpcomingAppointmentRoute(customerId, currentDateTime), { method: "GET" })
        .then(res => res.status === 200 ? res.json() : null);
}

async function getAppointmentsForCurrentDay(customerId: string, currentDateTime: number) {
    return await fetch(customerAppointmentsForCurrentDayRoute(customerId, currentDateTime), { method: "GET" })
        .then(res => res.status === 200 ? res.json() : null);
}

async function getAppointmentsOnOrAfter(customerId: string, currentDateTime: number) {
    return await fetch(customerAppointmentsOnOrAfterRoute(customerId, currentDateTime), { method: "GET" })
        .then(res => res.status === 200 ? res.json() : null);
}

export { getFirstUpcomingAppointment, getAppointmentsForCurrentDay, getAppointmentsOnOrAfter };