import { Component, ViewChild, AfterViewInit, ChangeDetectorRef, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-pro-ui/sidedrawer";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";

import { Microchip } from "../../shared/microchip";
import { ApiService } from "../../shared/api.service";


@Component({
    moduleId: module.id,
    selector: "microchip-list",
    templateUrl: './microchips-list.component.html',
    styleUrls: ["./microchips-list.component.css"]
})
export class MicrochipsListComponent implements OnInit, AfterViewInit {

    @ViewChild(RadSideDrawerComponent)
    public drawerComponent: RadSideDrawerComponent;
    private drawer: RadSideDrawer;
    public microchips: Microchip[];

    constructor(private apiService: ApiService, private _changeDetectionRef: ChangeDetectorRef) {

    }

    ngOnInit() {
        let error: boolean = false;
        this.apiService.getMicrochips().subscribe(
            data => this.microchips = data._items,
            err => {
                error = true;
                console.log('Error:', err);
            },
            () => {
                // if (!error) {
                //     for (let microchip of microchips) {
                //         // this.tasks.push(microchip.tasks);
                //         // console.log('microchip', microchip);
                //         if (microchip.tasks) {
                //             for (let task of microchip.tasks) {
                //                 // console.log(task);
                //                 this.tasks.push(task);
                //             }
                //         }
                //     }
                // }
            }
        );
    }

    ngAfterViewInit() {
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
    }

    public toggleDrawer() {
        this.drawer.toggleDrawerState();
    }

    // onTap(args) {
    //     console.log(args.index);
    //     console.log(this.items[args.index].name);
    // }

}
