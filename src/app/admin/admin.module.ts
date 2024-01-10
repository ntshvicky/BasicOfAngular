import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AdminRoutingModule } from './admin-routing-module';
import { CapitalizePipe } from '../pipes/capitalize.pipe';



@NgModule({
  declarations: [
    HomeComponent,
    CapitalizePipe
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
