import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminRoutingModule } from './modules/admin/admin-routing.module';
import { FoydalanuvchiRoutingModule } from './modules/admin/foydalanuvchi/foydalanuvchi-routing.module';
import { NazoratComponent } from './modules/umumiy/nazorat/nazorat.component';
import { ClientRoutingModule } from './modules/client/client-routing.module';
import { ClientfoydalanuvchiRoutingModule } from './modules/client/clientfoydalanuvchi/clientfoydalanuvchi-routing.module';
import { XizmatlarRoutingModule } from './modules/client/xizmatlar/xizmatlar-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AbstractControl, FormControl, FormGroup, FormsModule, NonNullableFormBuilder, Validators } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import {  ReactiveFormsModule } from '@angular/forms';
import { ForgetPasswordComponent } from './modules/umumiy/forget-password/forget-password.component';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NewMemberComponent } from './modules/umumiy/new-member/new-member.component';
registerLocaleData(en);
@NgModule({
  declarations: [
    AppComponent,
    NazoratComponent,
    ForgetPasswordComponent,
    NewMemberComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AdminRoutingModule,
    FoydalanuvchiRoutingModule,
    ClientRoutingModule,
    ClientfoydalanuvchiRoutingModule,
    XizmatlarRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    ReactiveFormsModule,
    NzSelectModule
    
  ],
  providers: [
  
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
