import { Component, AfterViewInit, ViewChild, ChangeDetectorRef } from "@angular/core";
import { RadSideDrawerComponent, SideDrawerType } from "nativescript-telerik-ui/sidedrawer/angular";
import { TNSFontIconService } from 'nativescript-ng2-fonticon';
import { RouterExtensions } from "nativescript-angular";

@Component({
    selector: "my-app",
    templateUrl: "./app.component.html"
})
export class AppComponent implements AfterViewInit {
    @ViewChild(RadSideDrawerComponent)
    public drawerComponent: RadSideDrawerComponent;
    private drawer: SideDrawerType;
    public title = "Tasks";
    public pages = [
        { name: " Tasks", icon: String.fromCharCode(0xf0ae), route: "/tasks" },
        { name: " Reports", icon: String.fromCharCode(0xf0f6), route: "/reports" },
        { name: " Microchips", icon: String.fromCharCode(0xf2db), route: "/microchips" }
    ];


    constructor(private _changeDetectionRef: ChangeDetectorRef,
                private fonticon: TNSFontIconService,
                private routerExtensions: RouterExtensions) {

    }

    ngAfterViewInit() {
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
    }

    public toggleDrawer() {
        this.drawer.toggleDrawerState();
    }

    public onItemTap(args) {
        console.log("------------------------ ItemTapped");
        console.log(args.index);
        console.log(this.pages[args.index].route);
        this.routerExtensions.navigate([this.pages[args.index].route]);
        this.title = this.pages[args.index].name;
        this.drawer.closeDrawer();

    }
}
