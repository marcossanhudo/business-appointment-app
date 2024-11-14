import BusinessDTO from "@/dto/BusinessDTO";
import { businessesRoute, businessRoute } from "../routers/businessRouter";

async function getAllBusinesses() { 
    return await fetch(businessesRoute, { method: "GET" })
        .then(res => {
            let arr = new Array<BusinessDTO>;
                
            res.json()
                .then(json => json.forEach((object: Object) => {
                    arr.push(new BusinessDTO(object));
                }));

            return arr;
        });
}

async function getBusiness(businessId: string) {
    return await fetch(businessRoute(businessId), { method: "GET" })
        .then(res => res.json());
}

export { getAllBusinesses, getBusiness };