import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObserversComponent } from './rxjs-examples/observers/observers.component';
import { CreationOperatorsComponent } from './rxjs-examples/creation-operators/creation-operators.component';

@NgModule({
  declarations: [
    AppComponent,
    ObserversComponent,
    CreationOperatorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
