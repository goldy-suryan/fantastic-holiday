import { Component, OnDestroy } from "@angular/core";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { ModalContentComponent } from "../modal/modal.component";

@Component({
  selector: "fh-gallery",
  templateUrl: "gallery.component.html",
  styleUrls: ["gallery.component.scss"]
})
export class GalleryComponnt implements OnDestroy {
  bsModalRef: BsModalRef;
  galleryImages;
  imageIndex: number;
  constructor(private modalService: BsModalService) {
    this.galleryImages = [
      { source: "c1", location: "Goa", listingNumber: 10 },
      { source: "c2", location: "Andaman Island", listingNumber: 12 },
      { source: "c3", location: "Kerela", listingNumber: 15 }
    ];
    this.imageIndex = 0;
  }
  openModalWithComponent(src) {
    const initialState = {
      list: [src]
    };
    this.bsModalRef = this.modalService.show(ModalContentComponent, {
      initialState
    });
    // this.bsModalRef.content.closeBtnName = "Close";
  }
  ngOnDestroy() {}
}
