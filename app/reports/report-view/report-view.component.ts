import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from "nativescript-angular";
import * as application from "application";
import { AndroidApplication, AndroidActivityBackPressedEventData } from "application";
import { isAndroid } from "platform";


@Component({
    selector: "reports",
    templateUrl: "./reports/report-view/report-view.component.html",
    styleUrls: ["./reports/report-view/report-view.component.css"]
})
export class ReportViewComponent implements OnInit {

    id: number;

    constructor(private route: ActivatedRoute, private routerExtensions: RouterExtensions) {
        this.route.params
            .forEach((params) => { this.id = + params['id']; });
    }

    ngOnInit() {
        if (!isAndroid) {
            return;
        }
        application.android.on(AndroidApplication.activityBackPressedEvent,
            (data: AndroidActivityBackPressedEventData) => {
                data.cancel = true; // prevents default back button behavior
                this.routerExtensions.navigate(['/reports']);
                // console.log("Back");
                // console.log(this.route.url.toString());
                // console.log(this.route.queryParams.toString());
                // this.routerExtensions.back();
            });
    }

}
