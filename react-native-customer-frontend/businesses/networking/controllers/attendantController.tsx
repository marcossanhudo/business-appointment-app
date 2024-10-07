import { attendantsRoute } from "../routers";

async function getAttendant(attendantId: string) {
    return await fetch(attendantsRoute + attendantId, { method: "GET" })
        .then(res => res.json());
}

export { getAttendant };