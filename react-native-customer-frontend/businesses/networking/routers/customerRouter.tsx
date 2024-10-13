import { BASE } from ".";

const customersRoute = BASE + "customers/";

const customerRoute = (customerId: string) => { 
    return customersRoute + customerId;
}

const customerFirstUpcomingAppointmentRoute = (customerId: string, currentDateTime: number) => {
    return customerRoute(customerId) + "/appointments/firstUpcoming" + "&onOrAfter=" + currentDateTime
}

export { customersRoute, customerRoute, customerFirstUpcomingAppointmentRoute }