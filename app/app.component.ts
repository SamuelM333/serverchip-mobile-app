import { Component } from "@angular/core";

@Component({
    selector: 'my-app',
    template: '<page-router-outlet></page-router-outlet>'
})
export class AppComponent {

    constructor() {}

    // public onNavigate(args) {
    //     this.drawer.closeDrawer();
    //     this.title = this.pages[args.index].name;
    //     this.routerExtensions.navigate([this.pages[args.index].route], {
    //         transition: {
    //             name: "flip",
    //             duration: 2000,
    //             curve: "linear"
    //         }
    //     });
    // }

}
