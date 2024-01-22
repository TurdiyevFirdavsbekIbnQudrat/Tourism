import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NazoratComponent } from './modules/umumiy/nazorat/nazorat.component';
import { ForgetPasswordComponent } from './modules/umumiy/forget-password/forget-password.component';
import { NewMemberComponent } from './modules/umumiy/new-member/new-member.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'tekshiruv',
    pathMatch:'full'
  },
  {
   path:'tekshiruv',
   component:NazoratComponent,
  },
  {
    path:'forgot-password',
    component:ForgetPasswordComponent,
  },
  {
    path:'new-member',
    component:NewMemberComponent,
  },
  {
    path:'admin',
    loadChildren:()=>
    import('./modules/admin/admin.module')
    .then((m)=>m.AdminModule)
  },
  {
    path:'client',
    loadChildren:()=>
    import('./modules/client/client.module')
    .then((m)=>m.ClientModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
