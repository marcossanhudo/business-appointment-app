import AppointmentDTO from "@/dto/AppointmentDTO";
import { appointmentsRoute, appointmentRoute, extendedAppointmentRoute } from "../routers/appointmentRouter";
import { jsonHeaders } from "../routers/index";

async function getAppointment(appointmentId: string) {
    return await fetch(appointmentRoute(appointmentId), { method: "GET" })
        .then(res => res.status === 200 ? res.json().then(json => new AppointmentDTO(json)) : null);
}

async function getExtendedAppointment(appointmentId: string) {
    return await fetch(extendedAppointmentRoute(appointmentId), { method: "GET" })
        .then(res => res.status === 200 ? res.json().then(json => new AppointmentDTO(json)) : null);
}

async function postAppointment(appointmentDetails: object) {
    return await fetch(appointmentsRoute, { method: "POST", headers: jsonHeaders, body: JSON.stringify(appointmentDetails) })
        .then(res => res.json());
}

export { getAppointment, getExtendedAppointment, postAppointment };