import { BASE } from ".";

const appointmentsRoute = BASE + "appointments/";

const appointmentRoute = (appointmentId: string) => {
    return appointmentsRoute + appointmentId;
}

export { appointmentsRoute, appointmentRoute };