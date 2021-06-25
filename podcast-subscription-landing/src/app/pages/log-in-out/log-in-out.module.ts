import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogInOutPageRoutingModule } from './log-in-out-routing.module';

import { LogInOutPage } from './log-in-out.page';

import { ComponentsModule } from './../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogInOutPageRoutingModule,
    ComponentsModule
  ],
  declarations: [LogInOutPage]
})
export class LogInOutPageModule {}
