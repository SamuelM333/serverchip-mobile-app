import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { TNSFontIconModule } from "nativescript-ng2-fonticon";
import { NativeScriptUIListViewModule } from "nativescript-pro-ui/listview/angular";
import { NativeScriptUISideDrawerModule } from "nativescript-pro-ui/sidedrawer/angular";

import { AppComponent } from "./app.component";
import { routes } from "./app.routes";
import { MicrochipCreatorComponent } from "./microchips/microchip-creator/microchip-creator.component";
import { MicrochipFormComponent } from "./microchips/microchip-form/microchip-form.component";
import { MicrochipEditorComponent } from "./microchips/microchip-editor/microchip-editor.component";
import { MicrochipsListComponent } from "./microchips/microchips-list/microchips-list.component";
import { MicrochipViewComponent } from "./microchips/microchip-view/microchip-view.component";
import { ReportViewComponent } from "./reports/report-view/report-view.component";
import { ReportsListComponent } from "./reports/reports-list/reports-list.component";
import { ApiService } from "./shared/api.service";
import { SideDrawerComponent } from "./shared/side-drawer/side-drawer.component";
import { TaskCreatorComponent } from "./tasks/task-creator/task-creator.component";
import { TaskViewComponent } from "./tasks/task-view/task-view.component";
import { TasksListComponent } from "./tasks/tasks-list/tasks-list.component";
import { IsEmailDirective, IsIPDirective, MinLengthDirective } from "./shared/input.directive";

@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptHttpModule,
        NativeScriptUISideDrawerModule,
        NativeScriptUIListViewModule,
        NativeScriptFormsModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(routes),
        TNSFontIconModule.forRoot({
            mdi: "material-design-icons.css"
        })
    ],
    declarations: [
        AppComponent,
        TaskCreatorComponent,
        TasksListComponent,
        TaskViewComponent,
        ReportsListComponent,
        ReportViewComponent,
        MicrochipCreatorComponent,
        MicrochipFormComponent,
        MicrochipEditorComponent,
        MicrochipsListComponent,
        MicrochipViewComponent,
        SideDrawerComponent,
        IsEmailDirective,
        IsIPDirective,
        MinLengthDirective
    ],
    providers: [ApiService],
    bootstrap: [AppComponent],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}
