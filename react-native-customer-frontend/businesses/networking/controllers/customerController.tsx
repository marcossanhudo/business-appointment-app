import { customersRoute, customerRoute, customerFirstUpcomingAppointmentRoute } from "../routers/customerRouter";

async function getFirstUpcomingAppointment(customerId: string, currentDateTime: number) {
    return await fetch(customerFirstUpcomingAppointmentRoute(customerId, currentDateTime), { method: "GET" })
        .then(res => res.status === 200 ? res.json() : null);
}

export { getFirstUpcomingAppointment };