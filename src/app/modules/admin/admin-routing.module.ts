import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path:'',
    component:AdminComponent,
    children:[
      {
        path:'foydalanuvchi',
        loadChildren:()=>
        import('./foydalanuvchi/foydalanuvchi.module')
        .then((m)=>m.FoydalanuvchiModule)
      },
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
  
})
export class AdminRoutingModule { }
