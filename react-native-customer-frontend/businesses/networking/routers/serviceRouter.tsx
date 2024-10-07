import { BASE } from ".";

const servicesRoute = BASE + "services/";

const serviceRoute = (serviceId: string) => {
    return servicesRoute + serviceId;
}

const servicesFromBusinessRoute = (businessId: string) => {
    return servicesRoute + "?businessId=" + businessId;
}

const serviceAttendantsRoute = (serviceId: string) => {
    return serviceRoute(serviceId) + "/attendants/";
}

const serviceAvailableTimesRoute = (serviceId: string, appointmentDate: number) => {
    return serviceRoute(serviceId) + "/availableTimes" + "?appointmentDate=" + appointmentDate;
}

export { servicesRoute, serviceRoute, servicesFromBusinessRoute, serviceAttendantsRoute, serviceAvailableTimesRoute };