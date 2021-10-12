import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TableModule} from "primeng/table";

import { CheckoutComponent } from './components/checkout/checkout.component';
import {ButtonModule} from "primeng/button";
import {DropdownModule} from "primeng/dropdown";
import {FormsModule} from "@angular/forms";

import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BadgeModule} from "primeng/badge";

@NgModule({
  declarations: [
    AppComponent,
    CheckoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    ButtonModule,
    DropdownModule,
    FormsModule,
    BrowserAnimationsModule,
    BadgeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
