import { Component } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { NazoratService } from '../loginService/nazorat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nazorat',
  templateUrl: './nazorat.component.html',
  styleUrl: './nazorat.component.css'
})
export class NazoratComponent {
  validateForm: FormGroup<{
    userName: FormControl<string>;
    password: FormControl<string>;
    remember: FormControl<boolean>;
  }> = this.fb.group({
    userName: ['', [Validators.required]],
    password: ['', [Validators.required]],
    remember: [true]
  });

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
    this.tokenUshla(this.validateForm.getRawValue().password,this.validateForm.getRawValue().userName)
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
}

constructor(private fb: NonNullableFormBuilder,private nazoratService:NazoratService, private router: Router) {}
tokenUshla(Kiruvchiparol:string,Kiruvchiemail:string){
  this.nazoratService.getTokenForFoydalanuvchi({parol:Kiruvchiparol,email:Kiruvchiemail}).subscribe(
    {
      next:(responce)=>{
        if(responce.token!==""){
        const newUrl = '/client/foydalanuvchi';
        // Router ni ishlatib, URL ni o'zgartirish
        this.router.navigate([newUrl]);
        // alert(this.token.token)
        }
        else{
          alert("Ma'lumot topilmadi")
        }

      },
      error:()=>{
        alert("Ma'lumot topilmadi")
      }
    }
  )
}
}
