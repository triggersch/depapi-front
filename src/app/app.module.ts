import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DeplistComponent } from './deplist/deplist.component';

import { RestDataSource } from "./datasource/rest.datasource";
import { DepartementRepository } from './repositories/departement.repository';
import { CommonService } from "./services/common.service";
import { DepdetailsComponent } from './depdetails/depdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    DeplistComponent,
    DepdetailsComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [RestDataSource, DepartementRepository, CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
