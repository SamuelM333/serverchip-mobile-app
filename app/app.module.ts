import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { SIDEDRAWER_DIRECTIVES } from "nativescript-telerik-ui/sidedrawer/angular";

import { AppComponent } from "./app.component";

@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
    ],
    declarations: [
        SIDEDRAWER_DIRECTIVES,
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {
}
