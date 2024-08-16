const SECOND_DURATION_IN_MILLISECONDS = 1000;
const MINUTE_DURATION_IN_MILLISECONDS = 60 * SECOND_DURATION_IN_MILLISECONDS;
const HOUR_DURATION_IN_MILLISECONDS = 60 * MINUTE_DURATION_IN_MILLISECONDS;
const DAY_DURATION_IN_MILLISECONDS = 24 * HOUR_DURATION_IN_MILLISECONDS;

function convertMinutesToMilliseconds(minutes) {
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

export { convertMinutesToMilliseconds, midnight, timeToMilliseconds };