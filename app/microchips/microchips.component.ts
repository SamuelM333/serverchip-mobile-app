import { Component } from "@angular/core";
import { TNSFontIconService } from 'nativescript-ng2-fonticon';

@Component({
    selector: "microchips",
    templateUrl: "./microchips/microchips.component.html",
    styleUrls: ["./microchips/microchips.component.css"]
})
export class MicrochipsComponent {

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
