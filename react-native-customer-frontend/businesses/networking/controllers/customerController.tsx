import { nextMidnightFrom } from "@/scripts/formatting";
import { customerAppointmentsRoute, customerLaterAppointmentsRoute, customerFirstUpcomingAppointmentRoute, customerAppointmentsForSpecificDayRoute, customerAppointmentsOnOrAfterRoute } from "../routers/customerRouter";

async function getFirstUpcomingAppointment(customerId: string, currentDateTime: number) {
    return await fetch(customerFirstUpcomingAppointmentRoute(customerId, currentDateTime), { method: "GET" })
        .then(res => res.status === 200 ? res.json() : null);
}

async function getTodaysAppointments(customerId: string) {
    return await getAppointmentsForSpecificDay(customerId, Date.now());
}

async function getAppointmentsForSpecificDay(customerId: string, currentDateTime: number) {
    return await fetch(customerAppointmentsForSpecificDayRoute(customerId, currentDateTime), { method: "GET" })
        .then(res => res.status === 200 ? res.json() : null);
}

async function getLaterAppointments(customerId: string) {
    return await fetch(customerLaterAppointmentsRoute(customerId, Date.now()), { method: "GET"})
        .then(res => res.status === 200 ? res.json() : null);
}

async function getAppointmentsOnOrAfter(customerId: string, currentDateTime: number) {
    return await fetch(customerAppointmentsOnOrAfterRoute(customerId, currentDateTime), { method: "GET" })
        .then(res => res.status === 200 ? res.json() : null);
}

async function getAppointments(customerId: string, queryParams: object) {
    return await fetch(customerAppointmentsRoute(customerId, queryParams), { method: "GET" })
        .then(res => res.status === 200 ? res.json() : null);
}

export { getFirstUpcomingAppointment, getTodaysAppointments, getLaterAppointments, getAppointmentsForSpecificDay, getAppointmentsOnOrAfter, getAppointments };