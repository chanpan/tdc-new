import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { HeadersComponent } from './layouts/headers/headers.component';
import { MenuLeftsComponent } from './layouts/menu-lefts/menu-lefts.component';
import { NotfoundComponent } from './notfound/notfound.component';

//Service
import { MysqlService } from './share/mysql.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeadersComponent,
    MenuLeftsComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [MysqlService],
  bootstrap: [AppComponent]
})
export class AppModule { }
