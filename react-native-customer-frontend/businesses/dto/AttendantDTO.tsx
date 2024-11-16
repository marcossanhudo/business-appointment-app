export default class AttendantDTO {
    _id: String | null;
    name: String;

    constructor(data: any) {
        this._id = data._id;
        this.name = data.name;
    }

    static jsonArrayToDtoArray(jsonArray: Array<Object>): Array<AttendantDTO> {
        let arr = new Array<AttendantDTO>;
                
        jsonArray.forEach((object: Object) => {
            arr.push(new AttendantDTO(object));
        });

        return arr;
    }
}