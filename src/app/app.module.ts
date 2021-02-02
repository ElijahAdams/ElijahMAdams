import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { ContactComponent } from './contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { WorkComponent } from './work/work.component';
import { ScrollTrackerDirective } from './scroll-tracker/scroll-tracker.directive';
import { WorkModalComponent } from './work-modal/work-modal.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    AboutComponent,
    WorkComponent,
    ScrollTrackerDirective,
    WorkModalComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [Window],
  bootstrap: [AppComponent]
})
export class AppModule { }
