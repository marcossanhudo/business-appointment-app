import AppointmentDTO from "@/dto/AppointmentDTO";
import { customerAppointmentsRoute, customerLaterAppointmentsRoute, customerFirstUpcomingAppointmentRoute, customerAppointmentsForSpecificDayRoute } from "../routers/customerRouter";

async function getFirstUpcomingAppointment(customerId: string) {
    const currentDateTime = Date.now();

    return await fetch(customerFirstUpcomingAppointmentRoute(customerId, currentDateTime), { method: "GET" })
        .then(res => res.status === 200 ? res.json().then(json => new AppointmentDTO(json[0])) : null);
}

async function getTodaysAppointments(customerId: string) {
    return await getAppointmentsForSpecificDay(customerId, Date.now());
}

async function getAppointmentsForSpecificDay(customerId: string, currentDateTime: number) {
    return await fetch(customerAppointmentsForSpecificDayRoute(customerId, currentDateTime), { method: "GET" })
        .then(res => res.status === 200 ? res.json() : null);
}

async function getLaterAppointments(customerId: string) {
    const currentDateTime = Date.now();

    return await fetch(customerLaterAppointmentsRoute(customerId, currentDateTime), { method: "GET"})
        .then(res => res.status === 200 ? res.json() : null);
}

async function getAppointments(customerId: string, queryParams: object) {
    return await fetch(customerAppointmentsRoute(customerId, queryParams), { method: "GET" })
        .then(res => res.status === 200 ? res.json() : null);
}

export { getFirstUpcomingAppointment, getTodaysAppointments, getLaterAppointments, getAppointmentsForSpecificDay, getAppointments };