import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsletterPageRoutingModule } from './newsletter-routing.module';

import { NewsletterPage } from './newsletter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    NewsletterPageRoutingModule
  ],
  declarations: [NewsletterPage]
})
export class NewsletterPageModule {}
