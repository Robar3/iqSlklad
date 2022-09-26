import {Component, forwardRef, OnInit} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, Validators} from "@angular/forms";
import {FormDateService} from "../../form-date.service";
import {FormComponent} from "../form.component";

@Component({
  selector: 'app-form-family-status',
  templateUrl: './form-family-status.component.html',
  styleUrls: ['./form-family-status.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormFamilyStatusComponent),
      multi: true
    }
  ]
})
export class FormFamilyStatusComponent implements OnInit,ControlValueAccessor {

  onChange(val:any):any{};
  onTouch():any{};
  married= new FormControl("", Validators.required);

  constructor(public formDateService:FormDateService,public  formComponent:FormComponent) {

  }



  ngOnInit(): void {
    this.married.valueChanges.subscribe((val)=>{
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
    this.married.setValue(obj);
  }
}
