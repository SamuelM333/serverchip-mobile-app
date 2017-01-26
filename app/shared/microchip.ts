import { Task } from './task';

export class Microchip {

    _id: string;
    _etag: string;
    name: string;
    owner: string;
    description: string;
    ip: string;
    tasks: Task[];

    constructor(id: string, etag: string, name: string, owner: string, description: string, ip: string, tasks: Task[]) {
        this._id = id;
        this._etag = etag;
        this.name = name;
        this.owner = owner;
        this.description = description;
        this.ip = ip;
        this.tasks = tasks;
    }
}