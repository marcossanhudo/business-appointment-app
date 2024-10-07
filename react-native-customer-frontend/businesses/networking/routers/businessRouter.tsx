import { BASE } from ".";

const businessesRoute = BASE + "businesses/";

const businessRoute = (businessId: string) => {
    return businessesRoute + businessId;
}

export { businessesRoute, businessRoute }; 