import { Component, Input } from '@angular/core';
import { Shahar } from '../foydalanuvchiModels/shahar.model';

@Component({
  selector: 'app-bitta-shaxar',
  templateUrl: './bitta-shaxar.component.html',
  styleUrl: './bitta-shaxar.component.css'
})
export class BittaShaxarComponent {
@Input()
shahar:Shahar={
  id:0,
    nomi:'book',
    rasm:'./assets/87704.jpg'
}
}
