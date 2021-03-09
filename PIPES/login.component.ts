import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import {Auth} from '../../model/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userid:String="";
  password:String="";

  auth!:Auth;

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  handlelogin()
  {
    let auth={
      userid:this.userid,
      password:this.password,
      ts:new Date()

    };
    sessionStorage.setItem("auth",JSON.stringify(auth));

    this.route.navigate(['dashboard']);
    console.log(auth);
  }

}
