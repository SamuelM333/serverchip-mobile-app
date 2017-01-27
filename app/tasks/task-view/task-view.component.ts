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
        this.apiService.getTaskByID(this.id).subscribe(
            data => this.task = data,
            err => {
                error = true;
                console.log('Error:', err);
            },
            () => { console.log(JSON.stringify(this.task, null, 2))}

        );
    }
}
