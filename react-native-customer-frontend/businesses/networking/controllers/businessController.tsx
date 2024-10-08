import { businessesRoute, businessRoute } from "../routers/businessRouter";

async function getAllBusinesses() { 
    return await fetch(businessesRoute, { method: "GET" })
        .then(res => res.json());
}

async function getBusiness(businessId: string) {
    return await fetch(businessRoute(businessId), { method: "GET" })
        .then(res => res.json());
}

export { getAllBusinesses, getBusiness };