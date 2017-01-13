import { Component } from "@angular/core";

@Component({
    selector: "reports",
    templateUrl: "./reports/reports-list/reports-list.component.html",
    styleUrls: ["./reports/reports-list/reports-list.component.css"]
})
export class ReportsListComponent {

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

    buttonTap(args){
        console.log(args.index);
    }


}
