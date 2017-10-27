import { Component, EventEmitter, Input, OnChanges, Output, ViewChild } from "@angular/core";

import { Microchip } from "../../shared/microchip";

@Component({
    moduleId: module.id,
    selector: "microchip-form",
    templateUrl: "./microchip-form.component.html",
    styleUrls: ["./microchip-form.component.css"]
})
export class MicrochipFormComponent implements OnChanges {

    @Input() editMicrochip: Microchip;
    @Input() userID: string;
    @Input() nonUniqueIP: boolean = false;
    @Output() submitForm: EventEmitter<Microchip> = new EventEmitter<Microchip>();
    @ViewChild("nameInput") nameInput;
    name: string = "";
    description: string;
    ip: string;

    ngOnChanges() {
        console.log("ngOnChanges");
        if (this.editMicrochip) {
            this.name = this.editMicrochip.name;
            this.ip = this.editMicrochip.ip;
            if (this.editMicrochip.description) {
                this.description = this.editMicrochip.description;
            }
        }
    }

    onSubmit() {
        this.nonUniqueIP = false;
        if ((this.name && this.name !== "") && (this.ip && this.ip !== "")) {
            const microchip = new Microchip(
                this.name,
                this.userID,
                this.ip,
                this.description ? this.description : ""
            );
            if (this.editMicrochip) {
                microchip._etag = this.editMicrochip._etag;
            }
            this.submitForm.emit(microchip);
        }
    }
}
