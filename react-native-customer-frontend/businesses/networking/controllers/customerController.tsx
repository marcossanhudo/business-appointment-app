import { customersRoute, customerRoute, customerFirstUpcomingAppointmentRoute } from "../routers/customerRouter";

async function getFirstUpcomingAppointment(customerId: string, currentDateTime: number) {
    return await fetch(customerFirstUpcomingAppointmentRoute(customerId, currentDateTime), { method: "GET" })
        .then(res => res.json());
}

export { getFirstUpcomingAppointment };