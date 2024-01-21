import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XizmatlarComponent } from './xizmatlar.component';
import { XizmatlarListComponent } from './xizmatlar-list/xizmatlar-list.component';
import { XizmatlarRoutingModule } from './xizmatlar-routing.module';
import { BittaXizmatBolimiComponent } from './bitta-xizmat-bolimi/bitta-xizmat-bolimi.component';
import { XizmatService } from './Service/xizmat.service';



@NgModule({
  declarations: [
    XizmatlarComponent,
    XizmatlarListComponent,
    BittaXizmatBolimiComponent
  ],
  imports: [
    CommonModule,
    XizmatlarRoutingModule,
    
  ],
  providers:[XizmatService]
})
export class XizmatlarModule { }
