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
import {FormDateService} from "../../form-date.service";


@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormInputComponent),
      multi: true
    }
  ]
})
export class FormInputComponent implements OnInit , ControlValueAccessor {

  onChange(val:any):any{};
  onTouch():any{};
  fio=new FormControl("",
    [Validators.pattern("^[а-яА-ЯёЁ]+\\s[а-яА-ЯёЁ]+$|^[а-яА-ЯёЁ]+\\s[а-яА-ЯёЁ]+\\s[а-яА-ЯёЁ]+$"),
      Validators.required]);

  constructor(public formDateService:FormDateService) {

  }



  ngOnInit(): void {
    this.fio.valueChanges.subscribe((val)=>{
      if (this.onChange){
        this.onChange(val);
      }
    })
  }

  registerOnChange(fn: any): void {
    this.onChange=fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch=fn;
  }

  writeValue(obj: any): void {
    this.fio.setValue(obj);
  }


}
