import { Component, ViewChild, AfterViewInit, ChangeDetectorRef } from "@angular/core";
import { RadSideDrawerComponent, SideDrawerType } from 'nativescript-telerik-ui/sidedrawer/angular';
import { registerElement } from "nativescript-angular/element-registry";
import { RouterExtensions } from "nativescript-angular";
registerElement("CardView", () => require("nativescript-cardview").CardView);

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html'
})
export class AppComponent implements AfterViewInit {

    constructor(private _changeDetectionRef: ChangeDetectorRef,
                private routerExtensions: RouterExtensions) {}

    @ViewChild(RadSideDrawerComponent)
    public drawerComponent: RadSideDrawerComponent;
    private drawer: SideDrawerType;
    public title = ' Tasks';
    public pages = [
        { name: ' Tasks', icon: String.fromCharCode(0xf0ae), route: '/tasks' },
        { name: ' Reports', icon: String.fromCharCode(0xf0f6), route: '/reports' },
        { name: ' Microchips', icon: String.fromCharCode(0xf2db), route: '/microchips' }
    ];

    ngAfterViewInit() {
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
    }

    public toggleDrawer() {
        this.drawer.toggleDrawerState();
    }

    public onNavigate(args) {
        this.drawer.closeDrawer();
        this.title = this.pages[args.index].name;
        this.routerExtensions.navigate([this.pages[args.index].route], {
            transition: {
                name: "flip",
                duration: 2000,
                curve: "linear"
            }
        });
    }

}
