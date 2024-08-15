import { servicesRoute, serviceAvailableTimesRoute } from "../routes";

async function getServicesFromBusiness(businessId: string) { 
    return await fetch(servicesRoute + "?businessId=" + businessId, { method: "GET" })
        .then(res => res.json());
}

async function getService(serviceId: string) {
    return await fetch(servicesRoute + serviceId, { method: "GET" })
        .then(res => res.json());
}

async function getServiceAvailableTimes(serviceId: string, appointmentDate: string) {
    return await fetch(serviceAvailableTimesRoute + "?serviceId=" + serviceId + "&appointmentDate=" + appointmentDate, { method: "GET" })
        .then(res => res.json());
}

export { getServicesFromBusiness, getService, getServiceAvailableTimes };