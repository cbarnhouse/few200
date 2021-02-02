import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { CommunicationsModule } from '../app/feature/communications/communications.module';
import { AppComponent } from './app.component';
import { MastheadComponent } from './components/masthead/masthead.component';
import { NavComponent } from './components/nav/nav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CounterComponent } from './components/counter/counter.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducer';
import { StoreDevtools, StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CountbyComponent } from './components/countby/countby.component';

@NgModule({
  declarations: [
    AppComponent,
    MastheadComponent,
    NavComponent,
    DashboardComponent,
    CounterComponent,
    CountbyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommunicationsModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
