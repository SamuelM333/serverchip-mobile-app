export class Microchip {

    _id: string;
    _etag: string;
    name: string;
    owner: any;
    description: string;
    ip: string;

    constructor(name: string, owner: any, ip: string, description?: string, _id?: string, _etag?: string) {
        this._id = _id;
        this._etag = _etag;
        this.name = name;
        this.owner = owner;
        this.description = description;
        this.ip = ip;
    }
}
