import { appointmentsRoute, jsonHeaders } from "../routes";

async function getAppointment(appointmentId: string) {
    return await fetch(appointmentsRoute + appointmentId, { method: "GET" })
        .then(res => res.json());
}

async function getFirstUpcomingAppointment(customerId: string, currentDateTime: number) {
    return await fetch(appointmentsRoute + "?customerId=" + customerId + "&onOrAfter=" + currentDateTime, { method: "GET" })
        .then(res => res.json());
}

async function postAppointment(appointmentDetails: object) {
    return await fetch(appointmentsRoute, { method: "POST", headers: jsonHeaders, body: JSON.stringify(appointmentDetails) })
        .then(res => res.json());
}

export { getAppointment, getFirstUpcomingAppointment, postAppointment };