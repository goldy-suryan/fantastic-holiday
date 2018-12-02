import { Component } from "@angular/core";
import { BookingService } from "../sharedService/booking.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "fh-subscribe",
  templateUrl: "subscribe.component.html",
  styleUrls: ["subscribe.component.scss"]
})
export class SubscribeComponent {
  model = { email: "" };
  alerts: any[];
  constructor(
    private bookingService: BookingService,
    private toastr: ToastrService
  ) {}

  submit() {
    this.bookingService.subscribe(this.model).subscribe(
      data => {
        if (data && data.message) {
          this.toastr.success(data.message, "Success");
        }
      },
      err => {
        throw err;
      }
    );
  }
}
