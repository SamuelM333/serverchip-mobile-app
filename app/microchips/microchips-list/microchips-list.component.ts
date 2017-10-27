import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from "@angular/core";
import { RadSideDrawer } from "nativescript-pro-ui/sidedrawer";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";

import { ApiService } from "../../shared/api.service";
import { Microchip } from "../../shared/microchip";

@Component({
    moduleId: module.id,
    selector: "microchip-list",
    templateUrl: "./microchips-list.component.html",
    styleUrls: ["./microchips-list.component.css"]
})
export class MicrochipsListComponent implements OnInit, AfterViewInit {
    @ViewChild(RadSideDrawerComponent) drawerComponent: RadSideDrawerComponent;
    microchips: Array<Microchip>;
    loading: boolean;
    private drawer: RadSideDrawer;

    constructor(private apiService: ApiService, private _changeDetectionRef: ChangeDetectorRef) { }

    ngOnInit() {
        this.loading = true;
        this.apiService.getMicrochips().subscribe(
            (data) => this.microchips = data._items,
            (err) => console.log("Error:", err),
            () => this.loading = false
        );
    }

    ngAfterViewInit() {
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
    }

    toggleDrawer() {
        this.drawer.toggleDrawerState();
    }

    onPullToRefresh(args) {
        const pullRefresh = args.object;

        this.apiService.getMicrochips().subscribe(
            (data) => this.microchips = data._items,
            (err) => console.log("Error:", err),
            () => pullRefresh.notifyPullToRefreshFinished()
        );

    }

    addMicrochip() {
        console.log("fab");
    }

}
