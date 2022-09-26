import {Component, forwardRef, OnInit} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR, Validators
} from "@angular/forms";
import {FormComponent} from "../form.component";
import {FormDateService} from "../../form-date.service";
import {FormInputComponent} from "../form-input/form-input.component";

@Component({
  selector: 'app-form-gender',
  templateUrl: './form-gender.component.html',
  styleUrls: ['./form-gender.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormGenderComponent),
      multi: true
    }
  ]
})
export class FormGenderComponent implements OnInit,ControlValueAccessor{
  onChange(val:any):any{};
  onTouch():any{};
  gender= new FormControl("", Validators.required)

  constructor(public formDateService:FormDateService,public  formComponent:FormComponent) {

  }

  ngOnInit(): void {
    this.gender.valueChanges.subscribe((val)=>{
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
    this.gender.setValue(obj);
  }
}
