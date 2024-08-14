import { servicesRoute } from "../routes";

async function getServicesFromBusiness(businessId: string) { 
    return await fetch(servicesRoute + "?businessId=" + businessId, { method: "GET" })
        .then(res => res.json());
}

async function getService(serviceId: string) {
    return await fetch(servicesRoute + serviceId, { method: "GET" })
        .then(res => res.json());
}

export { getServicesFromBusiness, getService };