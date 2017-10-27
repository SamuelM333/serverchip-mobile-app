import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular";

import { ApiService } from "../../shared/api.service";
import { Microchip } from "../../shared/microchip";
import { Task } from "../../shared/task";

@Component({
    moduleId: module.id,
    selector: "microchip-view",
    templateUrl: "./microchip-view.component.html",
    styles: [`
        .mainStackLayout StackLayout Label {
            font-size: 20;
        }
    `]
})
export class MicrochipViewComponent implements OnInit {
    id: string;
    microchip: Microchip;
    tasks: Array<Task>;
    loading: boolean;

    constructor(private apiService: ApiService,
                private route: ActivatedRoute,
                private routerExtensions: RouterExtensions) {
        this.route.params.forEach((params) => {
            // tslint:disable-next-line
            this.id = params["id"];
        });
    }

    ngOnInit() {
        let error = false;
        this.loading = true;
        this.apiService.getMicrochipByID(this.id).subscribe(
            (data) => {
                this.microchip = data;
                this.apiService.getTaskByMicrochipID(this.id).subscribe(
                    (tasks) => {
                        this.tasks = tasks._items;
                        console.log(this.tasks.length);
                    },
                    () => {},
                    () => this.loading = false
                );
            },
            (err) => {
                error = true;
                console.log("Error:", err);
            },
            () => {

                // console.log(JSON.stringify(this.tasks));
                // if (!error) {
                //     for (let microchip of microchips) {
                //         if (microchip.tasks) {
                //             console.log(JSON.stringify(microchip.tasks));
                //             this.task = microchip.tasks[this.id];
                //         }
                //     }
                // }
            }
        );
    }

    onEdit() {
        // this.routerExtensions.navigate()
    }

    onNavBtnTap() {
        this.routerExtensions.backToPreviousPage();
    }
}
