import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AuthGuard } from '../auth';

import { CalculatorComponent } from './components/calculator.component';


const routes: Routes = [
  {path: 'calculator', component: CalculatorComponent, canActivate: [AuthGuard]}
];


@NgModule({
  declarations: [
      CalculatorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    NgbModule
  ],
  providers: [
    //TaskService
  ]
})

export class CalculatorModule {}

//export { TaskService };