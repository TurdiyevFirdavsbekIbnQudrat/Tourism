import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, NonNullableFormBuilder, ValidatorFn, Validators } from '@angular/forms';
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';
import { Createfoydalanuvchi } from '../AuthModel/foydalanuvchi.model';

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
    agree: [false]
  });
  constructor(private fb: NonNullableFormBuilder,) {
  }
  request = this.validateForm.getRawValue()

foydalanuvchi:Createfoydalanuvchi ={
  ism: this.request.ism,
  familiya: this.request.familiya,
  email: this.request.email,
  parol: this.request.password,
  telNomer: this.request.phoneNumberPrefix+this.request.phoneNumber
}

}


