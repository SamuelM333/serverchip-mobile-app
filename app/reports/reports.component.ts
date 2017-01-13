import { Component } from "@angular/core";
import { TNSFontIconService } from 'nativescript-ng2-fonticon';


@Component({
    selector: "reports",
    templateUrl: "./reports/reports.component.html",
    styleUrls: ["./reports/reports.component.css"]
})
export class ReportsComponent {

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

    onTap(args) {
        console.log(args.index);
        console.log(this.items[args.index].name);
    }


}
