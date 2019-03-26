import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatTabsModule,
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoneyComponent } from './money/money.component';
import { ClickerComponent } from './clicker/clicker.component';
import { AutoClickerComponent } from './auto-clicker/auto-clicker.component';



@NgModule({
  declarations: [
    AppComponent,
    MoneyComponent,
    ClickerComponent,
    AutoClickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
