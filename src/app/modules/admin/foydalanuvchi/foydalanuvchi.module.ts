import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoydalanuvchiRoutingModule } from './foydalanuvchi-routing.module';
import { FoydalanuvchiComponent } from './foydalanuvchi.component';
import { FoydalanuvchiListComponent } from './foydalanuvchi-list/foydalanuvchi-list.component';



@NgModule({
  declarations: [
    FoydalanuvchiComponent,
    FoydalanuvchiListComponent
  ],
  imports: [
    CommonModule,
    FoydalanuvchiRoutingModule
  ]
})
export class FoydalanuvchiModule { }
