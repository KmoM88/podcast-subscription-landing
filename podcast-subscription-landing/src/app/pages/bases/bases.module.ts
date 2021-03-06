import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BasesPageRoutingModule } from './bases-routing.module';

import { BasesPage } from './bases.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    BasesPageRoutingModule
  ],
  declarations: [BasesPage]
})
export class BasesPageModule {}
