import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import * as fromApp from './reducers/app.reducer';

import { AppComponent } from './app.component';
import {StoreModule} from '@ngrx/store';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import {AppRoutes} from './app.routes';
import {RouterModule} from '@angular/router';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent
  ],
  imports: [
    StoreModule.forRoot(fromApp.AppReducers),
    BrowserModule,
    AppRoutes,
    RouterModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
