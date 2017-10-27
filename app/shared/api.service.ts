import { Injectable } from "@angular/core";
import { Headers, Http, Response } from "@angular/http";

import "rxjs/Rx";

import { User } from "./user";
import { Microchip } from "./microchip";
import { Report } from "./report";
import { Task } from "./task";

export const apiUrl = "http://192.168.1.123:5000/";

@Injectable()
export class ApiService {
    constructor(private http: Http) { }

    /* User */

    getUser(lookup: string) {
        return this.http.get(apiUrl + "user/" + lookup).map(
            (response: Response) => response.json()
        );
    }

    insertUser(newUser: any) {
        const headers = new Headers({ "Content-Type": "application/json" });

        return this.http.post(apiUrl + "user/", JSON.stringify(newUser), { headers: headers }).map(
            (response: Response) => response.json()
        );
    }

    updateUser(_id: string, user: User) {
        const headers = new Headers({
            "Content-Type": "application/json",
            "If-Match": user._etag
        });

        return this.http.put(apiUrl + "user/" + _id, JSON.stringify(user), { headers: headers }).map(
            (response: Response) => response.json()
        );
    }

    deleteUser(_id: string, user: User) {
        const headers = new Headers({
            "If-Match": user._etag
        });

        return this.http.delete(apiUrl + "user/" + _id, { headers: headers }).map(
            (response: Response) => response.json()
        );
    }

    /* Microchips */

    getMicrochips() {
        return this.http.get(apiUrl + 'microchip?embedded={"owner":1}').map(
            (response: Response) => response.json()
        );
    }

    getMicrochipByID(_id: string) {
        return this.http.get(apiUrl + `microchip/${_id}?embedded={"owner":1}`).map(
            (response: Response) => response.json()
        );
    }

    getAvailablePortsOfMicrochip(_id: string) {
        return this.http.get(apiUrl + `microchip/${_id}/ports`).map(
            (response: Response) => response.json()
        );
    }

    insertMicrochip(microchip: Microchip) {
        const headers = new Headers({ "Content-Type": "application/json" });

        return this.http.post(apiUrl + "microchip", JSON.stringify(microchip), { headers }).map(
            (response: Response) => response.json()
        );
    }

    updateMicrochip(_id: string, microchip) {
        const headers = new Headers({
            "Content-Type": "application/json",
            "If-Match": microchip._etag
        });
        delete microchip._etag;

        return this.http.put(apiUrl + "microchip/" + _id, JSON.stringify(microchip), { headers }).map(
            (response: Response) => response.json()
        );
    }

    deleteMicrochip(microchip: Microchip) {
        const headers = new Headers({
            "If-Match": microchip._etag
        });

        return this.http.delete(apiUrl + "microchip/" + microchip._id, { headers }).map(
            (response: Response) => response.json()
        );
    }

    /* Tasks */

    getTasks() {
        return this.http.get(apiUrl + 'task?embedded={"microchip":1}').map(
            (response: Response) => response.json()
        );
    }

    getTaskByID(_id: string) {
        return this.http.get(apiUrl + `task/${_id}?embedded={"microchip":1}`).map(
            (response: Response) => response.json()
        );
    }

    getTaskByMicrochipID(_id: string) {
        return this.http.get(apiUrl + `task?where={"microchip": "${ _id }"}`).map(
            (response: Response) => response.json()
        );
    }

    insertTask(task) {
        const headers = new Headers({ "Content-Type": "application/json" });
        task.microchip = task.microchip._id;
        return this.http.post(apiUrl + "task", JSON.stringify(task), { headers: headers }).map(
            (response: Response) => response.json()
        );
    }

    updateTask(_id: string, task: Task) {
        const headers = new Headers({
            "Content-Type": "application/json",
            "If-Match": task._etag
        });

        return this.http.put(apiUrl + "task/" + _id, JSON.stringify(task), { headers }).map(
            (response: Response) => response.json()
        );
    }

    deleteTask(task: Task) {
        const headers = new Headers({
            "If-Match": task._etag
        });

        return this.http.delete(apiUrl + "task/" + task._id, { headers: headers }).map(
            (response: Response) => response.json()
        );
    }

    /* Reports */

    getReports() {
        return this.http.get(apiUrl + 'report?embedded={"microchip":1,"details.task":1}').map(
            (response: Response) => response.json()
        );
    }

    getReportByID(_id: string) {
        return this.http.get(apiUrl + `report/${_id}?embedded={"microchip":1,"details.task":1}`).map(
            (response: Response) => response.json()
        );
    }

    insertReport(report: Report) {
        const headers = new Headers({ "Content-Type": "application/json" });

        return this.http.post(apiUrl + "microchip", JSON.stringify(report), { headers }).map(
            (response: Response) => response.json()
        );
    }

}
