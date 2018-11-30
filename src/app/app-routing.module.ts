import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ScrollToModule } from "@nicky-lenaers/ngx-scroll-to";
import { ModalModule } from "ngx-bootstrap/modal";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { NavbarComponent } from "./navbar/navbar.component";
import { AboutComponent } from "./about/about.component";
import { ServicesComponent } from "./services/services.component";
import { GalleryComponnt } from "./gallery/gallery.component";
import { SubscribeComponent } from "./subscribe/subscribe.component";
import { ContactComponent } from "./contact/contact.component";
import { ModalContentComponent } from "./modal/modal.component";
import { FooterComponent } from "./footer/footer.component";

const routes: Routes = [];

@NgModule({
  declarations: [
    NavbarComponent,
    AboutComponent,
    ServicesComponent,
    GalleryComponnt,
    SubscribeComponent,
    ContactComponent,
    ModalContentComponent,
    FooterComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ScrollToModule.forRoot(),
    ModalModule.forRoot()
  ],
  exports: [
    RouterModule,
    NavbarComponent,
    AboutComponent,
    ServicesComponent,
    GalleryComponnt,
    SubscribeComponent,
    ContactComponent,
    ScrollToModule,
    ModalContentComponent,
    FooterComponent
  ]
})
export class AppRoutingModule {}
