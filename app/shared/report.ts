export class Report {
    _id: string;
    _etag: string;
    _created: string;
    microchip: string;
    user: string;
    details: {
        task_name: string;
        status: {
            code: string,
            reason: string
        };
    };


    constructor(_id: string, _etag: string, created: string, microchip: string, user: string,
                details: { task_name: string; status: { code: string; reason: string } }) {
        this._id = _id;
        this._etag = _etag;
        this._created = created;
        this.microchip = microchip;
        this.user = user;
        this.details = details;
    }
}