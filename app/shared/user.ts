export class User {

    _id: string;
    _etag: string;
    name: string;
    last_name: string;
    email: string;
    password: string;
    role: string;

    constructor(_id: string, _etag: string, name: string, last_name: string, email: string, password: string, role: string) {
        this._id = _id;
        this._etag = _etag;
        this.name = name;
        this.last_name = last_name;
        this.email = email;
        this.password = password;
        this.role = role;
    }
}
