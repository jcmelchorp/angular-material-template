import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavigatorComponent } from './components/navigator/navigator.component';
import { WellcomeNavigatorComponent } from './components/wellcome-navigator/wellcome-navigator.component';

const routes: Routes = [
  {
    path: '',
    component: NavigatorComponent,
    children: [
      { path: 'wellcome-navigator', component: WellcomeNavigatorComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModuleNavigatorRoutingModule {}
