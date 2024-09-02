import { servicesRoute, serviceAvailableTimesRoute, serviceAttendantsRoute } from "../routes";

async function getServicesFromBusiness(businessId: string) { 
    return await fetch(servicesRoute + "?businessId=" + businessId, { method: "GET" })
        .then(res => res.json());
}

async function getService(serviceId: string) {
    return await fetch(servicesRoute + serviceId, { method: "GET" })
        .then(res => res.json());
}

async function getServiceAvailableTimes(serviceId: string, appointmentDate: number) {
    return await fetch(serviceAvailableTimesRoute + "?serviceId=" + serviceId + "&appointmentDate=" + appointmentDate, { method: "GET" })
        .then(res => res.json());
}

async function getServiceAttendants(serviceId: string) {
    return await fetch(serviceAttendantsRoute + serviceId)
        .then(res => res.json());
}

export { getServicesFromBusiness, getService, getServiceAvailableTimes, getServiceAttendants };