//Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
//Module
import { AppRoutingModule } from './app-routing.module';
//Components
import { AppComponent } from './app.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { AddContactComponent } from './components/schedule/add-contact/add-contact.component';
import { ListContactComponent } from './components/schedule/list-contact/list-contact.component';


@NgModule({
  declarations: [
    AppComponent,
    ScheduleComponent,
    AddContactComponent,
    ListContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
