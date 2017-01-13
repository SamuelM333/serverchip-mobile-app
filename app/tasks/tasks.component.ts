import { Component, ViewChild, ElementRef } from "@angular/core";
import { registerElement } from "nativescript-angular/element-registry";

registerElement("CardView", () => require("nativescript-cardview").CardView);

// const app = require('application');

@Component({
    selector: "tasks",
    templateUrl: "./tasks/tasks.component.html",
    styleUrls: ["./tasks/tasks.component.css"]
})
export class TasksComponent {
    public items: Array<any>;
    // @ViewChild("CardView") CardView: ElementRef;


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

    onTap(args) {
        console.log(args.index);
        console.log(this.items[args.index].name);
    }

    // onBack() {
    //     console.log("back");
    // }

}
