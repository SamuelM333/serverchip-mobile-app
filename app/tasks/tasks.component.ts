import { Component, ViewChild, ElementRef } from "@angular/core";
import { ObservableArray } from "data/observable-array";
import { registerElement } from "nativescript-angular/element-registry";

registerElement("CardView", () => require("nativescript-cardview").CardView);

const app = require('application');

@Component({
    selector: "tasks",
    templateUrl: "./tasks/tasks.component.html"
})
export class TasksComponent {
    public countries: Array<any>;
    @ViewChild("CardView") CardView: ElementRef;


    constructor() {
        this.countries = [
            { name: "kek1", continent: "wut" },
            { name: "kek2", continent: "wut" },
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
        console.log(this.countries[args.index].name);
    }

    // onBack() {
    //     console.log("back");
    // }

}
