import { Component } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from "nativescript-angular";


@Component({
    moduleId: module.id,
    selector: "report-view",
    templateUrl: "./report-view.component.html",
    styleUrls: ["./report-view.component.css"]
})
export class ReportViewComponent {

    id: number;

    constructor(private route: ActivatedRoute,
                private routerExtensions: RouterExtensions) {
        this.route.params.forEach((params) => { this.id = +params['id']; });
    }

    public onNavBtnTap() {
        this.routerExtensions.backToPreviousPage();
    }

}
