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

@NgModule({
  declarations: [
    AppComponent,
    NazoratComponent

  ],
  imports: [
    BrowserModule,

    AppRoutingModule,
    AdminRoutingModule,
    FoydalanuvchiRoutingModule,
    ClientRoutingModule,
    ClientfoydalanuvchiRoutingModule,
    XizmatlarRoutingModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
