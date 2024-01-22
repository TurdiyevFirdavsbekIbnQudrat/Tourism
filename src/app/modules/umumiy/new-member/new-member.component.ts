import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, NonNullableFormBuilder, ValidatorFn, Validators } from '@angular/forms';
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';
import { Createfoydalanuvchi } from '../AuthModel/foydalanuvchi.model';
import { NewMemberService } from '../loginService/new-member.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-member',
  templateUrl: './new-member.component.html',
  styleUrl: './new-member.component.css'
})
export class NewMemberComponent {
// validateForm: FormGroup<{
//     email: FormControl<string>;
//     password: FormControl<string>;
//     checkPassword: FormControl<string>;
//     nickname: FormControl<string>;
//     phoneNumberPrefix: FormControl<'+999' | '+998'>;
//     phoneNumber: FormControl<string>;
//     familiya: FormControl<string>;
//     captcha: FormControl<string>;
//     agree: FormControl<boolean>;
//   }>;
  captchaTooltipIcon: NzFormTooltipIcon = {
    type: 'info-circle',
    theme: 'twotone'
  };

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
  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() => this.validateForm.controls.checkPassword.updateValueAndValidity());
  }

  confirmationValidator: ValidatorFn = (control: AbstractControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  getCaptcha(e: MouseEvent): void {
    e.preventDefault();
  }
  validateForm = this.fb.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required]],
    checkPassword: ['', [Validators.required, this.confirmationValidator]],
    ism: ['', [Validators.required]],
    phoneNumberPrefix: '+998' as '+998' | '+999',
    phoneNumber: ['', [Validators.required]],
    familiya: ['', [Validators.required]],
    captcha: ['', [Validators.required]],
    
  });
  constructor(private router: Router,private fb: NonNullableFormBuilder,private $nmf:NewMemberService) {
  }

  foydalanuvchis!:Createfoydalanuvchi;
add(){
  if(this.validateForm.invalid){
    Object.values(this.validateForm.controls).forEach(control => {
      if (control.invalid) {
        control.markAsDirty();
        control.updateValueAndValidity({ onlySelf: true });
      }
    });
    return;
  } 
  
  this.foydalanuvchis={
    ism : this.validateForm.getRawValue().ism,
    familiya: this.validateForm.getRawValue().familiya,
    email: this.validateForm.getRawValue().email,
    parol: this.validateForm.getRawValue().password,
    telNomer: this.validateForm.getRawValue().phoneNumberPrefix+this.validateForm.getRawValue().phoneNumber
  }
  // console.log(this.foydalanuvchis)
  this.$nmf.createFoydalanuvchi(this.foydalanuvchis).subscribe({
    next:()=>{alert(`qo'shildi`)},
    error:()=>{alert(`qabul qilinmadi`)}
  })
  
  const newUrl = '/tekshiruv';
  // Router ni ishlatib, URL ni o'zgartirish
  this.router.navigate([newUrl]);
}
}


