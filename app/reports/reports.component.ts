import { Component } from "@angular/core";

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
    }

    onTap(args) {
        console.log(args.index);
        console.log(this.items[args.index].name);
    }


}
