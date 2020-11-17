import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/main/contact/contact.component';
import { AboutComponent } from './components/main/about/about.component';
import { InputIntegerComponent } from './components/main/input-integer/input-integer.component';
import { CartComponent } from './components/main/cart/cart.component';
import { RopaComponent } from './models/ropa/ropa.component';
import { RopaService } from './models/ropa/ropa.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MainComponent,
    FooterComponent,
    ContactComponent,
    AboutComponent,
    InputIntegerComponent,
    CartComponent,
    RopaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [RopaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
