import { Component, OnInit } from '@angular/core';
import {FormDateService} from "../form-date.service";

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  user:any;
  constructor(formDateService:FormDateService) {
    this.user=formDateService.user;

  }


  ngOnInit(): void {console.log(this.user.fioJson);
  }

}
