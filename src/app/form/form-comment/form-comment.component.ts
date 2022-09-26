import {Component, forwardRef, OnInit} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, Validators} from "@angular/forms";
import {FormDateService} from "../../form-date.service";

@Component({
  selector: 'app-form-comment',
  templateUrl: './form-comment.component.html',
  styleUrls: ['./form-comment.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormCommentComponent),
      multi: true
    }
  ]
})
export class FormCommentComponent implements OnInit,ControlValueAccessor {


  onChange(val:any):any{};
  onTouch():any{};
  comment=new FormControl("");

  constructor(public formDateService:FormDateService) {

  }



  ngOnInit(): void {
    this.comment.valueChanges.subscribe((val)=>{
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
    this.comment.setValue(obj);
  }

}
