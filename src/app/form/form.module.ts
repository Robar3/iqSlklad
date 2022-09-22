import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormComponent} from './form.component';
import { FormInputComponent } from './form-input/form-input.component';
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { FormGenderComponent } from './form-gender/form-gender.component';
import {MatRadioModule} from "@angular/material/radio";
import { FormBirthdayComponent } from './form-birthday/form-birthday.component';
import { FormFamilyStatusComponent } from './form-family-status/form-family-status.component';
import { FormChildrensComponent } from './form-childrens/form-childrens.component';
import { FormEmailComponent } from './form-email/form-email.component';
import { FormCommentComponent } from './form-comment/form-comment.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatButtonModule} from "@angular/material/button";
import {MatNativeDateModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatDialogModule} from "@angular/material/dialog";



@NgModule({
  declarations: [
    FormComponent,
    FormInputComponent,
    FormGenderComponent,
    FormBirthdayComponent,
    FormFamilyStatusComponent,
    FormChildrensComponent,
    FormEmailComponent,
    FormCommentComponent
  ],
  exports: [
    FormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatDatepickerModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatDialogModule
  ],
  providers: [ MatDatepickerModule,
    MatNativeDateModule,
  ]
})
export class FormModule { }
