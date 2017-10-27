import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular";

import { ApiService } from "../../shared/api.service";
import { Microchip } from "../../shared/microchip";

@Component({
    moduleId: module.id,
    selector: "microchip-creator",
    templateUrl: "./microchip-creator.component.html"
})
export class MicrochipCreatorComponent implements OnInit {

    userID: string;
    nonUniqueIP: boolean = false;

    constructor(private apiService: ApiService,
                private routerExtensions: RouterExtensions) { }

    ngOnInit() {
        // TODO Change for localStorage user
        this.userID = "58892f662589503db4700db3";

    }

    onNavBtnTap() {
        this.routerExtensions.navigateByUrl("/microchips");
    }

    onSubmit(microchip: Microchip) {
        console.dir(microchip);
        this.apiService.insertMicrochip(microchip).subscribe(
            (data) => {
                this.routerExtensions.navigateByUrl(`/microchips/${data._id}`);
            },
            (err) => {
                console.dir(err);
                const issues = err._body._issues;

                if (issues.ip === `value '${microchip.ip}' is not unique`) {
                    console.log("Non unique IP");
                    this.nonUniqueIP = true;
                }
            },
            () => {
                console.log("done");
                // console.log(this.error);
            }
        );
    }
}
