const SECOND_DURATION_IN_MILLISECONDS = 1000;
const MINUTE_DURATION_IN_MILLISECONDS = 60 * SECOND_DURATION_IN_MILLISECONDS;
const HOUR_DURATION_IN_MILLISECONDS = 60 * MINUTE_DURATION_IN_MILLISECONDS;
const DAY_DURATION_IN_MILLISECONDS = 24 * HOUR_DURATION_IN_MILLISECONDS;

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

function midnightOf(date: number) {
    return Math.floor(date / DAY_DURATION_IN_MILLISECONDS) * DAY_DURATION_IN_MILLISECONDS;
}

function nextMidnightFrom(date: number) {
    return midnightOf(date) + DAY_DURATION_IN_MILLISECONDS;
}

export { getLocaleTimeString, getLocaleDateString, getLocaleDateTimeString, ignoreDate, ignoreTime, midnightOf, nextMidnightFrom };