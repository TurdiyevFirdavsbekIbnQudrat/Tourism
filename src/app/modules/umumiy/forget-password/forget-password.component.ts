import { Component } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormControl, FormGroup, NonNullableFormBuilder, ValidatorFn, Validators } from '@angular/forms';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';
import { Observable, Observer } from 'rxjs';
import { updatePasswordFoydalanuvchi } from '../AuthModel/foydalanuvchi.model';
import { ForgetPasswordService } from '../loginService/forget-password.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.css'
})
export class ForgetPasswordComponent {
  validateForm: FormGroup<{
    userName: FormControl<string>;
    password: FormControl<string>;
    email:FormControl<string>;
    phoneNumber:FormControl<string>;
    remember: FormControl<boolean>;
  }> = this.fb.group({
    userName: ['', [Validators.required]],
    password: ['', [Validators.required]],
    email:['',[Validators.required]],
    phoneNumber:['',[Validators.required]],
    remember: [true]
  });

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
}
foydalanuvchiPasswordiniYangiladi!:updatePasswordFoydalanuvchi
constructor(private fb: NonNullableFormBuilder,private fpps:ForgetPasswordService){}
updatePassword()
{
  this.foydalanuvchiPasswordiniYangiladi={
    ism:this.validateForm.getRawValue().userName,
    email:this.validateForm.getRawValue().email,
    parol:this.validateForm.getRawValue().password,
    telNomer:this.validateForm.getRawValue().phoneNumber,
  }
  
 this.fpps.PaswordniOzgartirish(this.foydalanuvchiPasswordiniYangiladi).subscribe(
  {
    next:(responce)=>{
      console.log(responce)
      if(responce!==null)
      {
      alert(`ma'lumotlaringiz o'zgartirilidi`)
      }
      else
      {
        alert(`ma'lumotlar topilmadi`)
      }
    },
    error:()=>{
      alert(`ma'lumot o'zgaritirilmadi!`)
    }
  }
 ) 
}
}