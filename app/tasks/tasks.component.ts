import { Component } from "@angular/core";
// const app = require('application');

@Component({
    selector: "tasks",
    templateUrl: "./tasks/tasks.component.html",
    styleUrls: ["./tasks/tasks.component.css"]
})
export class TasksComponent  {

    public items: Array<any>;

    constructor() {
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



    // public onItemTap(args) {
    //     this.routerExtensions.navigate([this.pages[args.index].route]);
    //     this.title = this.pages[args.index].name;
    //     this.drawer.closeDrawer();
    // }

    onTap(args) {
        console.log(args.index);
        console.log(this.items[args.index].name);
    }

    // onBack() {
    //     console.log("back");
    // }

}
