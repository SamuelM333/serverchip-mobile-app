import {
  Component,
  ViewChild,
  ChangeDetectorRef,
  OnInit,
  AfterViewInit
} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular";
import { ApiService } from "../../shared/api.service";
import { Microchip } from "../../shared/microchip";
import { Task } from "../../shared/task";
import { RadSideDrawer } from "nativescript-pro-ui/sidedrawer";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";

@Component({
  moduleId: module.id,
  selector: "microchip-view",
  templateUrl: "./microchip-view.component.html",
  styleUrls: ["./microchip-view.component.css"]
})
export class MicrochipViewComponent implements OnInit, AfterViewInit {
  @ViewChild(RadSideDrawerComponent)
  public drawerComponent: RadSideDrawerComponent;
  private drawer: RadSideDrawer;
  id: string;
  microchip: Microchip;
  tasks: Task[];

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private routerExtensions: RouterExtensions,
    private _changeDetectionRef: ChangeDetectorRef
  ) {
    this.route.params.forEach(params => {
      this.id = params["id"];
    });
  }

  ngOnInit() {
    let error: boolean = false;
    this.apiService.getMicrochipByID(this.id).subscribe(
      data => {
        this.microchip = data;
        data.tasks ? (this.tasks = data.tasks) : (this.tasks = []);
      },
      err => {
        error = true;
        console.log("Error:", err);
      },
      () => {
        console.log(JSON.stringify(this.tasks));
        // if (!error) {
        //     for (let microchip of microchips) {
        //         if (microchip.tasks) {
        //             console.log(JSON.stringify(microchip.tasks));
        //             this.task = microchip.tasks[this.id];
        //         }
        //     }
        // }
      }
    ); 
  }

  ngAfterViewInit() {
    this.drawer = this.drawerComponent.sideDrawer;
    this._changeDetectionRef.detectChanges();
  }

  public toggleDrawer() {
    this.drawer.toggleDrawerState();
  }

  public onNavBtnTap() {
    this.routerExtensions.backToPreviousPage();
  }
}
