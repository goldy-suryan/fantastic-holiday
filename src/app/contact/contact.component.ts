import { Component } from "@angular/core";
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from "@angular/forms";
import { BookingService } from "../sharedService/booking.service";

@Component({
  selector: "fh-contact",
  templateUrl: "contact.component.html",
  styleUrls: ["contact.component.scss"]
})
export class ContactComponent {
  bookingForm: FormGroup;
  constructor(private fb: FormBuilder, private bookingService: BookingService) {
    this.bookingForm = this.fb.group({
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      description: ["", Validators.required]
    });
  }

  submit() {
    console.log(this.bookingForm.value);
    this.bookingService.book(this.bookingForm.value).subscribe(console.log);
  }
}
