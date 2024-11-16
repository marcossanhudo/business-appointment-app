export default class AvailableTimeDTO {
    startTime: number;
    endTime: number;

    constructor(data: any) {
        this.startTime = data.startTime;
        this.endTime = data.endTime;
    }

    static jsonArrayToDtoArray(jsonArray: Array<Object>): Array<AvailableTimeDTO> {
        let arr = new Array<AvailableTimeDTO>;
                
        jsonArray.forEach((object: Object) => {
            arr.push(new AvailableTimeDTO(object));
        });

        return arr;
    }
}