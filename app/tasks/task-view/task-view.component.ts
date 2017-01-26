import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular";
import { ApiService } from "../../shared/api.service";
import { Task } from "../../shared/task";


@Component({
    selector: "task-view",
    templateUrl: './tasks/task-view/task-view.component.html',
    styleUrls: ["./tasks/task-view/task-view.component.css"]
})
export class TaskViewComponent implements OnInit {

    id: string;
    task: Task;
    microchip_name: string;
    microchip_ip: string;

    constructor(private apiService: ApiService, private route: ActivatedRoute,
                private routerExtensions: RouterExtensions) {
        this.route.params.forEach((params) => { this.id = params['id']; });
    }

    public onNavBtnTap() {
        this.routerExtensions.backToPreviousPage();
    }

    ngOnInit() {
        let error: boolean = false;
        let microchips;
        this.apiService.getMicrochips().subscribe(
            data => microchips = data._items,
            err => {
                error = true;
                console.log('Error:', err);
            },
            () => {
                if (!error) {
                    for (let microchip of microchips) {
                        if (microchip.tasks) {
                            console.log(this.id);
                            // console.log(JSON.stringify(microchip, null, 2));
                            this.task = microchip.tasks[this.id];
                            this.microchip_name = microchip.name;
                            this.microchip_ip = microchip.ip;
                        }
                    }
                }
            }
        );
    }
}
