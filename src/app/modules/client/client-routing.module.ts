import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client.component';

const routes:Routes = [
  {
    path:'',
    component:ClientComponent,
    children:[
      {
        path:'foydalanuvchi',
        loadChildren:()=>
        import('./clientfoydalanuvchi/clientfoydalanuvchi.module')
        .then((m)=>m.ClientfoydalanuvchiModule)
      },
      {
        path:'xizmatlar',
        loadChildren:()=>
        import('./xizmatlar/xizmatlar.module')
        .then((m)=>m.XizmatlarModule)
      }
    ]
  },
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]

})
export class ClientRoutingModule { }
