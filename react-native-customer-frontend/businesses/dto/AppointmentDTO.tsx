export default class AppointmentDTO {
    _id: String;
    service: {
        _id: String,
        name: String,
        appointmentPrice: number
    };
    startDateTime: number;
    endDateTime: number;
    business: {
        _id: String,
        name: String,
        paymentOptions: {
            cash: boolean,
            credit: [{
                cardCompanyName: String
            }],
            debit: [{
                cardCompanyName: String
            }]
        }
    };
    attendant: {
        _id: String,
        name: String
    }

    constructor(data: any) {
        this._id = data._id;
        this.service = data.service;
        this.startDateTime = data.startDateTime;
        this.endDateTime = data.endDateTime;
        this.business = data.business;
        this.attendant = data.attendant;
    }
}