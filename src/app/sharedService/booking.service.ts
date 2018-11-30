import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class BookingService {
  private url = "/get-booking";
  constructor(private http: HttpClient) {}

  book(data): Observable<any> {
    return this.http.post(this.url, data);
  }
}
