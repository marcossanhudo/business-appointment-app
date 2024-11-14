export default class AppointmentDTO {
    _id: String;
    service: {
        _id: String,
        name: String
    };
    startDateTime: number;
    business: {
        _id: String,
        name: String
    };

    constructor(data: any) {
        this._id = data._id;
        this.service = data.service;
        this.startDateTime = data.startDateTime;
        this.business = data.business;
    }
}