import {Component, forwardRef, OnInit} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, Validators} from "@angular/forms";
import {FormDateService} from "../../form-date.service";
import {FormComponent} from "../form.component";

@Component({
  selector: 'app-form-email',
  templateUrl: './form-email.component.html',
  styleUrls: ['./form-email.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormEmailComponent),
      multi: true
    }
  ]
})
export class FormEmailComponent implements OnInit,ControlValueAccessor {

  onChange(val:any):any{};
  onTouch():any{};
  email= new FormControl("", [Validators.required, Validators.email]);

  constructor(public formDateService:FormDateService,public  formComponent:FormComponent) {

  }



  ngOnInit(): void {
    this.email.valueChanges.subscribe((val)=>{
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
    this.email.setValue(obj);
  }
}
