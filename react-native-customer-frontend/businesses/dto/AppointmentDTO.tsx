export default class AppointmentDTO {
    _id: String;
    price: number;
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
        this.price = data.price;
        this.service = data.service;
        this.startDateTime = data.startDateTime;
        this.endDateTime = data.endDateTime;
        this.business = data.business;
        this.attendant = data.attendant;
    }

    static jsonArrayToDtoArray(jsonArray: Array<Object>): Array<AppointmentDTO> {
        let arr = new Array<AppointmentDTO>;
                
        jsonArray.forEach((object: Object) => {
            arr.push(new AppointmentDTO(object));
        });

        return arr;
    }

}