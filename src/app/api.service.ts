import { Injectable } from '@angular/core';
import { HttpClient }    from '@angular/common/http';
import {environment} from './../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  api=environment.baseurl;
  constructor(private http : HttpClient) { }
  getItem(){
    return this.http.get(this.api+'2f9dff7a0ecd4d49b6e770c9ed1e23aa');
  }
}
