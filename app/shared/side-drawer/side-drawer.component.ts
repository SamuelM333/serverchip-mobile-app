import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'side-drawer',
    templateUrl: './shared/side-drawer/side-drawer.component.html'
})
export class SideDrawerComponent implements OnInit {

    private pages: Array<any>;

    constructor(private router: Router) {
        this.pages = [
            {name: ' Tasks', icon: String.fromCharCode(0xf0ae), route: '/tasks'},
            {name: ' Reports', icon: String.fromCharCode(0xf0f6), route: '/reports'},
            {name: ' Microchips', icon: String.fromCharCode(0xf2db), route: '/microchips'}
        ];
    }

    ngOnInit() {
    }

    private onItemTap(args) {
        this.router.navigate([this.pages[args.index].route]);
    }

}