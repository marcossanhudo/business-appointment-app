import { BASE } from ".";
import { getQueryParamString } from "./utils";

const customersRoute = BASE + "customers/";

const customerRoute = (customerId: string) => { 
    return customersRoute + customerId;
}

const customerFirstUpcomingAppointmentRoute = (customerId: string, onOrAfter: number) => {
    return customerRoute(customerId) + "/appointments/firstUpcoming" + "?onOrAfter=" + onOrAfter
}

const customerAppointmentsForSpecificDayRoute = (customerId: string, currentDateTime: number) => {
    return customerRoute(customerId) + "/appointments/day/" + currentDateTime
}

const customerAppointmentsOnOrAfterRoute = (customerId: string, onOrAfter: number) => {
    return customerRoute(customerId) + "/appointments" + "?onOrAfter=" + onOrAfter
}

const customerAppointmentsRoute = (customerId: string, queryParams: { [key: string]: any }) => {
    return customerRoute(customerId) + "/appointments" + getQueryParamString(queryParams); 
}

export { customersRoute, customerRoute, customerAppointmentsRoute, customerFirstUpcomingAppointmentRoute, customerAppointmentsForSpecificDayRoute, customerAppointmentsOnOrAfterRoute }