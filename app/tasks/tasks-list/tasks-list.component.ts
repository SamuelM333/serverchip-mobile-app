import { Component, ViewChild, OnInit, AfterViewInit, ChangeDetectorRef } from "@angular/core";
import { RadSideDrawer } from "nativescript-pro-ui/sidedrawer";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";

import { ApiService } from '../../shared/api.service'
import { Task } from '../../shared/task'


@Component({
    moduleId: module.id,
    selector: "tasks-list",
    templateUrl: './tasks-list.component.html',
    styleUrls: ["./tasks-list.component.css"]
})
export class TasksListComponent implements OnInit, AfterViewInit {

    @ViewChild(RadSideDrawerComponent)
    public drawerComponent: RadSideDrawerComponent;
    private drawer: RadSideDrawer;
    public tasks: Task[] = [];


    constructor(private apiService: ApiService, private _changeDetectionRef: ChangeDetectorRef) {
    }

    ngOnInit() {
        let error: boolean = false;
        this.apiService.getTasks().subscribe(
            data => this.tasks = data._items,
            err => {
                error = true;
                console.log('Error:', err);
            },
            // () => { console.log(JSON.stringify(this.tasks, null, 2))}
        );
    }

    ngAfterViewInit() {
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
    }

    public toggleDrawer() {
        this.drawer.toggleDrawerState();
    }
}
