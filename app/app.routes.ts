import { MicrochipCreatorComponent } from "./microchips/microchip-creator/microchip-creator.component";
import { MicrochipEditorComponent } from "./microchips/microchip-editor/microchip-editor.component";
import { MicrochipViewComponent } from "./microchips/microchip-view/microchip-view.component";
import { MicrochipsListComponent } from "./microchips/microchips-list/microchips-list.component";
import { ReportViewComponent } from "./reports/report-view/report-view.component";
import { ReportsListComponent } from "./reports/reports-list/reports-list.component";
import { TaskCreatorComponent } from "./tasks/task-creator/task-creator.component";
import { TaskViewComponent } from "./tasks/task-view/task-view.component";
import { TasksListComponent } from "./tasks/tasks-list/tasks-list.component";

export const routes = [
    { path: "", redirectTo: "/microchips", pathMatch: "full" },
    { path: "tasks", component: TasksListComponent },
    { path: "tasks/add", component: TaskCreatorComponent },
    { path: "tasks/:id", component: TaskViewComponent },
    { path: "reports", component: ReportsListComponent },
    { path: "reports/:id", component: ReportViewComponent },
    { path: "microchips", component: MicrochipsListComponent },
    { path: "microchips/add", component: MicrochipCreatorComponent },
    { path: "microchips/edit/:id", component: MicrochipEditorComponent },
    { path: "microchips/:id", component: MicrochipViewComponent }
];
