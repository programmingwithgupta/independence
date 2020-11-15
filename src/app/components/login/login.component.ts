import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
declare var UIkit: any;

@Component({
  selector: 'login-form',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public firstname : string;
  public lastname : string;
  public email: string;
  public password: string;
  constructor(private loginservice : LoginService) { }

  ngOnInit(): void {

  }

  login(){

    console.log(this.email,this.password);
    let user ={
      email : this.email,
      password : this.password
    }
    this.loginservice.login(user);
  }

  signUp(){
    let user ={
      firstname : this.firstname,
      lastname : this.lastname,
      email : this.email,
      password : this.password
    }
    this.loginservice.signUp(user);
  }

  signOut(){
    this.loginservice.signout();
  }

}
