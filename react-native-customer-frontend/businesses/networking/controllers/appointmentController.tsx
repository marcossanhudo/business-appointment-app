import { appointmentsRoute, jsonHeaders } from "../routers";

async function getAppointment(appointmentId: string) {
    return await fetch(appointmentsRoute + appointmentId, { method: "GET" })
        .then(res => res.json());
}

async function postAppointment(appointmentDetails: object) {
    return await fetch(appointmentsRoute, { method: "POST", headers: jsonHeaders, body: JSON.stringify(appointmentDetails) })
        .then(res => res.json());
}

export { getAppointment, postAppointment };