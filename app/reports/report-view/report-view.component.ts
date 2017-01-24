import { Component } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from "nativescript-angular";


@Component({
    selector: "reports",
    templateUrl: "./reports/report-view/report-view.component.html",
    styleUrls: ["./reports/report-view/report-view.component.css"]
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
