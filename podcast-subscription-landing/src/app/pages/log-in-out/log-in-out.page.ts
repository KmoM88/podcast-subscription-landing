import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  currentAuthStatus$: Observable<any>

  ngOnInit() {
    this.currentAuthStatus$ = this.auth.authStatusListener()
  }

  loginGoogle() {
    this.auth.loginGoogle()
    .then(res => console.log(res))
  }

  logoutGoogle() {
    this.auth.logoutGoogle()
  }
}
