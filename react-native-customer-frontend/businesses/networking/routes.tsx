const BASE = "http://localhost:3000/";

const businessesRoute = BASE + "businesses/";
const servicesRoute = BASE + "services/";
const serviceAvailableTimesRoute = servicesRoute + "availableTimes/";
const serviceAttendantsRoute = servicesRoute + "attendants/";
const attendantsRoute = BASE + "attendants/";
const appointmentsRoute = BASE + "appointments/";

const jsonHeaders = {
    "Accept": "application/json",
    "Content-Type": "application/json"
};

export { BASE, businessesRoute, servicesRoute, serviceAvailableTimesRoute, serviceAttendantsRoute, attendantsRoute, appointmentsRoute, jsonHeaders };