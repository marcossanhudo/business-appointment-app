import ServiceDTO from "@/dto/ServiceDTO";
import { serviceRoute, servicesFromBusinessRoute, serviceAvailableTimesRoute, serviceAttendantsRoute } from "../routers/serviceRouter";

async function getServicesFromBusiness(businessId: string) { 
    return await fetch(servicesFromBusinessRoute(businessId), { method: "GET" })
        .then(res => res.status === 200 ? res.json().then(json => ServiceDTO.jsonArrayToDtoArray(json)) : []);
}

async function getService(serviceId: string) {
    return await fetch(serviceRoute(serviceId), { method: "GET" })
        .then(res => res.status === 200 ? res.json().then(json => new ServiceDTO(json)) : null);
}

async function getServiceAvailableTimes(serviceId: string, appointmentDate: number) {
    return await fetch(serviceAvailableTimesRoute(serviceId, appointmentDate), { method: "GET" })
        .then(res => res.json());
}

async function getServiceAttendants(serviceId: string) {
    return await fetch(serviceAttendantsRoute(serviceId))
        .then(res => res.json());
}

export { getServicesFromBusiness, getService, getServiceAvailableTimes, getServiceAttendants };