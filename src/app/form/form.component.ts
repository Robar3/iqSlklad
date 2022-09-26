import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {FormDateService} from "../form-date.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  buttonDisables: boolean = false;
  counter: number = 0;
  formGroup: FormGroup;
  after18: boolean = false;

  constructor(private fb: FormBuilder, public formDateService: FormDateService, private router: Router) {
    this.formGroup = this.fb.group({
      fio:new FormControl("",
        [Validators.pattern("^[а-яА-ЯёЁ]+\\s[а-яА-ЯёЁ]+$|^[а-яА-ЯёЁ]+\\s[а-яА-ЯёЁ]+\\s[а-яА-ЯёЁ]+$"),
          Validators.required]),
      gender: new FormControl("", Validators.required),
      birthday: new FormControl({value: "", disabled: true}, Validators.required),
      married: new FormControl("", Validators.required),
      childrens: new FormControl(0, [Validators.min(0), Validators.max(100)]),
      email: new FormControl("", [Validators.required, Validators.email]),
      comment: new FormControl("",Validators.pattern("[а-яА-ЯёЁ\\s]*"))
    })
  }

  ngOnInit(): void {
  }


  save() {
    if (this.formGroup.valid) {
      const birthday:Date=this.formGroup.get('birthday')?.value;

      this.formDateService.user = {
        fioJson: this.formGroup.get('fio')?.value,
        genderJson: this.formGroup.get('gender')?.value,
        birthdayJson: birthday.toDateString(),
        marriedJson: this.formGroup.get('married')?.value,
        childrensJson: this.formGroup.get('childrens')?.value,
        emailJson: this.formGroup.get('email')?.value,
        commentJson: this.formGroup.get('comment')?.value,
      };
      this.router.navigate(["/info"])
    } else {
      this.buttonDisables = true;
      this.counter++;
      this.formDateService.validate = true ;
      console.log("fio:"+this.formGroup.get('fio')?.value);
      if (this.counter > 2) {
        this.formGroup.reset();
        this.counter=0;

      }

      setTimeout(() => this.buttonDisables = false, 10000)

    }


  }

  compareDateForm() {
    const birthday: Date = this.formGroup.get('birthday')?.value;
    if (new Date().getFullYear() - birthday.getFullYear() > 18) {
      this.after18 = true;
    } else {
      this.after18 = false;
      this.formGroup.patchValue({married: "нет"});
    }
  }

  minus() {
    let num: number = this.formGroup.get('childrens')?.value - 1;
    this.formGroup.patchValue({childrens: num});
  }

  plus() {
    let num: number = this.formGroup.get('childrens')?.value + 1;
    this.formGroup.patchValue({childrens: num});
    console.log(num);
  }

  changeGender() {
    this.formGroup.patchValue({married: ""});
  }
}
