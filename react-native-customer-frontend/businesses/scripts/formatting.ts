function getLocaleTimeString(time: number): string {
    return new Date(time).toLocaleTimeString();
}

function getLocaleDateString(date: number): string {
    return new Date(date).toLocaleDateString();
}

function getLocaleDateTimeString(dateTime: number): string {
    return new Date(dateTime).toLocaleString();
}

function ignoreDate(date: string) {
    return new Date(date).toTimeString();
}

function ignoreTime(date: string) {
    return new Date(date).toISOString().split("T")[0];
}

function midnight(date: string) {
    return new Date(date + "T00:00:00.000Z");
}

export { getLocaleTimeString, getLocaleDateString, getLocaleDateTimeString, ignoreDate, ignoreTime, midnight };