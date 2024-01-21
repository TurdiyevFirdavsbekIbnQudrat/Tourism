import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { XizmatlarListComponent } from './xizmatlar-list/xizmatlar-list.component';

const routes:Routes = [
  {
    path:'',
    component:XizmatlarListComponent
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
export class XizmatlarRoutingModule { }
