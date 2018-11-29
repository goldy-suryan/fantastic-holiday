import { Component, OnInit } from "@angular/core";

@Component({
  selector: "fh-navbar",
  templateUrl: "navbar.component.html",
  styleUrls: ["navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  isShown: any;
  constructor() {
    this.isShown = true;
  }
  ngOnInit() {}

  openMenu() {
    if (this.isShown) {
      this.isShown = false;
    } else {
      this.isShown = true;
    }
  }
}
