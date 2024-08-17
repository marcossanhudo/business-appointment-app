const SECOND_DURATION_IN_MILLISECONDS = 1000;
const MINUTE_DURATION_IN_MILLISECONDS = 60 * SECOND_DURATION_IN_MILLISECONDS;
const HOUR_DURATION_IN_MILLISECONDS = 60 * MINUTE_DURATION_IN_MILLISECONDS;
const DAY_DURATION_IN_MILLISECONDS = 24 * HOUR_DURATION_IN_MILLISECONDS;

function minutesToMilliseconds(minutes) {
    return minutes * MINUTE_DURATION_IN_MILLISECONDS;
}

function midnight(date) {
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

export { minutesToMilliseconds, midnight, timeToMilliseconds, timeZoneToMilliseconds, UTCStringTimeToLocalMilliseconds };