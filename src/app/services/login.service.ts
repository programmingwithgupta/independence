import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseApiUrl = environment.apiUrl;
  public accessToken ;
  httpheader : HttpHeaders;
  constructor(private httpClient : HttpClient) { }

  login(user){

    let url = this.baseApiUrl + 'api/auth/v1/signin';
    let options = {
      params : user
    }
    return this.httpClient.post(url,user).subscribe((res:any)=>{
      this.accessToken = res.accessToken;
      console.log(res, this.accessToken);
    });
  }

  signUp(user){
    let url = "http://localhost:9090/api/auth/v1/signup";
    let body={
      "firstName": "Diwakar",
      "lastName": "Aggarwal",
      "email": "testd@mailinator.com",
      "password": "Test@123"
  }
    return this.httpClient.post(url,body).subscribe(res=>{
      console.log(res);
      
    });
  }

  signout(){

    let url = this.baseApiUrl + 'api/auth/v1/signout';
    let header = new HttpHeaders({ 'Authorization': this.accessToken });
    const options = {
       headers: header,
    };
    return this.httpClient.post(url,options).subscribe((res:any)=>{
      this.accessToken = res.acessToken;
      console.log(res);
    });
  }

}
