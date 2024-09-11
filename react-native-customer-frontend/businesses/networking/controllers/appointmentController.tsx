import { appointmentsRoute } from "../routes";

async function postAppointment(appointmentDetails: object) {
    return await fetch(appointmentsRoute, { method: "POST", body: JSON.stringify(appointmentDetails) })
        .then(res => res.json());
}

export { postAppointment };