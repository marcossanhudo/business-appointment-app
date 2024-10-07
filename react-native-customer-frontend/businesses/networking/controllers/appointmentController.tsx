import { appointmentsRoute, appointmentRoute } from "../routers/appointmentRouter";
import { jsonHeaders } from "../routers/index";

async function getAppointment(appointmentId: string) {
    return await fetch(appointmentRoute(appointmentId), { method: "GET" })
        .then(res => res.json());
}

async function postAppointment(appointmentDetails: object) {
    return await fetch(appointmentsRoute, { method: "POST", headers: jsonHeaders, body: JSON.stringify(appointmentDetails) })
        .then(res => res.json());
}

export { getAppointment, postAppointment };