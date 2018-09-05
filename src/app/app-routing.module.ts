import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {SsComponent} from './ss/ss.component'

const route: Routes =[
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'sign-up',component:SignUpComponent},
  {path:'ss',component:SsComponent}
];
@NgModule({
  imports: [
    RouterModule.forRoot(route)
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
