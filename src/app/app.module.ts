import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnsureComponent } from './ensure/ensure.component';
import {DeferLoadModule} from '@trademe/ng-defer-load';

@NgModule({
  declarations: [
    AppComponent,
    EnsureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DeferLoadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
