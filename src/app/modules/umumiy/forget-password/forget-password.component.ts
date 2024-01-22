import { Component } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormControl, FormGroup, NonNullableFormBuilder, ValidatorFn, Validators } from '@angular/forms';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';
import { Observable, Observer } from 'rxjs';

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
    remember: FormControl<boolean>;
  }> = this.fb.group({
    userName: ['', [Validators.required]],
    password: ['', [Validators.required]],
    email:['',[Validators.required]],
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
constructor(private fb: NonNullableFormBuilder) {}
}