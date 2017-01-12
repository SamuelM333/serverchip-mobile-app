import { Component, AfterViewInit, ViewChild, ChangeDetectorRef } from "@angular/core";
import { RadSideDrawerComponent, SideDrawerType } from "nativescript-telerik-ui/sidedrawer/angular";
import { TNSFontIconService } from 'nativescript-ng2-fonticon';

@Component({
    selector: "my-app",
    templateUrl: "./app.component.html"
})
export class AppComponent implements AfterViewInit {
    @ViewChild(RadSideDrawerComponent)
    public drawerComponent: RadSideDrawerComponent;
    private drawer: SideDrawerType;
    public pages: Array<Object>;

    constructor(private _changeDetectionRef: ChangeDetectorRef,
                private fonticon: TNSFontIconService) {
        // List all pages here
        // this.pages = [
        //     { name: "Home" },
        //     { name: "About" },
        //     { name: "Contact" }
        // ];
    }

    ngAfterViewInit() {
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
    }

    public openDrawer() {
        this.drawer.toggleDrawerState();
    }
}
