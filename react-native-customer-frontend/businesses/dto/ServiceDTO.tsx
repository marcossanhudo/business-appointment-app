export default class ServiceDTO {
    _id: String;
    name: String;
    appointmentDurationInMinutes: number;
    appointmentPrice: number;
    businessId: String;

    constructor(data: any) {
        this._id = data.id;
        this.name = data.name;
        this.appointmentDurationInMinutes = data.appointmentDurationInMinutes;
        this.appointmentPrice = data.appointmentPrice;
        this.businessId = data.businessId;
    }
}