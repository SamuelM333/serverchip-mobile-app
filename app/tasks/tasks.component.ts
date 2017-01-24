import { Component, ViewChild, AfterViewInit, ChangeDetectorRef } from "@angular/core";
import { RadSideDrawerComponent, SideDrawerType } from 'nativescript-telerik-ui/sidedrawer/angular';


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
    public pages;

    constructor(private _changeDetectionRef: ChangeDetectorRef) {

        this.pages = [
            { name: ' Tasks', icon: String.fromCharCode(0xf0ae), route: '/tasks' },
            { name: ' Reports', icon: String.fromCharCode(0xf0f6), route: '/reports' },
            { name: ' Microchips', icon: String.fromCharCode(0xf2db), route: '/microchips' }
        ];

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

    public onNavigate(args) {
        // this.drawer.closeDrawer();
        // this.title = this.pages[args.index].name;
        // this.routerExtensions.navigate([this.pages[args.index].route], {
        //     transition: {
        //         name: "flip",
        //         duration: 2000,
        //         curve: "linear"
        //     }
        // });
        console.log(this.pages[args.index].route);
    }

}
