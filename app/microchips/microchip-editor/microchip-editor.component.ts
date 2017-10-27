import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular";
import { PageRoute } from "nativescript-angular/router";
import "rxjs/add/operator/switchMap";

import { ApiService } from "../../shared/api.service";
import { Microchip } from "../../shared/microchip";

@Component({
    moduleId: module.id,
    selector: "microchip-editor",
    templateUrl: "./microchip-editor.component.html",
    styleUrls: ["./microchip-editor.component.css"]
})
export class MicrochipEditorComponent implements OnInit {

    id: string;
    microchip: Microchip;
    userID: string;
    nonUniqueIP: boolean = false;

    constructor(private apiService: ApiService,
                private pageRoute: PageRoute,
                private routerExtensions: RouterExtensions) {
        this.pageRoute.activatedRoute
            .switchMap((activatedRoute) => activatedRoute.params)
            .forEach((params) => this.id = params.id);
    }

    ngOnInit() {
        // TODO Change for localStorage user
        this.userID = "58892f662589503db4700db3";

        this.apiService.getMicrochipByID(this.id).subscribe(
            (data) => this.microchip = data
        );
    }

    onNavBtnTap() {
        this.routerExtensions.backToPreviousPage();
    }

    onSubmit(microchip: Microchip) {
        console.dir(microchip);
        this.apiService.updateMicrochip(this.id, microchip).subscribe(
            (data) => this.routerExtensions.navigateByUrl(`/microchips/${data._id}`),
            (err) => {
                console.dir(err);
                const issues = err._body._issues;

                if (issues.ip === `value '${microchip.ip}' is not unique`) {
                    console.log("Non unique IP");
                    this.nonUniqueIP = true;
                }
            },
            () => console.log("done")
        );
    }
}
