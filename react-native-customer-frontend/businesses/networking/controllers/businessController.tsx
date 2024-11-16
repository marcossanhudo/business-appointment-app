import BusinessDTO from "@/dto/BusinessDTO";
import { businessesRoute, businessRoute } from "../routers/businessRouter";

async function getAllBusinesses() { 
    return await fetch(businessesRoute, { method: "GET" })
        .then(res => res.json().then(json => BusinessDTO.jsonArrayToDtoArray(json)));
}

async function getBusiness(businessId: string) {
    return await fetch(businessRoute(businessId), { method: "GET" })
        .then(res => res.status === 200 ? res.json().then(json => new BusinessDTO(json)) : null);
}

export { getAllBusinesses, getBusiness };