import { NgModule } from '@angular/core';
import { ClientfoydalanuvchiComponent } from './clientfoydalanuvchi.component';
import { ClientFoydalanuvchiListComponent } from './client-foydalanuvchi-list/client-foydalanuvchi-list.component';
import { ClientfoydalanuvchiRoutingModule } from './clientfoydalanuvchi-routing.module';



@NgModule({
  declarations: [
    ClientfoydalanuvchiComponent,
    ClientFoydalanuvchiListComponent,
  ],
  imports: [
    ClientfoydalanuvchiRoutingModule
  ]
})
export class ClientfoydalanuvchiModule { }
