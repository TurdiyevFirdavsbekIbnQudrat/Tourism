import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientFoydalanuvchiListComponent } from './client-foydalanuvchi-list/client-foydalanuvchi-list.component';

const routes:Routes =[
  {
    path:'',
    component:ClientFoydalanuvchiListComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class ClientfoydalanuvchiRoutingModule { }
