import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ss',
  templateUrl: './ss.component.html',
  styleUrls: ['./ss.component.css']
})
export class SsComponent implements OnInit {
c:any;
d:any;
  constructor() { }

  ngOnInit() {
    this.c=localStorage.getItem("name");
    this.d=localStorage.getItem("Password")
  }

}
