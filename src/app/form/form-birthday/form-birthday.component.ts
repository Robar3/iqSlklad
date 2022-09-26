import {Component, forwardRef, OnInit} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, Validators} from "@angular/forms";
import {FormDateService} from "../../form-date.service";
import {FormComponent} from "../form.component";

@Component({
  selector: 'app-form-birthday',
  templateUrl: './form-birthday.component.html',
  styleUrls: ['./form-birthday.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormBirthdayComponent),
      multi: true
    }
  ]
})
export class FormBirthdayComponent implements OnInit,ControlValueAccessor {

  onChange(val:any):any{};
  onTouch():any{};
  birthday= new FormControl({value: "", disabled: true}, Validators.required)
  constructor(public formDateService:FormDateService,public  formComponent:FormComponent) {
  }

  ngOnInit(): void {
    this.birthday.valueChanges.subscribe((val)=>{
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
    this.birthday.setValue(obj);
  }

}
