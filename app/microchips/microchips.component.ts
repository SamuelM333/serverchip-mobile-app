import { Component } from "@angular/core";

@Component({
    selector: "microchips",
    templateUrl: "./microchips/microchips.component.html",
    styleUrls: ["./microchips/microchips.component.css"]
})
export class MicrochipsComponent {

    public items: Array<any>;

    constructor() {
        this.items = [
            { name: "kek", continent: "wut" },
            { name: "kek", continent: "wut" },
            { name: "kek", continent: "wut" },
            { name: "kek", continent: "wut" },
            { name: "kek", continent: "wut" },
            { name: "kek", continent: "wut" },
            { name: "kek", continent: "wut" },
        ];

    }

    onTap(args) {
        console.log(args.index);
        console.log(this.items[args.index].name);
    }

}
