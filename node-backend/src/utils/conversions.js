import { SECOND_DURATION_IN_MILLISECONDS, MINUTE_DURATION_IN_MILLISECONDS, HOUR_DURATION_IN_MILLISECONDS, DAY_DURATION_IN_MILLISECONDS } from "./timeDurations.js";

function minutesToMilliseconds(minutes) {
    return minutes * MINUTE_DURATION_IN_MILLISECONDS;
}

function midnightOf(date) {
    return Math.floor(date / DAY_DURATION_IN_MILLISECONDS) * DAY_DURATION_IN_MILLISECONDS;
}

function timeToMilliseconds(time) {
    const timeComponents = time.split(":");
    
    var timeComponentsAsNumbers = [];
    timeComponents.forEach(component => timeComponentsAsNumbers.push(Number.parseFloat(component)));

    return (timeComponentsAsNumbers[0] * HOUR_DURATION_IN_MILLISECONDS) + (timeComponentsAsNumbers[1] * MINUTE_DURATION_IN_MILLISECONDS) + (timeComponentsAsNumbers[2] * SECOND_DURATION_IN_MILLISECONDS);
}

function timeZoneToMilliseconds(timeZone) {
    const timeZoneComponents = timeZone.split(":");
    
    var timeZoneComponentsAsNumbers = [];
    timeZoneComponents.forEach(component => timeZoneComponentsAsNumbers.push(Number.parseFloat(component)));

    return (timeZoneComponentsAsNumbers[0] * HOUR_DURATION_IN_MILLISECONDS) + (timeZoneComponentsAsNumbers[1] * MINUTE_DURATION_IN_MILLISECONDS);
}

function UTCStringTimeToLocalMilliseconds(timeWithTimeZone) {
    var components = timeWithTimeZone.split("+");
    
    if (components.length == 1) {
        components = timeWithTimeZone.split("-");
        return timeToMilliseconds(components[0]) - timeZoneToMilliseconds(components[1]);
    }

    return timeToMilliseconds(components[0]) + timeZoneToMilliseconds(components[1]);
}

function getTimeZone(timeWithTimeZone) {
    var components = timeWithTimeZone.split("+");
    
    if (components.length == 1) {
        components = timeWithTimeZone.split("-");
        return "-" + components[1];
    }

    return "+" + components[1];
}

function addTimeZone(dateTime, timeZone) {
    return dateTime.toISOString().split("Z")[0] + timeZone;
}

export { minutesToMilliseconds, midnightOf, timeToMilliseconds, timeZoneToMilliseconds, UTCStringTimeToLocalMilliseconds, getTimeZone, addTimeZone };