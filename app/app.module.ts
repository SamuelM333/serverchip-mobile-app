import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { SIDEDRAWER_DIRECTIVES } from 'nativescript-telerik-ui/sidedrawer/angular';
import { TNSFontIconModule } from 'nativescript-ng2-fonticon';
import { routes } from './app.routes';
import { ApiService } from './shared/api.service';
import { SideDrawerComponent } from './shared/side-drawer/side-drawer.component';
import { AppComponent } from './app.component';
import { TasksListComponent } from './tasks/tasks-list/tasks-list.component';
import { TaskViewComponent } from './tasks/task-view/task-view.component';
import { ReportsListComponent } from './reports/reports-list/reports-list.component';
import { ReportViewComponent } from './reports/report-view/report-view.component';
import { MicrochipsListComponent } from './microchips/microchips-list/microchips-list.component';
import { MicrochipViewComponent } from './microchips/microchip-view/microchip-view.component';

@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptHttpModule,
        NativeScriptFormsModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(routes),
        TNSFontIconModule.forRoot({
            'mdi': 'material-design-icons.css'
        })
    ],
    declarations: [
        SIDEDRAWER_DIRECTIVES,
        AppComponent,
        TasksListComponent,
        TaskViewComponent,
        ReportsListComponent,
        ReportViewComponent,
        MicrochipsListComponent,
        MicrochipViewComponent,
        SideDrawerComponent,
    ],
    providers: [ApiService],
    bootstrap: [AppComponent],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {
}
