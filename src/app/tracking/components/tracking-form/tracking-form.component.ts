import {Component} from "@angular/core"
import {Router} from "@angular/router"
import {FormBuilder, type FormGroup, Validators, ReactiveFormsModule} from "@angular/forms"
import {CommonModule} from "@angular/common"
import {ToolbarComponent} from '../../../public/components/toolbar/toolbar.component';
@Component({
  selector: "app-tracking-form",
  templateUrl: "./tracking-form.component.html",
  styleUrls: ["./tracking-form.component.css"],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule , ToolbarComponent],
})
export class TrackingFormComponent {
  trackingForm: FormGroup
  isLoading = false

  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) {
    this.trackingForm = this.fb.group({
      trackingCode: ["", [Validators.required, Validators.minLength(3)]],
    })
  }

  onSubmit(): void {
    if (this.trackingForm.valid) {
      this.isLoading = true
      const trackingCode = this.trackingForm.get("trackingCode")?.value

      // Simulamos un pequeño delay antes de navegar
      setTimeout(() => {
        this.isLoading = false
        this.router.navigate(["/vehicle-tracking", trackingCode])
      }, 800)
    }
  }
}
