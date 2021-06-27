import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  image = "./../../../assets/logo.jpg"
  url_pago_unico_1 = "https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=47138558-3052441b-fac0-4a75-9e10-be8c734a1993"
  url_pago_unico_2 = "https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=47138558-814614f9-ce0f-4d9f-a15a-9adcd67a8b3e"
  url_pago_unico_4 = "https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=47138558-f5f36139-f819-4195-ae60-399c826e9465"
  url_pago_unico_6 = "https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=47138558-08aabc2b-1996-4b06-be28-53cc395f1c72"
  url_pago_unico_8 = "https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=47138558-01c614ae-d217-4102-b8ba-66388b5b8816"
  url_pago_unico_10 = "https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=47138558-927d9ff8-00d9-408b-83bb-8dd20c722982"
  url_3 = "https://www.mercadopago.com/mla/debits/new?preapproval_plan_id=2c93808478f916c7017933aa9db725b3"
  url_5 = "https://www.mercadopago.com/mla/debits/new?preapproval_plan_id=2c93808477f27aa20177f33256c501cd"
  url_8 = "https://www.mercadopago.com/mla/debits/new?preapproval_plan_id=2c93808477d3be310177f33394022cf6"
  url_avatar_nico = "http://www.instagram.com/nicoguthmann/";
  url_avatar_tomas = "http://www.instagram.com/tomasquintinpalma/";
  url_avatar_canal = "http://www.youtube.com/channel/UCOpxYGU6whNOWd2LWzkFEKQ/featured";

  constructor(
    private auth: AuthService
  ) { }

  currentAuthStatus$: Observable<any>
  userData: User

  ngOnInit() {
    this.currentAuthStatus$ = this.auth.authStatusListener()
    this.currentAuthStatus$.subscribe(
      res => {
        // console.log("TEST")
        if(res !== null && res !== undefined){
          this.userData = this.auth.getUserData();
          // console.log(this.userData)
        }
      }
    )
  }

}
