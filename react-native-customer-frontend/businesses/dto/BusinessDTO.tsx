export default class BusinessDTO {
    _id: String;
    name: String;
    openingTime: String;
    closingTime: String;
    address: String;

    constructor(data: any) {
        this._id = data._id;
        this.name = data.name;
        this.openingTime = data.openingTime;
        this.closingTime = data.closingTime;
        this.address = data.address;
    }
}