import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AppComponent} from "./app.component";
import {FormComponent} from "./form/form.component";
import {UserInfoComponent} from "./user-info/user-info.component";


const routers: Routes = [
  {path: '', component: FormComponent},
  {path:'info',component:UserInfoComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routers)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
export const routingComponents=[AppComponent,FormComponent];
