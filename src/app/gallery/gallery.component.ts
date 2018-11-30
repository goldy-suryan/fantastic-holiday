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
    this.galleryImages = ["1", "2", "3", "4", "5", "6", "7", "8"];
    this.imageIndex = 0;
  }
  openModalWithComponent(index) {
    const initialState = {
      list: [index]
    };
    this.bsModalRef = this.modalService.show(ModalContentComponent, {
      initialState
    });
    // this.bsModalRef.content.closeBtnName = "Close";
  }
  ngOnDestroy() {}
}
