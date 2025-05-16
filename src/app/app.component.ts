import { Component } from "@angular/core"
import { RouterOutlet } from "@angular/router"
import {ToolbarComponent} from './public/components/toolbar/toolbar.component';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  standalone: true,
  imports: [RouterOutlet, ToolbarComponent],
})
export class AppComponent {
  title = "vehicle-tracking"
}
