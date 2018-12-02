import { Component } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { BookingService } from "../sharedService/booking.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "fh-contact",
  templateUrl: "contact.component.html",
  styleUrls: ["contact.component.scss"]
})
export class ContactComponent {
  bookingForm: FormGroup;
  alerts: any[];
  constructor(
    private fb: FormBuilder,
    private bookingService: BookingService,
    private toastr: ToastrService
  ) {
    this.bookingForm = this.fb.group({
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      description: ["", Validators.required]
    });
  }

  submit() {
    this.bookingService.book(this.bookingForm.value).subscribe(data => {
      if (data && data.message) {
        this.toastr.success(data.message, "Success");
      }
    },
    err => {
      throw err;
    });
  }
}
