import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatExpansionModule } from '@angular/material/expansion';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Demo1Component } from './Components/demo1/demo1.component';
import { Child1Component } from './Components/child1/child1.component';
import { Child2Component } from './Components/child2/child2.component';
import { Child3Component } from './Components/child3/child3.component';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Demo1Component,
    MatExpansionModule,
    Child1Component,
    Child2Component,
    Child3Component,
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
