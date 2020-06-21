import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StatisticsRoutingModule } from './statistics-routing.module';
import { AppMaterialModule } from 'src/app/app-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StatisticsComponent } from './statistics.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ApiService } from './services/api.service';

@NgModule({
  declarations: [StatisticsComponent, DashboardComponent],
  imports: [
    CommonModule,
    StatisticsRoutingModule,
    AppMaterialModule,
    FlexLayoutModule,
    FontAwesomeModule,
    HttpClientModule,
  ],
  providers: [ApiService],
})
export class StatisticsModule {}
