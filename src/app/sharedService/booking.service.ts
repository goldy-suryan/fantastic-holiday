import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class BookingService {
  private bookingUrl = "/get-booking";
  private subUrl = "/subscribe";
  constructor(private http: HttpClient) {}

  book(data): Observable<any> {
    return this.http.post(this.bookingUrl, data);
  }

  subscribe(sub): Observable<any> {
    return this.http.post(this.subUrl, sub);
  }
}
