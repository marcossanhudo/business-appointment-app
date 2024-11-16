import { BASE } from ".";

const appointmentsRoute = BASE + "appointments/";

const appointmentRoute = (appointmentId: string) => {
    return appointmentsRoute + appointmentId;
}

const extendedAppointmentRoute = (appointmentId: string) => {
    return appointmentsRoute + appointmentId + "/extended";
}

export { appointmentsRoute, appointmentRoute, extendedAppointmentRoute };