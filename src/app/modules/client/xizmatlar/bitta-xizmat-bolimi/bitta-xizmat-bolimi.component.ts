import { Component, Input } from '@angular/core';
import { Xizmat } from '../xizmatlar.model/xizmat.model';

@Component({
  selector: 'app-bitta-xizmat-bolimi',
  templateUrl: './bitta-xizmat-bolimi.component.html',
  styleUrl: './bitta-xizmat-bolimi.component.css'
})
export class BittaXizmatBolimiComponent {
  @Input()
  xizmat:Xizmat = {
    id:0,
    xizmatNomi:'book',
    translation:'kitob',
    example:'This book is interesting',
    photo:'./assets/87704.jpg'
  };
}
