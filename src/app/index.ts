import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AuthModule } from '../auth';
import { FirebaseModule } from '../firebase';
import { TasksModule } from '../tasks';
import { CalculatorModule} from '../calculator'

import { AppComponent } from './components/app';
import { AppHeaderComponent } from './components/app-header';


@NgModule({
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent,
    AppHeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], {useHash: false}),
    NgbModule.forRoot(),
    AuthModule,
    FirebaseModule,
    TasksModule,
    CalculatorModule
  ]
})

export class AppModule {}
