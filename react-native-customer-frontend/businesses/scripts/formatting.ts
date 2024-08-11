function formatTime(time: string): string {
    var formattedTime: string = "";
    
    var timeComponents: string[] = time.split('\u003A');
    var partOfTheDay: string = "";

    if (parseInt(timeComponents[0]) > 12) {
        formattedTime += parseInt(timeComponents[0]) - 12;
        partOfTheDay = "PM";
    } else {
        formattedTime += parseInt(timeComponents[0]);
        partOfTheDay = "AM";
    }

    if (parseInt(timeComponents[2]) > 0) {
        var formattedSeconds: string = timeComponents[2].split(".")[0]; 
        formattedTime += "h " + timeComponents[1] + "min " + formattedSeconds + "s";
    } else if (parseInt(timeComponents[1]) > 0) {
        formattedTime += "h " + timeComponents[1];
    }

    formattedTime += " " + partOfTheDay;

    return formattedTime;
}

export { formatTime };