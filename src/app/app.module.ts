import { NgModule, AfterViewInit, Component, ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterventionListComponent } from './intervention-list/intervention-list.component';
import { CreateInterventionComponent } from './create-intervention/create-intervention.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateInterventionComponent } from './update-intervention/update-intervention.component';
import { InterventionDetailsComponent } from './intervention-details/intervention-details.component';
import {NgxPaginationModule} from 'ngx-pagination'; 
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { TestComponent } from './test/test.component';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogComponent } from './dialog/dialog.component';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';
import { StatsComponent } from './stats/stats.component';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';                  //api
import {ChartModule} from 'primeng/chart';
import {} from '@angular/forms';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    InterventionListComponent,
    CreateInterventionComponent,
    UpdateInterventionComponent,
    InterventionDetailsComponent,
    TestComponent,
    DialogComponent,
    StatsComponent,
     ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatSelectModule,
    MatGridListModule,
    AccordionModule,
    ChartModule,
    ReactiveFormsModule,
    FormsModule,
    
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
