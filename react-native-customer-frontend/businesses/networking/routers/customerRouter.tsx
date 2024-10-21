import { BASE } from ".";

const customersRoute = BASE + "customers/";

const customerRoute = (customerId: string) => { 
    return customersRoute + customerId;
}

const customerFirstUpcomingAppointmentRoute = (customerId: string, onOrAfter: number) => {
    return customerRoute(customerId) + "/appointments/firstUpcoming" + "?onOrAfter=" + onOrAfter
}

const customerAppointmentsForCurrentDayRoute = (customerId: string, currentDateTime: number) => {
    return customerRoute(customerId) + "/appointments" + "?date=" + currentDateTime
}

const customerAppointmentsOnOrAfterRoute = (customerId: string, onOrAfter: number) => {
    return customerRoute(customerId) + "/appointments" + "?onOrAfter=" + onOrAfter
}

export { customersRoute, customerRoute, customerFirstUpcomingAppointmentRoute, customerAppointmentsForCurrentDayRoute, customerAppointmentsOnOrAfterRoute }