import { NgModule } from '@angular/core';
import { ClientfoydalanuvchiComponent } from './clientfoydalanuvchi.component';
import { ClientFoydalanuvchiListComponent } from './client-foydalanuvchi-list/client-foydalanuvchi-list.component';
import { ClientfoydalanuvchiRoutingModule } from './clientfoydalanuvchi-routing.module';
import { BittaShaxarComponent } from './bitta-shaxar/bitta-shaxar.component';



@NgModule({
  declarations: [
    ClientfoydalanuvchiComponent,
    ClientFoydalanuvchiListComponent,
    BittaShaxarComponent,
  ],
  imports: [
    ClientfoydalanuvchiRoutingModule
  ]
})
export class ClientfoydalanuvchiModule { }
