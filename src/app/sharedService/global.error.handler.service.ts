import { Injectable, ErrorHandler } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import { ToastrService } from "ngx-toastr";

@Injectable()
export class GlobalErrorHandlerService implements ErrorHandler {
  constructor(private toastr: ToastrService) {}
  handleError(error: any) {
    let err =
      error.message || error["error"] || error || "Something went wrong";
    if (error instanceof HttpErrorResponse) {
      this.toastr.error(err, "Error");
    } else {
      this.toastr.error(err, "Error");
    }
  }
}
