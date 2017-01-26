import { Component, ViewChild, AfterViewInit, ChangeDetectorRef } from "@angular/core";
import { RadSideDrawerComponent, SideDrawerType } from "nativescript-telerik-ui/sidedrawer/angular";


@Component({
    selector: "tasks",
    templateUrl: "./tasks/tasks.component.html",
    styleUrls: ["./tasks/tasks.component.css"]
})
export class TasksComponent implements AfterViewInit {

    @ViewChild(RadSideDrawerComponent)
    public drawerComponent: RadSideDrawerComponent;
    private drawer: SideDrawerType;
    public items: Array<any>;

    constructor(private _changeDetectionRef: ChangeDetectorRef) {

        this.items = [
            { name: "kek1", continent: "wut" },
            { name: "kek2", continent: "wut" },
            { name: "kek3", continent: "wut" },
            { name: "kek3", continent: "wut" },
            { name: "kek3", continent: "wut" },
            { name: "kek3", continent: "wut" },
            { name: "kek3", continent: "wut" },
        ];
        // const app = require('application');
        //
        // if (app.android) {
        //     app.android.on(app.AndroidApplication.activityBackPressedEvent, () => this.onBack());
        // }
    }

    ngAfterViewInit() {
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
    }

    onTap(args) {
        console.log(args.index);
        console.log(this.items[args.index].name);
    }

    public toggleDrawer() {
        this.drawer.toggleDrawerState();
    }
}
