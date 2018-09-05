import { Component, OnInit } from '@angular/core';
import {ApiService} from './../api.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    a:string;
    b:string;
    e:any;
    h:any;
    f:any;
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.get();
  }

  pri(){
    localStorage.setItem("name",this.a);
    localStorage.setItem("Password",this.b);
  }
  get(){
  this.api.getItem()
    .subscribe(data=>
      {
        this.e=data['articles'];
        console.log(this.e);
      }

    );
  }

}
