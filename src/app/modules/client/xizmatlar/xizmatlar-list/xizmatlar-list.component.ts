import { Component } from '@angular/core';
import { Xizmat } from '../xizmatlar.model/xizmat.model';
import { XizmatService } from '../Service/xizmat.service';

@Component({
  selector: 'app-xizmatlar-list',
  templateUrl: './xizmatlar-list.component.html',
  styleUrl: './xizmatlar-list.component.css'
})
export class XizmatlarListComponent {
/**
 *
 */
xizmatlar?:Xizmat[];
constructor(private xizmatService:XizmatService) {
  this.xizmatService.getAllXizmaltlar().then((xizmat)=>
  {this.xizmatlar=xizmat}
  );
}

}
