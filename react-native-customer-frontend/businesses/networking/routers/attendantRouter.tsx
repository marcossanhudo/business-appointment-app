import { BASE } from ".";

const attendantsRoute = BASE + "attendants/";

const attendantRoute = (attendantId: string) => {
    return attendantsRoute + attendantId;
}

export { attendantsRoute, attendantRoute };