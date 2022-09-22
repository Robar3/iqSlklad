import {Component, forwardRef, OnInit} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor, FormBuilder,
  FormControl, FormGroup,
  NG_VALIDATORS, NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator,
  Validators
} from "@angular/forms";
import {FormComponent} from "../form.component";


@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css'],
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
export class FormInputComponent implements OnInit , ControlValueAccessor, Validator {
  public childForm: FormGroup ;
  public onTouched: () => void = () => {this.childForm.invalid};

  constructor(private fb: FormBuilder) {
    this.childForm = fb.group({
      fio: new FormControl("", Validators.compose(
        [Validators.pattern("/^[\\p{Cyrillic}]+\\s+[\\p{Cyrillic}]*$|^[\\p{Cyrillic}]+\\s+[\\p{Cyrillic}]*\\s+[\\p{Cyrillic}]*$/"),
          Validators.required]))
    })
  }

  ngOnInit(): void {
  }

  registerOnChange(fn: any): void {
    this.childForm.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    this.childForm.valueChanges.subscribe(fn);
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return this.childForm.valid
      ? null
      : { invalidForm: { valid: false, message: 'Form is invalid' } };
  }

  writeValue(obj: any): void {

  }


}
