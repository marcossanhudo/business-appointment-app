import { businessesRoute } from "../routes";

async function getAllBusinesses() { 
    return await fetch(businessesRoute, { method: "GET" })
        .then(res => res.json());
}

async function getBusiness(businessId: string) {
    return await fetch(businessesRoute + businessId, { method: "GET" })
        .then(res => res.json());
}

export { getAllBusinesses, getBusiness };