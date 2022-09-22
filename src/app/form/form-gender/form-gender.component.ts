import {Component, forwardRef, OnInit} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors
} from "@angular/forms";
import {FormComponent} from "../form.component";

@Component({
  selector: 'app-form-gender',
  templateUrl: './form-gender.component.html',
  styleUrls: ['./form-gender.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => FormComponent),
      multi: true
    }
  ]
})
export class FormGenderComponent implements OnInit {
  public childForm: FormGroup ;
  public onTouched: () => void = () => {};
  constructor(private fb: FormBuilder) {
    this.childForm = fb.group({
      gender: ''
    })
  }

  ngOnInit(): void {
  }
  registerOnChange(fn: any): void {
    this.childForm.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return this.childForm.valid
      ? null
      : { invalidForm: { valid: false, message: 'Form is invalid' } };
  }

  writeValue(obj: any): void {
  }
}
