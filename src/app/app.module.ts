import { BrowserModule } from "@angular/platform-browser";
import { NgModule, ErrorHandler } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ModalContentComponent } from "./modal/modal.component";
import { GlobalErrorHandlerService } from "./sharedService/global.error.handler.service";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [
    GlobalErrorHandlerService,
    { provide: ErrorHandler, useClass: GlobalErrorHandlerService }
  ],
  bootstrap: [AppComponent],
  entryComponents: [ModalContentComponent]
})
export class AppModule {}
