import { Component } from "@angular/core";
import { TNSFontIconService } from 'nativescript-ng2-fonticon';

const app = require('application');

@Component({
    selector: "tasks",
    templateUrl: "./tasks/tasks.component.html"
})
export class TasksComponent {

    // constructor() {
    //     const app = require('application');
    //
    //     if (app.android) {
    //         app.android.on(app.AndroidApplication.activityBackPressedEvent, () => this.onBack());
    //     }
    // }
    //
    // onBack() {
    //     console.log("back");
    // }

}
