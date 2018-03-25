import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';


import { AddService } from './services/add.service';
import { EditService } from './services/edit.service';
import { GetAllService } from './services/getall.service';
import { ValidateService } from './services/validate.service';

import { FlashMessagesModule } from 'angular2-flash-messages';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddComponent,
    EditComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [AddService, EditService, GetAllService, ValidateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
