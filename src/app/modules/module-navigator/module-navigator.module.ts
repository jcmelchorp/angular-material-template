import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleNavigatorRoutingModule } from './module-navigator-routing.module';
import { NavigatorComponent } from './components/navigator/navigator.component';
import { LayoutModule } from '@angular/cdk/layout';
import { AppMaterialModule } from 'src/app/app-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { WellcomeNavigatorComponent } from './components/wellcome-navigator/wellcome-navigator.component';

@NgModule({
  declarations: [NavigatorComponent, WellcomeNavigatorComponent],
  imports: [
    CommonModule,
    ModuleNavigatorRoutingModule,
    LayoutModule,
    AppMaterialModule,
    FlexLayoutModule,
    FontAwesomeModule,
  ],
})
export class ModuleNavigatorModule {}
