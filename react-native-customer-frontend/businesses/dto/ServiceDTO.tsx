export default class ServiceDTO {
    _id: String;
    name: String;
    appointmentDurationInMinutes: number;
    appointmentPrice: number;
    businessId: String;

    constructor(data: any) {
        this._id = data._id;
        this.name = data.name;
        this.appointmentDurationInMinutes = data.appointmentDurationInMinutes;
        this.appointmentPrice = data.appointmentPrice;
        this.businessId = data.businessId;
    }

    static jsonArrayToDtoArray(jsonArray: Array<Object>): Array<ServiceDTO> {
        let arr = new Array<ServiceDTO>;
                
        jsonArray.forEach((object: Object) => {
            arr.push(new ServiceDTO(object));
        });

        return arr;
    }

}