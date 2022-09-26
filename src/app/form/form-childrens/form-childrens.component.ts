import {Component, forwardRef, OnInit} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, Validators} from "@angular/forms";
import {FormDateService} from "../../form-date.service";
import {FormComponent} from "../form.component";

@Component({
  selector: 'app-form-childrens',
  templateUrl: './form-childrens.component.html',
  styleUrls: ['./form-childrens.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormChildrensComponent),
      multi: true
    }
  ]
})
export class FormChildrensComponent implements OnInit,ControlValueAccessor {

  onChange(val:any):any{};
  onTouch():any{};
  childrens= new FormControl(0, [Validators.min(0), Validators.max(100)]);
  constructor(public formDateService:FormDateService,public  formComponent:FormComponent) {
  }

  ngOnInit(): void {
    this.childrens.valueChanges.subscribe((val)=>{
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
    this.childrens.setValue(obj);
  }
}
