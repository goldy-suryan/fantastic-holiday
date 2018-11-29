import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ScrollToModule } from "@nicky-lenaers/ngx-scroll-to";
import { NavbarComponent } from "./navbar/navbar.component";
import { AboutComponent } from "./about/about.component";
import { RaftingComponent } from "./rafting/rafting.component";
import { CampingComponent } from "./camping/camping.component";
import { ServicesComponent } from "./services/services.component";
import { GalleryComponnt } from "./gallery/gallery.component";
import { SubscribeComponent } from "./subscribe/subscribe.component";
import { ContactComponent } from "./contact/contact.component";

const routes: Routes = [];

@NgModule({
  declarations: [
    NavbarComponent,
    AboutComponent,
    RaftingComponent,
    CampingComponent,
    ServicesComponent,
    GalleryComponnt,
    SubscribeComponent,
    ContactComponent
  ],
  imports: [RouterModule.forRoot(routes), ScrollToModule.forRoot()],
  exports: [
    RouterModule,
    NavbarComponent,
    AboutComponent,
    RaftingComponent,
    CampingComponent,
    ServicesComponent,
    GalleryComponnt,
    SubscribeComponent,
    ContactComponent
  ]
})
export class AppRoutingModule {}
