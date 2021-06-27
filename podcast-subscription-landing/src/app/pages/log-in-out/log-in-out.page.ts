import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-log-in-out',
  templateUrl: './log-in-out.page.html',
  styleUrls: ['./log-in-out.page.scss'],
})
export class LogInOutPage implements OnInit {

  constructor(
    private auth: AuthService
  ) { }

  checkboxs = {
    isChecked1: false,
    isChecked2: false
  }
  currentAuthStatus$: Observable<any>

  ngOnInit() {
    this.currentAuthStatus$ = this.auth.authStatusListener()
  }

  loginGoogle() {
    if(this.checkboxs.isChecked2){
      this.auth.loginGoogle()
      .then(res => console.log(res))
    }
    else {
      console.log("acepte las condiciones")
    }
  }

  logoutGoogle() {
    this.auth.logoutGoogle()
  }
}
