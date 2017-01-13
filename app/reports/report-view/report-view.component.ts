import { Component } from "@angular/core";
import { ActivatedRoute } from '@angular/router';


@Component({
    selector: "reports",
    templateUrl: "./reports/report-view/report-view.component.html",
    styleUrls: ["./reports/report-view/report-view.component.css"]
})
export class ReportViewComponent {

    id: number;

    constructor(private route: ActivatedRoute) {
        this.route.params
            .forEach((params) => { this.id = +params['id']; });
    }

}
