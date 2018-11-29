import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ScrollToModule } from "@nicky-lenaers/ngx-scroll-to";
import { NavbarComponent } from "./navbar/navbar.component";
import { AboutComponent } from "./about/about.component";
import { ServicesComponent } from "./services/services.component";
import { GalleryComponnt } from "./gallery/gallery.component";
import { SubscribeComponent } from "./subscribe/subscribe.component";
import { ContactComponent } from "./contact/contact.component";

const routes: Routes = [];

@NgModule({
  declarations: [
    NavbarComponent,
    AboutComponent,
    ServicesComponent,
    GalleryComponnt,
    SubscribeComponent,
    ContactComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    ScrollToModule.forRoot()
  ],
  exports: [
    RouterModule,
    NavbarComponent,
    AboutComponent,
    ServicesComponent,
    GalleryComponnt,
    SubscribeComponent,
    ContactComponent,
    ScrollToModule
  ]
})
export class AppRoutingModule {}
