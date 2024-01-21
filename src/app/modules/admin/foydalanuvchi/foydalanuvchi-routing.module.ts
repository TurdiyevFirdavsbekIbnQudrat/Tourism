import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FoydalanuvchiListComponent } from './foydalanuvchi-list/foydalanuvchi-list.component';

const routes:Routes= [
  {
    path:'',
    component:FoydalanuvchiListComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class FoydalanuvchiRoutingModule { }
