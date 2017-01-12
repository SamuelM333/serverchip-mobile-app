import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { ReportsComponent } from './reports/reports.component';
import { MicrochipsComponent } from './microchips/microchips.component';

export const routes = [
    // { path: "", component: AppComponent },
    { path: "", redirectTo: "/tasks", pathMatch: "full" },
    { path: "tasks", component: TasksComponent },
    { path: "reports", component: ReportsComponent },
    { path: "microchips", component: MicrochipsComponent }
];
