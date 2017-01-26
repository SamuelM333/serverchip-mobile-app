import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import { User } from './user';
import { Microchip } from './microchip';
import { Report } from "./report";

export const apiUrl = 'https://serverchip-samuelm333.rhcloud.com/';
// export const apiUrl = 'http://127.0.0.1:5000/';

@Injectable()
export class ApiService {
    constructor(private http: Http) { }

    /* Microchips */

    getMicrochips() {
        return this.http.get(apiUrl + 'microchip').map(
            (response: Response) => response.json()
        );
    }

    getMicrochipByID(_id: string) {
        return this.http.get(apiUrl + 'microchip/' + _id).map(
            (response: Response) => response.json()
        );
    }

    insertMicrochip(microchip: Microchip) {
        let headers = new Headers({ 'Content-Type': 'application/json' });

        return this.http.post(apiUrl + 'microchip', JSON.stringify(microchip), { headers: headers }).map(
            (response: Response) => response.json()
        );
    }

    updateMicrochip(_id: string, microchip: Microchip) {
        let headers = new Headers({
            'Content-Type': 'application/json',
            'If-Match': microchip._etag
        });

        return this.http.put(apiUrl + 'microchip/' + _id, JSON.stringify(microchip), { headers: headers }).map(
            (response: Response) => response.json()
        );
    }

    deleteMicrochip(_id: string, microchip: Microchip) {
        let headers = new Headers({
            'If-Match': microchip._etag
        });

        return this.http.delete(apiUrl + 'microchip/' + _id, { headers: headers }).map(
            (response: Response) => response.json()
        );
    }

    /* Reports */

    getReports() {
        return this.http.get(apiUrl + 'report').map(
            (response: Response) => response.json()
        );
    }

    getReportByID(_id: string) {
        return this.http.get(apiUrl + 'report/' + _id).map(
            (response: Response) => response.json()
        );
    }

    insertReport(report: Report) {
        let headers = new Headers({ 'Content-Type': 'application/json' });

        return this.http.post(apiUrl + 'microchip', JSON.stringify(report), { headers: headers }).map(
            (response: Response) => response.json()
        );
    }

    /* User */

    getUser(lookup: string) {
        return this.http.get(apiUrl + 'user/' + lookup).map(
            (response: Response) => response.json()
        );
    }

    insertUser(user: User) {
        let headers = new Headers({ 'Content-Type': 'application/json' });

        return this.http.post(apiUrl + '/snippet', JSON.stringify(user), { headers: headers }).map(
            (response: Response) => response.json()
        );
    }

    updateUser(_id: string, user: User) {
        let headers = new Headers({
            'Content-Type': 'application/json',
            'If-Match': user._etag
        });

        return this.http.put(apiUrl + 'microchip/' + _id, JSON.stringify(user), { headers: headers }).map(
            (response: Response) => response.json()
        );
    }

    deleteUser(_id: string, user: User) {
        let headers = new Headers({
            'If-Match': user._etag
        });

        return this.http.delete(apiUrl + 'microchip/' + _id, { headers: headers }).map(
            (response: Response) => response.json()
        );
    }
}