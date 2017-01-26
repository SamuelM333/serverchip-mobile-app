import { Component, ViewChild, AfterViewInit, ChangeDetectorRef } from "@angular/core";
import { RadSideDrawerComponent, SideDrawerType } from "nativescript-telerik-ui/sidedrawer/angular";

@Component({
    selector: "reports",
    templateUrl: "./reports/reports-list/reports-list.component.html",
    styleUrls: ["./reports/reports-list/reports-list.component.css"]
})
export class ReportsListComponent implements AfterViewInit {

    @ViewChild(RadSideDrawerComponent)
    public drawerComponent: RadSideDrawerComponent;
    private drawer: SideDrawerType;
    public items: Array<any>;

    constructor(private _changeDetectionRef: ChangeDetectorRef) {


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

    ngAfterViewInit() {
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
    }

    public toggleDrawer() {
        this.drawer.toggleDrawerState();
    }

    onTap(args) {
        console.log(args.index);
        console.log(this.items[args.index].name);
    }

    buttonTap(index){
        console.log();
    }


}
