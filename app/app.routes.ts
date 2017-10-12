import { TasksListComponent } from './tasks/tasks-list/tasks-list.component';
import { TaskViewComponent } from './tasks/task-view/task-view.component';
import { ReportsListComponent } from './reports/reports-list/reports-list.component';
import { ReportViewComponent } from './reports/report-view/report-view.component';
import { MicrochipsListComponent } from './microchips/microchips-list/microchips-list.component';
import { MicrochipViewComponent } from './microchips/microchip-view/microchip-view.component';

export const routes = [
    { path: "", redirectTo: "/microchips", pathMatch: "full" },
    { path: "tasks", component: TasksListComponent },
    { path: "tasks/:id", component: TaskViewComponent },
    { path: "reports", component: ReportsListComponent },
    { path: "reports/:id", component: ReportViewComponent },
    { path: "microchips", component: MicrochipsListComponent },
    { path: "microchips/:id", component: MicrochipViewComponent }
];
