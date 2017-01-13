import { TasksComponent } from './tasks/tasks.component';
import { ReportsListComponent } from './reports/reports-list/reports-list.component';
import { ReportViewComponent } from './reports/report-view/report-view.component';
import { MicrochipsComponent } from './microchips/microchips.component';

export const routes = [
    // { path: "", component: AppComponent },
    { path: "", redirectTo: "/tasks", pathMatch: "full" },
    { path: "tasks", component: TasksComponent },
    { path: "reports", component: ReportsListComponent },
    { path: "reports/:id", component: ReportViewComponent },
    { path: "microchips", component: MicrochipsComponent }
];
