import { Component } from "@angular/core"
import { RouterOutlet } from "@angular/router"
import {TrackingFormComponent} from './car-tracking/components/tracking-form/tracking-form.component';
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  standalone: true,
  imports: [
    TrackingFormComponent
  ],
})
export class AppComponent {
  title = "vehicle-tracking"
}
