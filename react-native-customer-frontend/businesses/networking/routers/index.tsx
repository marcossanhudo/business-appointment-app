const BASE = "http://localhost:3000/";

const businessesRoute = BASE + "businesses/";
const attendantsRoute = BASE + "attendants/";
const appointmentsRoute = BASE + "appointments/";

const jsonHeaders = {
    "Accept": "application/json",
    "Content-Type": "application/json"
};

export { BASE, businessesRoute, attendantsRoute, appointmentsRoute, jsonHeaders };