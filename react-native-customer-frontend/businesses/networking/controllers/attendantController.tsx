import { attendantsRoute, attendantRoute } from "../routers/attendantRouter";

async function getAttendant(attendantId: string) {
    return await fetch(attendantRoute(attendantId), { method: "GET" })
        .then(res => res.json());
}

export { getAttendant };