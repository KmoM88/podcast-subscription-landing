import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  image = "./../../../assets/logo.jpg"
  url_3 = "https://www.mercadopago.com/mla/debits/new?preapproval_plan_id=2c93808478f916c7017933aa9db725b3"
  url_5 = "https://www.mercadopago.com/mla/debits/new?preapproval_plan_id=2c93808477f27aa20177f33256c501cd"
  url_8 = "https://www.mercadopago.com/mla/debits/new?preapproval_plan_id=2c93808477d3be310177f33394022cf6"
  url_avatar_nico = "http://www.instagram.com/nicoguthmann/";
  url_avatar_tomas = "http://www.instagram.com/tomasquintinpalma/";
  url_avatar_canal = "http://www.youtube.com/channel/UCOpxYGU6whNOWd2LWzkFEKQ/featured";

  constructor() { }

  ngOnInit() {
  }

}
