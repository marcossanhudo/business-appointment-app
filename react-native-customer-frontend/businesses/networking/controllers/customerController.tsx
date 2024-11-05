import { nextMidnightFrom } from "@/scripts/formatting";
import { customerAppointmentsRoute, customerFirstUpcomingAppointmentRoute, customerAppointmentsForSpecificDayRoute, customerAppointmentsOnOrAfterRoute } from "../routers/customerRouter";

const LATER_APPOINTMENTS_ITEM_LIMIT = 3;
const LATER_APPOINTMENTS_SORT_BY = "startDateTime";
const LATER_APPOINTMENTS_SORT_ORDER = "asc";

async function getFirstUpcomingAppointment(customerId: string, currentDateTime: number) {
    return await fetch(customerFirstUpcomingAppointmentRoute(customerId, currentDateTime), { method: "GET" })
        .then(res => res.status === 200 ? res.json() : null);
}

async function getTodaysAppointments(customerId: string) {
    return await getAppointmentsForSpecificDay(customerId, Date.now());
}

async function getAppointmentsForSpecificDay(customerId: string, currentDateTime: number) {
    return await fetch(customerAppointmentsForSpecificDayRoute(customerId, currentDateTime), { method: "GET" })
        .then(res => res.status === 200 ? res.json() : null);
}

async function getLaterAppointments(customerId: string) {
    const LATER_APPOINTMENTS_FILTERS = {
        onOrAfter: nextMidnightFrom(Date.now()),
        sortBy: LATER_APPOINTMENTS_SORT_BY,
        sortOrder: LATER_APPOINTMENTS_SORT_ORDER,
        limit: LATER_APPOINTMENTS_ITEM_LIMIT
    }

    return await getAppointments(customerId, LATER_APPOINTMENTS_FILTERS);
}

async function getAppointmentsOnOrAfter(customerId: string, currentDateTime: number) {
    return await fetch(customerAppointmentsOnOrAfterRoute(customerId, currentDateTime), { method: "GET" })
        .then(res => res.status === 200 ? res.json() : null);
}

/*  Parameters:
 *  - onOrAfter: number
 *  - after: number
 *  - onOrBefore: number
 *  - before: number
 *  - limit: number
 *  - sort: { attribute: string, order: string }
 */
async function getAppointments(customerId: string, queryParams: object) {
    return await fetch(customerAppointmentsRoute(customerId, queryParams), { method: "GET" })
        .then(res => res.status === 200 ? res.json() : null);
}

export { getFirstUpcomingAppointment, getTodaysAppointments, getLaterAppointments, getAppointmentsForSpecificDay, getAppointmentsOnOrAfter, getAppointments };